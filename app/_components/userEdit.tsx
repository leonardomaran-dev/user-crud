'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UserRoundPen } from "lucide-react";
import { User } from "@/lib/types";
import UpdateUserForm from "./updateUserForm";
import { useState } from "react";

export default function UserEdit({ user }: { user: User }) {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild><Button data-cy="btn-edit-user"><UserRoundPen /></Button></DialogTrigger>
            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} data-cy="dialog-edit-user">
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-center mb-5 max-w-100 truncate mx-auto">Editando {user.name}</DialogTitle>
                    <DialogDescription>
                        <UpdateUserForm user={user} onSuccess={() => setOpen(false)} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}