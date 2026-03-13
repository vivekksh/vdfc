import RetirementForm from "@/components/RetirementForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <section className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-10 py-8 text-center">

          <h1 className="text-3xl font-bold text-[#224c87]">
            VDFC Retirement Planning Simulator
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Plan your retirement by simulating how your investments grow over
            time. Adjust your financial assumptions below to understand your
            retirement readiness.
          </p>

        </div>
      </section>

      {/* RETIREMENT DASHBOARD (TOP SECTION) */}
      <section className="max-w-6xl mx-auto px-10 py-10">

        <div className="bg-white rounded-xl shadow-lg p-10">

          <h2 className="text-2xl font-semibold text-[#224c87] mb-4">
            Retirement Dashboard
          </h2>

          <p className="text-gray-600 mb-8">
            Based on your inputs above, the simulator calculates your expected
            retirement corpus, financial readiness score, and investment growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-[#224c87]">
                Wealth Projection
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Visualize how your monthly investments grow over your working
                years.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-[#224c87]">
                Inflation Impact
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Understand how rising costs affect your retirement expenses.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-[#224c87]">
                Retirement Readiness
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                See whether your current savings strategy is enough for
                retirement.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FINANCIAL INPUTS */}
      <section className="max-w-6xl mx-auto px-10 pb-10">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-xl font-semibold text-[#224c87] mb-6">
            Financial Inputs
          </h2>

          <RetirementForm />

        </div>

      </section>

      {/* DISCLAIMER */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-10 py-6 text-center text-sm text-gray-500">
          This tool has been designed for information purposes only. Actual
          results may vary depending on market conditions. This should not be
          considered financial advice.
        </div>
      </footer>

    </main>
  );
}