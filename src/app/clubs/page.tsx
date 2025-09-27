import { ClubCard } from "@/components/club-card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { clubs } from "@/lib/data";
import { Search } from "lucide-react";

export default function ClubsPage() {
    const categories = [...new Set(clubs.map(c => c.category))];

  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Find Your Community</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          With dozens of clubs and organizations, there's a place for everyone at Campus Hub.
        </p>
      </div>

       <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for clubs..." className="pl-10" />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
           <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="all">All</SelectItem>
               <SelectItem value="verified">Verified</SelectItem>
               <SelectItem value="featured">Featured</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {clubs.map((club, index) => (
           <div key={club.id} style={{ animationDelay: `${index * 50}ms`}} className="opacity-0 animate-fade-in-up">
             <ClubCard club={club} />
           </div>
        ))}
      </div>
    </div>
  );
}
