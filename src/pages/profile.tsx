import { useEffect, useState } from "react";

type Patient = {
  name: string;
  email: string;
  age?: number;
  gender?: string;
  diagnosis?: string;
  conditions?: string[];
  medications?: string[];
};

export default function Profile() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [diagnosis, setDiagnosis] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Load patient from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setPatient(user);
      setDiagnosis(user.diagnosis ?? "");
    }
  }, []);

  const saveDiagnosis = () => {
    if (!patient) return;

    setIsSaving(true);

    const updated = { ...patient, diagnosis };
    localStorage.setItem("user", JSON.stringify(updated));

    setTimeout(() => {
      setPatient(updated);
      setIsSaving(false);
      alert("Diagnosis updated successfully.");
    }, 600); // simulating API delay
  };

  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading patient profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Patient Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto">

        {/* Patient basic info */}
        <div className="border-b pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {patient.name}
          </h2>
          <p className="text-gray-600">{patient.email}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div>
              <div className="text-gray-500 text-sm">Age</div>
              <div className="text-gray-800 text-lg">{patient.age ?? "N/A"}</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Gender</div>
              <div className="text-gray-800 text-lg">{patient.gender ?? "N/A"}</div>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Role</div>
              <div className="text-gray-800 text-lg">Patient</div>
            </div>
          </div>
        </div>

        {/* Diagnosis (doctor editable) */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Diagnosis</h3>
          <textarea
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            className="w-full p-3 border rounded-lg h-32 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter diagnosis, observations, or notes..."
          />

          <button
            onClick={saveDiagnosis}
            disabled={isSaving}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Save Diagnosis"}
          </button>
        </div>

        {/* Conditions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Existing Conditions
          </h3>

          {patient.conditions && patient.conditions.length > 0 ? (
            <ul className="list-disc ml-6 text-gray-700">
              {patient.conditions.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm">No known conditions.</p>
          )}
        </div>

        {/* Medications */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Medications
          </h3>

          {patient.medications && patient.medications.length > 0 ? (
            <ul className="list-disc ml-6 text-gray-700">
              {patient.medications.map((m, idx) => (
                <li key={idx}>{m}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm">No medications recorded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
