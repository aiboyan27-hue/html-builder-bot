import { useState, useRef } from "react";
import { User, Flag, Mountain, Smile } from "lucide-react";

const values = [
  {
    icon: User,
    title: "Nous assumons nos responsabilités"
  },
  {
    icon: Flag,
    title: "Nous livrons des résultats"
  },
  {
    icon: Mountain,
    title: "Nous évoluons ensemble"
  },
  {
    icon: Smile,
    title: "Nous sommes reconnaissants"
  }
];

const CoreValues = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const page = scrollPos > maxScroll / 2 ? 1 : 0;
      setCurrentPage(page);
    }
  };

  const scrollToPage = (page: number) => {
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: page === 0 ? 0 : maxScroll,
        behavior: 'smooth'
      });
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos valeurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les principes qui guident notre équipe au quotidien.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="bg-[#FFF8E1] rounded-2xl p-8 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-foreground" />
              </div>
              
              {/* Text */}
              <h3 className="font-bold text-foreground text-lg">
                {value.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {values.map((value) => (
              <div 
                key={value.title} 
                className="flex-shrink-0 w-[75%] bg-[#FFF8E1] rounded-2xl p-6 text-center"
                style={{ scrollSnapAlign: 'center' }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-foreground" />
                </div>
                
                {/* Text */}
                <h3 className="font-bold text-foreground text-base">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1].map((page) => (
              <button
                key={page}
                onClick={() => scrollToPage(page)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === page ? 'bg-foreground' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to page ${page + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
