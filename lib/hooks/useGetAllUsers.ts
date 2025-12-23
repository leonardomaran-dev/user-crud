"use client";

import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { User } from "../types";

const supabase = createClient();

export function useGetAllUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .range(0, 9)
        .order("id", { ascending: true });

      if (error) throw error;
      return data;
    },
  });
}
