// components
import { Main } from "@/shared/layout/main";
import { Separator } from "@/shared/ui/separator";
import { FadeIn } from "@/shared/animations/fade-in";
import { ContactHeader } from "@/features/contact/components/contact-header";
import { ContactSection } from "@/features/contact/components/contact-section";

// actions
import { getProfile } from "@/features/profile/actions/get-profile-action";

export default async function ContactPage() {
  const profile = await getProfile();
  const contacts = profile?.contacts || [];
  return (
    <Main>
      <FadeIn>
        <ContactHeader />
      </FadeIn>
      <FadeIn>
        <ContactSection contacts={contacts} />
      </FadeIn>
      <FadeIn>
        <Separator />
      </FadeIn>
    </Main>
  );
}
