import embedLogo from "@/assets/embed-digital-logo.png";

const Index = () => {
  return (
    <main className="min-h-screen min-h-[100dvh] bg-gradient-dark flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] bg-accent/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-glow-pulse animation-delay-300" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Logo with breathing animation */}
        <div className="animate-fade-in opacity-0">
          <img
            src={embedLogo}
            alt="Embed Digital"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain animate-breathe"
          />
        </div>

        {/* Tagline */}
        <p className="font-poppins text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide text-muted-foreground text-center px-4 animate-fade-in-up opacity-0 animation-delay-600 max-w-xs sm:max-w-sm md:max-w-md">
          Crafting Intelligent Digital Presence
        </p>

        {/* Contact button */}
        <a
          href="mailto:ernest.carwalho@embeddigital.in"
          className="font-poppins glass-button px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-medium text-foreground/90 tracking-wide animate-fade-in-up opacity-0 animation-delay-900 touch-manipulation active:scale-95 transition-transform"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
};

export default Index;
