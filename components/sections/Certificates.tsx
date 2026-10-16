import SectionTitle from "@/components/ui/SectionTitle";
import { certificates } from "@/data/certificates";
import CertificateCard from "@/components/ui/CertificateCard";
import FadeIn from "../animations/FadeIn";

export default function Certificates() {
  return (
    <FadeIn>
      <section
        id="certificates"
        className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
      >
        <SectionTitle
          title="Certificates & Achievements"
          eyebrow="RECOGNITION"
        />

        {/* Intro line */}
        <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-400 sm:mb-10 sm:text-base">
          A collection of certifications and recognitions earned through
          hackathons, enterprise software delivery, and years of committed
          service.
        </p>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <CertificateCard key={cert.title} certificate={cert} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}