"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomClockOutPanel from "./CustomClockOutPanel";
import { DataTable } from "@/components/ui/data-table";
import { timeClockColumns, staffClockedInColumns, staffTotalHoursColumns, TimeClockRecord, StaffClockedInRecord, StaffTotalHoursRecord } from "./table-columns";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const mockTimeClock: TimeClockRecord[] = [
  {
    id: "1",
    staff: "Mfoniso Ibokette",
    timeIn: "11/5/2024 10:00 PM",
    timeOut: "11/5/2024 10:00 PM",
    hoursWorked: "69h 53m",
    approved: "15 Minutes",
  },
];
const mockStaffClockedIn: StaffClockedInRecord[] = [
  { id: "2gg81", staff: "Idiasuyi Victor", timeIn: "11/5/2024 10:00 PM" },
];
const mockStaffTotalHours: StaffTotalHoursRecord[] = [
  { id: "2gg81", staff: "Idiasuyi Victor", totalHours: "6h 43m" },
];

export default function TimeClockPage() {
  const [showTrashed, setShowTrashed] = useState(false);
  const [staff, setStaff] = useState("");
  const router = useRouter();

  // Safely override the action column
  const timeClockCols = (timeClockColumns as any[]).map(col =>
    col && col.accessorKey === "action"
      ? { ...col, cell: () => (
        <div className='flex gap-2'>
          <Pencil className='w-4 h-4 text-blue-600 cursor-pointer' />
          <Trash2 className='w-4 h-4 text-red-600 cursor-pointer' />
        </div>
      ) }
      : col
  );

  return (
    <div className="">
      {/* Header row with Generate Report */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Time Clock</h1>
        <Button variant="secondary" onClick={() => router.push('/admin/more/time-clock/report')}>Generate Report</Button>
      </div>
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border p-4 mb-6 flex flex-wrap items-center gap-4 justify-between w-full">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="border border-dashed rounded-full px-4 py-2 text-gray-600 bg-[#fafbfc] cursor-pointer">
            TaskDate | 11/10/2023 - 11/10/2024
          </span>
          <div className="flex items-center gap-2">
            <Switch checked={showTrashed} onCheckedChange={setShowTrashed} />
            <span>Show Trashed</span>
          </div>
          <Input className="min-w-[120px]" placeholder="Staff" value={staff} onChange={e => setStaff(e.target.value)} />
        </div>
        <span className="text-gray-400 cursor-pointer select-none">Clear Filter</span>
      </div>
      {/* Main content: left panel and tables */}
      <div className="flex flex-row gap-8">
        <div className="w-[370px] flex-shrink-0">
          <CustomClockOutPanel />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="p-4">
            <div className="rounded-2xl bg-[#f8fafc]  overflow-hidden">
              <DataTable columns={timeClockCols} data={mockTimeClock} />
            </div>
          </div>
          <div className="rounded-2xl p-4">
            <div className="font-semibold mb-2">Staff Currently Clocked In</div>
            <div className="text-xs text-gray-500 mb-2">The following is a list of currently clocked in staff, including when they clocked in and how long they have been clocked in for.</div>
            <div className="rounded-2xl bg-[#f8fafc]  overflow-hidden">
              <DataTable columns={staffClockedInColumns} data={mockStaffClockedIn} />
            </div>
          </div>
          <div className="rounded-2xl p-4">
            <div className="font-semibold mb-2">Staff Total Hrs Worked</div>
            <div className="rounded-2xl bg-[#f8fafc]  overflow-hidden">
              <DataTable columns={staffTotalHoursColumns} data={mockStaffTotalHours} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 