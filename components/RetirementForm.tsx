"use client";

import { useState } from "react";
import RetirementChart from "./RetirementChart";
import {
  calculateFutureExpenses,
  calculateRetirementCorpus,
  calculateFutureValueOfSIP,
  calculateRetirementGap,
} from "@/utils/retirementCalculations";

export default function RetirementForm() {

  const [age, setAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(40000);
  const [currentSavings, setCurrentSavings] = useState(200000);
  const [sip, setSip] = useState(10000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);

  const lifeExpectancy = 85;

  const yearsToRetirement = retirementAge - age;
  const retirementYears = lifeExpectancy - retirementAge;

  const futureMonthlyExpense = calculateFutureExpenses(
    monthlyExpense,
    inflation,
    yearsToRetirement
  );

  const futureAnnualExpense = futureMonthlyExpense * 12;

  const requiredCorpus = calculateRetirementCorpus(
    futureAnnualExpense,
    7,
    retirementYears
  );

  const expectedCorpus =
    calculateFutureValueOfSIP(sip, returnRate, yearsToRetirement) +
    currentSavings;

  const retirementGap = calculateRetirementGap(
    requiredCorpus,
    expectedCorpus
  );

  /* ⭐ NEW FEATURE — REQUIRED SIP TO CLOSE GAP */

  const requiredMonthlyInvestment =
    retirementGap > 0
      ? Math.ceil(retirementGap / (yearsToRetirement * 12))
      : 0;

  const pessimisticCorpus =
    calculateFutureValueOfSIP(sip, 8, yearsToRetirement) + currentSavings;

  const optimisticCorpus =
    calculateFutureValueOfSIP(sip, 15, yearsToRetirement) + currentSavings;

  const delayedYears = 5;

  const delayedCorpus =
    calculateFutureValueOfSIP(
      sip,
      returnRate,
      yearsToRetirement - delayedYears
    ) + currentSavings;

  const readinessScore = Math.max(
    0,
    Math.min(100, (expectedCorpus / requiredCorpus) * 100)
  );

  let insightMessage = "";

  if (readinessScore >= 100) {
    insightMessage =
      "Excellent! You are fully prepared for retirement based on your current savings and investments.";
  } else if (readinessScore >= 75) {
    insightMessage =
      "You are on a strong path toward retirement, but increasing your SIP could provide additional security.";
  } else if (readinessScore >= 50) {
    insightMessage =
      "You are partially prepared for retirement. Increasing your monthly investment could significantly improve your future financial stability.";
  } else {
    insightMessage =
      "You may face a significant retirement gap. Consider increasing your SIP or adjusting retirement expectations.";
  }

  return (
    <div className="w-full space-y-10">

      {/* INPUT SECTION */}
      <div className="bg-white rounded-xl shadow-md p-8">

        <h2 className="text-2xl font-bold text-[#224c87] mb-6">
          Retirement Planner
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm font-medium">Current Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Monthly Expenses (₹)</label>
            <input
              type="number"
              value={monthlyExpense}
              onChange={(e) => setMonthlyExpense(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Current Savings (₹)</label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Monthly SIP (₹)</label>
            <input
              type="number"
              value={sip}
              onChange={(e) => setSip(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Inflation Rate (%)</label>
            <input
              type="number"
              value={inflation}
              onChange={(e) => setInflation(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Expected Return (%)</label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full border border-gray-300 p-3 rounded-lg mt-1"
            />
          </div>

        </div>

      </div>

      {/* KPI METRICS */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-sm text-gray-600">Future Monthly Expense</p>
          <p className="text-xl font-bold text-[#224c87]">
            ₹{futureMonthlyExpense.toLocaleString()}
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <p className="text-sm text-gray-600">Required Corpus</p>
          <p className="text-xl font-bold text-green-700">
            ₹{requiredCorpus.toLocaleString()}
          </p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <p className="text-sm text-gray-600">Expected Corpus</p>
          <p className="text-xl font-bold text-purple-700">
            ₹{expectedCorpus.toLocaleString()}
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <p className="text-sm text-gray-600">Retirement Gap</p>
          <p className="text-xl font-bold text-red-600">
            ₹{retirementGap.toLocaleString()}
          </p>
        </div>

      </div>

      {/* ⭐ REQUIRED SIP CARD */}
      {requiredMonthlyInvestment > 0 && (
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
          <h3 className="font-semibold text-indigo-700 mb-2">
            Required Monthly Investment
          </h3>

          <p className="text-xl font-bold">
            ₹{requiredMonthlyInvestment.toLocaleString()} / month
          </p>

          <p className="text-sm text-gray-600 mt-1">
            This is the additional monthly investment required to close your retirement gap.
          </p>
        </div>
      )}

      {/* READINESS SCORE */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold text-[#224c87] mb-2">
          Retirement Readiness Score
        </h3>
        <p className="text-3xl font-bold">{readinessScore.toFixed(0)} / 100</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
  <h3 className="font-semibold text-[#224c87] mb-2">
    Retirement Status
  </h3>

  <p className="text-xl font-bold">
    {readinessScore >= 90
      ? "🟢 On Track"
      : readinessScore >= 70
      ? "🟡 Needs Improvement"
      : "🔴 High Risk"}
  </p>
</div>

      {/* INSIGHT */}
      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 className="font-semibold text-green-700 mb-2">
          Financial Insight
        </h3>
        <p className="text-sm">{insightMessage}</p>
      </div>

      {/* MARKET SCENARIOS */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold text-[#224c87] mb-4">
          Market Scenarios
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <p className="text-sm text-gray-600">Pessimistic (8%)</p>
            <p className="font-bold">
              ₹{pessimisticCorpus.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Expected (12%)</p>
            <p className="font-bold">
              ₹{expectedCorpus.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Optimistic (15%)</p>
            <p className="font-bold">
              ₹{optimisticCorpus.toLocaleString()}
            </p>
          </div>

        </div>
      </div>

      {/* DELAY IMPACT */}
      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
        <h3 className="font-semibold text-yellow-700 mb-2">
          Delay Impact
        </h3>
        <p className="text-sm">
          If you delay investing by <b>5 years</b>, your retirement corpus
          could drop to:
        </p>
        <p className="text-xl font-bold mt-2">
          ₹{delayedCorpus.toLocaleString()}
        </p>
      </div>

      {/* CHART */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-[#224c87] mb-6">
          Wealth Growth Projection
        </h3>

        <RetirementChart
          age={age}
          retirementAge={retirementAge}
          sip={sip}
          returnRate={returnRate}
        />
      </div>

    </div>
  );
}