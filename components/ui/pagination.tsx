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
                className={`px-4 py-2 rounded text-blue-500 ${!hasPrevPage || loading
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                    }`}
            >
                <MoveLeft />
            </button>

            <div className="font-semibold text-black dark:text-white">
                {currentPage} - {totalPages}
            </div>

            <button
                onClick={onNextPage}
                disabled={!hasNextPage || loading}
                className={`px-4 py-2 rounded text-blue-500 ${!hasNextPage || loading
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                    }`}
            >
                <MoveRight />
            </button>
        </div>
    )
}