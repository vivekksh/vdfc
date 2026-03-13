export function calculateFutureExpenses(
  currentExpense: number,
  inflationRate: number,
  years: number
) {
  const futureExpense =
    currentExpense * Math.pow(1 + inflationRate / 100, years);

  return futureExpense;
}

export function calculateRetirementCorpus(
  annualExpense: number,
  postRetirementReturn: number,
  retirementYears: number
) {
  const r = postRetirementReturn / 100;

  const corpus =
    annualExpense * ((1 - Math.pow(1 + r, -retirementYears)) / r);

  return corpus;
}

export function calculateFutureValueOfSIP(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
) {
  const r = annualReturn / 100 / 12;
  const n = years * 12;

  const fv =
    monthlyInvestment *
    ((Math.pow(1 + r, n) - 1) / r) *
    (1 + r);

  return fv;
}

export function calculateRetirementGap(
  requiredCorpus: number,
  expectedCorpus: number
) {
  return requiredCorpus - expectedCorpus;
}