import { Input } from "@/components/ui/input";

interface CustomerDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
}

const CustomerDetails = ({
  firstName,
  lastName,
  email,
  phone,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  errors = {},
}: CustomerDetailsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[hsl(195,53%,37%)] font-serif">
        Customer Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">First Name</label>
          <Input
            id="firstName"
            placeholder="Ex: James"
            value={firstName}
            onChange={(e) => onFirstNameChange(e.target.value)}
            className={`h-12 bg-background ${errors.firstName ? 'border-red-500' : 'border-border'}`}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Last Name</label>
          <Input
            id="lastName"
            placeholder="Ex: Lee"
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
            className={`h-12 bg-background ${errors.lastName ? 'border-red-500' : 'border-border'}`}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <Input
          id="step2Email"
          type="email"
          placeholder="Ex: example@xyz.com"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className={`h-12 bg-background ${errors.email ? 'border-red-500' : 'border-border'}`}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Phone No</label>
        <Input
          id="phone"
          type="tel"
          placeholder="Phone No."
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          className={`h-12 bg-background ${errors.phone ? 'border-red-500' : 'border-border'}`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone}</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
