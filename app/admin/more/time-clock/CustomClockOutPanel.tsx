import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Check, ChevronDown } from "lucide-react";

const sectionList = [
  "Sick Leave",
  "vocation leave",
  "PTO (Paid Time off)",
  "Maternity leave",
  "Client Diagnosis",
];

export default function CustomClockOutPanel() {
  const [clockDate, setClockDate] = useState("");
  const [clockTime, setClockTime] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-[#f3f5f7] rounded-2xl p-6 w-full max-w-[500px] flex flex-col gap-6 shadow-none">
      {/* Title and green button row */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-base">Custom Clock Out</span>
        <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center px-4 py-2 rounded-lg shadow-none" type="button">
         Click to CLOCK OUT
        </Button>
      </div>
      {/* Date and Time row */}
      <div className="flex gap-6 w-full">
        <div className="flex-1">
          <label className="block text-base font-normal mb-1">Clock Date</label>
          <div className="relative">
            <Input type="date" value={clockDate} onChange={e => setClockDate(e.target.value)} className="h-12 bg-white border border-[#F3F3F3] rounded-lg text-base font-normal shadow-none" />
            {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-base font-normal mb-1">Clock Time</label>
          <div className="relative">
            <Input type="time" value={clockTime} onChange={e => setClockTime(e.target.value)} className="h-12 bg-white border border-[#F3F3F3] rounded-lg text-base font-normal shadow-none" />
            {/* <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
          </div>
        </div>
      </div>
      {/* Select Reason */}
      <div>
        <label className="block text-base font-normal mb-1">Select Reason</label>
        <div className="relative">
          <select className="w-full h-12 bg-white border border-[#F3F3F3] rounded-lg px-4 pr-10 text-base font-normal appearance-none shadow-none" value={reason} onChange={e => setReason(e.target.value)}>
            <option value="">Select Reason</option>
            {sectionList.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>
      </div>
      {/* Description */}
      <div>
        <label className="block text-base font-normal mb-1">Description</label>
        <Textarea value={description} onChange={e => setDescription(e.target.value)} rows={5} className="bg-white border border-[#F3F3F3] rounded-lg h-28 text-base font-normal shadow-none" placeholder="" />
      </div>
      {/* Clock Out button */}
      <div className="flex justify-end mt-2">
        <Button className="bg-[#0A2259] text-white font-normal rounded-lg px-8 py-2 shadow-none" type="button">Clock Out</Button>
      </div>
    </div>
  );
} 