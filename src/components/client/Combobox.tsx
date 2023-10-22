"use client";

import { useState } from "react";

// components
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// models
import ComboData from "@/models/ComboData";

// helpers
import { handleComboValue } from "@/helpers/handleComboValue";

interface Props {
  defaultValue: string,
  name: string,
  placeholder: string,
  data: ComboData
}

function Combobox({ defaultValue, name, placeholder, data }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? value : defaultValue}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput name={name} placeholder={`Hledat ${placeholder}...`} />
          <CommandEmpty>Žádné výsledky.</CommandEmpty>
          <CommandGroup>
            {data.map(item => (
              <CommandItem
                key={item.id}
                onSelect={(currentValue) => {
                  setValue(handleComboValue(item.value, currentValue))
                  setOpen(false)
                }}
              >
                {item.value}
              </CommandItem>  
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>  
  )
}

export default Combobox;