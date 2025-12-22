import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Sparkles, Home, RefreshCw, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "deep", name: "Deep Cleaning", icon: Sparkles, price: "From $199" },
  { id: "move", name: "Move In/Out", icon: Home, price: "From $249" },
  { id: "standard", name: "Standard Upkeep", icon: RefreshCw, price: "From $129" },
  { id: "vacation", name: "Vacation Rental", icon: Building, price: "From $149" },
];

const frequencies = [
  { id: "once", name: "One-time" },
  { id: "weekly", name: "Weekly" },
  { id: "biweekly", name: "Bi-weekly" },
  { id: "monthly", name: "Monthly" },
];

const Quote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    frequency: "",
    bedrooms: "",
    bathrooms: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
  };

  const handleFrequencySelect = (frequencyId: string) => {
    setFormData({ ...formData, frequency: frequencyId });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with your personalized quote.",
    });
    
    // Reset and go back
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">Get Your Instant Quote</h1>
          <p className="text-primary-foreground/80 mt-2">
            Tell us about your space and we'll provide a personalized estimate.
          </p>
        </div>
      </header>

      {/* Progress */}
      <div className="bg-muted/50 py-4">
        <div className="container">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-border text-muted-foreground"
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                <span className={`text-sm hidden sm:block ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                  {s === 1 ? "Service" : s === 2 ? "Details" : "Contact"}
                </span>
                {s < 3 && <div className="w-8 md:w-16 h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">What service do you need?</h2>
                <p className="text-muted-foreground">Select the type of cleaning that fits your needs.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      formData.service === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <service.icon className={`w-8 h-8 mb-3 ${formData.service === service.id ? "text-primary" : "text-muted-foreground"}`} />
                    <h3 className="font-semibold text-foreground">{service.name}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{service.price}</p>
                  </button>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">How often?</h3>
                <div className="flex flex-wrap gap-3">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.id}
                      onClick={() => handleFrequencySelect(freq.id)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        formData.frequency === freq.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {freq.name}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full rounded-full"
                disabled={!formData.service || !formData.frequency}
                onClick={() => setStep(2)}
              >
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: Home Details */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Tell us about your space</h2>
                <p className="text-muted-foreground">This helps us give you an accurate estimate.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    name="bedrooms"
                    type="number"
                    min="0"
                    max="20"
                    placeholder="e.g., 3"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Number of Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    name="bathrooms"
                    type="number"
                    min="0"
                    max="20"
                    placeholder="e.g., 2"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Property Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Ocean Drive, Miami, FL"
                  value={formData.address}
                  onChange={handleInputChange}
                  maxLength={200}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests (Optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any areas that need extra attention? Pets? Access instructions?"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  maxLength={1000}
                />
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex-1 rounded-full" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  size="lg"
                  className="flex-1 rounded-full"
                  disabled={!formData.bedrooms || !formData.bathrooms}
                  onClick={() => setStep(3)}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Almost done!</h2>
                <p className="text-muted-foreground">Enter your contact details to receive your quote.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={100}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={255}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(305) 555-1234"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Quote Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="text-foreground font-medium">
                      {services.find(s => s.id === formData.service)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frequency:</span>
                    <span className="text-foreground font-medium">
                      {frequencies.find(f => f.id === formData.frequency)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="text-foreground font-medium">
                      {formData.bedrooms} bed, {formData.bathrooms} bath
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex-1 rounded-full" type="button" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button size="lg" className="flex-1 rounded-full" type="submit">
                  Get My Quote
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default Quote;
