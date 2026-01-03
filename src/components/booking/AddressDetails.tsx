import { Info } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AddressDetailsProps {
  address: string;
  aptNo: string;
  city: string;
  state: string;
  zipcode: string;
  buildingName: string;
  onAddressChange: (value: string) => void;
  onAptNoChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onStateChange: (value: string) => void;
  onZipcodeChange: (value: string) => void;
  onBuildingNameChange: (value: string) => void;
  errors?: {
    address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };
}

const AddressDetails = ({
  address,
  aptNo,
  city,
  state,
  zipcode,
  buildingName,
  onAddressChange,
  onAptNoChange,
  onCityChange,
  onStateChange,
  onZipcodeChange,
  onBuildingNameChange,
  errors = {},
}: AddressDetailsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[hsl(195,53%,37%)] font-serif">
        Address Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium text-foreground">Address</label>
          <Input
            id="address"
            placeholder="Type Address"
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            className={`h-12 bg-background ${errors.address ? 'border-red-500' : 'border-border'}`}
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Apt. No.</label>
          <Input
            placeholder="#"
            value={aptNo}
            onChange={(e) => onAptNoChange(e.target.value)}
            className="h-12 bg-background border-border"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">City</label>
          <Input
            id="city"
            placeholder="City"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            className={`h-12 bg-background ${errors.city ? 'border-red-500' : 'border-border'}`}
          />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">State</label>
          <Input
            id="state"
            placeholder="State"
            value={state}
            onChange={(e) => onStateChange(e.target.value)}
            className={`h-12 bg-background ${errors.state ? 'border-red-500' : 'border-border'}`}
          />
          {errors.state && (
            <p className="text-sm text-red-500">{errors.state}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Zipcode/Postal code</label>
          <Input
            id="step2Zipcode"
            placeholder="Zipcode/Postal code"
            value={zipcode}
            onChange={(e) => onZipcodeChange(e.target.value)}
            className={`h-12 bg-background ${errors.zipcode ? 'border-red-500' : 'border-border'}`}
          />
          {errors.zipcode && (
            <p className="text-sm text-red-500">{errors.zipcode}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground flex items-center gap-2">
          Building Name
          <Info className="w-4 h-4 text-muted-foreground" />
        </label>
        <Input
          placeholder="Enter the name of your building"
          value={buildingName}
          onChange={(e) => onBuildingNameChange(e.target.value)}
          className="h-12 bg-background border-border"
        />
      </div>
    </div>
  );
};

export default AddressDetails;
