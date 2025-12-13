
import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema(
  {
    caseNumber: { type: String, required: true, unique: true },
    employerName: { type: String, required: true },
    employerInitial: { type: String, required: true },
    filedDate: { type: Date, required: true },       // RECEIVED_DATE
    decisionDate: { type: Date, required: true },    // DECISION_DATE
    processingDays: { type: Number, required: true },
  },
  { timestamps: true }
);

// Avoid model overwrite issues in dev
export default mongoose.models.Case || mongoose.model("Case", CaseSchema);
