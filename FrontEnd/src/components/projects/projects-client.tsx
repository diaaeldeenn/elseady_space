"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "@/components/projects/project-card";
import { ProjectsI } from "@/interfaces/project.interface";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  projects: ProjectsI[];
}

export default function ProjectsClient({ projects }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("category") || "ALL";

  const handleTabChange = (value: string | null) => {
    const tabValue = value || "ALL";

    const params = new URLSearchParams(searchParams.toString());

    if (tabValue === "ALL") {
      params.delete("category");
    } else {
      params.set("category", tabValue);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const filtered =
    activeTab === "ALL"
      ? projects
      : projects.filter(
          (p) => p.category?.toLowerCase() === activeTab.toLowerCase(),
        );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-border pb-4">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="hidden sm:block w-auto"
        >
          <TabsList className="bg-muted/50 p-1 rounded-none border border-border">
            <TabsTrigger
              value="ALL"
              className="font-mono text-xs tracking-[0.15em] px-4 py-2 rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background transition-all cursor-pointer"
            >
              ALL
            </TabsTrigger>
            <TabsTrigger
              value="Front-End"
              className="font-mono text-xs tracking-[0.15em] px-4 py-2 rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background transition-all cursor-pointer"
            >
              FRONT-END
            </TabsTrigger>
            <TabsTrigger
              value="Back-End"
              className="font-mono text-xs tracking-[0.15em] px-4 py-2 rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background transition-all cursor-pointer"
            >
              BACK-END
            </TabsTrigger>
            <TabsTrigger
              value="Full-Stack"
              className="font-mono text-xs tracking-[0.15em] px-4 py-2 rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background transition-all cursor-pointer"
            >
              FULL-STACK
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="block sm:hidden w-full">
          <Select value={activeTab} onValueChange={handleTabChange}>
            <SelectTrigger className="w-full bg-muted/50 rounded-none border border-border font-mono text-xs tracking-[0.15em] text-foreground">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="rounded-none border-border bg-background font-mono text-xs">
              <SelectItem
                value="ALL"
                className="cursor-pointer tracking-[0.15em]"
              >
                ALL
              </SelectItem>
              <SelectItem
                value="Front-End"
                className="cursor-pointer tracking-[0.15em]"
              >
                FRONT-END
              </SelectItem>
              <SelectItem
                value="Back-End"
                className="cursor-pointer tracking-[0.15em]"
              >
                BACK-END
              </SelectItem>
              <SelectItem
                value="Full-Stack"
                className="cursor-pointer tracking-[0.15em]"
              >
                FULL-STACK
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span className="font-mono text-[10px] tracking-widest text-muted-foreground shrink-0">
          {filtered.length} PROJECT{filtered.length !== 1 ? "S" : ""}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center font-mono text-xs tracking-widest text-muted-foreground">
          NO PROJECTS IN THIS CATEGORY
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
