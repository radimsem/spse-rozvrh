import { useQuery } from "@tanstack/react-query";

// models
import TimetableAssets from "@/models/TimetableAssets";

// utils
import fetchJSON from "@/utils/fetch";

function useTimetableAssets() {
  return useQuery({
    queryKey: ['timetableAssets'],
    queryFn: async () => await fetchJSON('/json/timetableAssets.json') as TimetableAssets,
    initialData: []
  })
}

export default useTimetableAssets;