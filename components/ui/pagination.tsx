'use client';

import { PaginationProps } from "@/lib/types";
import { MoveLeft, MoveRight } from "lucide-react";

export default function Pagination({ currentPage,
    hasNextPage,
    hasPrevPage,
    totalPages,
    loading = false,
    onNextPage,
    onPrevPage, }: PaginationProps) {
    return (
        <div className="flex items-center justify-center space-x-10">
            <button
                onClick={onPrevPage}
                disabled={!hasPrevPage || loading}
                className={`px-4 py-2 rounded text-blue-500 ${hasPrevPage && !loading
                    ? 'cursor-pointer'
                    : 'cursor-not-allowed pointer-events-none opacity-50'
                    }`}
            >
                <MoveLeft />
            </button>

            <div className="font-semibold text-black">
                {currentPage} - {totalPages}
            </div>

            <button
                onClick={onNextPage}
                disabled={!hasNextPage || loading}
                className={`px-4 py-2 rounded text-blue-500 ${hasNextPage && !loading
                    ? 'cursor-pointer'
                    : 'cursor-not-allowed pointer-events-none opacity-50'
                    }`}
            >
                <MoveRight />
            </button>
        </div>
    )
}