import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLaptopCode,
  faEnvelope,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { trackCtaClick } from "../analytics";

interface NotFoundProps {
  onGoHome: () => void;
}

export function NotFound({ onGoHome }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-body flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden select-none">
      {/* Background Memphis floating shapes */}
      <motion.div
        aria-hidden="true"
        className="absolute top-16 left-8 md:left-24 w-16 h-16 rounded-full bg-primary/10 pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-20 right-8 md:right-28 w-20 h-20 rounded-2xl bg-secondary/15 rotate-12 pointer-events-none"
        animate={{ rotate: [12, 24, 12], y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full border-4 border-primary/20 pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-lg w-full text-center py-12 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-6">
          <FontAwesomeIcon icon={faCompass} className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          <span>error 404 • page not found</span>
        </div>

        {/* Big 404 Headline */}
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-primary mb-2 select-none">
          404
        </h1>

        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
          looks like you took a wrong turn.
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8 sm:mb-10 px-2">
          The page or file you are looking for doesn{"'"}t exist, has been moved, or got lost in code. Don{"'"}t worry — no bugs were harmed!
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              trackCtaClick("not_found_back_home", { from: window.location.pathname });
              onGoHome();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <FontAwesomeIcon icon={faHouse} className="w-3.5 h-3.5" />
            <span>take me home</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              trackCtaClick("not_found_explore_projects", { from: window.location.pathname });
              onGoHome();
              setTimeout(() => {
                window.location.hash = "#projects";
              }, 50);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-full text-sm font-semibold hover:bg-muted transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faLaptopCode} className="w-3.5 h-3.5 text-primary" />
            <span>see projects</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              trackCtaClick("not_found_contact", { from: window.location.pathname });
              onGoHome();
              setTimeout(() => {
                window.location.hash = "#contact";
              }, 50);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/80 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
            <span>contact me</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
