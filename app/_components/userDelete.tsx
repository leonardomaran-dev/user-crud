import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User } from "@/lib/types";
import { UserRoundX } from "lucide-react";
import { useState } from "react";
import { useDeleteUser } from "@/lib/hooks/useDeleteUser";
import { toast } from "sonner";

export default function UserDelete({ user }: { user: User }) {
    const [open, setOpen] = useState(false);
    const deleteUser = useDeleteUser();

    async function onSubmit() {
        deleteUser.mutate(user.id, {
            onSuccess: () => {
                setOpen(false);
                toast.success("Usuário excluído com sucesso!");
            },
            onError: () => {
                toast.error("Erro ao excluir usuário!");
            }
        })
    }
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild><Button data-cy="btn-delete-user" variant="destructive"><UserRoundX /></Button></DialogTrigger>
            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} data-cy="dialog-delete-user">
                <DialogHeader>
                    <DialogTitle className="mx-auto text-xl font-bold text-center mb-5 max-w-100 truncate">Excluindo {user.name}</DialogTitle>
                    <DialogDescription className="text-center space-y-2 text-semibold text-md">
                        <div className="flex justify-center gap-1">
                            <p className="max-w-100 truncate">Tem certeza que deseja excluir <span className="font-bold text-destructive italic">{user.name}</span></p>
                            <p>?</p>
                        </div>
                        <p>Essa ação <span className="font-semibold text-destructive">NÃO</span> poderá ser desfeita.</p>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex justify-center gap-2 mt-5">
                    <DialogClose asChild>
                        <Button variant="destructive">Cancelar</Button>
                    </DialogClose>
                    <Button onClick={onSubmit} data-cy="btn-delete-user-submit">Excluir</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}