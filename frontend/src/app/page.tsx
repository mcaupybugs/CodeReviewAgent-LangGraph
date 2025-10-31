"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState(`function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
}`);

  const [result, setResult] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const reviewCode = async () => {
    const response = await fetch("http://localhost:8000/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">
          LangGraph Code Review
        </h1>
        <p className="text-slate-400 mb-8">
          AI-powered code review using LangGraph
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Your Code</h2>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-4 bg-slate-900 text-green-400 font-mono text-sm rounded border border-slate-700 focus:border-blue-500 focus:outline-none"
              placeholder="Paste your code here..."
            />
            <button
              onClick={reviewCode}
              disabled={loading}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold py-3 px-6 rounded transition"
            >
              {loading ? "Reviewing..." : "Review Code"}
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Review Results
            </h2>
            {!result ? (
              <div className="text-slate-400 text-center py-20">
                Submit code to see the review
              </div>
            ) : (
              <div className="space-y-6 text-slate-300">
                {/* Analysis */}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    Analysis
                  </h3>
                  <p className="text-sm leading-relaxed">{result.analysis}</p>
                </div>

                {/* Issues */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                    Issues Found
                  </h3>
                  {result.issues && result.issues.length > 0 ? (
                    <ul className="space-y-2">
                      {result.issues.map((issue: string, i: number) => (
                        <li key={i} className="text-sm flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          <span>{issue.replace(/^-\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-400">No issues found</p>
                  )}
                </div>

                {/* Report */}
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    Full Report
                  </h3>
                  <div className="text-sm whitespace-pre-wrap bg-slate-900 p-4 rounded border border-slate-700">
                    {result.report}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
