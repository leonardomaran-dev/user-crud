'use client'
import Pagination from "@/components/ui/pagination"
import { Spinner } from "@/components/ui/spinner"
import { usePagination } from "@/lib/hooks/usePagination"

export default function Test() {
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
        <div>
            <ul className="text-center">
                {loading ? (
                    <Spinner className="size-6 mx-auto" />
                ) : users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.id}>{user.id} - {user.name}</li>
                    ))
                ) : (
                    <p>Nenhum usuário encontrado</p>
                )}
            </ul>
            {!loading && users.length > 0 && (
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
        </div>
    )
}