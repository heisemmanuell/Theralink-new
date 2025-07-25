"use client";

import React, { useState } from "react";
import { Calendar, Plus } from "lucide-react";

const mockStaff = [
  "Mfoniso Ibokette",
  "Idiasuyi Victor",
  "Jane Doe",
  "John Smith",
];
const mockReports = [
  "Summary",
  "Detailed",
  "By Staff",
  "By Date",
];

export default function TimeClockReportPage() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showStaffSelect, setShowStaffSelect] = useState(false);
  const [showReportSelect, setShowReportSelect] = useState(false);
  const [dateRange, setDateRange] = useState({ start: "2023-11-10", end: "2024-11-10" });
  const [staff, setStaff] = useState<string | null>(null);
  const [report, setReport] = useState<string | null>(null);

  function formatDate(date: string) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US");
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-8">Time Clock Report</h1>
      <div className="bg-white rounded-2xl border border-[#F3F3F3] p-6 flex items-center justify-between w-full" style={{boxShadow: 'none'}}>
        <div className="flex items-center gap-4">
          {/* TaskDate pill */}
          <button
            className="flex items-center gap-1 border border-dashed border-[#D1D5DB] rounded-full px-6 py-3 bg-white text-gray-500 text-base font-normal"
            style={{ fontWeight: 400 }}
            onClick={() => setShowDatePicker(true)}
          >
            <Calendar className="w-4 h-4 text-[#BDBDBD] mr-1" />
            <span className="text-gray-400">TaskDate</span>
            <span className="text-[#0348E9] font-medium ml-1">
              {formatDate(dateRange.start)} - {formatDate(dateRange.end)}
            </span>
          </button>
          {/* Staff pill */}
          <button
            className="flex items-center gap-1 border border-dashed border-[#D1D5DB] rounded-full px-6 py-3 bg-white text-gray-500 text-base font-normal"
            style={{ fontWeight: 400 }}
            onClick={() => setShowStaffSelect(true)}
          >
            <Plus className="w-4 h-4 text-[#BDBDBD] mr-1" />
            <span className="text-gray-400">{staff ? staff : "Staff"}</span>
          </button>
          {/* Report pill */}
          <button
            className="flex items-center gap-1 border border-dashed border-[#D1D5DB] rounded-full px-6 py-3 bg-white text-gray-500 text-base font-normal"
            style={{ fontWeight: 400 }}
            onClick={() => setShowReportSelect(true)}
          >
            <Plus className="w-4 h-4 text-[#BDBDBD] mr-1" />
            <span className="text-gray-400">{report ? report : "Report"}</span>
          </button>
        </div>
        <span className="text-gray-400 text-base font-normal mr-2 cursor-pointer">Clear Filter</span>
      </div>
      {/* Date Picker Modal */}
      {showDatePicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-white rounded-xl p-8 min-w-[340px] text-center">
            <div className="mb-4 font-bold">Select Date Range</div>
            <div className="flex gap-4 mb-4">
              <div>
                <label className="block mb-1 text-sm">Start Date</label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={e => setDateRange(r => ({ ...r, start: e.target.value }))}
                  className="border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">End Date</label>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={e => setDateRange(r => ({ ...r, end: e.target.value }))}
                  className="border rounded px-3 py-2"
                />
              </div>
            </div>
            <button className="mt-2 text-blue-600 underline mr-4" onClick={() => setShowDatePicker(false)}>Cancel</button>
            <button className="mt-2 text-blue-600 underline" onClick={() => setShowDatePicker(false)}>Apply</button>
          </div>
        </div>
      )}
      {/* Staff Select Modal */}
      {showStaffSelect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-white rounded-xl p-8 min-w-[340px] text-center">
            <div className="mb-4 font-bold">Select Staff</div>
            <div className="flex flex-col gap-2 mb-4">
              {mockStaff.map(s => (
                <button
                  key={s}
                  className={`px-4 py-2 rounded text-left ${staff === s ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                  onClick={() => { setStaff(s); setShowStaffSelect(false); }}
                >
                  {s}
                </button>
              ))}
            </div>
            <button className="mt-2 text-blue-600 underline" onClick={() => setShowStaffSelect(false)}>Cancel</button>
          </div>
        </div>
      )}
      {/* Report Type Select Modal */}
      {showReportSelect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-white rounded-xl p-8 min-w-[340px] text-center">
            <div className="mb-4 font-bold">Select Report Type</div>
            <div className="flex flex-col gap-2 mb-4">
              {mockReports.map(r => (
                <button
                  key={r}
                  className={`px-4 py-2 rounded text-left ${report === r ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"}`}
                  onClick={() => { setReport(r); setShowReportSelect(false); }}
                >
                  {r}
                </button>
              ))}
            </div>
            <button className="mt-2 text-blue-600 underline" onClick={() => setShowReportSelect(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
} 