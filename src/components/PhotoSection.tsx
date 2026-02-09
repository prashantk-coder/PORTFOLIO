// import { motion } from "framer-motion";
// import { Camera } from "lucide-react";

// export const PhotoSection = () => {
//   return (
//     <section className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center"
//         >
//           {/* Photo Container */}
//           <div className="relative group">
//             {/* Decorative ring */}
//             <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500" />

//             {/* Photo placeholder */}
//             <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-dashed border-primary/40 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm overflow-hidden group-hover:border-primary/70 transition-all duration-500">
//               <Camera className="w-12 h-12 text-muted-foreground mb-3" />
//               <span className="text-sm text-muted-foreground font-medium">Your Photo Here</span>
//             </div>
//           </div>

//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="mt-6 text-muted-foreground text-sm"
//           >
//             Upload your profile photo to personalize your portfolio
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// import { motion } from "framer-motion";
// import profileImg from "../assets/prashant.png";


// export const PhotoSection = () => {
//   return (
//     <section className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center"
//         >
//           {/* Photo Container */}
//           <div className="relative group">
//             {/* Decorative ring */}
//             <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500" />

//             {/* Profile Image */}
//             <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/40">
//               <img
//                 src="/prashant.png"
//                 alt="Prashant Profile Photo"
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 onError={(e) => {
//                   e.currentTarget.src =
//                     "https://via.placeholder.com/300?text=Image+Not+Found";
//                 }}
//               />
//             </div>
//           </div>

//           <p className="mt-6 text-muted-foreground text-sm">
//             Upload your profile photo to personalize your portfolio
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
import { motion } from "framer-motion";
import profileImg from "../assets/prashant.png";

export const PhotoSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Photo Container */}
          <div className="relative group">
            {/* Decorative Ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary via-accent to-primary opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500" />

            {/* Profile Photo */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/40">
              <img
                src={profileImg}
                alt="Prashant Profile Photo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <p className="mt-6 text-muted-foreground text-sm">
            Upload your profile photo to personalize your portfolio
          </p>
        </motion.div>
      </div>
    </section>
  );
};
