// import { motion } from "framer-motion";
// import { ArrowDown, Download, ExternalLink, Camera } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export const HeroSection = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
//           {/* Left Content — slides in from left */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="max-w-2xl text-center lg:text-left flex-1"
//           >
//             {/* Status Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
//             >
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//               <span className="text-sm text-foreground/80">Available for opportunities</span>
//             </motion.div>

//             {/* Name */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
//             >
//               Hi, I'm{" "}
//               <span className="gradient-text">Prashant Kumar Chahar</span>
//             </motion.h1>

//             {/* Title */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="text-xl md:text-2xl text-muted-foreground mb-8"
//             >
//               Full Stack Web Developer & B.Tech CSE Student
//             </motion.p>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="text-lg text-muted-foreground/80 max-w-2xl mb-12"
//             >
//               Passionate about building responsive, scalable, and user-friendly web applications.
//               I enjoy solving problems and continuously improving my technical skills.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
//             >
//               <Button size="lg" className="gap-2 glow-effect" asChild>
//                 <a
//                   href="/Prashant_Kumar_Chahar_Resume.pdf"
//                   target="_blank"
//                   download
//                 >
//                   <Download size={18} />
//                   Download Resume
//                 </a>
//               </Button>

//               <Button size="lg" variant="outline" className="gap-2" asChild>
//                 <a href="#projects">
//                   <ExternalLink size={18} />
//                   View Projects
//                 </a>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right Side — Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 80, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             className="relative flex-shrink-0 hidden md:block"
//           >
//             {/* Decorative glow behind image */}
//             <div className="absolute -inset-8 bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 rounded-2xl blur-2xl" />
//             <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl blur-xl animate-pulse" style={{ animationDuration: "3s" }} />

//             {/* Image container — NOT circular */}
//             <div className="relative w-72 h-80 lg:w-80 lg:h-[22rem] xl:w-96 xl:h-[26rem] rounded-2xl border border-border/50 overflow-hidden bg-card/60 backdrop-blur-sm flex flex-col items-center justify-center">
//               {/* Subtle gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 pointer-events-none" />

//               <Camera className="w-14 h-14 text-muted-foreground mb-3 relative z-20" />
//               <span className="text-sm text-muted-foreground font-medium relative z-20">Your Photo Here</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
//           <span className="text-sm">Scroll to explore</span>
//           <ArrowDown size={20} className="animate-bounce" />
//         </a>
//       </motion.div>
//     </section>
//   );
// };


// second code




// import { motion } from "framer-motion";
// import { ArrowDown, Download, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import profileImg from "../assets/prashant.png";

// export const HeroSection = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
//       <div
//         className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"
//         style={{ animationDelay: "1s" }}
//       />

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="max-w-2xl text-center lg:text-left flex-1"
//           >
//             {/* Status Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
//             >
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//               <span className="text-sm text-foreground/80">
//                 Available for opportunities
//               </span>
//             </motion.div>

//             {/* Name */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
//             >
//               Hi, I'm{" "}
//               <span className="gradient-text">
//                 Prashant Kumar Chahar
//               </span>
//             </motion.h1>

//             {/* Title */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="text-xl md:text-2xl text-muted-foreground mb-8"
//             >
//               Full Stack Web Developer & B.Tech CSE Student
//             </motion.p>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="text-lg text-muted-foreground/80 max-w-2xl mb-12"
//             >
//               Passionate about building responsive, scalable, and user-friendly web applications.
//               I enjoy solving problems and continuously improving my technical skills.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
//             >
//               <Button size="lg" className="gap-2 glow-effect" asChild>
//                 <a href="/Prashant_Kumar_Chahar_Resume.pdf" download>
//                   <Download size={18} />
//                   Download Resume
//                 </a>
//               </Button>

//               <Button size="lg" variant="outline" className="gap-2" asChild>
//                 <a href="#projects">
//                   <ExternalLink size={18} />
//                   View Projects
//                 </a>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE — PROFILE IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 80, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             className="relative flex-shrink-0 hidden md:block"
//           >
//             {/* Glow */}
//             <div className="absolute -inset-8 bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10 rounded-2xl blur-2xl" />
//             <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl blur-xl animate-pulse" />

//             {/* IMAGE CONTAINER */}
//             <div className="relative w-72 h-80 lg:w-80 lg:h-[22rem] xl:w-96 xl:h-[26rem] rounded-2xl border border-border/50 overflow-hidden bg-card/60 backdrop-blur-sm">
//               <img
//                 src={profileImg}
//                 alt="Prashant Profile Photo"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <a
//           href="#about"
//           className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//         >
//           <span className="text-sm">Scroll to explore</span>
//           <ArrowDown size={20} className="animate-bounce" />
//         </a>
//       </motion.div>
//     </section>
//   );
// };




















// import { motion } from "framer-motion";
// import { ArrowDown, Download, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import profileImg from "../assets/prashant.png";

// export const HeroSection = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
//       <div
//         className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"
//         style={{ animationDelay: "1s" }}
//       />

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="max-w-2xl text-center lg:text-left flex-1"
//           >
//             {/* Status Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
//             >
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//               <span className="text-sm text-foreground/80">
//                 Available for opportunities
//               </span>
//             </motion.div>

//             {/* Name */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
//             >
//               Hi, I'm{" "}
//               <span className="gradient-text">
//                 Prashant Kumar Chahar
//               </span>
//             </motion.h1>

//             {/* Title */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="text-xl md:text-2xl text-muted-foreground mb-8"
//             >
//               Full Stack Web Developer & B.Tech CSE Student
//             </motion.p>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="text-lg text-muted-foreground/80 max-w-2xl mb-12"
//             >
//               Passionate about building responsive, scalable, and user-friendly web applications.
//               I enjoy solving problems and continuously improving my technical skills.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
//             >
//               <Button size="lg" className="gap-2 glow-effect" asChild>
//                 <a href="/Prashant_Kumar_Chahar_Resume.pdf" download>
//                   <Download size={18} />
//                   Download Resume
//                 </a>
//               </Button>

//               <Button size="lg" variant="outline" className="gap-2" asChild>
//                 <a href="#projects">
//                   <ExternalLink size={18} />
//                   View Projects
//                 </a>
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE — PROFILE IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 80, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             className="relative flex-shrink-0 hidden md:block"
//           >
//             {/* Soft Glow (outside image only) */}
//             <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 rounded-2xl blur-2xl" />

//             {/* CLEAN IMAGE CONTAINER */}
//             <div className="relative w-72 h-80 lg:w-80 lg:h-[22rem] xl:w-96 xl:h-[26rem] rounded-2xl border border-border/40 overflow-hidden bg-transparent shadow-xl shadow-black/20">
//               <img
//                 src={profileImg}
//                 alt="Prashant Profile Photo"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <a
//           href="#about"
//           className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
//         >
//           <span className="text-sm">Scroll to explore</span>
//           <ArrowDown size={20} className="animate-bounce" />
//         </a>
//       </motion.div>
//     </section>
//   );
// }












import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "../assets/prashant.png";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-center lg:text-left flex-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-foreground/80">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="gradient-text">
                Prashant Kumar Chahar
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              Full Stack Web Developer & B.Tech CSE Student
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-muted-foreground/80 max-w-2xl mb-12"
            >
              Passionate about building responsive, scalable, and user-friendly web applications.
              I enjoy solving problems and continuously improving my technical skills.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* UPDATED RESUME BUTTON */}
              <Button size="lg" className="gap-2 glow-effect" asChild>
                <a
                  href="https://drive.google.com/file/d/1I_LxYbsul3jPCQKWo6kBBOgovnFWtbQR/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>

              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#projects">
                  <ExternalLink size={18} />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0 hidden md:block"
          >
            {/* Soft Glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 rounded-2xl blur-2xl" />

            {/* Image Container */}
            <div className="relative w-72 h-80 lg:w-80 lg:h-[22rem] xl:w-96 xl:h-[26rem] rounded-2xl border border-border/40 overflow-hidden bg-transparent shadow-xl shadow-black/20">
              <img
                src={profileImg}
                alt="Prashant Profile Photo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
