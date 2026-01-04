import { cn } from "@/lib/utils";
import { Info, Minus, Plus } from "lucide-react";

interface AddOnsGridProps {
  selected: Record<string, number>;
  onChange: (selected: Record<string, number>) => void;
}

const addOns = [
  { id: "inside-fridge", label: "Inside Fridge", hasInfo: true },
  { id: "inside-freezer", label: "Inside Freezer", hasInfo: false },
  { id: "inside-oven", label: "Inside Oven", hasInfo: false },
  { id: "dishwasher-interior", label: "Dishwasher Interior", hasInfo: true },
  { id: "laundry-folding", label: "Laundry & Folding", hasInfo: true },
  { id: "dishes", label: "Dishes", hasInfo: true },
  { id: "inside-cabinets", label: "Inside Empty Cabinets & Drawers", hasInfo: false },
  { id: "interior-windows", label: "Interior Windows", hasInfo: true },
  { id: "exterior-windows", label: "Exterior Windows", hasInfo: true },
  { id: "interior-sliding-door", label: "Interior Sliding Door", hasInfo: false },
  { id: "outside-sliding-door", label: "Outside Sliding Door", hasInfo: false },
  { id: "balcony-railing", label: "Balcony Railing", hasInfo: true },
  { id: "balcony-floor-furniture", label: "Balcony Floor & Furniture", hasInfo: true },
  { id: "wipe-fan-blades", label: "Wipe Fan Blades", hasInfo: true },
  { id: "exterior-vents", label: "Exterior Vents", hasInfo: true },
  { id: "wipe-blinds", label: "Wipe Blinds", hasInfo: false },
  { id: "railing-glass-interior", label: "Railing Glass Interior", hasInfo: true },
];

// Simple icon representations for add-ons
const getIcon = (id: string) => {
  switch (id) {
    case "inside-fridge":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="12" y="6" width="24" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="12" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2" />
          <rect x="28" y="10" width="4" height="6" rx="1" fill="currentColor" />
          <rect x="28" y="24" width="4" height="8" rx="1" fill="currentColor" />
        </svg>
      );
    case "inside-freezer":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="12" y="6" width="24" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="28" y="10" width="4" height="28" rx="1" fill="currentColor" />
        </svg>
      );
    case "inside-oven":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="8" y="10" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="12" y="20" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="14" cy="14" r="2" fill="currentColor" />
          <circle cx="22" cy="14" r="2" fill="currentColor" />
          <circle cx="30" cy="14" r="2" fill="currentColor" />
        </svg>
      );
    case "dishwasher-interior":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="10" y="6" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="14" y="14" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="14" y="22" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="14" y="30" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "laundry-folding":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <path d="M8 12 L24 8 L40 12 L40 38 L8 38 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 18 L24 14 L36 18" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 26 L36 26" stroke="currentColor" strokeWidth="2" />
          <path d="M12 32 L36 32" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "dishes":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M36 12 L42 6 L44 8 L38 14" stroke="currentColor" strokeWidth="2" />
          <path d="M40 14 L44 10" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "inside-cabinets":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="6" y="10" width="16" height="28" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="26" y="10" width="16" height="28" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="14" y1="20" x2="14" y2="28" stroke="currentColor" strokeWidth="2" />
          <line x1="34" y1="20" x2="34" y2="28" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "interior-windows":
    case "exterior-windows":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="8" y="8" width="32" height="32" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "interior-sliding-door":
    case "outside-sliding-door":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="6" y="6" width="16" height="36" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="26" y="6" width="16" height="36" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="18" cy="24" r="2" fill="currentColor" />
          <circle cx="30" cy="24" r="2" fill="currentColor" />
        </svg>
      );
    case "balcony-railing":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="8" y="28" width="32" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="12" y1="32" x2="12" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="36" y1="32" x2="36" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="18" x2="12" y2="28" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="18" x2="24" y2="28" stroke="currentColor" strokeWidth="2" />
          <line x1="36" y1="18" x2="36" y2="28" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "balcony-floor-furniture":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <path d="M10 20 L14 38 L22 38 L20 28 L28 28 L26 38 L34 38 L38 20" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 20 L40 20 L38 14 L10 14 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case "wipe-fan-blades":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <circle cx="24" cy="24" r="4" fill="currentColor" />
          <path d="M24 20 L22 8 L26 8 Z" fill="currentColor" />
          <path d="M28 24 L40 22 L40 26 Z" fill="currentColor" />
          <path d="M24 28 L26 40 L22 40 Z" fill="currentColor" />
          <path d="M20 24 L8 26 L8 22 Z" fill="currentColor" />
        </svg>
      );
    case "exterior-vents":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="10" y="10" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="10" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="34" x2="38" y2="34" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "wipe-blinds":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="10" y="8" width="28" height="32" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="10" y1="14" x2="38" y2="14" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="2" />
          <line x1="10" y1="32" x2="38" y2="32" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "railing-glass-interior":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <rect x="10" y="10" width="28" height="28" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="18" y1="10" x2="18" y2="38" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="10" x2="30" y2="38" stroke="currentColor" strokeWidth="2" />
          <path d="M12 14 L22 22 M22 14 L12 22" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" fill="currentColor">
          <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
  }
};

const AddOnsGrid = ({ selected, onChange }: AddOnsGridProps) => {
  const handleSelect = (id: string) => {
    if (selected[id]) return; // Already selected, use +/- buttons
    onChange({ ...selected, [id]: 1 });
  };

  const handleIncrement = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange({ ...selected, [id]: (selected[id] || 0) + 1 });
  };

  const handleDecrement = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newQty = (selected[id] || 0) - 1;
    if (newQty <= 0) {
      const newSelected = { ...selected };
      delete newSelected[id];
      onChange(newSelected);
    } else {
      onChange({ ...selected, [id]: newQty });
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-accent font-heading">
          Add-Ons for a Deeper Clean
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Your cleaning, your way. Select the add-ons that matter most to you
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {addOns.map((addon) => {
          const isSelected = !!selected[addon.id];
          const quantity = selected[addon.id] || 0;

          return (
            <button
              key={addon.id}
              onClick={() => handleSelect(addon.id)}
              className={cn(
                "p-4 border-2 text-center transition-all duration-200 flex flex-col items-center gap-2 min-h-[140px] relative",
                isSelected
                  ? "border-primary bg-secondary"
                  : "border-border bg-background hover:border-primary/50"
              )}
            >
              {isSelected ? (
                // Selected state with quantity controls
                <div className="flex items-center justify-center w-full h-12 gap-2">
                  <button
                    onClick={(e) => handleDecrement(addon.id, e)}
                    className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground font-bold text-lg">
                    {quantity}
                  </div>
                  <button
                    onClick={(e) => handleIncrement(addon.id, e)}
                    className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                // Unselected state with icon
                <div className="text-foreground">
                  {getIcon(addon.id)}
                </div>
              )}
              <span className="text-xs font-medium text-foreground flex items-center gap-1">
                {addon.label}
                {addon.hasInfo && (
                  <Info className="w-3 h-3 text-muted-foreground" />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AddOnsGrid;
