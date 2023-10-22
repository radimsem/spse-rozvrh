"use client";

import {
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { 
  Popover,
  PopoverTrigger,
  PopoverContent
} from "../ui/popover";
import { Badge } from "../ui/badge";

// hooks
import useTimetableAssets from "@/hooks/useTimetableAssets";
import useTimetableHours from "@/hooks/useTimetableHours";

// helpers
import getDateByDay from "@/helpers/getDateByDay";

function TimetableBody() {
  const timeTableAssetsQuery = useTimetableAssets();
  const timeTableHoursQuery = useTimetableHours();

  return (
    <TableBody>
      {timeTableAssetsQuery.data.map((asset, i) => (
        <TableRow key={i} className="border-none hover:bg-inherit">
          <TableCell>
            <div className="flex flex-col gap-1">
              <p>{asset.day.name}</p>
              <p className="text-xs text-slate-500">
                {getDateByDay(asset.day.index)}
              </p>
            </div>
          </TableCell>
          {asset.subjects.map((obj, i) => {
            const currHour = timeTableHoursQuery.data.at(i);
            return (
              <TableCell key={i} className="min-w-[80px] p-0">
                {obj !== "" && (
                  <Popover>
                    <PopoverTrigger>
                      <div className="cursor-pointer relative flex flex-col justify-center text-center min-w-[100px] xl:min-w-fit xl:w-[100px] h-[100px] bg-white rounded-xl shadow-sm">
                        <p className="absolute text-[.6rem] tracking-wide top-1 left-2 text-slate-500">
                          {obj.classroom}
                        </p>
                        <div className="flex flex-col">
                          <h2 className="text-lg tracking-wider">
                            {obj.subject.label}
                          </h2>
                          <h3 className="text-xs tracking-wide text-slate-600">
                            {obj.teacher.label}
                          </h3>
                        </div>
                        <div className="absolute flex items-center gap-1 top-[10px] right-2">
                          {obj.badges?.map((badge, i) => (
                            <Badge
                              key={i}
                              className="bg-orange-400"
                            />
                          ))}
                        </div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="text-xs space-y-1 rounded-xl">
                      <p>Předmět: {obj.subject.name}</p>
                      <p>Termín: {`${getDateByDay(asset.day.index)} od ${currHour?.from} do ${currHour?.to}`}</p>
                      <p>Vyučovací hodina: {`${currHour?.number}.`}</p>
                      <p>Učitel: {obj.teacher.name}</p>
                      <p>Učebna: {obj.classroom}</p>
                    </PopoverContent>
                  </Popover>
                )}
              </TableCell>
            )
          })}
        </TableRow>  
      ))}
    </TableBody>  
  )
}

export default TimetableBody;