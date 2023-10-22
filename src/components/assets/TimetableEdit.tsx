"use client";

import { useState } from "react";

// components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Combobox from "@/components/client/Combobox";

// icons
import { Calendar } from 'lucide-react';

function TimetableEdit() {
  const [open, setOpen] = useState(false);

  function handleOpen() { setOpen(!open); }

  return (
    <Popover open={open}>
      <PopoverTrigger onClick={handleOpen}>
        <li className="nav-item">
          <Calendar width={16} height={16} />
          Upravit rozvrh
        </li>
      </PopoverTrigger>
      <PopoverContent className="w-[248px] mt-2 mr-12 p-0 border-none rounded-xl shadow-none">
        <Card className="w-[248px]">
          <CardHeader>
            <CardTitle>Úprava rozvrhu</CardTitle>
          </CardHeader>
          <form>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="class">Třída</Label>
                  <Combobox 
                    defaultValue='-'
                    name="class"
                    placeholder='třídu' 
                    data={[{ id: 1, value: "3.D" }]} 
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="teacher">Učitel</Label>
                  <Combobox 
                    defaultValue='-'
                    name="teacher"
                    placeholder='učitele' 
                    data={[{ id: 1, value: "Libor Bajer" }]} 
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="classroom">Učebna</Label>
                  <Combobox 
                    defaultValue='-'
                    name="classroom"
                    placeholder='učebnu' 
                    data={[{ id: 1, value: "B101" }]}                              
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpen();
                }}
              >Zrušit</Button>
              <Button 
                type="submit"
                onClick={handleOpen}
              >Upravit</Button>
            </CardFooter>
          </form>
        </Card>
      </PopoverContent>
    </Popover>  
  )
}

export default TimetableEdit;