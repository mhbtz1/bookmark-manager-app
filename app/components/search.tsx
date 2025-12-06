import { Search as SearchIcon } from "lucide-react";

export const Search = () => {
    return <div className="flex flex-row items-center">
        <SearchIcon className="w-4 h-4" />
        <input type="text" placeholder="Search" className="w-full" />
    </div>
}