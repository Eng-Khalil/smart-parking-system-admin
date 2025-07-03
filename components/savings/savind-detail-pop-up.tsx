
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { getNormalDate } from "@/lib/getNormalDate"
import { BadgeCheck, Calendar, CreditCard, PiggyBank, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Saving {
  id: string
  amount: number
  user: {
    firstName: string
    lastName: string
  }
  savingType: string
  createdAt: string
}

export default function SavingDetailsModal({
  open,
  onOpenChange,
  saving,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  saving: Saving | null
}) {
  if (!saving) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-emerald-500" />
            Saving Details
          </DialogTitle>
        </DialogHeader>

        {/* Amount Header */}
        <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4 text-center mb-4">
          <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">Total Amount</p>
          <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
            {/* UGX {saving.amount.toLocaleString()} */}
          </h2>
        </div>

        <Separator className="my-2" />

        {/* Details Section */}
        <div className="space-y-4 py-2">
          <div className="flex items-center gap-3">
            <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full">
              <User className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Deposited by</p>
              <p className="font-medium">
                {saving.user.firstName} {saving.user.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full">
              <PiggyBank className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Saving Type</p>
              <Badge variant="outline" className="mt-1">
                {saving.savingType}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full">
              <Calendar className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Transaction Date</p>
              <p className="font-medium">{getNormalDate(new Date(saving.createdAt))}</p>
            </div>
          </div>
        </div>

        <Separator className="my-2" />

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <CreditCard className="h-3 w-3" />
            Transaction ID: {saving.id.substring(0, 8)}...
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
