import { useState, useRef } from "react";
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

  const scrollToPage = (page: number) => {
    setCurrentPage(page);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / 2; // 2 pages
      scrollRef.current.scrollTo({
        left: page * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.scrollWidth / 2;
      const newPage = Math.round(scrollLeft / cardWidth);
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    }
  };

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-center mb-12">
          Our Core Values
        </h2>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {values.map((value, index) => (
          <div
            key={value.title}
            className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
          >
            <div className="bg-accent rounded-2xl h-[280px] md:h-[320px] flex flex-col">
              {/* Icon area with white background */}
              <div className="flex-1 flex items-center justify-center mx-4 mt-4 bg-background rounded-xl">
                <value.icon className="w-16 h-16 md:w-20 md:h-20 text-foreground" strokeWidth={1.5} />
              </div>
              
              {/* Title area */}
              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                  {value.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Duck Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => scrollToPage(0)}
          className={`text-2xl transition-opacity ${currentPage === 0 ? 'opacity-100' : 'opacity-40'}`}
          aria-label="Page 1"
        >
          🦆
        </button>
        <button
          onClick={() => scrollToPage(1)}
          className={`text-2xl transition-opacity ${currentPage === 1 ? 'opacity-100' : 'opacity-40'}`}
          aria-label="Page 2"
        >
          🦆
        </button>
      </div>
    </section>
  );
};

export default CoreValues;
