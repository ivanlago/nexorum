import { Button } from "@/components/ui/button";

const specialistHref =
  "https://wa.me/5511932628256?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20produto%20Nexorum%20Aegis";

type Props = {
  label: string;
  className?: string;
};

export function CtaPrimary({ label, className }: Props) {
  return (
    <Button
      as="a"
      className={className}
      href={specialistHref}
      rel="noreferrer"
      target="_blank"
    >
      {label}
    </Button>
  );
}
