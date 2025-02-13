import { useState } from "react";
import {Seat} from "./Seat/Seat";

import classes from "./map.module.css";

interface Price {
    standard?: number; // Цена для люкса и четвертого класса
  }

interface FourthClassProps {
  seats: { index: number; available: boolean }[] | undefined;
  isAdult: boolean;
  coach_id: string;
  price: Price;
  directionType: "туда" | "обратно";
}

export const FourthClass: React.FC<FourthClassProps> = ({ seats, isAdult, coach_id, directionType, price  }) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  // Генерация полного списка мест
  const allSeats = Array.from({ length: 62 }, (_, i) => ({
    index: i + 1,
    available: seats?.some((seat) => seat.index === i + 1 && seat.available) || false,
  }));

  const handleSeatClick = (seatNumber: number) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber) ? prev.filter((n) => n !== seatNumber) : [...prev, seatNumber]
    );
  };

  return (
    <div className={classes.fourth}>
      {allSeats.map((seat) => (
        <Seat
          key={seat.index}
          seatNumber={seat.index}
          isAvailable={seat.available}
          isSelected={selectedSeats.includes(seat.index)}
          carType={"fourth"}
          isAdult={isAdult}
          coach_id={coach_id}
          directionType={directionType}
          price={price}
          onClick={() => handleSeatClick(seat.index)}
        />
      ))}
    </div>
  );
};