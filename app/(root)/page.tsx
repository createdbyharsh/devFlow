import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search.tsx/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const questions = [
    {
      _id: "1",
      title: "How to learn React?",
      description: "I want to learn React, can anyone help me?",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
      ],
      author: {
        _id: "1",
        name: "John Doe",
        image:
          "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      },
      upvotes: 10,
      answers: 5,
      views: 100,
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "How to learn JavaScript?",
      description: "I want to learn JavaScript, can anyone help me?",
      tags: [
        { _id: "1", name: "Javascript" },
        { _id: "2", name: "typeScript" },
      ],
      author: {
        _id: "2",
        name: "lia Doe",
        image:
          "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      },
      upvotes: 10,
      answers: 5,
      views: 100,
      createdAt: new Date(),
    },
  ];

  const { query = "", filter = "" } = await searchParams; //read both from url

  const filteredQuestions = questions.filter((x) => {
    //1. check if the title match the search query?
    const matchesQuery = x.title.toLowerCase().includes(query.toLowerCase());
    //2. check if the tag match the filters
    const matchFilter = filter
      ? x.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>

      <section className="mt-5">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
        {query && (
          <p className="text-sm text-gray-600 mb-4">
            Searching for: "{query}" - found {filteredQuestions.length} results
          </p>
        )}
      </section>
      <HomeFilter />

      <section>
        <div className="mt-6 space-y-4">
          {filteredQuestions.map((x) => (
            <div key={x._id}>
              <QuestionCard question={x} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
