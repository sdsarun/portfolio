// components
import { ContactItem } from "@/features/contact/components/contact-item";

// view-models
import type { ContactViewModel } from "@/features/contact/view-models/contact-model";

export type ContactSectionProps = {
  contacts: ContactViewModel[];
};

export function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <section className="pb-[20rem] flex flex-col gap-2">
      {contacts.map((contact, index) => (
        <ContactItem
          key={contact.label + index}
          contact={contact}
          isLast={index === contacts.length - 1}
        />
      ))}
    </section>
  );
}
