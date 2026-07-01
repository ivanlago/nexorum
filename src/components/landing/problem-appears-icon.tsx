type ProblemAppearsIconName = "db" | "flow" | "briefcase" | "document" | "calendar" | "bars";

type ProblemAppearsIconProps = {
  name: ProblemAppearsIconName;
  className?: string;
};

const iconSrcByName: Record<ProblemAppearsIconName, string> = {
  db: "/figma-assets/problem-icons/problem-appears-db.svg",
  flow: "/figma-assets/problem-icons/problem-appears-flow.svg",
  briefcase: "/figma-assets/problem-icons/problem-appears-briefcase.svg",
  document: "/figma-assets/problem-icons/problem-appears-document.svg",
  calendar: "/figma-assets/problem-icons/problem-appears-calendar.svg",
  bars: "/figma-assets/problem-icons/problem-appears-bars.svg",
};

export function ProblemAppearsIcon({ name, className = "" }: ProblemAppearsIconProps) {
  return <img alt="" aria-hidden="true" className={["shrink-0", className].join(" ")} src={iconSrcByName[name]} />;
}

export type { ProblemAppearsIconName };
