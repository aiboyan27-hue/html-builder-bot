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
  return;
};
export default CoreValues;