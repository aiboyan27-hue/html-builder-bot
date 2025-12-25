import { Maximize2 } from "lucide-react";

const GoogleMap = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.976073772261!2d-80.19185492392166!3d25.80131697731461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6c4e7b9e2eb%3A0x8c5e6e76d9e3b8a2!2s2701%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033137!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus";
  
  const googleMapsLink = "https://www.google.com/maps/place/2701+Biscayne+Blvd,+Miami,+FL+33137";

  return (
    <section className="py-4 md:py-8">
      <div className="container">
        <div className="relative flex rounded-lg overflow-hidden" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          {/* Map - Left side */}
          <div className="w-full lg:w-[65%] h-[360px] md:h-[420px]">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Prime Cleaner Location"
            />
          </div>

          {/* Cyan Background Area - Right side on desktop */}
          <div className="hidden lg:flex lg:w-[35%] bg-[hsl(187,55%,72%)] items-end justify-end p-6">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground hover:bg-foreground/90 text-background px-5 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Open in Google Map
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
              Open in Google Map
              <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
