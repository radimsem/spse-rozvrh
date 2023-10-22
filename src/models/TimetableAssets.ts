type TimetableAssets = {
  day: {
    name: string,
    index: number
  },
  subjects: Array<{
    subject: {
      name: string,
      label: string
    },
    teacher: {
      name: string,
      label: string
    },
    classroom: string,
    badges?: {
      label: string
    }[]
  } | "">
}[]

export default TimetableAssets;