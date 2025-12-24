'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateUser } from "@/lib/hooks/useCreateUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export default function UserCreate() {
    const createUser = useCreateUser()

    const createUserSchema = z.object({
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

    const form = useForm<z.infer<typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            name: '',
            email: '',
        },
    })

    async function onSubmit(values: z.infer<typeof createUserSchema>) {
        createUser.mutate(
            { ...values },
            {
                onSuccess: () => {
                    toast.success('Usuário criado com sucesso')
                    form.reset()
                },
                onError: () => {
                    toast.error('Erro ao criar usuário')
                },
            }
        )
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 md:h-[82px]">
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}>
                </FormField>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}>
                </FormField>
                <div className="flex items-center h-full">
                    <Button type="submit" disabled={form.formState.isSubmitting} className="disabled:opacity-80 disabled:cursor-not-allowed disabled:pointer-events-none">
                        {form.formState.isSubmitting ? 'Adicionando...' : 'Adicionar'}
                    </Button>
                </div>
            </form>
        </Form >
    )
}