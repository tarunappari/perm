'use client';
import React, { useState } from 'react';
import styles from '@/styles/Landingpage/PredictionForm.module.scss';

const PredictionForms = () => {
  // State for Predict by Case Number form
  const [caseNumber, setCaseNumber] = useState('');
  const [caseEmployerInitial, setCaseEmployerInitial] = useState('');
  const [caseLoading, setCaseLoading] = useState(false);
  const [caseResult, setCaseResult] = useState(null);
  const [caseError, setCaseError] = useState(null);

  // State for Predict by Submission Date form
  const [submissionDate, setSubmissionDate] = useState('');
  const [dateEmployerInitial, setDateEmployerInitial] = useState('');
  const [dateLoading, setDateLoading] = useState(false);
  const [dateResult, setDateResult] = useState(null);
  const [dateError, setDateError] = useState(null);

  // Handle Predict by Case Number
  const handlePredictByCase = async (e) => {
    e.preventDefault();
    setCaseLoading(true);
    setCaseError(null);
    setCaseResult(null);

    try {
      const response = await fetch('/api/estimate-by-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          caseNumber: caseNumber.trim(),
          employerInitial: caseEmployerInitial.trim().toUpperCase(),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to fetch prediction');
      }

      const data = await response.json();
      setCaseResult(data);
    } catch (error) {
      setCaseError(error.message);
    } finally {
      setCaseLoading(false);
    }
  };

  // Handle Predict by Submission Date
  const handlePredictByDate = async (e) => {
    e.preventDefault();
    setDateLoading(true);
    setDateError(null);
    setDateResult(null);

    try {
      const response = await fetch('/api/estimate-by-date', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filedDate: submissionDate,
          employerInitial: dateEmployerInitial.trim().toUpperCase(),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to fetch prediction');
      }

      const data = await response.json();
      setDateResult(data);
    } catch (error) {
      setDateError(error.message);
    } finally {
      setDateLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <h2 className={styles.title}>Timeline Estimator</h2>
      </div> */}

      <div className={styles.formsGrid}>
        {/* Predict by Case Number Form */}
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Predict by Case Number</h3>
          <p className={styles.formDescription}>
            Enter your PERM case number for an estimated completion date:
          </p>

          <form onSubmit={handlePredictByCase}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Case Number</label>
              <input
                type="text"
                className={styles.input}
                placeholder="G-100-XXXXX-XXXXXX"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>First Letter of Employer Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="A"
                maxLength="1"
                value={caseEmployerInitial}
                onChange={(e) => setCaseEmployerInitial(e.target.value.toUpperCase())}
                required
              />
              <p className={styles.helperText}>
                DOL processes applications alphabetically by employer name within each month
              </p>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={caseLoading}
            >
              {caseLoading ? 'Predicting...' : 'Predict'}
            </button>
          </form>

          {/* Case Result Display */}
          {caseResult && (
            <div className={styles.predictionCard}>
              <div className={styles.predictionHeader}>
                <h4 className={styles.predictionMainTitle}>Estimated PERM completion date:</h4>
                <div className={styles.predictionDate}>{caseResult.prediction.predictedDecisionDate}</div>
              </div>

              <div className={styles.predictionBody}>
                {/* Submit Date and Completion Date */}
                <div className={styles.dateRow}>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Submit Date</span>
                    <span className={styles.dateValue}>{caseResult.input.filedDate}</span>
                  </div>
                  <div className={styles.arrowIcon}>→</div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Completion Date</span>
                    <span className={styles.dateValue}>{caseResult.prediction.predictedDecisionDate}</span>
                  </div>
                </div>

                {/* Confidence and Total Time */}
                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Confidence level: 80%</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Total time: {caseResult.prediction.predictedProcessingDays} days</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Remaining: {caseResult.prediction.predictedProcessingDays} days</span>
                  </div>
                </div>

                {/* Employer Name Factor */}
                <div className={styles.employerSection}>
                  <span className={styles.employerLabel}>Employer Name Factor:</span>
                  <span className={styles.employerValue}>Starting with {caseResult.input.employerInitial}</span>
                </div>

                {/* Queue Analysis */}
                <div className={styles.queueSection}>
                  <h5 className={styles.queueTitle}>Queue Analysis:</h5>
                  <div className={styles.queueGrid}>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Current Backlog:</span>
                      <span className={styles.queueValue}>{caseResult.stats.count.toLocaleString()} cases</span>
                    </div>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Your Queue Position:</span>
                      <span className={styles.queueValue}>~{Math.floor(caseResult.stats.count * 0.5).toLocaleString()}</span>
                    </div>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Processing Rate:</span>
                      <span className={styles.queueValue}>~{Math.floor(caseResult.stats.count / 52)} / week ({Math.floor(caseResult.stats.count / 365)} / day)</span>
                    </div>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Estimated Wait:</span>
                      <span className={styles.queueValue}>~{Math.floor(caseResult.prediction.predictedProcessingDays / 7)} weeks</span>
                    </div>
                  </div>
                </div>

                {/* Processing Time Breakdown */}
                <div className={styles.breakdownSection}>
                  <h5 className={styles.breakdownTitle}>Processing Time Breakdown:</h5>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '1%' }}></div>
                  </div>
                  <div className={styles.progressLabels}>
                    <span className={styles.progressLabel}>Days passed: 4 days</span>
                    <span className={styles.progressLabel}>Remaining: {caseResult.prediction.predictedProcessingDays} days</span>
                  </div>
                  <div className={styles.journeyLabel}>
                    Total journey: {caseResult.prediction.predictedProcessingDays} days
                  </div>
                </div>
              </div>
            </div>
          )}

          {caseError && (
            <div className={styles.errorCard}>
              <p>{caseError}</p>
            </div>
          )}
        </div>

        {/* Predict by Submission Date Form */}
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Predict by Submission Date</h3>
          <p className={styles.formDescription}>
            Enter your PERM submission date for an estimated completion date:
          </p>

          <form onSubmit={handlePredictByDate}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Submission Date</label>
              <input
                type="date"
                className={styles.input}
                value={submissionDate}
                onChange={(e) => setSubmissionDate(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>First Letter of Employer Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="A"
                maxLength="1"
                value={dateEmployerInitial}
                onChange={(e) => setDateEmployerInitial(e.target.value.toUpperCase())}
                required
              />
              <p className={styles.helperText}>
                DOL processes applications alphabetically by employer name within each month
              </p>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={dateLoading}
            >
              {dateLoading ? 'Predicting...' : 'Predict'}
            </button>
          </form>

          {/* Date Result Display */}
          {dateResult && (
            <div className={styles.predictionCard}>
              <div className={styles.predictionHeader}>
                <h4 className={styles.predictionMainTitle}>Estimated PERM completion date:</h4>
                <div className={styles.predictionDate}>{dateResult.prediction.predictedDecisionDate}</div>
              </div>

              <div className={styles.predictionBody}>
                {/* Submit Date and Completion Date */}
                <div className={styles.dateRow}>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Submit Date</span>
                    <span className={styles.dateValue}>{dateResult.input.filedDate}</span>
                  </div>
                  <div className={styles.arrowIcon}>→</div>
                  <div className={styles.dateItem}>
                    <span className={styles.dateLabel}>Completion Date</span>
                    <span className={styles.dateValue}>{dateResult.prediction.predictedDecisionDate}</span>
                  </div>
                </div>

                {/* Confidence and Total Time */}
                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Confidence level: 80%</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Total time: {dateResult.prediction.predictedProcessingDays} days</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statLabel}>Remaining: {dateResult.prediction.predictedProcessingDays} days</span>
                  </div>
                </div>

                {/* Employer Name Factor */}
                <div className={styles.employerSection}>
                  <span className={styles.employerLabel}>Employer Name Factor:</span>
                  <span className={styles.employerValue}>Starting with {dateResult.input.employerInitial}</span>
                </div>

                {/* Queue Analysis */}
                <div className={styles.queueSection}>
                  <h5 className={styles.queueTitle}>Queue Analysis:</h5>
                  <div className={styles.queueGrid}>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Current Backlog:</span>
                      <span className={styles.queueValue}>{dateResult.stats.count.toLocaleString()} cases</span>
                    </div>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Your Queue Position:</span>
                      <span className={styles.queueValue}>~{Math.floor(dateResult.stats.count * 0.5).toLocaleString()}</span>
                    </div>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Processing Rate:</span>
                      <span className={styles.queueValue}>~{Math.floor(dateResult.stats.count / 52)} / week ({Math.floor(dateResult.stats.count / 365)} / day)</span>
                    </div>
                    <div className={styles.queueItem}>
                      <span className={styles.queueLabel}>Estimated Wait:</span>
                      <span className={styles.queueValue}>~{Math.floor(dateResult.prediction.predictedProcessingDays / 7)} weeks</span>
                    </div>
                  </div>
                </div>

                {/* Processing Time Breakdown */}
                <div className={styles.breakdownSection}>
                  <h5 className={styles.breakdownTitle}>Processing Time Breakdown:</h5>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '1%' }}></div>
                  </div>
                  <div className={styles.progressLabels}>
                    <span className={styles.progressLabel}>Days passed: 4 days</span>
                    <span className={styles.progressLabel}>Remaining: {dateResult.prediction.predictedProcessingDays} days</span>
                  </div>
                  <div className={styles.journeyLabel}>
                    Total journey: {dateResult.prediction.predictedProcessingDays} days
                  </div>
                </div>
              </div>
            </div>
          )}

          {dateError && (
            <div className={styles.errorCard}>
              <p>{dateError}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionForms;
