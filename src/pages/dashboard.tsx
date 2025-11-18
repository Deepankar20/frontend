import { useState } from "react";

export default function Dashboard() {
  const [wellnessScore] = useState(82);
  const [steps] = useState(5200);
  const [sleep] = useState(7.2);
  const [hydration] = useState(2.3);

  const checkups = [
    {
      id: "1",
      title: "Annual Blood Test",
      due: "12 Jan 2026",
      status: "Pending",
    },
    {
      id: "2",
      title: "Eye Checkup",
      due: "30 Nov 2025",
      status: "Completed",
    },
    {
      id: "3",
      title: "Dental Checkup",
      due: "15 Mar 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Your Health Dashboard
      </h1>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* WELLNESS SCORE */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Overall Wellness Score</h2>

          <div className="flex items-center gap-6">
            <div className="text-5xl font-bold text-blue-700">{wellnessScore}%</div>

            <div className="flex-1">
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="h-3 bg-blue-600 rounded-full transition-all"
                  style={{ width: `${wellnessScore}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Based on activity, sleep & hydration.
              </p>
            </div>
          </div>
        </div>

        {/* QUICK METRICS */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Today's Summary</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Steps:</strong> {steps}</p>
            <p><strong>Sleep:</strong> {sleep} hrs</p>
            <p><strong>Hydration:</strong> {hydration} L</p>
          </div>

          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Update Data
          </button>
        </div>

        {/* CHECKUPS */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Preventive Checkups</h2>

          <ul className="space-y-4">
            {checkups.map((c) => (
              <li
                key={c.id}
                className="bg-gray-100 p-4 flex justify-between items-center rounded-lg"
              >
                <div>
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-gray-600">Due: {c.due}</div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    c.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {c.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>⚕️ Log your hydration for today.</li>
            <li>📅 Book your dental checkup soon.</li>
            <li>💤 You slept 7.2 hrs last night.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
