"use client";

// components
import { TableHead } from "../ui/table";

// hooks
import useTimetableHours from "@/hooks/useTimetableHours";

function TimetableHours() {
  const timetableHoursQuery = useTimetableHours();

  return (
    <>
      {timetableHoursQuery.data.map((hour, i) => (
        <TableHead key={i} className="text-center">
          <p>{hour.number}</p>
          <p className="text-[.6rem] text-slate-500">
            {`${hour.from} - ${hour.to}`}
          </p>
        </TableHead>
      ))}
    </>
  )
}

export default TimetableHours;