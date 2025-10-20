import LocalSearch from "@/components/search.tsx/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

type SearchParamsProps = {
  searchParams: Promise<{ [key: string]: string }>;
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const { query = "" } = await searchParams;
  const questions = [
    {
      _id: "1",
      title: "How to learn React?",
      description: "I want to learn React, can anyone help me?",
      tags: [
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
      ],
      author: { _id: "1", name: "John Doe" },
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
        { _id: "1", name: "React" },
        { _id: "2", name: "JavaScript" },
      ],
      author: { _id: "1", name: "John Doe" },
      upvotes: 10,
      answers: 5,
      views: 100,
      createdAt: new Date(),
    },
    {
      _id: "3",
      title: "What is TypeScript?",
      description: "Can someone explain TypeScript to me?",
    },
  ];

  const filteredQuestions = questions.filter((x) =>
    x.title.toLowerCase().includes(query.toLowerCase())
  );
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
      <section>
        <div className="mt-6 space-y-4">
          {filteredQuestions.map((x) => (
            <div key={x._id}>
              <h2>{x.title}</h2>
              <p>{x.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
