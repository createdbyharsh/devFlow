"use client";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type localSearchProps = {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
};

const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  otherClasses,
}: localSearchProps) => {
  // getting current url information
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; // localhost:3000/?query=testing, testing is the value of query

  // local state for what user is typing
  const [searchQuery, setSearchQuery] = useState(query);

  // Debouncing
  useEffect(() => {
    // after 300ms, checking if user typed something
    const delayDebouceFn = setTimeout(() => {
      if (searchQuery) {
        // user typed something , add it to url
        const newUrl = formUrlQuery({
          // passing the params value to url.ts
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        // user cleared the search, then remove the query from url
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300); // timeout, 300ms delay 0.3seconds

    return () => {
      clearTimeout(delayDebouceFn);
    };
  }, [searchQuery, router, route, pathname, searchParams.toString()]);

  return (
    <div
      className={`flex min-h-[56px] grow items-center gap-4 rounded-[10px] bg-gray-100 dark:bg-gray-800 px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="bg-gray-100 dark:bg-gray-800 border-none shadow-none outline-none focus-visible:ring-0"
      />
    </div>
  );
};

export default LocalSearch;
