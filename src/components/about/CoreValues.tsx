import { useState, useRef, useEffect } from "react";
import { User, Flag, Mountain, Smile } from "lucide-react";

const values = [
  {
    icon: User,
    title: "We take Responsibility",
  },
  {
    icon: Flag,
    title: "We Make it happen",
  },
  {
    icon: Mountain,
    title: "We Grow Together",
  },
  {
    icon: Smile,
    title: "We are Grateful",
  },
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
    <section className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-center mb-12">
          Our Core Values
        </h2>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative max-w-[1200px] mx-auto">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-5 overflow-x-auto pb-2 pl-8 md:pl-16 lg:pl-24 cursor-grab ${isDragging ? 'cursor-grabbing select-none' : ''}`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="flex-shrink-0 w-[260px] md:w-[300px] lg:w-[280px]"
            >
              <div className="bg-accent rounded-2xl h-[260px] md:h-[300px] flex flex-col border border-border/20">
                {/* Icon area with white background */}
                <div className="flex-1 flex items-center justify-center mx-4 mt-4 bg-background rounded-xl">
                  <value.icon className="w-14 h-14 md:w-16 md:h-16 text-foreground" strokeWidth={1.5} />
                </div>
                
                {/* Title area */}
                <div className="p-5 text-center">
                  <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug">
                    {value.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for partial card effect */}
          <div className="flex-shrink-0 w-8 md:w-16 lg:w-24" />
        </div>
      </div>

      {/* Duck Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        <button
          onClick={() => scrollToPage(0)}
          className={`text-2xl transition-opacity hover:scale-110 ${currentPage === 0 ? 'opacity-100' : 'opacity-40'}`}
          aria-label="Page 1"
        >
          🦆
        </button>
        <button
          onClick={() => scrollToPage(1)}
          className={`text-2xl transition-opacity hover:scale-110 ${currentPage === 1 ? 'opacity-100' : 'opacity-40'}`}
          aria-label="Page 2"
        >
          🦆
        </button>
      </div>
    </section>
  );
};

export default CoreValues;
