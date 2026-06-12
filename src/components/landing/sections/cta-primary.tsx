import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/i18n/locales";

const specialistEmail = "contact@nexorum.io";
const specialistSubject = "I want to know more about Nexorum";
const specialistBody =
  "Hello!\n\nI would like to receive more information about Nexorum's solutions and understand how they can help my company. I am interested in learning more about the platform and starting a conversation to evaluate a possible partnership or engagement.\n\nI look forward to hearing from you.\n\nThank you!";

export function getSpecialistHref(locale: SupportedLocale) {
  void locale;
  const subject = encodeURIComponent(specialistSubject);
  const body = encodeURIComponent(specialistBody);
  return `mailto:${specialistEmail}?subject=${subject}&body=${body}`;
}

type Props = {
  label: string;
  locale: SupportedLocale;
  className?: string;
};

export function CtaPrimary({ label, locale, className }: Props) {
  return (
    <Button
      as="a"
      className={className}
      href={getSpecialistHref(locale)}
      rel="noreferrer"
      target="_blank"
    >
      {label}
    </Button>
  );
}
