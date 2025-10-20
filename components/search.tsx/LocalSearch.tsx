"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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
  const searchParams = useSearchParams();
  const query = searchParams.get("lana") || ""; // localhost:3000/?lana=testing, testing is the value of query

  const [searchQuery, setSearchQuery] = useState(query);
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
