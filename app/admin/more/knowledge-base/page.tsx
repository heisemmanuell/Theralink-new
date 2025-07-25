import React from "react";

const articles = [
  "How To: Add Additional User Seats",
  "How To: Add a Document",
  "How To: Adding Diagnosis and setting it to primary",
  "How To: Adding Evidence-Based Practice (EBP) Codes to a Template",
  "How To: Adding Social Determinants",
  "How To: Allowing Staff to Transcribe",
  "How To: Assign a Service to a Staff",
  "How To: Assign a Site to a Client",
  "How To: Assign a Site to a Staff",
  "How To: Assign a Site to a Staff",
  "How To: Assign a Site to a Staff",
  "How To: Assign a Site to a Staff",
  "How To: Assign a Site to a Staff",
  "How To: Assign a Site to a Staff",
  "How To: Adding Evidence-Based Practice (EBP) Codes to a Template",
  "How To: Assign a Site to a Staff",
  "How To: Assign a Site to a Staff",
  "How To: Adding Evidence-Based Practice (EBP) Codes to a Template",
  "How To: Adding Evidence-Based Practice (EBP) Codes to a Template",
];

export default function KnowledgeBasePage() {
  return (
    <div className="">
      <div className="bg-[#e7f0fe] rounded-xl px-6 py-3 mb-6">
        <span className="text-2xl font-bold text-gray-700">Knowledge Base</span>
      </div>
      <div className="flex flex-col gap-2">
        {articles.map((title, idx) => (
          <div key={idx} className="text-lg text-gray-700 font-normal cursor-pointer hover:underline transition-all">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}
