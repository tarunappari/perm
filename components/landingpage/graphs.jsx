"use client";
import React, { useState } from "react";
import styles from "@/styles/Landingpage/graphs.module.scss";

const Graphs = () => {
  const [hoveredDaily, setHoveredDaily] = useState(null);
  const [hoveredWeekly, setHoveredWeekly] = useState(null);
  const [hoveredWeeklyCases, setHoveredWeeklyCases] = useState(null);
  const [hoveredMonthly, setHoveredMonthly] = useState(null);

  // Generate dates from Nov 16 to Dec 14 (today)
  const generateDailyCaseData = () => {
    const data = [];
    const startDate = new Date("2024-11-16");
    const endDate = new Date("2024-12-14");

    // Generate random but realistic case volumes
    const randomValues = [
      120, 180, 220, 190, 160, 140, 100, 80, 150, 200, 240, 210, 180, 160, 140,
      120, 100, 90, 110, 150, 180, 200, 220, 190, 170, 150, 130, 120, 140,
    ];

    let index = 0;
    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setDate(d.getDate() + 1)
    ) {
      const month = d.toLocaleString("en-US", { month: "short" });
      const day = d.getDate();
      const value = randomValues[index % randomValues.length];

      data.push({
        date: `${month} ${day}`,
        fullDate: new Date(d),
        value: value,
        status: value > 200 ? "high" : value > 150 ? "medium" : "low",
      });
      index++;
    }

    return data;
  };

  const dailyCaseData = generateDailyCaseData();

  // Dummy data for Average Processing Time by Day (bar chart)
  const weeklyProcessingData = [
    { day: "Mon", value: 400, avgDays: 245 },
    { day: "Tue", value: 450, avgDays: 238 },
    { day: "Wed", value: 380, avgDays: 252 },
    { day: "Thu", value: 350, avgDays: 260 },
    { day: "Fri", value: 320, avgDays: 268 },
    { day: "Sat", value: 50, avgDays: 180 },
    { day: "Sun", value: 30, avgDays: 175 },
  ];

  // Dummy data for Weekly Case Volume (bar chart with comparison)
  const weeklyCaseData = [
    { week: "W1", value: 2800, change: "+12%" },
    { week: "W2", value: 1000, change: "-64%" },
    { week: "W3", value: 2500, change: "+150%" },
    { week: "W4", value: 2000, change: "-20%" },
    { week: "W5", value: 2300, change: "+15%" },
    { week: "W6", value: 2700, change: "+17%" },
  ];

  // Dummy data for Monthly Volume Trend (area chart with multiple metrics)
  const monthlyTrendData = [
    { month: "Jan", approved: 4500, pending: 1200, denied: 300 },
    { month: "Feb", approved: 4200, pending: 1500, denied: 280 },
    { month: "Mar", approved: 4800, pending: 1100, denied: 320 },
    { month: "Apr", approved: 4600, pending: 1300, denied: 290 },
    { month: "May", approved: 4400, pending: 1400, denied: 310 },
    { month: "Jun", approved: 4700, pending: 1250, denied: 295 },
  ];

  // Helper function to normalize data for chart rendering
  const normalizeData = (data, key) => {
    const values = data.map((d) => d[key]);
    const max = Math.max(...values);
    return data.map((d) => ({
      ...d,
      normalized: (d[key] / max) * 100,
    }));
  };

  const normalizedDailyData = normalizeData(dailyCaseData, "value");
  const normalizedWeeklyProcessing = normalizeData(
    weeklyProcessingData,
    "value"
  );
  const normalizedWeeklyCases = normalizeData(weeklyCaseData, "value");

  // For monthly trend, we'll use approved cases
  const normalizedMonthlyTrend = normalizeData(monthlyTrendData, "approved");

  return (
    <div className={styles.graphContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h2>PERM Dashboard</h2>
      </div>

      {/* Charts Grid */}
      <div className={styles.mainGrid}>
        {/* Left Section - 2x2 Stats Grid */}
        <div className={styles.smallChartsGrid}>
          {/* Yesterday's Processed Cases */}
          <div
            className={`${styles.chartCard} ${styles.smallChart} ${styles.statCard}`}
          >
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>
                Yesterday's Processed Cases (RFI, Denied, Certified)
              </span>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>520</div>
              <div className={styles.statChange}>
                <span className={styles.negative}>-100%</span>
              </div>
            </div>
            <div className={styles.statIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
          </div>

          {/* Yesterday's Certified Cases */}
          <div
            className={`${styles.chartCard} ${styles.smallChart} ${styles.statCard}`}
          >
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>
                Yesterday's Certified Cases
              </span>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>0</div>
              <div className={styles.statChange}>
                <span className={styles.negative}>-100%</span>
              </div>
            </div>
            <div className={styles.statIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>

          {/* Last Sync */}
          <div
            className={`${styles.chartCard} ${styles.smallChart} ${styles.statCard}`}
          >
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>Last Sync</span>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>12/13/2025</div>
              <div className={styles.statSubtext}>11:50 PM GMT-5:30</div>
            </div>
            <div className={styles.statIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
            </div>
          </div>

          {/* Average Process Time */}
          <div
            className={`${styles.chartCard} ${styles.smallChart} ${styles.statCard}`}
          >
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>Average Process Time</span>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>488 days</div>
              <div className={styles.statSubtext}>Range: 488-500 days</div>
              <div className={styles.statSubtext}>As of 12/13/2025</div>
            </div>
            <div className={styles.statIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section - Daily Case Volume */}
        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.chartTitle}>Daily Case Volume</h3>
              <p className={styles.chartSubtitle}>Cases filed per day</p>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statValue}>550</span>
              <span className={styles.statLabel}>Peak</span>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <div className={styles.yAxis}>
              <span>600</span>
              <span>400</span>
              <span>200</span>
              <span>0</span>
            </div>
            <div className={styles.lineChartContainer}>
              <svg
                className={styles.lineChart}
                viewBox="0 0 800 200"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient
                    id="areaGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#3b82f6"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>
                {/* Area under the line */}
                <polygon
                  points={`
                    0,200
                    ${normalizedDailyData
                      .map(
                        (d, i) =>
                          `${(i / (normalizedDailyData.length - 1)) * 800},${
                            200 - d.normalized * 2
                          }`
                      )
                      .join(" ")}
                    800,200
                  `}
                  fill="url(#areaGradient)"
                />
                {/* Draw line with gradient */}
                <polyline
                  points={normalizedDailyData
                    .map(
                      (d, i) =>
                        `${(i / (normalizedDailyData.length - 1)) * 800},${
                          200 - d.normalized * 2
                        }`
                    )
                    .join(" ")}
                  className={styles.linePath}
                  stroke="url(#lineGradient)"
                />
                {/* Draw dots */}
                {normalizedDailyData.map((d, i) => (
                  <circle
                    key={i}
                    cx={(i / (normalizedDailyData.length - 1)) * 800}
                    cy={200 - d.normalized * 2}
                    r="5"
                    className={styles.lineDot}
                    onMouseEnter={() => setHoveredDaily(i)}
                    onMouseLeave={() => setHoveredDaily(null)}
                  />
                ))}
              </svg>
              {hoveredDaily !== null && (
                <div
                  className={styles.tooltip}
                  style={{
                    left: `${
                      (hoveredDaily / (normalizedDailyData.length - 1)) * 100
                    }%`,
                  }}
                >
                  <div className={styles.tooltipContent}>
                    <strong>{dailyCaseData[hoveredDaily].date}</strong>
                    <span>{dailyCaseData[hoveredDaily].value} cases</span>
                  </div>
                </div>
              )}
              <div className={styles.xAxisLabels}>
                {dailyCaseData
                  .filter((_, i) => {
                    // Show labels at specific intervals to match the image
                    // Approximately every 2-3 days
                    const showIndices = [
                      0, 3, 6, 9, 12, 15, 17, 19, 21, 23, 25, 28,
                    ];
                    return showIndices.includes(i);
                  })
                  .map((d, i) => (
                    <span key={i}>{d.date}</span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Average Processing Time by Day - Enhanced Bar Chart */}
        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.chartTitle}>Processing Volume by Day</h3>
              <p className={styles.chartSubtitle}>
                Cases processed each weekday
              </p>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statValue}>238</span>
              <span className={styles.statLabel}>Avg Days</span>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <div className={styles.yAxis}>
              <span>500</span>
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            <div className={styles.barChartContainer}>
              <div className={styles.barsWrapper}>
                {normalizedWeeklyProcessing.map((d, i) => (
                  <div
                    key={i}
                    className={styles.barColumn}
                    onMouseEnter={() => setHoveredWeekly(i)}
                    onMouseLeave={() => setHoveredWeekly(null)}
                  >
                    <div
                      className={`${styles.bar} ${styles.blueBar}`}
                      style={{ height: `${d.normalized}%` }}
                    >
                      {hoveredWeekly === i && (
                        <div className={styles.barTooltip}>
                          <strong>{weeklyProcessingData[i].value}</strong>
                          <span>
                            {weeklyProcessingData[i].avgDays} days avg
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.xAxisLabels}>
                {weeklyProcessingData.map((d, i) => (
                  <span key={i}>{d.day}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Case Volume - Enhanced Bar Chart with Trends */}
        <div className={styles.chartCard}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.chartTitle}>Weekly Case Volume</h3>
              <p className={styles.chartSubtitle}>Week-over-week comparison</p>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statValue}>+15%</span>
              <span className={styles.statLabel}>This Week</span>
            </div>
          </div>
          <div className={styles.chartWrapper}>
            <div className={styles.yAxis}>
              <span>3000</span>
              <span>2000</span>
              <span>1000</span>
              <span>0</span>
            </div>
            <div className={styles.barChartContainer}>
              <div className={styles.barsWrapper}>
                {normalizedWeeklyCases.map((d, i) => (
                  <div
                    key={i}
                    className={styles.barColumn}
                    onMouseEnter={() => setHoveredWeeklyCases(i)}
                    onMouseLeave={() => setHoveredWeeklyCases(null)}
                  >
                    <div
                      className={`${styles.bar} ${styles.greenBar}`}
                      style={{ height: `${d.normalized}%` }}
                    >
                      {hoveredWeeklyCases === i && (
                        <div className={styles.barTooltip}>
                          <strong>{weeklyCaseData[i].value} cases</strong>
                          <span
                            className={
                              weeklyCaseData[i].change.startsWith("+")
                                ? styles.positive
                                : styles.negative
                            }
                          >
                            {weeklyCaseData[i].change}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className={styles.changeIndicator}>
                      {weeklyCaseData[i].change}
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.xAxisLabels}>
                {weeklyCaseData.map((d, i) => (
                  <span key={i}>{d.week}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Full Width Monthly Trend */}
        <div className={`${styles.chartCard} ${styles.fullWidth}`}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.chartTitle}>Monthly Case Status Trend</h3>
              <p className={styles.chartSubtitle}>
                Approved, pending, and denied cases
              </p>
            </div>
            <div className={styles.legendContainer}></div>
          </div>
          <div className={styles.chartWrapper}>
            <div className={styles.yAxis}>
              <span>6,000</span>
              <span>4,500</span>
              <span>3,000</span>
              <span>1,500</span>
              <span>0</span>
            </div>
            <div className={styles.areaChartContainer}>
              <svg
                className={styles.areaChart}
                viewBox="0 0 800 200"
                preserveAspectRatio="none"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const index = Math.round(
                    (x / rect.width) * (monthlyTrendData.length - 1)
                  );
                  setHoveredMonthly(index);
                }}
                onMouseLeave={() => setHoveredMonthly(null)}
              >
                <defs>
                  <linearGradient
                    id="approvedGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient
                    id="pendingGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient
                    id="deniedGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Approved cases area */}
                <polygon
                  points={`
                    0,200
                    ${normalizedMonthlyTrend
                      .map(
                        (d, i) =>
                          `${(i / (normalizedMonthlyTrend.length - 1)) * 800},${
                            200 - d.normalized * 1.5
                          }`
                      )
                      .join(" ")}
                    800,200
                  `}
                  fill="url(#approvedGradient)"
                />

                {/* Approved line */}
                <polyline
                  points={normalizedMonthlyTrend
                    .map(
                      (d, i) =>
                        `${(i / (normalizedMonthlyTrend.length - 1)) * 800},${
                          200 - d.normalized * 1.5
                        }`
                    )
                    .join(" ")}
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="2"
                />
              </svg>

              {hoveredMonthly !== null && (
                <div
                  className={styles.areaTooltip}
                  style={{
                    left: `${
                      (hoveredMonthly / (monthlyTrendData.length - 1)) * 90
                    }%`,
                  }}
                >
                  <div className={styles.tooltipContent}>
                    <strong>{monthlyTrendData[hoveredMonthly].month}</strong>
                    <div className={styles.tooltipRow}>
                      <span className={styles.approved}>●</span>
                      <span>
                        Volume: {monthlyTrendData[hoveredMonthly].approved}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className={styles.xAxisLabels}>
                {monthlyTrendData.map((d, i) => (
                  <span key={i}>{d.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
