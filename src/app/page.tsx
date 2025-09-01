import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import ConsultationStats from "@/components/sections/consultation-stats";
import AiServiceFeatures from "@/components/sections/ai-service-features";
import DoctorNetwork from "@/components/sections/doctor-network";
import ConversationDemo from "@/components/sections/conversation-demo";
import HumanDoctorConnection from "@/components/sections/human-doctor-connection";
import HealthHistory from "@/components/sections/health-history";
import PrivacySecuritySection from "@/components/sections/privacy-security";
import CtaConsult from "@/components/sections/cta-consult";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <ConsultationStats />
        <AiServiceFeatures />
        <DoctorNetwork />
        <ConversationDemo />
        <HumanDoctorConnection />
        <HealthHistory />
        <PrivacySecuritySection />
        <CtaConsult />
      </main>
    </div>
  );
}