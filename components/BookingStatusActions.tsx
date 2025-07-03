"use client";

import { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { updateBookingStatus } from "@/actions/bookings";

type Props = {
  bookingId: string;
  currentStatus: string;
};

const statuses = ["CONFIRMED", "CANCELLED", "COMPLETED", "EXPIRED", "OCCUPIED"];

export function BookingStatusActions({ bookingId, currentStatus }: Props) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState(currentStatus);

  const updateStatus = (newStatus: string) => {
    startTransition(async () => {
      try {
        await updateBookingStatus(bookingId, newStatus);
        toast.success(`Status updated to ${newStatus}`);
        setStatus(newStatus);
      } catch (err: any) {
        toast.error(err.message || "Something went wrong");
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {statuses.map((s) => (
        <Button
          key={s}
          onClick={() => updateStatus(s)}
          disabled={isPending || s === status}
          variant={s === status ? "default" : "outline"}
        >
          {s}
        </Button>
      ))}
    </div>
  );
}
