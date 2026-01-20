import { Maximize2 } from "lucide-react";

const GoogleMap = () => {
  // Greater Montreal area centered - no specific address pin
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d356881.4095796619!2d-73.71174!3d45.55865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sca!4v1703123456789";
  
  const googleMapsLink = "https://www.google.com/maps/@45.55865,-73.71174,10z";

  return (
    <section className="py-4 md:py-8">
      <div className="container">
        {/* Service Area Label */}
        <div className="text-center mb-4">
          <p className="text-lg font-medium text-foreground">
            Zone desservie : Grand Montréal et environs
          </p>
        </div>
        
        <div className="relative flex rounded-lg overflow-hidden" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          {/* Map - Takes most of the width */}
          <div className="flex-1 h-[360px] md:h-[420px] relative">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zone desservie - Grand Montréal"
            />
            {/* Semi-transparent circle overlay to represent service area */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div 
                className="rounded-full border-4 border-primary/60 bg-primary/10"
                style={{ 
                  width: '280px', 
                  height: '280px',
                }}
              />
            </div>
          </div>

          {/* Cyan Background Area - Minimal width for button only */}
          <div className="hidden lg:flex w-auto bg-[hsl(187,55%,72%)] items-end justify-center p-4">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground hover:bg-foreground/90 text-background px-5 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-colors whitespace-nowrap"
            >
              Ouvrir dans Google Map
              <Maximize2 className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile button overlay */}
          <div className="lg:hidden absolute bottom-4 right-4">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wide transition-colors shadow-lg"
            >
              Ouvrir dans Google Map
              <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
