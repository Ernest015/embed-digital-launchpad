import embedLogo from "@/assets/embed-digital-logo.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-dark flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-glow-pulse animation-delay-300" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10">
        {/* Logo with breathing animation */}
        <div className="animate-fade-in opacity-0">
          <img
            src={embedLogo}
            alt="Embed Digital"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain animate-breathe"
          />
        </div>

        {/* Tagline */}
        <p className="font-poppins text-sm md:text-base lg:text-lg font-light tracking-wide text-muted-foreground text-center animate-fade-in-up opacity-0 animation-delay-600">
          Crafting Intelligent Digital Presence
        </p>

        {/* Contact button */}
        <a
          href="mailto:ernest.carwalho@embeddigital.in"
          className="font-poppins glass-button px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-medium text-foreground/90 tracking-wide animate-fade-in-up opacity-0 animation-delay-900"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
};

export default Index;
