import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground text-center mb-12">
          Our Core Values
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-accent rounded-2xl p-8 md:p-10 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <value.icon className="w-12 h-12 md:w-16 md:h-16 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug">
                {value.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Duck Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(0)}
            className={`text-2xl transition-opacity ${currentPage === 0 ? 'opacity-100' : 'opacity-40'}`}
            aria-label="Page 1"
          >
            🦆
          </button>
          <button
            onClick={() => setCurrentPage(1)}
            className={`text-2xl transition-opacity ${currentPage === 1 ? 'opacity-100' : 'opacity-40'}`}
            aria-label="Page 2"
          >
            🦆
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
