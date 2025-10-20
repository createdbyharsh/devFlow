"use client";
import { Button } from "@/components/ui/button";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const filters = [
  { name: "React", value: "react" },
  { name: "JavaScript", value: "javascript" },
  { name: "TypeScript", value: "typescript" },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read current filter from URL (e.g., ?filter=react)
  const filterParams = searchParams.get("filter");

  // Track which filter is active
  const [active, setActive] = useState(filterParams || "");

  const handleTypeClick = (filter: string) => {
    let newUrl = "";

    if (filter === active) {
      setActive("");

      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {filters.map((x, i) => (
        <Button
          key={i}
          className={cn(
            `rounded-lg px-6 py-3 capitalize shadow-none cursor-pointer `,
            active === x.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500"
          )}
          onClick={() => {
            handleTypeClick(x.value);
          }}
        >
          {x.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
