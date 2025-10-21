// type QuestionCardProps = {
//   question: QuestionProps;
// };

// const QuestionCard = ({
//   question: { _id, title, tags, author, createdAt, upvotes, answers, views },
// }: QuestionCardProps) => {
//   return <div>QuestionCard</div>;
// };
type Author = {
  _id: string;
  name: string;
};

type Props = {
  _id: string;
  title: string;
  tags: string;
  author: Author[];
  createdAt: Date;
  upvotes: number;
  answer: number;
  views: number;
};

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  createdAt,
  upvotes,
  answer,
  views,
}: Props) => {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

export default QuestionCard;
