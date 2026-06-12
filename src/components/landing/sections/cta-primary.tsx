import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/i18n/locales";

const specialistEmail = "contact@nexorum.io";
const subjectByLocale: Record<SupportedLocale, string> = {
  "en-US": "I want to know more about Nexorum",
  "pt-BR": "Quero saber mais sobre a Nexorum",
};
const bodyByLocale: Record<SupportedLocale, string> = {
  "en-US":
    "Hello!\n\nI would like to receive more information about Nexorum's solutions and understand how they can help my company. I am interested in learning more about the platform and starting a conversation to evaluate a possible partnership or engagement.\n\nI look forward to hearing from you.\n\nThank you!",
  "pt-BR":
    "Olá!\n\nGostaria de receber mais informações sobre as soluções da Nexorum e entender como elas podem ajudar minha empresa. Tenho interesse em conhecer melhor a plataforma e iniciar uma conversa para avaliar uma possível parceria ou contratação.\n\nFico no aguardo do contato.\n\nObrigado!",
};

export function getSpecialistHref(locale: SupportedLocale) {
  const subject = encodeURIComponent(subjectByLocale[locale]);
  const body = encodeURIComponent(bodyByLocale[locale]);
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
