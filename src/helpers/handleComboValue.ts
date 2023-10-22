export function handleComboValue(dataValue: string, currValue: string): string {
  if (currValue !== dataValue) {
    currValue.split('').map((currChar, index) => {
      if (currChar !== dataValue.split('').at(index)) {
        currValue = 
          currValue.substring(0, index) + 
          currChar.toUpperCase() + 
          currValue.substring(index + 1);
      }
    })
  }

  return currValue;
}