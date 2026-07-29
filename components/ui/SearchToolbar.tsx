import { Search } from "lucide-react";

interface SearchToolbarProps {
  placeholder?: string;
}

export default function SearchToolbar({
  placeholder = "Buscar...",
}: SearchToolbarProps) {
  return (
    <div className="flex w-full max-w-md items-center rounded-xl border border-border bg-background px-4 py-3">
      <Search className="mr-3 h-5 w-5 text-muted-foreground" />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}