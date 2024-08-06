import React, { useState } from 'react';
import rasm1 from './images/1.jpg'
import rasm2 from './images/2.jpg'
import rasm3 from './images/3.jpg'
import rasm4 from './images/4.jpg'


const Datar = () => {
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

export default Datar;