import { useQuery } from "@tanstack/react-query";

// models
import TimetableHours from "@/models/TimetableHours";

// utils
import fetchJSON from "@/utils/fetch";

function useTimetableHours() {
  return useQuery({
    queryKey: ['timetableHours'],
    queryFn: async () => await fetchJSON('/json/timetableHours.json') as TimetableHours,
    initialData: []
  })
}

export default useTimetableHours;