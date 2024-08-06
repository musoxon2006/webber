import React, { useState } from 'react';



const data = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    { id: 1, image: {rasm1} },
    { id: 2, image: {rasm2} },
    { id: 3, image: {rasm3} },
    { id: 4, image: {rasm4} },
  ];

  const handleCarClick = (carId) => {
    setSelectedCar(carId);
  };

  return (
    <div>
      {cars.map((car) => (
        <div
          key={car.id}
          className={`car ${selectedCar === car.id ? 'active' : ''}`}
          onClick={() => handleCarClick(car.id)}
        >
          <img className="image_target" src={car.image} alt="Car Image" />
        </div>
      ))}
    </div>
  );
};

export default data;