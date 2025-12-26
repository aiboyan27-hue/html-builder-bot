import { Bed, Bath, UtensilsCrossed, Sofa, Home, Briefcase } from "lucide-react";
import { Check } from "lucide-react";

interface ChecklistItem {
  title: string;
  icon: React.ElementType;
  items: string[];
}

interface CleaningChecklistProps {
  checklist: ChecklistItem[];
}

const CleaningChecklist = ({ checklist }: CleaningChecklistProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Liste de vérification du nettoyage
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {checklist.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="bg-primary/10 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary rounded flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CleaningChecklist;
