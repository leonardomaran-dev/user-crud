import { Trash, UserPen } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { User } from "@/lib/types";

export default function Userstable({ users }: { users: User[] }) {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.length > 0 ? users.map(({ id, name, email }: User) => (
                    <TableRow key={id}>
                        <TableCell className="font-medium">{id}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell className="flex gap-2">
                            <Button><UserPen /></Button>
                            <Button variant="destructive"><Trash /></Button>
                        </TableCell>
                    </TableRow>
                )) : <TableRow><TableCell colSpan={4}>Nenhum há usuários</TableCell></TableRow>}
            </TableBody>
        </Table>
    )
}