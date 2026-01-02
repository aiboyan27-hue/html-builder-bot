import { useState } from "react";
import { Info, CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PaymentInfoProps {
  cardNumber: string;
  couponCode: string;
  onCardNumberChange: (value: string) => void;
  onCouponCodeChange: (value: string) => void;
  onApplyCoupon: () => void;
}

const PaymentInfo = ({
  cardNumber,
  couponCode,
  onCardNumberChange,
  onCouponCodeChange,
  onApplyCoupon,
}: PaymentInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-[hsl(195,53%,37%)] font-serif mb-2">
          Payment Information
        </h3>
        <p className="text-sm text-muted-foreground">
          The system places a routine pre-authorization hold 24 hours before your appointment.
          Your card is only officially charged <span className="underline">after</span> the cleaning has been completed
        </p>
      </div>

      {/* New Credit Card Option */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full border-4 border-[hsl(195,80%,50%)] bg-white" />
        <span className="text-sm font-medium text-foreground">New Credit Card</span>
      </div>

      {/* Card Input */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Add new card</label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
          </div>
          <Input
            placeholder="Card number"
            value={cardNumber}
            onChange={(e) => onCardNumberChange(e.target.value)}
            className="h-12 bg-background border-border pl-10 pr-20"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <Info className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Card Logos */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-6 bg-[#eb001b] rounded flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#f79e1b]/80 -mr-2" />
          </div>
          <div className="px-2 py-1 bg-[#1a1f71] rounded text-white text-[10px] font-bold">
            VISA
          </div>
          <div className="px-1 py-1 bg-[#ff5f00] rounded text-white text-[8px] font-bold">
            DISCOVER
          </div>
          <div className="px-1 py-1 bg-[#006fcf] rounded text-white text-[6px] font-bold leading-tight">
            AMERICAN<br/>EXPRESS
          </div>
          <div className="px-2 py-1 border rounded text-[8px] font-medium text-foreground flex items-center gap-1">
            Safe & Secure 🔒
          </div>
        </div>
      </div>

      {/* Coupon Code Section */}
      <div className="bg-[hsl(210,20%,96%)] rounded-lg p-4 space-y-4">
        <div className="border-b-2 border-[hsl(195,53%,37%)] pb-2">
          <span className="text-sm font-medium text-foreground">Coupon Code</span>
          <span className="text-sm text-muted-foreground ml-4">Gift Cards</span>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            Enter Coupon Code
            <Info className="w-4 h-4 text-muted-foreground" />
          </label>
          <div className="flex gap-3">
            <Input
              placeholder="Enter Coupon Code"
              value={couponCode}
              onChange={(e) => onCouponCodeChange(e.target.value)}
              className="h-12 bg-white border-border flex-1"
            />
            <Button
              onClick={onApplyCoupon}
              className="h-12 px-8 bg-[hsl(210,29%,24%)] hover:bg-[hsl(210,29%,20%)] text-white"
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
