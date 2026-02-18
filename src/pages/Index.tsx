// import { Navbar } from "@/components/Navbar";
// import { HeroSection } from "@/components/HeroSection";
// import { AboutSection } from "@/components/AboutSection";
// import { SkillsSection } from "@/components/SkillsSection";
// import { ProjectsSection } from "@/components/ProjectsSection";
// import { CertificationsSection } from "@/components/CertificationsSection";
// import { EducationSection } from "@/components/EducationSection";
// import { ContactSection } from "@/components/ContactSection";
// import { Footer } from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ProjectsSection />
//         <CertificationsSection />
//         <EducationSection />
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;





import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PhotoSection } from "@/components/PhotoSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PhotoSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
