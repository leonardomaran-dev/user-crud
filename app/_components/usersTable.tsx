import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { User } from "@/lib/types";
import UserEdit from "./userEdit";
import UserDelete from "./userDelete";
import { usePagination } from "@/lib/hooks/usePagination";
import { Spinner } from "@/components/ui/spinner";
import Pagination from "@/components/ui/pagination";

export default function Userstable() {
    const {
        loading,
        users,
        currentPage,
        hasNextPage,
        hasPrevPage,
        totalPages,
        nextPage,
        prevPage,
    } = usePagination()

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-center">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading && users.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="h-32 text-center">
                                <Spinner className="size-6 mx-auto" />
                            </TableCell>
                        </TableRow>
                    ) :
                        users.length > 0 ? (
                            users.map(({ id, name, email }: User) => (
                                <TableRow
                                    key={id}
                                    className="transition-colors border-b border-gray-100 last:border-b-0"
                                >
                                    <TableCell className="font-medium text-gray-600">
                                        {id}
                                    </TableCell>
                                    <TableCell className="py-3 max-w-[100px] md:max-w-[150px] truncate">
                                        {name}
                                    </TableCell>
                                    <TableCell className="font-semibold text-gray-700 max-w-[100px] md:max-w-[150px] truncate">
                                        {email}
                                    </TableCell>
                                    <TableCell className="flex gap-2 justify-center">
                                        <UserEdit user={{ id, name, email }} />
                                        <UserDelete user={{ id, name, email }} />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) :
                            (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-32 text-center">
                                        <div className="flex flex-col items-center justify-center space-y-2">
                                            <p className="text-gray-500 font-medium">Nenhum usuário encontrado...</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                </TableBody>
            </Table>

            {users.length > 0 && (
                <div className='py-2'>
                    <Pagination
                        currentPage={currentPage}
                        hasNextPage={hasNextPage}
                        hasPrevPage={hasPrevPage}
                        onNextPage={nextPage}
                        onPrevPage={prevPage}
                        loading={loading}
                        totalPages={totalPages}
                    />
                </div>
            )}
        </>
    )
}