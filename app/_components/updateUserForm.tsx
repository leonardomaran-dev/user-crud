'use client'

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { useUpdateUser } from "@/lib/hooks/useUpdateUser";

export default function UpdateUserForm({ user, onSuccess }: { user: User, onSuccess: () => void }) {
    const updateUser = useUpdateUser()

    const updateUserSchema = z.object({
        name: z.string().min(3, {
            message: 'Nome deve ter pelo menos 3 caracteres',
        }).max(255, {
            message: 'Nome deve ter no máximo 255 caracteres',
        }),
        email: z.string().min(1, {
            message: 'Email é obrigatório!',
        }).email({
            message: 'Email inválido',
        }),
    })

    const form = useForm<z.infer<typeof updateUserSchema>>({
        resolver: zodResolver(updateUserSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
        },
    })

    async function onSubmit(values: z.infer<typeof updateUserSchema>) {
        updateUser.mutate(
            { id: user.id, ...values },
            {
                onSuccess: () => {
                    onSuccess()
                    toast.success('Usuário atualizado com sucesso')
                },
                onError: () => {
                    toast.error('Erro ao atualizar usuário')
                },
            }
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <DialogFooter>
                    <Button type="submit" className="mx-auto disabled:opacity-80 disabled:cursor-not-allowed disabled:pointer-events-none" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Salvando...' : 'Salvar'}
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    )
}