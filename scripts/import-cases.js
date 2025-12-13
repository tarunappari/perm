// scripts/import-cases.js
require("dotenv").config({ path: ".env.local" });
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { parse } = require("csv-parse/sync");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI not found in .env.local");
}

// ---- Define the same schema as in models/Case.js ----
const CaseSchema = new mongoose.Schema(
  {
    caseNumber: { type: String, required: true, unique: true },
    employerName: { type: String, required: true },
    employerInitial: { type: String, required: true },
    filedDate: { type: Date, required: true },
    decisionDate: { type: Date, required: true },
    processingDays: { type: Number, required: true },
  },
  { timestamps: true }
);

const Case =
  mongoose.models.Case || mongoose.model("Case", CaseSchema);

async function main() {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // 2. Read CSV file (update path if needed)
    const csvPath = path.join(__dirname, "perm-cases.csv"); // <-- put your CSV name here
    const fileContent = fs.readFileSync(csvPath, "utf-8");

    // 3. Parse CSV
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    console.log(`Found ${records.length} rows in CSV`);

    const docsToInsert = [];

    for (const row of records) {
      const caseNumber = row["CASE_NUMBER"];
      const employerName = row["EMPLOYER_NAME"];
      const filedDateStr = row["RECEIVED_DATE"];
      const decisionDateStr = row["DECISION_DATE"];
      const employerInitial = row["EMPLOYER_INITIAL"];

      if (
        !caseNumber ||
        !employerName ||
        !filedDateStr ||
        !decisionDateStr ||
        !employerInitial
      ) {
        console.warn("Skipping row with missing fields:", row);
        continue;
      }

      const filedDate = new Date(filedDateStr);
      const decisionDate = new Date(decisionDateStr);

      if (isNaN(filedDate.getTime()) || isNaN(decisionDate.getTime())) {
        console.warn("Skipping row with invalid dates:", row);
        continue;
      }

      const diffMs = decisionDate.getTime() - filedDate.getTime();
      const processingDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

      docsToInsert.push({
        caseNumber,
        employerName,
        employerInitial,
        filedDate,
        decisionDate,
        processingDays,
      });
    }

    console.log(`Prepared ${docsToInsert.length} docs to insert`);

    if (docsToInsert.length > 0) {
      await Case.insertMany(docsToInsert, { ordered: false });
      console.log("Insert complete ✅");
    } else {
      console.log("No valid rows to insert.");
    }
  } catch (err) {
    console.error("Error during import:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

main();
