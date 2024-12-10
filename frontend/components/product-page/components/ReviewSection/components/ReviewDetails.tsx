interface IReviewDetailsProps {
  title: string;
  detail: string;
}

export function ReviewDetails({ title, detail }: IReviewDetailsProps) {
  return (
    <p className="space-x-2">
      <span className="font-bold">{title}</span>
      <span>{detail}</span>
    </p>
  );
}
