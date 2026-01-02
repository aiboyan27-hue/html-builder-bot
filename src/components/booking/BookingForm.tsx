import { useState } from "react";
import { Info, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingFormData } from "@/pages/Booking";
import FrequencySelector from "./FrequencySelector";
import AddOnsGrid from "./AddOnsGrid";
import { toast } from "sonner";

interface BookingFormProps {
  formData: BookingFormData;
  updateFormData: (updates: Partial<BookingFormData>) => void;
}

const cleaningTypes = [
  "Standard Cleaning",
  "Deep Cleaning",
  "Move In Cleaning",
  "Move Out Cleaning",
  "Post Construction Cleaning",
];

const bedroomOptions = Array.from({ length: 12 }, (_, i) => i);

const bathroomOptions = [
  0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
];

const squareFeetOptions = [
  "1 - 999 Sq Ft",
  "1000 - 1499 Sq Ft",
  "1500 - 2000 Sq Ft",
  "2000 - 2999 Sq Ft",
  "3000 - 3999 Sq Ft",
  "4000 - 5999 Sq Ft",
  "6000 - 7999 Sq Ft",
  "8000 - 9999 Sq Ft",
  "10,000 - 12,999 Sq Ft",
  "13,000+ Sq Ft",
];

const conditionOptions = [
  { value: "Excellent", color: "bg-green-500" },
  { value: "Good", color: "bg-yellow-400" },
  { value: "Dirty", color: "bg-orange-500" },
  { value: "Very Dirty", color: "bg-red-500" },
];

const petOptions = [
  { value: "No Pets", emoji: "" },
  { value: "1 Dog", emoji: "🐶" },
  { value: "2+ Dogs", emoji: "🐶" },
  { value: "1 Cat", emoji: "🐱" },
  { value: "2+ Cats", emoji: "🐱" },
];

const BookingForm = ({ formData, updateFormData }: BookingFormProps) => {
  const [errors, setErrors] = useState<{ bedrooms?: string; bathrooms?: string }>({});

  const handleNext = () => {
    const newErrors: { bedrooms?: string; bathrooms?: string } = {};
    
    if (!formData.zipCode.trim()) {
      toast.error("Please enter your zip code");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (formData.bedrooms < 0) {
      newErrors.bedrooms = "Please select number of bedrooms";
    }
    if (formData.bathrooms < 0) {
      newErrors.bathrooms = "Please select number of bathrooms";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please complete all required fields");
      return;
    }
    
    setErrors({});
    toast.success("Next step coming soon!");
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-8">
      {/* Zip Code */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Zip Code</label>
        <Input
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={(e) => updateFormData({ zipCode: e.target.value })}
          className="h-12 bg-background border-border"
        />
      </div>

      <div className="border-t border-border" />

      {/* Email Address */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <Input
          type="email"
          placeholder="Ex: example@xyz.com"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="h-12 bg-background border-border"
        />
      </div>

      <div className="border-t border-border" />

      {/* Type of Cleaning */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Type of Cleaning</label>
        <div className="flex items-center gap-2">
          <Select
            value={formData.cleaningType}
            onValueChange={(value) => updateFormData({ cleaningType: value })}
          >
            <SelectTrigger className="h-12 bg-background border-border flex-1">
              <SelectValue placeholder="Select cleaning type" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border z-50">
              {cleaningTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Frequency */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Frequency</label>
        <p className="text-sm text-muted-foreground">
          8 out of 10 clients choose a maintenance plan after seeing how much they'll save each year
        </p>
        <FrequencySelector
          value={formData.frequency}
          onChange={(value) => updateFormData({ frequency: value })}
        />
      </div>

      <div className="border-t border-border" />

      {/* Property Details */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-[hsl(195,53%,37%)] font-serif">
            Property Details
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Verify square footage on{" "}
            <a
              href="https://www.realtor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(195,53%,37%)] font-medium hover:underline"
            >
              REALTOR.COM
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Bedrooms */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Bedrooms</label>
            <Select
              value={formData.bedrooms >= 0 ? formData.bedrooms.toString() : ""}
              onValueChange={(value) => {
                updateFormData({ bedrooms: parseInt(value) });
                setErrors(prev => ({ ...prev, bedrooms: undefined }));
              }}
            >
              <SelectTrigger className={`h-12 bg-background ${errors.bedrooms ? 'border-red-500' : 'border-border'}`}>
                <SelectValue placeholder="Select Option" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50 max-h-60">
                {bedroomOptions.map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.bedrooms && (
              <p className="text-sm text-red-500">{errors.bedrooms}</p>
            )}
          </div>

          {/* Bathrooms */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Bathrooms</label>
            <Select
              value={formData.bathrooms >= 0 ? formData.bathrooms.toString() : ""}
              onValueChange={(value) => {
                updateFormData({ bathrooms: parseFloat(value) });
                setErrors(prev => ({ ...prev, bathrooms: undefined }));
              }}
            >
              <SelectTrigger className={`h-12 bg-background ${errors.bathrooms ? 'border-red-500' : 'border-border'}`}>
                <SelectValue placeholder="Select Option" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50 max-h-60">
                {bathroomOptions.map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.bathrooms && (
              <p className="text-sm text-red-500">{errors.bathrooms}</p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Square Feet */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Square Feet</label>
        <Select
          value={formData.squareFeet}
          onValueChange={(value) => updateFormData({ squareFeet: value })}
        >
          <SelectTrigger className="h-12 bg-background border-border">
            <SelectValue placeholder="Select Option" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            {squareFeetOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border-t border-border" />

      {/* Property Condition */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Property Condition</label>
        <p className="text-sm text-muted-foreground">
          No judgment here. This just helps us bring the right supplies and give you an accurate quote
        </p>
        <Select
          value={formData.propertyCondition}
          onValueChange={(value) => updateFormData({ propertyCondition: value })}
        >
          <SelectTrigger className="h-12 bg-background border-border">
            <SelectValue placeholder="Select Option" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            {conditionOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${option.color}`} />
                  {option.value}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border-t border-border" />

      {/* Any Pets */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          <span>🐾</span> Any Pets?
        </label>
        <p className="text-sm text-muted-foreground">
          We love furry friends! Let us know if you have pets so we can plan the right amount of time needed for pet hair and dander
        </p>
        <Select
          value={formData.pets}
          onValueChange={(value) => updateFormData({ pets: value })}
        >
          <SelectTrigger className="h-12 bg-background border-border">
            <SelectValue placeholder="Select Option" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            {petOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.value} {option.emoji}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border-t border-border" />

      {/* Add-Ons */}
      <AddOnsGrid
        selected={formData.addOns}
        onChange={(addOns) => updateFormData({ addOns })}
      />

      {/* Next Button */}
      <Button
        onClick={handleNext}
        className="w-full h-14 bg-[hsl(210,29%,24%)] hover:bg-[hsl(210,29%,20%)] text-white text-lg font-medium"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Next
      </Button>
    </div>
  );
};

export default BookingForm;
