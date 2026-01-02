import { useState } from "react";
import { ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingFormData } from "@/pages/Booking";
import DateTimeModal from "./DateTimeModal";
import TipsAndParking from "./TipsAndParking";
import CustomerDetails from "./CustomerDetails";
import AddressDetails from "./AddressDetails";
import PaymentInfo from "./PaymentInfo";
import { toast } from "sonner";

interface BookingStep2Props {
  formData: BookingFormData;
  onBack: () => void;
}

interface Step2Data {
  selectedDate?: Date;
  selectedTime?: string;
  howDidYouFind: string;
  tipPercent: string;
  parkingAmount: string;
  customTip: string;
  customParking: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  aptNo: string;
  city: string;
  state: string;
  zipcode: string;
  buildingName: string;
  specialNotes: string;
  cardNumber: string;
  couponCode: string;
  acceptTerms: boolean;
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

const BookingStep2 = ({ formData, onBack }: BookingStep2Props) => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [step2Data, setStep2Data] = useState<Step2Data>({
    selectedDate: undefined,
    selectedTime: undefined,
    howDidYouFind: "",
    tipPercent: "0%",
    parkingAmount: "$0",
    customTip: "",
    customParking: "",
    firstName: "",
    lastName: "",
    email: formData.email, // Pre-fill from Step 1
    phone: "",
    address: "",
    aptNo: "",
    city: "",
    state: "",
    zipcode: formData.zipCode, // Pre-fill from Step 1
    buildingName: "",
    specialNotes: "",
    cardNumber: "",
    couponCode: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateStep2Data = (updates: Partial<Step2Data>) => {
    setStep2Data((prev) => ({ ...prev, ...updates }));
  };

  const handleDateTimeSelect = (date: Date, time: string) => {
    updateStep2Data({ selectedDate: date, selectedTime: time });
  };

  const handleSaveBooking = () => {
    const newErrors: Record<string, string> = {};

    // Validate required fields
    if (!step2Data.selectedDate) newErrors.date = "Please select a date";
    if (!step2Data.selectedTime) newErrors.time = "Please select a time";
    if (!step2Data.howDidYouFind) newErrors.howDidYouFind = "Please select an option";
    if (!step2Data.firstName.trim()) newErrors.firstName = "First name is required";
    if (!step2Data.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!step2Data.email.trim() || !step2Data.email.includes("@")) newErrors.email = "Valid email is required";
    if (!step2Data.phone.trim()) newErrors.phone = "Phone number is required";
    if (!step2Data.address.trim()) newErrors.address = "Address is required";
    if (!step2Data.city.trim()) newErrors.city = "City is required";
    if (!step2Data.state.trim()) newErrors.state = "State is required";
    if (!step2Data.zipcode.trim()) newErrors.zipcode = "Zipcode is required";
    if (!step2Data.acceptTerms) newErrors.acceptTerms = "You must accept the terms and conditions";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please complete all required fields");
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
            onClick={() => setIsDateModalOpen(true)}
            className={`w-full md:w-auto min-w-[250px] h-12 px-4 flex items-center justify-between bg-background border rounded-lg text-left ${
              errors.date ? 'border-red-500' : 'border-border'
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
          }}
        >
          <SelectTrigger className={`h-12 bg-background ${errors.howDidYouFind ? 'border-red-500' : 'border-border'}`}>
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
        }}
        onLastNameChange={(value) => {
          updateStep2Data({ lastName: value });
          setErrors((prev) => ({ ...prev, lastName: "" }));
        }}
        onEmailChange={(value) => {
          updateStep2Data({ email: value });
          setErrors((prev) => ({ ...prev, email: "" }));
        }}
        onPhoneChange={(value) => {
          updateStep2Data({ phone: value });
          setErrors((prev) => ({ ...prev, phone: "" }));
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
        }}
        onAptNoChange={(value) => updateStep2Data({ aptNo: value })}
        onCityChange={(value) => {
          updateStep2Data({ city: value });
          setErrors((prev) => ({ ...prev, city: "" }));
        }}
        onStateChange={(value) => {
          updateStep2Data({ state: value });
          setErrors((prev) => ({ ...prev, state: "" }));
        }}
        onZipcodeChange={(value) => {
          updateStep2Data({ zipcode: value });
          setErrors((prev) => ({ ...prev, zipcode: "" }));
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
