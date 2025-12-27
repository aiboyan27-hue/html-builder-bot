import { useState } from "react";
import { Minus, Info, ChevronDown, ChevronUp } from "lucide-react";
import { BookingFormData } from "@/pages/Booking";

interface BookingSummaryProps {
  formData: BookingFormData;
  pricing: {
    base: number;
    bedrooms: number;
    bathrooms: number;
    addons: number;
    subtotal: number;
    discountPercent: number;
    discountAmount: number;
    total: number;
  };
}

const BookingSummary = ({ formData, pricing }: BookingSummaryProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-[hsl(210,29%,24%)]">Booking Summary</h3>
        <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
          <Minus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Service</span>
          <span className="font-medium text-foreground">: {formData.cleaningType}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Frequency</span>
          <span className="font-medium text-foreground">: {formData.frequency.split(" -")[0]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Bedrooms</span>
          <span className="font-medium text-foreground">: {formData.bedrooms}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Bathrooms</span>
          <span className="font-medium text-foreground">: {formData.bathrooms}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Estimated Length</span>
          <span className="font-medium text-foreground flex items-center gap-1">
            : 1 Hr 30 Min
            <Info className="w-4 h-4 text-muted-foreground" />
          </span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex justify-between items-end">
          <span className="text-[hsl(195,53%,37%)] text-lg font-semibold">
            Estimated<br />Total
          </span>
          <span className="text-3xl font-bold text-foreground">
            ${pricing.total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 text-[hsl(195,53%,37%)] text-sm font-medium flex items-center gap-1 hover:underline w-full justify-end"
      >
        {showDetails ? "Hide Details" : "Show Details"}
        {showDetails ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {showDetails && (
        <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm animate-fade-in-up">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Base</span>
            <span className="text-foreground">${pricing.base.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Bedrooms</span>
            <span className="text-foreground">+${pricing.bedrooms.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Bathrooms</span>
            <span className="text-foreground">+${pricing.bathrooms.toFixed(2)}</span>
          </div>
          {pricing.addons > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Add-ons ({formData.addOns.length})</span>
              <span className="text-foreground">+${pricing.addons.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-foreground">${pricing.subtotal.toFixed(2)}</span>
          </div>
          {pricing.discountAmount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount ({pricing.discountPercent}%)</span>
              <span>-${pricing.discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between pt-2 border-t border-border font-bold">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">${pricing.total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
