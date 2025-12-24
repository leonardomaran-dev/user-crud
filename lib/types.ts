interface User {
  id: string;
  name: string;
  email: string;
  created_at?: string;
}
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  loading?: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
  onGoToPage?: (page: number) => void;
}

export type { User, PaginationProps };
