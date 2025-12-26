import { useState } from "react";
import { 
  Refrigerator, 
  Snowflake, 
  CookingPot, 
  Utensils, 
  WashingMachine, 
  Archive, 
  Shirt, 
  DoorOpen, 
  GalleryHorizontal,
  Grid2X2,
  SquareAsterisk,
  Fence,
  Layers,
  Wind,
  Fan,
  Blinds
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const addOns = [
  { id: "fridge", label: "Intérieur du frigo", icon: Refrigerator },
  { id: "freezer", label: "Intérieur du congélateur", icon: Snowflake },
  { id: "oven", label: "Intérieur du four", icon: CookingPot },
  { id: "dishes", label: "Vaisselle", icon: Utensils },
  { id: "dishwasher", label: "Intérieur du lave-vaisselle", icon: WashingMachine },
  { id: "cabinets", label: "Intérieur armoires/tiroirs", icon: Archive },
  { id: "laundry", label: "Linge et pliage", icon: Shirt },
  { id: "glass-doors-int", label: "Portes vitrées intérieures", icon: DoorOpen },
  { id: "glass-doors-ext", label: "Portes vitrées extérieures", icon: GalleryHorizontal },
  { id: "windows-int", label: "Fenêtres intérieures", icon: Grid2X2 },
  { id: "windows-ext", label: "Fenêtres extérieures", icon: SquareAsterisk },
  { id: "balcony", label: "Balcon sols & mobilier", icon: Fence },
  { id: "railing-glass", label: "Verre de rampe intérieur", icon: Layers },
  { id: "balcony-railing", label: "Rampe de balcon", icon: Fence },
  { id: "vents", label: "Bouches d'aération extérieures", icon: Wind },
  { id: "ceiling-fans", label: "Ventilateurs de plafond", icon: Fan },
  { id: "blinds", label: "Stores", icon: Blinds },
];

const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [otherText, setOtherText] = useState("");

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Options supplémentaires
        </h2>
        <p className="text-center text-muted-foreground mb-12 flex items-center justify-center gap-2">
          <Checkbox checked className="bg-primary border-primary" />
          Choisissez des options pour un nettoyage plus approfondi
        </p>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto">
          {addOns.map((addOn) => {
            const Icon = addOn.icon;
            return (
              <div 
                key={addOn.id}
                className="flex items-center gap-4 py-2"
              >
                <Checkbox 
                  id={addOn.id}
                  checked={selectedAddOns.includes(addOn.id)}
                  onCheckedChange={() => toggleAddOn(addOn.id)}
                  className="w-5 h-5"
                />
                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-background" />
                </div>
                <label 
                  htmlFor={addOn.id}
                  className="text-foreground cursor-pointer flex-1"
                >
                  {addOn.label}
                </label>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 max-w-4xl mx-auto mt-6">
          <span className="text-muted-foreground">Autre:</span>
          <Input 
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            placeholder=""
            className="flex-1 bg-background border-border rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AddOns;
