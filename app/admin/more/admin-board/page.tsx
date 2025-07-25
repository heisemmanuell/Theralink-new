"use client";
import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from "recharts";

// Mock data
const barData = [
  { name: "01", value: 30, value2: 20 },
  { name: "02", value: 60, value2: 40 },
  { name: "03", value: 40, value2: 30 },
  { name: "04", value: 60, value2: 50 },
  { name: "05", value: 30, value2: 20 },
  { name: "06", value: 60, value2: 40 },
  { name: "07", value: 40, value2: 30 },
  { name: "08", value: 60, value2: 50 },
  { name: "09", value: 30, value2: 20 },
  { name: "10", value: 60, value2: 40 },
  { name: "11", value: 40, value2: 30 },
  { name: "12", value: 60, value2: 50 },
];
const raceData = [
  { name: "White", value: 33.33, color: "#A259D9" },
  { name: "Black or African American", value: 33.33, color: "#F2668B" },
  { name: "African", value: 33.33, color: "#5B8DF6" },
];
const genderData = [
  { name: "Female", value: 33.33, color: "#F2668B" },
  { name: "Male", value: 66.67, color: "#5B8DF6" },
];
const ageData = [
  { name: "Jan", a: 20, b: 10, c: -10 },
  { name: "Feb", a: 20, b: 20, c: 0 },
  { name: "Mar", a: 30, b: 30, c: 10 },
  { name: "Apr", a: 40, b: 40, c: 20 },
  { name: "May", a: 30, b: 50, c: 20 },
  { name: "Jun", a: 20, b: 60, c: 20 },
];

// Chart components
function DiagnosisBarChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
function ZipBarChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value2" fill="#5B8DF6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
function RaceDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={raceData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          label={({ name, percent }) => `${name} \n(${((percent ?? 0) * 100).toFixed(2)}%)`}
        >
          {raceData.map((entry, idx) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  );
}
function GenderDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={genderData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          label={({ name, percent }) => `${name} \n(${((percent ?? 0) * 100).toFixed(2)}%)`}
        >
          {genderData.map((entry, idx) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  );
}
function AgeLineChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={ageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="a" stroke="#F2668B" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="b" stroke="#5B8DF6" strokeWidth={3} dot={{ r: 5 }} />
        <Line type="monotone" dataKey="c" stroke="#A259D9" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default function AdminBoardPage() {
  const [showInactive, setShowInactive] = useState(false);
  return (
    <div className="bg-[#fafbfc] min-h-screen">
      {/* Header and filter bar */}
      <div className="max-w-7xl mx-auto">
        <div className="text-lg font-semibold mb-2">Admin. Board</div>
        <div className="bg-white rounded-2xl border border-[#F3F3F3] p-4 mb-8 flex items-center gap-6">
          <button className="flex items-center gap-2 border border-dashed border-[#D1D5DB] rounded-full px-5 py-2 bg-white text-gray-500 text-base font-normal">
            <Calendar className="w-4 h-4 text-[#BDBDBD]" />
            <span className="text-gray-400">Date</span>
            <span className="text-[#0348E9] font-medium ml-1">11/10/2023 - 11/10/2024</span>
          </button>
          <div className="flex items-center gap-2 ml-2">
            <Switch checked={showInactive} onCheckedChange={setShowInactive} />
            <span className="text-gray-500 text-base font-normal">Show Inactive Clients</span>
          </div>
        </div>
        {/* Charts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-700">Clients by Diagnosis</div>
            <DiagnosisBarChart />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="mb-2 text-sm font-medium text-gray-700">Clients by Zip</div>
            <ZipBarChart />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="mb-2 text-sm font-medium text-gray-700">Clients by Race</div>
          <RaceDonutChart />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="mb-2 text-sm font-medium text-gray-700">Clients by Age</div>
          <AgeLineChart />
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="mb-2 text-sm font-medium text-gray-700">Clients by Gender</div>
          <GenderDonutChart />
        </div>
      </div>
    </div>
  );
}
