import { useState } from "react";
import { Input } from "@/components/ui/input";

interface TipsAndParkingProps {
  tipPercent: string;
  parkingAmount: string;
  customTip: string;
  customParking: string;
  onTipChange: (value: string) => void;
  onParkingChange: (value: string) => void;
  onCustomTipChange: (value: string) => void;
  onCustomParkingChange: (value: string) => void;
}

const tipOptions = ["0%", "10%", "15%", "20%", "Other"];
const parkingOptions = ["$0", "$5", "$10", "$20", "Other"];

const TipsAndParking = ({
  tipPercent,
  parkingAmount,
  customTip,
  customParking,
  onTipChange,
  onParkingChange,
  onCustomTipChange,
  onCustomParkingChange,
}: TipsAndParkingProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-[hsl(195,53%,37%)] font-serif mb-2">
          Tips & Parking (Optional)
        </h3>
        <p className="text-sm text-muted-foreground">
          Love your cleaning? Tips are a meaningful way to show appreciation for our team's hard work
        </p>
      </div>

      {/* Tips */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Tips</label>
        <div className="flex flex-wrap gap-2">
          {tipOptions.map((option) => (
            <button
              key={option}
              onClick={() => onTipChange(option)}
              className={`px-6 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                tipPercent === option
                  ? "bg-[hsl(210,29%,24%)] text-white border-[hsl(210,29%,24%)]"
                  : "bg-background border-border text-foreground hover:border-[hsl(210,29%,24%)]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {tipPercent === "Other" && (
          <Input
            type="number"
            placeholder="Enter tip amount ($)"
            value={customTip}
            onChange={(e) => onCustomTipChange(e.target.value.replace(/[^0-9.]/g, ''))}
            className="h-12 bg-background border-border max-w-[200px]"
          />
        )}
      </div>

      {/* Parking */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Parking</label>
        <div className="flex flex-wrap gap-2">
          {parkingOptions.map((option) => (
            <button
              key={option}
              onClick={() => onParkingChange(option)}
              className={`px-6 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                parkingAmount === option
                  ? "bg-[hsl(210,29%,24%)] text-white border-[hsl(210,29%,24%)]"
                  : "bg-background border-border text-foreground hover:border-[hsl(210,29%,24%)]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {parkingAmount === "Other" && (
          <Input
            type="number"
            placeholder="Enter parking amount ($)"
            value={customParking}
            onChange={(e) => onCustomParkingChange(e.target.value.replace(/[^0-9.]/g, ''))}
            className="h-12 bg-background border-border max-w-[200px]"
          />
        )}
      </div>
    </div>
  );
};

export default TipsAndParking;
