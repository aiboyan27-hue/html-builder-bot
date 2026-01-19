import { useState, useRef } from "react";
import { User, Flag, Mountain, Smile } from "lucide-react";
const values = [{
  icon: User,
  title: "Nous assumons nos responsabilités"
}, {
  icon: Flag,
  title: "Nous livrons des résultats"
}, {
  icon: Mountain,
  title: "Nous évoluons ensemble"
}, {
  icon: Smile,
  title: "Nous sommes reconnaissants"
}];
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
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Nos valeurs
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="bg-muted/50 border border-border p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground text-lg leading-tight">
                {value.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {values.map((value) => (
              <div 
                key={value.title} 
                className="min-w-[280px] bg-muted/50 border border-border p-6 flex flex-col items-center text-center"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-3">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-base leading-tight">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1].map((page) => (
              <button
                key={page}
                onClick={() => scrollToPage(page)}
                className={`text-2xl transition-opacity ${
                  currentPage === page ? 'opacity-100' : 'opacity-40'
                }`}
                aria-label={`Go to page ${page + 1}`}
              >
                🦆
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreValues;