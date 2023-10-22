// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// icons
import { User, LogOut, Pen } from 'lucide-react';

function UserProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <li className="nav-item">
          <User width={16} height={16} />
          Uživatel
        </li>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="account-ddm-item">
          <Pen width={16} height={16} />
          Upravit profil
        </DropdownMenuItem>
        <DropdownMenuItem className="account-ddm-item">
          <LogOut width={16} height={16} />
          Odhlásit se
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserProfile;