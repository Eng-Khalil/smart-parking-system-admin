"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";
import { deleteUser } from "@/actions/auth";
import { deleteRegion } from "@/actions/regions";
import { deleteCity } from "@/actions/cities";
import { deleteArea } from "@/actions/areas";
import { deleteStreet } from "@/actions/streets";
import { deleteBooking } from "@/actions/bookings";


type ActionColumnProps = {
  row: any;
  model: any;
  editEndpoint: string;
  id: string | undefined;
  // revPath: string;
};
export default function ActionColumn({
  row,
  model,
  editEndpoint,
  id = "",
}: ActionColumnProps) {
  const isActive = row.isActive;
  async function handleDelete() {
    try {
      if (model === "user") {
        const res = await deleteUser(id);
        toast.success(`${model} Deleted Successfully`);
      }else if(model==="booking"){
        const res = await deleteBooking(id);
        toast.success(`${model} Deleted Successfully`);
      }
       else if(model==="region"){
        const res = await deleteRegion(id);
        toast.success(`${model} Deleted Successfully`);
      }else if(model==="city"){
        const res = await deleteCity(id);
        toast.success(`${model} Deleted Successfully`);
      }else if(model==="area"){
        const res = await deleteArea(id);
        toast.success(`${model} Deleted Successfully`);
      }else if(model==="street"){
        const res = await deleteStreet(id);
        toast.success(`${model} Deleted Successfully`);
      }else if(model==="user"){
        const res = await deleteUser(id);
        toast.success(`${model} Deleted Successfully`);
      }
    } catch (error) {
      console.log(error);
      toast.error("model couldn't be deleted");
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            {/* <DropdownMenuItem className="text-red-600 hover:text-red-700 transition-all duration-500 cursor-pointer">
              
            </DropdownMenuItem> */}
            <Button
              variant={"ghost"}
              size={"sm"}
              className="text-red-600 hover:text-red-700 transition-all duration-500 cursor-pointer "
            >
              <Trash className="w-4 h-4  mr-2 flex-shrink-0" />
              <span>Delete</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this{" "}
                {model}.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button variant={"destructive"} onClick={() => handleDelete()}>
                Permanently Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        {/* <DropdownMenuItem
          className="text-red-600 hover:text-red-700 transition-all duration-500 cursor-pointer"
          onClick={() => handleDelete()}
        >
          <Trash className="w-4 h-4  mr-2 flex-shrink-0" />
          <span>Delete</span>
        </DropdownMenuItem> */}
        <DropdownMenuItem>
          <Link href={editEndpoint} className="flex item gap-2">
            <Pencil className="w-4 h-4 " />
            <span>Edit</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
