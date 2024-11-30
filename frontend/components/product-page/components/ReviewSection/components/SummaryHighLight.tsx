interface ISummaryHighLightProps {
  children: React.ReactNode;
}

export function SummaryHighLight({ children }: ISummaryHighLightProps) {
  return (
    <div className="flex flex-col justify-start items-center max-w-[200px] justify-self-center self-center">
      {children}
    </div>
  );
}
