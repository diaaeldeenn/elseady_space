"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReferenceCard from "@/components/references/reference-card";
import { ReferenceI } from "@/interfaces/reference.interface";
import { X, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  references: ReferenceI[];
}

export default function ReferencesClient({ references }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTech = searchParams.get("technology") ?? "ALL";
  const activeTopic = searchParams.get("topic") ?? "ALL";

  const allTechnologies = [...new Set(references.flatMap((r) => r.technologies || []))].sort();
  const allTopics = [...new Set(references.flatMap((r) => r.topics || []))].sort();

const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "ALL") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const clearFilters = () => router.push("?", { scroll: false });
  const hasFilters = activeTech !== "ALL" || activeTopic !== "ALL";

  const filtered = references.filter((r) => {
    const matchTech = activeTech === "ALL" || r.technologies?.includes(activeTech);
    const matchTopic = activeTopic === "ALL" || r.topics?.includes(activeTopic);
    return matchTech && matchTopic;
  });

  return (
    <div>
      <div className="flex flex-col gap-6 mb-10 border-b border-border pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 w-full md:w-auto">
            
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground flex items-center gap-1.5 uppercase">
                <Filter size={12} />
                Filter By Technology
              </label>
              <Select
                value={activeTech}
                onValueChange={(v) => updateFilter("technology", v)}
              >
                <SelectTrigger className="w-full sm:w-auto min-w-50 bg-muted/20 hover:bg-muted/40 transition-colors rounded-none border border-border font-mono text-xs tracking-wider text-foreground h-10 px-3">
                  <SelectValue placeholder="ALL TECH" />
                </SelectTrigger>
                <SelectContent 
                  align="start"
                  className="rounded-none border-border bg-background font-mono text-xs max-h-75 w-(--radix-select-trigger-width) min-w-max"
                >
                  <SelectItem value="ALL" className="cursor-pointer tracking-wider text-muted-foreground whitespace-nowrap">
                    -- ALL TECHNOLOGIES --
                  </SelectItem>
                  {allTechnologies.map((tech) => (
                    <SelectItem key={tech} value={tech} className="cursor-pointer tracking-wider whitespace-nowrap">
                      {tech}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground flex items-center gap-1.5 uppercase">
                <Filter size={12} />
                Filter By Topic
              </label>
              <Select
                value={activeTopic}
                onValueChange={(v) => updateFilter("topic", v)}
              >
                <SelectTrigger className="w-full sm:w-auto sm:min-w-55 bg-muted/20 hover:bg-muted/40 transition-colors rounded-none border border-border font-mono text-xs tracking-wider text-foreground h-10 px-3">
                  <SelectValue placeholder="ALL TOPICS" />
                </SelectTrigger>
                <SelectContent 
                  align="start"
                  className="rounded-none border-border bg-background font-mono text-xs max-h-75 w-[90vw] sm:w-(--radix-select-trigger-width) sm:min-w-max"
                >
                  <SelectItem value="ALL" className="cursor-pointer tracking-wider text-muted-foreground truncate">
                    -- ALL TOPICS --
                  </SelectItem>
                  {allTopics.map((topic) => (
                    <SelectItem key={topic} value={topic} className="cursor-pointer tracking-wider truncate">
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="cursor-pointer inline-flex items-center justify-center gap-1.5 font-mono text-[10px] tracking-[0.15em] text-destructive hover:text-destructive/80 hover:bg-destructive/10 transition-colors duration-200 h-10 px-4 border border-destructive/20 bg-background rounded-none w-full sm:w-auto"
              >
                <X size={12} />
                CLEAR
              </button>
            )}
          </div>

          <div className="shrink-0 flex items-center justify-center font-mono text-[10px] tracking-[0.15em] text-muted-foreground bg-muted/30 border border-border h-10 px-4 w-full md:w-auto">
            {filtered.length} REFERENCE{filtered.length !== 1 ? "S" : ""}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 flex flex-col items-center justify-center gap-4 text-center font-mono text-xs tracking-widest text-muted-foreground bg-muted/10 border border-dashed border-border">
          <Filter size={24} className="opacity-50" />
          <p>NO REFERENCES MATCH THESE FILTERS</p>
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-border">
          {filtered.map((reference, i) => (
            <ReferenceCard
              key={reference._id}
              reference={reference}
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  );
}