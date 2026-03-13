# VDFC Retirement Planning Simulator

An interactive financial planning tool that helps investors evaluate their retirement readiness through financial simulations, projections, and actionable insights.

This project was built as part of the FinCal Innovation Hackathon sponsored by HDFC Mutual Fund. The goal of the project is to create an educational financial calculator that helps individuals understand long-term investment planning and retirement preparedness.

---------------------------------------------------------------------

## Overview

Most retirement calculators only display the future value of investments based on a fixed monthly SIP. While this gives a projection, it does not help investors answer practical questions such as:

- Am I saving enough for retirement?
- How will inflation affect my future lifestyle?
- What happens if I delay investing?
- How much should I invest monthly to retire comfortably?
- How do different market conditions affect my retirement plan?

The HDFC Retirement Planning Simulator addresses these questions by combining financial modeling, scenario analysis, and visual insights into a single interactive platform.

---------------------------------------------------------------------

## Key Features

### Retirement Corpus Calculation

The simulator calculates the retirement corpus required to sustain expenses during retirement based on:

- Current monthly expenses
- Expected inflation rate
- Retirement age
- Life expectancy
- Post-retirement return assumptions

This provides a realistic estimate of how much capital is needed to maintain a similar lifestyle after retirement.

---------------------------------------------------------------------

### Wealth Growth Projection

The application visualizes how investments grow over time using systematic investment plans (SIP) and compound returns.

Users can see a graphical projection of wealth accumulation from their current age until retirement.

---------------------------------------------------------------------

### Retirement Readiness Score

A dynamic score from 0 to 100 that indicates how prepared a user is for retirement.

The score is based on the ratio between:

Required retirement corpus  
and  
Expected corpus from current savings and investments.

This helps users quickly understand their retirement preparedness.

---------------------------------------------------------------------

### Retirement Gap Analysis

The simulator compares:

Required Retirement Corpus  
vs  
Expected Corpus at Retirement

If there is a difference between the two values, the application highlights the retirement gap.

This allows users to identify whether their current investment strategy is sufficient.

---------------------------------------------------------------------

### Required Monthly Investment Recommendation

If a retirement gap exists, the tool calculates the additional monthly SIP required to close the gap before retirement.

This converts financial analysis into actionable guidance.

---------------------------------------------------------------------

### Market Scenario Simulation

The simulator evaluates retirement outcomes under different market conditions.

Scenarios include:

Pessimistic market return (8%)  
Expected market return (12%)  
Optimistic market return (15%)

This helps users understand how market volatility affects long-term retirement planning.

---------------------------------------------------------------------

### Delay Impact Simulation

The tool demonstrates the impact of delaying investments by five years.

By comparing immediate investment with delayed investment, users can clearly see the importance of starting early.

---------------------------------------------------------------------

### Inflation Impact Visualization

The simulator projects how current expenses will grow over time due to inflation.

Example:

Monthly expense today: 40,000  
Projected expense at retirement: significantly higher due to compounding inflation.

This helps investors understand the true cost of maintaining their lifestyle after retirement.

---------------------------------------------------------------------

### Financial Insight Engine

Based on the retirement readiness score and financial projections, the simulator generates contextual insights such as:

- Fully prepared for retirement
- Strong progress toward retirement goals
- Partial readiness requiring higher investment
- High retirement risk

This helps make the tool educational rather than purely computational.

---------------------------------------------------------------------

## Technology Stack

Frontend  
Next.js  
React  
TypeScript  

Styling  
Tailwind CSS  

Data Visualization  
Recharts  

Architecture  
Component-based design with separate utility modules for financial calculations.

---------------------------------------------------------------------

## Project Structure

app/
  page.tsx

components/
  RetirementForm.tsx
  RetirementChart.tsx

utils/
  retirementCalculations.ts

---------------------------------------------------------------------

## Financial Models Used

SIP Future Value

FV = P × [((1 + r)^n − 1) / r] × (1 + r)

Where:

P = monthly SIP investment  
r = monthly return rate  
n = total number of months invested  

---------------------------------------------------------------------

Inflation Adjusted Expenses

Future Expense = Current Expense × (1 + inflation)^years

---------------------------------------------------------------------

Retirement Corpus (Present Value of Annuity)

Corpus = Annual Expense × [(1 − (1 + r)^−t) / r]

Where:

r = post-retirement return  
t = retirement duration

---------------------------------------------------------------------

## Disclaimer

This tool has been designed for informational and educational purposes only.

Actual investment outcomes may vary depending on market conditions and individual financial circumstances. The simulator should not be considered financial or investment advice.

---------------------------------------------------------------------

## Built For

FinCal Innovation Hackathon

An initiative focused on building innovative financial calculators that improve investor awareness and promote better financial planning.
