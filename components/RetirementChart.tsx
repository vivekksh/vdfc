"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Props {
  age: number;
  retirementAge: number;
  sip: number;
  returnRate: number;
}

export default function RetirementChart({
  age,
  retirementAge,
  sip,
  returnRate,
}: Props) {

  const years = retirementAge - age;
  const monthlyRate = returnRate / 100 / 12;

  let corpus = 0;
  const data = [];

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      corpus = corpus * (1 + monthlyRate) + sip;
    }

    data.push({
      age: age + year,
      wealth: Math.round(corpus),
    });
  }

  return (
    <div className="w-full mt-10">

      <h2 className="text-xl font-bold text-[#224c87] mb-6">
        Wealth Growth Projection
      </h2>

      <div className="w-full h-100">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="age"
              label={{
                value: "Age",
                position: "insideBottom",
                offset: -5,
              }}
            />

            <YAxis
              tickFormatter={(value) =>
                `₹${(value / 100000).toFixed(1)}L`
              }
            />

            <Tooltip
              formatter={(value: number) =>
                `₹${value.toLocaleString()}`
              }
              labelFormatter={(label) => `Age: ${label}`}
            />

            <Line
              type="monotone"
              dataKey="wealth"
              stroke="#1a4fa3"
              strokeWidth={4}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}