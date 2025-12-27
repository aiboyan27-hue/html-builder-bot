import { cn } from "@/lib/utils";

interface FrequencySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const frequencies = [
  { label: "One-Time", value: "One-Time" },
  { label: "Weekly - 15% Off", value: "Weekly - 15% Off" },
  { label: "Every 2 Weeks - 10% Off", value: "Every 2 Weeks - 10% Off" },
  { label: "Monthly - 5% Off", value: "Monthly - 5% Off" },
];

const FrequencySelector = ({ value, onChange }: FrequencySelectorProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {frequencies.map((freq) => (
        <button
          key={freq.value}
          onClick={() => onChange(freq.value)}
          className={cn(
            "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
            value === freq.value
              ? "bg-[hsl(210,29%,24%)] text-white shadow-md"
              : "bg-background border border-border text-foreground hover:border-[hsl(210,29%,24%)]/50"
          )}
        >
          {freq.label}
        </button>
      ))}
    </div>
  );
};

export default FrequencySelector;
