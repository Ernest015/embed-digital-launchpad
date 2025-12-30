import { useState } from "react";
import { Copy, Check, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ernest.carwalho@embeddigital.in";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  return (
    <main className="min-h-screen min-h-[100dvh] bg-gradient-dark flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] bg-accent/5 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-glow-pulse animation-delay-300" />
      </div>

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 font-poppins glass-button p-2.5 sm:p-3 rounded-full text-foreground/80 hover:text-foreground transition-colors z-20"
        aria-label="Back to home"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </Link>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Heading */}
        <div className="text-center animate-fade-in opacity-0">
          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-2 sm:mb-3">
            Get in Touch
          </h1>
          <p className="font-poppins text-xs sm:text-sm md:text-base font-light text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        {/* Email display card */}
        <div className="glass-button rounded-2xl p-6 sm:p-8 w-full max-w-md animate-fade-in-up opacity-0 animation-delay-300">
          <p className="font-poppins text-xs sm:text-sm text-muted-foreground mb-3 text-center">
            Email Address
          </p>
          <p className="font-poppins text-sm sm:text-base md:text-lg text-foreground text-center break-all mb-6 select-all">
            {email}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="flex-1 font-poppins glass-button flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-foreground/90 touch-manipulation active:scale-95 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Send email button */}
            <a
              href={`mailto:${email}`}
              className="flex-1 font-poppins bg-primary/20 hover:bg-primary/30 border border-primary/30 hover:border-primary/50 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-foreground/90 touch-manipulation active:scale-95 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Back to home link */}
        <Link
          to="/"
          className="font-poppins text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-in-up opacity-0 animation-delay-600"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
};

export default Contact;
