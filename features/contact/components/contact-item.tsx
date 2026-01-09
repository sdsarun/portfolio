// components
import Link from "next/link";
import { Typography } from "@/shared/ui/typography";
import { Separator } from "@/shared/ui/separator";

// view-modesl
import type { ContactViewModel } from "@/features/contact/view-models/contact-model";

export type ContactItemProps = {
  contact: ContactViewModel;
  isLast: boolean;
};

export function ContactItem({ contact, isLast }: ContactItemProps) {
  const isEmail = contact.type === "email";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Typography variant="p1">{contact.label}</Typography>

        <Typography variant="p3">
          <Link
            href={contact.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            className="link-underline-wipe"
          >
            {contact.display}
          </Link>
        </Typography>
      </div>

      {!isLast && <Separator />}
    </div>
  );
}
