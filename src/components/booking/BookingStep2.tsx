import { useState } from "react";
import { ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingFormData, Step2Data } from "@/pages/Booking";
import DateTimeModal from "./DateTimeModal";
import TipsAndParking from "./TipsAndParking";
import CustomerDetails from "./CustomerDetails";
import AddressDetails from "./AddressDetails";
import PaymentInfo from "./PaymentInfo";
import { toast } from "sonner";

interface BookingStep2Props {
  formData: BookingFormData;
  step2Data: Step2Data;
  updateStep2Data: (updates: Partial<Step2Data>) => void;
  onBack: () => void;
  pricing: {
    base: number;
    bedrooms: number;
    bathrooms: number;
    addons: number;
    addonCount: number;
    subtotal: number;
    discountPercent: number;
    discountAmount: number;
    tip: number;
    parking: number;
    total: number;
  };
  showErrorBanner: (message: string) => void;
  hideErrorBanner: () => void;
}

const howDidYouFindOptions = [
  "Google Search",
  "Google Maps",
  "Building Front Desk",
  "Instagram",
  "A friend",
  "Facebook",
  "Met an owner (Ana or Jay)",
  "LinkedIn",
];

const BookingStep2 = ({ formData, step2Data, updateStep2Data, onBack, pricing, showErrorBanner, hideErrorBanner }: BookingStep2Props) => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDateTimeSelect = (date: Date, time: string) => {
    updateStep2Data({ selectedDate: date, selectedTime: time });
    setErrors(prev => ({ ...prev, date: "", time: "" }));
    hideErrorBanner();
  };

  const scrollToFirstError = (fieldId: string) => {
    const element = document.getElementById(fieldId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.focus();
    }
  };

  const handleSaveBooking = () => {
    hideErrorBanner();
    const newErrors: Record<string, string> = {};
    let firstErrorField: string | null = null;

    // Validate required fields in order
    if (!step2Data.selectedDate) {
      newErrors.date = "Please select a date";
      if (!firstErrorField) firstErrorField = "selectDate";
    }
    if (!step2Data.selectedTime) {
      newErrors.time = "Please select a time";
      if (!firstErrorField) firstErrorField = "selectDate";
    }
    if (!step2Data.howDidYouFind) {
      newErrors.howDidYouFind = "Please select an option";
      if (!firstErrorField) firstErrorField = "howDidYouFind";
    }
    if (!step2Data.firstName.trim()) {
      newErrors.firstName = "First name is required";
      if (!firstErrorField) firstErrorField = "firstName";
    }
    if (!step2Data.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      if (!firstErrorField) firstErrorField = "lastName";
    }
    if (!step2Data.email.trim() || !step2Data.email.includes("@")) {
      newErrors.email = "Valid email is required";
      if (!firstErrorField) firstErrorField = "step2Email";
    }
    if (!step2Data.phone.trim()) {
      newErrors.phone = "Phone number is required";
      if (!firstErrorField) firstErrorField = "phone";
    }
    if (!step2Data.address.trim()) {
      newErrors.address = "Address is required";
      if (!firstErrorField) firstErrorField = "address";
    }
    if (!step2Data.city.trim()) {
      newErrors.city = "City is required";
      if (!firstErrorField) firstErrorField = "city";
    }
    if (!step2Data.state.trim()) {
      newErrors.state = "State is required";
      if (!firstErrorField) firstErrorField = "state";
    }
    if (!step2Data.zipcode.trim()) {
      newErrors.zipcode = "Zipcode is required";
      if (!firstErrorField) firstErrorField = "step2Zipcode";
    }
    if (!step2Data.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
      if (!firstErrorField) firstErrorField = "terms";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const errorMessages: Record<string, string> = {
        selectDate: "Please select a date and time for your booking.",
        howDidYouFind: "Please tell us how you found us.",
        firstName: "Please enter your first name.",
        lastName: "Please enter your last name.",
        step2Email: "Please enter a valid email address.",
        phone: "Please enter your phone number.",
        address: "Please fill in the location for this booking.",
        city: "Please enter your city.",
        state: "Please enter your state.",
        step2Zipcode: "Please enter your zipcode.",
        terms: "Please accept the terms and conditions.",
      };
      showErrorBanner(errorMessages[firstErrorField!] || "Please complete all required fields");
      if (firstErrorField) {
        setTimeout(() => scrollToFirstError(firstErrorField!), 100);
      }
      return;
    }

    setErrors({});
    toast.success("Booking saved successfully! We'll send you a confirmation email shortly.");
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8 space-y-8">
      {/* Back Button */}
      <Button
        variant="outline"
        onClick={onBack}
        className="bg-[hsl(210,29%,24%)] text-white hover:bg-[hsl(210,29%,20%)] hover:text-white border-none"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back to Step 1
      </Button>

      {/* Date & Time Selection */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[hsl(195,53%,37%)] font-serif">
          Select a Convenient Date & Time
        </h3>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Select Date</label>
          <button
            id="selectDate"
            onClick={() => setIsDateModalOpen(true)}
            className={`w-full md:w-auto min-w-[250px] h-12 px-4 flex items-center justify-between bg-background border rounded-lg text-left ${
              errors.date || errors.time ? 'border-red-500' : 'border-border'
            }`}
          >
            <span className={step2Data.selectedDate ? "text-foreground" : "text-muted-foreground"}>
              {step2Data.selectedDate && step2Data.selectedTime
                ? `${format(step2Data.selectedDate, "EEE, MMM d, yyyy")} at ${step2Data.selectedTime}`
                : "Select a date"}
            </span>
            <CalendarIcon className="w-5 h-5 text-muted-foreground" />
          </button>
          {(errors.date || errors.time) && (
            <p className="text-sm text-red-500">{errors.date || errors.time}</p>
          )}
        </div>
      </div>

      <DateTimeModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        onSelect={handleDateTimeSelect}
        selectedDate={step2Data.selectedDate}
        selectedTime={step2Data.selectedTime}
      />

      <div className="border-t border-border" />

      {/* How did you find us? */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">How did you find us?</label>
        <Select
          value={step2Data.howDidYouFind}
          onValueChange={(value) => {
            updateStep2Data({ howDidYouFind: value });
            setErrors((prev) => ({ ...prev, howDidYouFind: "" }));
            hideErrorBanner();
          }}
        >
          <SelectTrigger id="howDidYouFind" className={`h-12 bg-background ${errors.howDidYouFind ? 'border-red-500' : 'border-border'}`}>
            <SelectValue placeholder="Select Option" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            {howDidYouFindOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.howDidYouFind && (
          <p className="text-sm text-red-500">{errors.howDidYouFind}</p>
        )}
      </div>

      <div className="border-t border-border" />

      {/* Tips & Parking */}
      <TipsAndParking
        tipPercent={step2Data.tipPercent}
        parkingAmount={step2Data.parkingAmount}
        customTip={step2Data.customTip}
        customParking={step2Data.customParking}
        onTipChange={(value) => updateStep2Data({ tipPercent: value })}
        onParkingChange={(value) => updateStep2Data({ parkingAmount: value })}
        onCustomTipChange={(value) => updateStep2Data({ customTip: value })}
        onCustomParkingChange={(value) => updateStep2Data({ customParking: value })}
      />

      <div className="border-t border-border" />

      {/* Customer Details */}
      <CustomerDetails
        firstName={step2Data.firstName}
        lastName={step2Data.lastName}
        email={step2Data.email}
        phone={step2Data.phone}
        onFirstNameChange={(value) => {
          updateStep2Data({ firstName: value });
          setErrors((prev) => ({ ...prev, firstName: "" }));
          hideErrorBanner();
        }}
        onLastNameChange={(value) => {
          updateStep2Data({ lastName: value });
          setErrors((prev) => ({ ...prev, lastName: "" }));
          hideErrorBanner();
        }}
        onEmailChange={(value) => {
          updateStep2Data({ email: value });
          setErrors((prev) => ({ ...prev, email: "" }));
          hideErrorBanner();
        }}
        onPhoneChange={(value) => {
          updateStep2Data({ phone: value });
          setErrors((prev) => ({ ...prev, phone: "" }));
          hideErrorBanner();
        }}
        errors={{
          firstName: errors.firstName,
          lastName: errors.lastName,
          email: errors.email,
          phone: errors.phone,
        }}
      />

      <div className="border-t border-border" />

      {/* Address Details */}
      <AddressDetails
        address={step2Data.address}
        aptNo={step2Data.aptNo}
        city={step2Data.city}
        state={step2Data.state}
        zipcode={step2Data.zipcode}
        buildingName={step2Data.buildingName}
        onAddressChange={(value) => {
          updateStep2Data({ address: value });
          setErrors((prev) => ({ ...prev, address: "" }));
          hideErrorBanner();
        }}
        onAptNoChange={(value) => updateStep2Data({ aptNo: value })}
        onCityChange={(value) => {
          updateStep2Data({ city: value });
          setErrors((prev) => ({ ...prev, city: "" }));
          hideErrorBanner();
        }}
        onStateChange={(value) => {
          updateStep2Data({ state: value });
          setErrors((prev) => ({ ...prev, state: "" }));
          hideErrorBanner();
        }}
        onZipcodeChange={(value) => {
          updateStep2Data({ zipcode: value });
          setErrors((prev) => ({ ...prev, zipcode: "" }));
          hideErrorBanner();
        }}
        onBuildingNameChange={(value) => updateStep2Data({ buildingName: value })}
        errors={{
          address: errors.address,
          city: errors.city,
          state: errors.state,
          zipcode: errors.zipcode,
        }}
      />

      <div className="border-t border-border" />

      {/* Special Notes */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[hsl(195,53%,37%)] font-serif">
          Special Notes Or Instructions
        </h3>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Would You Like To Add Any Notes?
          </label>
          <Textarea
            placeholder="Special Notes Or Instructions"
            value={step2Data.specialNotes}
            onChange={(e) => updateStep2Data({ specialNotes: e.target.value })}
            className="min-h-[120px] bg-background border-border resize-y"
          />
        </div>
      </div>

      <div className="border-t border-border" />

      {/* Payment Information */}
      <PaymentInfo
        cardNumber={step2Data.cardNumber}
        couponCode={step2Data.couponCode}
        onCardNumberChange={(value) => updateStep2Data({ cardNumber: value })}
        onCouponCodeChange={(value) => updateStep2Data({ couponCode: value })}
        onApplyCoupon={() => {
          if (step2Data.couponCode.trim()) {
            toast.info("Coupon code applied!");
          }
        }}
      />

      <div className="border-t border-border" />

      {/* Terms & Conditions */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Checkbox
            id="terms"
            checked={step2Data.acceptTerms}
            onCheckedChange={(checked) => {
              updateStep2Data({ acceptTerms: checked as boolean });
              setErrors((prev) => ({ ...prev, acceptTerms: "" }));
              hideErrorBanner();
            }}
            className={errors.acceptTerms ? "border-red-500" : ""}
          />
          <label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
            Accept terms and conditions
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-sm text-red-500">{errors.acceptTerms}</p>
        )}
        <p className="text-sm text-muted-foreground">
          You affirm that you have read and agree to the Terms of Service and Privacy Policy. You also
          agree and authorize Aura Nettoyage to deliver exclusive offers and promotions.
        </p>
      </div>

      {/* Save Booking Button */}
      <Button
        onClick={handleSaveBooking}
        className="w-full h-14 bg-[hsl(210,29%,24%)] hover:bg-[hsl(210,29%,20%)] text-white text-lg font-medium"
      >
        <CalendarIcon className="w-5 h-5 mr-2" />
        Save Booking
      </Button>
    </div>
  );
};

export default BookingStep2;