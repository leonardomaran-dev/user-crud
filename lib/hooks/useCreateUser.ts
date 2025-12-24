"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import { CreateUser } from "../types";

const supabase = createClient();

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email }: CreateUser) => {
      const { error } = await supabase.from("users").insert([{ name, email }]);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
