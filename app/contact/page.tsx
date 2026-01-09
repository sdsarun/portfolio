// core
import { Metadata } from "next";

// page
import ContactPage from "@/features/contact/pages/contact-page";

export const revalidate = 3600; // in seconds
export const metadata: Metadata = {
  title: "contact"
};

export default ContactPage;
