// components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TimetableEdit from "@/components/assets/TimetableEdit";
import UserProfile from "@/components/assets/User";

// icons
import { AlignRight } from "lucide-react";

function Navigation() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-5">
        <SheetHeader className="text-left">
          <SheetTitle className="text-base font-medium">
            Menu
          </SheetTitle>
        </SheetHeader>
        <nav className="flex">
          <ul className="flex flex-col gap-3">
            <TimetableEdit />
            <UserProfile />
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default Navigation;