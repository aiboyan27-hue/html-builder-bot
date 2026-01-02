import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isBefore, isToday, startOfDay } from "date-fns";

interface DateTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: Date, time: string) => void;
  selectedDate?: Date;
  selectedTime?: string;
}

const timeSlots = ["09:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"];

const DateTimeModal = ({ isOpen, onClose, onSelect, selectedDate, selectedTime }: DateTimeModalProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [step, setStep] = useState<"date" | "time">("date");
  const [tempDate, setTempDate] = useState<Date | undefined>(selectedDate);

  if (!isOpen) return null;

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get the day of week the month starts on (0 = Sunday)
  const startDay = monthStart.getDay();
  
  // Create padding for days before the month starts
  const paddingDays = Array.from({ length: startDay }, (_, i) => null);

  const today = startOfDay(new Date());

  const handleDateClick = (date: Date) => {
    setTempDate(date);
    setStep("time");
  };

  const handleTimeClick = (time: string) => {
    if (tempDate) {
      onSelect(tempDate, time);
      onClose();
    }
  };

  const handleFirstAvailable = () => {
    // Find first available date (today or next day)
    const firstAvailable = isBefore(today, new Date()) ? new Date() : today;
    setTempDate(firstAvailable);
    setStep("time");
  };

  const handleBackToCalendar = () => {
    setStep("date");
  };

  const nextMonth = addMonths(currentMonth, 1);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl border border-border max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {step === "date" ? (
          <>
            {/* Date Selection Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-[hsl(210,29%,24%)]">Select date</h2>
              <button onClick={onClose} className="text-red-500 hover:text-red-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Month Navigation */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[hsl(210,29%,24%)]">
                    {format(currentMonth, "MMMM yyyy")}
                  </span>
                  <span className="text-muted-foreground">
                    {format(nextMonth, "MMMM yyyy")}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>

                <Button
                  onClick={handleFirstAvailable}
                  className="bg-[hsl(45,93%,55%)] hover:bg-[hsl(45,93%,45%)] text-[hsl(210,29%,24%)] font-medium"
                >
                  First Available
                </Button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="py-2 text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                
                {paddingDays.map((_, idx) => (
                  <div key={`pad-${idx}`} className="py-3" />
                ))}
                
                {daysInMonth.map((day) => {
                  const isPast = isBefore(day, today) && !isToday(day);
                  const isCurrentDay = isToday(day);
                  
                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => !isPast && handleDateClick(day)}
                      disabled={isPast}
                      className={`py-3 text-sm rounded-lg transition-colors ${
                        isPast
                          ? "text-muted-foreground/40 cursor-not-allowed"
                          : isCurrentDay
                          ? "text-[hsl(195,53%,37%)] font-bold hover:bg-muted"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {format(day, "dd")}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Time Selection Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <button
                onClick={handleBackToCalendar}
                className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Calendar
              </button>
              
              <div className="text-center">
                <h2 className="text-xl font-bold text-[hsl(210,29%,24%)]">Select Arrival Window</h2>
                {tempDate && (
                  <p className="text-sm text-muted-foreground">
                    {format(tempDate, "EEE, MMM d")}
                  </p>
                )}
              </div>
              
              <button onClick={onClose} className="text-red-500 hover:text-red-600">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Time Slots */}
            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeClick(time)}
                    className={`px-6 py-3 border rounded-lg text-sm font-medium transition-colors ${
                      selectedTime === time
                        ? "bg-[hsl(210,29%,24%)] text-white border-[hsl(210,29%,24%)]"
                        : "border-border hover:border-[hsl(210,29%,24%)] text-foreground"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DateTimeModal;
