// view-models
import type { ContactViewModel } from "@/features/contact/view-models/contact-model";

// dto
import type { GetProfileResponse } from "@/features/profile/dto/get-profile-response";

export function mapProfileToContacts(data: GetProfileResponse): ContactViewModel[] {
  const { contacts = [] } = data;
  return contacts.map((contact) => ({
    label: contact.label || "",
    display: contact.displayValue || "",
    type: contact.type || "",
    href: contact.value || ""
  }));
}
