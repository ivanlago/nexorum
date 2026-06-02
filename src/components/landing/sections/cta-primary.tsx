import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  className?: string;
};

export function CtaPrimary({ label, className }: Props) {
  return (
    <Button className={className}>{label}</Button>
  );
}
