// core
import React from "react";

// components
import { Footer } from "@/core/components/layout/footer";
import { FooterLinks } from "@/core/components/layout/footer-links";

export function FooterNavigate() {
  return (
    <Footer className="mt-12 mb-56">
      <FooterLinks />
    </Footer>
  );
}
