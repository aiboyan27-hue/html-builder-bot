import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingSummary from "@/components/booking/BookingSummary";
import { Button } from "@/components/ui/button";
import PopularQuestions from "@/components/booking/PopularQuestions";
import BookingForm from "@/components/booking/BookingForm";
import BookingStep2 from "@/components/booking/BookingStep2";

export interface BookingFormData {
  zipCode: string;
  email: string;
  cleaningType: string;
  frequency: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: string;
  propertyCondition: string;
  pets: string;
  addOns: Record<string, number>;
}

export interface Step2Data {
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

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  // Scroll to top on mount and step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const [formData, setFormData] = useState<BookingFormData>({
    zipCode: "",
    email: "",
    cleaningType: "Standard Cleaning",
    frequency: "One-Time",
    bedrooms: -1,
    bathrooms: -1,
    squareFeet: "",
    propertyCondition: "",
    pets: "No Pets",
    addOns: {},
  });

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
    email: "",
    phone: "",
    address: "",
    aptNo: "",
    city: "",
    state: "",
    zipcode: "",
    buildingName: "",
    specialNotes: "",
    cardNumber: "",
    couponCode: "",
    acceptTerms: false,
  });

  // Calculate tip and parking amounts
  const tipAmount = useMemo(() => {
    if (step2Data.tipPercent === "Other") {
      const customValue = parseFloat(step2Data.customTip) || 0;
      return customValue;
    }
    const percent = parseFloat(step2Data.tipPercent) || 0;
    return 0; // Will be calculated based on subtotal later
  }, [step2Data.tipPercent, step2Data.customTip]);

  const parkingAmountValue = useMemo(() => {
    if (step2Data.parkingAmount === "Other") {
      return parseFloat(step2Data.customParking) || 0;
    }
    return parseFloat(step2Data.parkingAmount.replace('$', '')) || 0;
  }, [step2Data.parkingAmount, step2Data.customParking]);

  const pricing = useMemo(() => {
    const BASE_PRICE = 105;
    const BEDROOM_PRICE = 35;
    const BATHROOM_PRICE = 35;
    const ADDON_PRICE = 40;

    const bedroomsCost = formData.bedrooms > 0 ? formData.bedrooms * BEDROOM_PRICE : 0;
    const bathroomsCost = formData.bathrooms > 0 ? formData.bathrooms * BATHROOM_PRICE : 0;
    
    const totalAddonUnits = Object.values(formData.addOns).reduce((sum, qty) => sum + qty, 0);
    const addonsCost = totalAddonUnits * ADDON_PRICE;

    const subtotal = BASE_PRICE + bedroomsCost + bathroomsCost + addonsCost;

    let discountPercent = 0;
    if (formData.frequency === "Weekly - 15% Off") discountPercent = 15;
    else if (formData.frequency === "Every 2 Weeks - 10% Off") discountPercent = 10;
    else if (formData.frequency === "Monthly - 5% Off") discountPercent = 5;

    const discountAmount = (subtotal * discountPercent) / 100;
    const afterDiscount = subtotal - discountAmount;

    // Calculate tip
    let tipCalc = 0;
    if (step2Data.tipPercent === "Other") {
      tipCalc = parseFloat(step2Data.customTip) || 0;
    } else {
      const tipPercentValue = parseFloat(step2Data.tipPercent) || 0;
      tipCalc = (afterDiscount * tipPercentValue) / 100;
    }

    // Calculate parking
    let parkingCalc = 0;
    if (step2Data.parkingAmount === "Other") {
      parkingCalc = parseFloat(step2Data.customParking) || 0;
    } else {
      parkingCalc = parseFloat(step2Data.parkingAmount.replace('$', '')) || 0;
    }

    const total = afterDiscount + tipCalc + parkingCalc;

    return {
      base: BASE_PRICE,
      bedrooms: bedroomsCost,
      bathrooms: bathroomsCost,
      addons: addonsCost,
      addonCount: totalAddonUnits,
      subtotal,
      discountPercent,
      discountAmount,
      tip: tipCalc,
      parking: parkingCalc,
      total,
    };
  }, [formData, step2Data.tipPercent, step2Data.customTip, step2Data.parkingAmount, step2Data.customParking]);

  const updateFormData = (updates: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const updateStep2Data = (updates: Partial<Step2Data>) => {
    setStep2Data((prev) => ({ ...prev, ...updates }));
  };

  const handleGoToStep2 = () => {
    // Pre-fill email and zipcode from step 1
    setStep2Data(prev => ({
      ...prev,
      email: formData.email,
      zipcode: formData.zipCode,
    }));
    setCurrentStep(2);
  };

  const handleBackToStep1 = () => {
    setCurrentStep(1);
  };

  const showErrorBanner = (message: string) => {
    setErrorBanner(message);
  };

  const hideErrorBanner = () => {
    setErrorBanner(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Error Banner */}
          {errorBanner && (
            <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-up">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span>{errorBanner}</span>
              <button onClick={hideErrorBanner} className="ml-2 hover:opacity-80">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}

          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-2">
              Check Pricing & Book Online Easily
            </h1>
            <p className="text-muted-foreground mb-4">
              Have questions? Call or text us at{" "}
              <a
                href="tel:5141234567"
                className="text-foreground font-medium underline underline-offset-2 hover:text-accent transition-colors"
              >
                (514) 123-4567
              </a>
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link to="/commercial">Nettoyage commercial – Réserver ici</Link>
            </Button>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Form */}
            <div className="lg:col-span-2">
              {currentStep === 1 ? (
                <BookingForm 
                  formData={formData} 
                  updateFormData={updateFormData}
                  onNext={handleGoToStep2}
                  showErrorBanner={showErrorBanner}
                  hideErrorBanner={hideErrorBanner}
                />
              ) : (
                <BookingStep2 
                  formData={formData}
                  step2Data={step2Data}
                  updateStep2Data={updateStep2Data}
                  onBack={handleBackToStep1}
                  pricing={pricing}
                  showErrorBanner={showErrorBanner}
                  hideErrorBanner={hideErrorBanner}
                />
              )}
            </div>

            {/* Right column - Summary & FAQ */}
            <div className="space-y-6">
              <BookingSummary formData={formData} pricing={pricing} currentStep={currentStep} />
              <PopularQuestions />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
