"use client";

import { useState } from "react";
import { createClient } from "../supabase/client";
import { useQuery } from "@tanstack/react-query";

export function usePagination() {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const supabase = createClient();
  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["users", currentPage],
    queryFn: async () => {
      const { data, error, count } = await supabase
        .from("users")
        .select("*", { count: "exact" })
        .order("id", { ascending: true })
        .range(from, to);

      if (error) throw error;

      return {
        users: data ?? [],
        totalPages: count ? Math.ceil(count / ITEMS_PER_PAGE) : 0,
        hasNextPage: count ? from + ITEMS_PER_PAGE < count : false,
        hasPrevPage: currentPage > 1,
      };
    },
    placeholderData: (previousData) => previousData,
    staleTime: 1000 * 60,
  });

  const nextPage = () => {
    if (data?.hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (data?.hasPrevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    users: data?.users ?? [],
    currentPage,
    totalPages: data?.totalPages ?? 0,
    hasNextPage: data?.hasNextPage ?? false,
    hasPrevPage: data?.hasPrevPage ?? false,
    loading: isFetching,
    initialLoading: isLoading,
    nextPage,
    prevPage,
  };
}
