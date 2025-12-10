import { Search as SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Search = () => {
    return (
        <div className={cn(
            "flex flex-row items-center flex-1 gap-2",
            "border rounded-md px-3 py-2",
            "border-border dark:border-input",
            "bg-background dark:bg-input/30"
        )}>
            <SearchIcon className={cn(
                "w-4 h-4",
                "text-muted-foreground"
            )} />
            <input 
                type="text" 
                placeholder="Search bookmarks..." 
                className={cn(
                    "flex-1 outline-none bg-transparent",
                    "text-foreground placeholder:text-muted-foreground"
                )} 
            />
        </div>
    )
}