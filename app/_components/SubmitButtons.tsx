"use client";

import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function CreationSubmit() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit" size="lg">
          Next
        </Button>
      )}
    </>
  );
}

export function AddToFavoriteButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          variant="ghost"
          size="icon"
          disabled
          className="hover:bg-transparent"
        >
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          type="submit"
          className="hover:bg-transparent"
        >
          <Heart className="w-6 h-6 fill-black/40 stroke-white" />
        </Button>
      )}
    </>
  );
}

export function DeleteFromFavoriteButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          variant="ghost"
          size="icon"
          disabled
          className="hover:bg-transparent"
        >
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          type="submit"
          className="hover:bg-transparent"
        >
          <Heart className="w-6 h-6 text-primary" fill="#E21C49" />
        </Button>
      )}
    </>
  );
}

export function ReservationSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="w-full" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait...
        </Button>
      ) : (
        <Button className="w-full" type="submit">
          Make a Reservation!
        </Button>
      )}
    </>
  );
}
