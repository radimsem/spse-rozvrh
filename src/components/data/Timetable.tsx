// components
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TimetableBody from "../client/TimetableBody";
import TimetableHours from "../client/TimetableHours";

function Timetable() {
  return (
    <Table className="timetable px-2 pb-4 bg-slate-100 rounded-xl">
      <TableHeader>
        <TableRow className="border-none hover:bg-inherit">
          <TableHead></TableHead>
          <TimetableHours />
        </TableRow>
      </TableHeader>
      <TimetableBody />
    </Table>
  )
}

export default Timetable;