"use client";

import { useEffect, useState } from "react";
import { User } from "../types";
import { createClient } from "../supabase/client";

export function usePagination() {
  const ITEMS_PER_PAGE = 10;
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async (page: number) => {
    try {
      const supabase = createClient();
      const from = (page - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;

      const { data, error, count } = await supabase
        .from("users")
        .select("*", { count: "exact" })
        .order("id", { ascending: true })
        .range(from, to);

      if (error) throw error;

      setUsers(data || []);

      if (count) {
        setTotalPages(Math.ceil(count / ITEMS_PER_PAGE));
      }
      setHasPrevPage(page > 1);
      setHasNextPage(count ? from + ITEMS_PER_PAGE < count : false);
    } catch (error) {
      console.error("Error ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (hasPrevPage) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    users,
    currentPage,
    loading,
    hasNextPage,
    hasPrevPage,
    totalPages,
    nextPage,
    prevPage,
  };
}
