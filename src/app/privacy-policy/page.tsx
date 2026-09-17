import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Peter Asuelinmhen (NiBOT Engineering) collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    heading: "1. What information do we collect?",
    body: [
      "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our services, when you participate in activities on the site, or otherwise when you contact us.",
      "The personal information we collect may include your name, phone number, email address, mailing address and job title. We do not process sensitive personal information, and we do not receive information about you from third parties.",
      "Some information — such as your Internet Protocol (IP) address and browser and device characteristics — is collected automatically when you visit the site. This log and usage data is used to maintain the security and operation of the site and for internal analytics and reporting.",
    ],
  },
  {
    heading: "2. How do we process your information?",
    body: [
      "We process your information to provide, improve and administer our services, to communicate with you, for security and fraud prevention, and to comply with the law. We may also process your information for other purposes with your consent.",
      "We process your information only when we have a valid legal reason to do so.",
    ],
  },
  {
    heading: "3. When and with whom do we share your personal information?",
    body: [
      "We may share information in specific situations and with specific third-party service providers who support the operation of the site and our services. We do not sell your personal information.",
    ],
  },
  {
    heading: "4. How long do we keep your information?",
    body: [
      "We keep your information for as long as necessary to fulfil the purposes outlined in this notice unless a longer retention period is required or permitted by law. When it is no longer needed, we will delete or anonymise it.",
    ],
  },
  {
    heading: "5. What are your privacy rights?",
    body: [
      "Depending on where you are located geographically, applicable privacy law may give you certain rights regarding your personal information, including the right to access, correct, update or delete the information we hold about you.",
      "To exercise these rights, contact us using the details below. We will consider and act upon any request in accordance with applicable data protection laws.",
    ],
  },
  {
    heading: "6. Controls for do-not-track features",
    body: [
      "Most web browsers and some mobile operating systems include a Do-Not-Track feature. Because there is no consistent industry standard for implementing these signals, we do not currently respond to Do-Not-Track browser signals.",
    ],
  },
  {
    heading: "7. Do we make updates to this notice?",
    body: [
      "Yes. We may update this privacy notice from time to time. The updated version will be indicated by a revised date and will be effective as soon as it is accessible.",
    ],
  },
  {
    heading: "8. How can you contact us about this notice?",
    body: [
      `If you have questions or comments about this notice, email us at ${site.email} or call ${site.phone}.`,
    ],
  },
  {
    heading: "9. How can you review, update or delete your data?",
    body: [
      `You may request to review, update or delete the personal information we hold about you by contacting us at ${site.email}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This privacy notice for Peter Asuelinmhen (doing business as NiBOT Engineering — Building innovative minds for the future) describes how and why we collect, store, use and share your information when you use our services."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="rounded-2xl border border-line bg-surface/60 p-4 text-sm text-muted">
            <span className="font-semibold text-fg">Last updated:</span> September 26, 2023. If you
            do not agree with our policies and practices, please do not use our services. Questions?
            Contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>
            .
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
