import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <BackgroundBeams />
      <LandingHero />
      <div className="flex items-center justify-center">{children}</div>
      <div>
        <LandingContent />
      </div>
    </div>
  );
};

export default AuthLayout;
