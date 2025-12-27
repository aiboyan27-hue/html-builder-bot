import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingSummary from "@/components/booking/BookingSummary";
import PopularQuestions from "@/components/booking/PopularQuestions";
import BookingForm from "@/components/booking/BookingForm";

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
  addOns: Record<string, number>; // Changed to object with quantities
}

const Booking = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    zipCode: "",
    email: "",
    cleaningType: "Standard Cleaning",
    frequency: "One-Time",
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: "",
    propertyCondition: "",
    pets: "No Pets",
    addOns: {},
  });

  const pricing = useMemo(() => {
    const BASE_PRICE = 105;
    const BEDROOM_PRICE = 35;
    const BATHROOM_PRICE = 35;
    const ADDON_PRICE = 40;

    const bedroomsCost = formData.bedrooms * BEDROOM_PRICE;
    const bathroomsCost = formData.bathrooms * BATHROOM_PRICE;
    
    // Calculate total add-on units
    const totalAddonUnits = Object.values(formData.addOns).reduce((sum, qty) => sum + qty, 0);
    const addonsCost = totalAddonUnits * ADDON_PRICE;

    const subtotal = BASE_PRICE + bedroomsCost + bathroomsCost + addonsCost;

    let discountPercent = 0;
    if (formData.frequency === "Weekly - 15% Off") discountPercent = 15;
    else if (formData.frequency === "Every 2 Weeks - 10% Off") discountPercent = 10;
    else if (formData.frequency === "Monthly - 5% Off") discountPercent = 5;

    const discountAmount = (subtotal * discountPercent) / 100;
    const total = subtotal - discountAmount;

    return {
      base: BASE_PRICE,
      bedrooms: bedroomsCost,
      bathrooms: bathroomsCost,
      addons: addonsCost,
      addonCount: totalAddonUnits,
      subtotal,
      discountPercent,
      discountAmount,
      total,
    };
  }, [formData]);

  const updateFormData = (updates: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[hsl(210,29%,24%)] font-serif mb-2">
              Check Pricing & Book Online Easily
            </h1>
            <p className="text-muted-foreground">
              Have questions? Call or text us at{" "}
              <a
                href="tel:5141234567"
                className="text-[hsl(210,29%,24%)] font-medium underline underline-offset-2 hover:text-primary transition-colors"
              >
                (514) 123-4567
              </a>
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Form */}
            <div className="lg:col-span-2">
              <BookingForm formData={formData} updateFormData={updateFormData} />
            </div>

            {/* Right column - Summary & FAQ */}
            <div className="space-y-6">
              <div className="lg:sticky lg:top-24">
                <BookingSummary formData={formData} pricing={pricing} />
                <div className="mt-6">
                  <PopularQuestions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
