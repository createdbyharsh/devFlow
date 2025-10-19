import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "how to create a custom hook in react?" },
  { _id: "2", title: "how to creatsdf ustom hook in react?" },
  { _id: "3", title: "how to create a asdfsdfom hook in react?" },
  { _id: "5", title: "how to crs" },
];

const popularTags = [
  { _id: "1", name: "React", questions: 100 },
  { _id: "2", name: "javascript", questions: 2000 },
  { _id: "3", name: "java", questions: 150 },
  { _id: "4", name: "typescript", questions: 400 },
];

const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.QUESTION(_id)}
              key={_id}
              className="flex justify-between cursor-pointer item-center gap-7"
            >
              <p>{title} </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900 mb-4">Popular Tags</h3>
        <div className="flex flex-col gap-3">
          {popularTags.map((x) => (
            <TagCard
              key={x._id}
              _id={x._id}
              name={x.name}
              questions={x.questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
