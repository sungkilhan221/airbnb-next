"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export function Counter({ name }: { name: string }) {
  const [amount, setAmount] = useState(0);

  function increase() {
    setAmount(amount + 1);
  }

  function decrease() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  function reset() {
    setAmount(0);
  }

  return (
    <div className="flex items-center gap-x-4">
      <input type="hidden" name={name} value={amount} />
      <Button variant="outline" size="icon" type="button" onClick={decrease}>
        <Minus className="h-4 w-4 text-primary" />
      </Button>
      <p
        className="font-medium text-lg cursor-pointer w-[15px] flex items-center justify-center"
        onClick={reset}
      >
        {amount}
      </p>
      <Button variant="outline" size="icon" type="button" onClick={increase}>
        <Plus className="h-4 w-4 text-primary" />
      </Button>
    </div>
  );
}
