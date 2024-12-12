interface ISummaryHighLightProps {
  highlight: number | string;
  description: string;
  children?: React.ReactNode;
}

export function SummaryHighLight({
  highlight,
  description,
  children,
}: ISummaryHighLightProps) {
  return (
    <div className="flex flex-col justify-start items-center max-w-[200px] justify-self-center self-center">
      <h2 className="text-[50px] font-extrabold">{highlight}</h2>
      <p className="text-center text-sm">{description}</p>
      {children}
    </div>
  );
}
