// import React, { Component } from 'react'
// import "./App.css"

// export default class App extends Component {
//   state = {
//     addClass: [],
//   }

//   handleClick = (index) => {
//     this.setState({ addClass: index })
//   }

//   render() {
//     return (
//       <div className='disp'>
//         <div
//           className={`cardOne ${this.state.addClass === 0 ? 'hover' : ''}`}
//           onClick={() => this.handleClick(0)}
//         >
//           <h2>BMW</h2>
//         </div>
//         <div
//           className={`cardOne ${this.state.addClass === 1 ? 'hover' : ''}`}
//           onClick={() => this.handleClick(1)}
//         >
//           <h2>Rolls Royce</h2>
//         </div>
//         <div
//           className={`cardOne ${this.state.addClass === 3 ? 'hover' : ''}`}
//           onClick={() => this.handleClick(3)}
//         >
//           <h2>Mercedes</h2>
//         </div>
//         <div
//           className={`cardOne ${this.state.addClass === 4 ? 'hover' : ''}`}
//           onClick={() => this.handleClick(4)}
//         >
//           <h2>Lamborghini</h2>
//         </div>
//         <div
//           className={`cardOne ${this.state.addClass === 5 ? 'hover' : ''}`}
//           onClick={() => this.handleClick(5)}
//         >
//           <h2>chevrolet</h2>
//         </div>
//       </div>
//     )
//   }
// }
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <input type='text' name='' placeholder='name'/>
//       <input type='text' name='' placeholder='name'/>
//       <input type='text' name='' placeholder='name'/>
//     </div>
//   )
// }

// export default App;
// import React from 'react'

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react';
// import './App.css'
// import { IoCarSport } from "react-icons/io5";

// const CarNumberGenerator = () => {
//   const [region, setRegion] = useState('60');
//   const [oneLetter, setOneLetter] = useState('Z');
//   const [threeNumbers, setThreeNumbers] = useState('777');
//   const [twoLetters, setTwoLetters] = useState('ZZ');
//   const [showNumbers, setShowNumbers] = useState(false);
//   const [likedNum, setLikedNum] = useState([]);

//   const regionNumbers = ['01', '02', '07', '09', 10, 20, 30, 40, 50, 60, 70, 80, 90];
//   const oneLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];

//   const generateCarNumbers = () => {
//     const selectedRegion = regionNumbers[Math.trunc(Math.random() * regionNumbers.length)].toString();
//     setRegion(selectedRegion);
  
//     if (selectedRegion === '60') {
//       setThreeNumbers(String(Math.trunc(Math.random() * 899) + 100));
//     } else {
//       setThreeNumbers(String(Math.trunc(Math.random() * 120) + 10).padStart(3, '0'));
//     }
  
//     setOneLetter(oneLetters[Math.trunc(Math.random() * 2)].toString());
  
//     const firstLetterIndex = Math.trunc(Math.random() * 12);
//     const secondLetterIndex = Math.trunc(Math.random() * 12);
  
//     setTwoLetters(`${oneLetters[firstLetterIndex]}${oneLetters[secondLetterIndex]}`.slice(0, 2));
  
//     setShowNumbers(true);
  
//     const currentNumber = `${selectedRegion}${oneLetter}${threeNumbers}${twoLetters}`;
//     if (likedNum.includes(currentNumber)) {
//       alert('You already have this number!');
//     }
//   };

//   const likeNumber = () => {
//     const currentNumber = `${region}${oneLetter}${threeNumbers}${twoLetters}`;
//     if (likedNum.includes(currentNumber)) {
//       alert('You already have this number!');
//     } else {
//       setLikedNum([...likedNum, currentNumber]);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <h2>Liked numbers:</h2>
//         <h1>{likedNum.join(', ')}</h1>
//       </div>
//       <div className='bom'>
//         <button className='bor' onClick={likeNumber}>Like number</button> 
//       </div>
//       <button className="btn" onClick={generateCarNumbers}>
//         Car numbers
//       </button>
//       <div className="container">
//         {showNumbers && (
//           <>
//             <h4 className="region div">{region}</h4>
//             <h4 className="oneLetter div">{oneLetter}</h4>
//             <h4 className="threeNumbers div">{threeNumbers}</h4>
//             <h4 className="twoLetters div">{twoLetters}</h4>
//           </>
//         )}
//       </div>
//       <div>
//         <h2>BMW</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in laudantium dolor ex incidunt repudiandae
//           debitis, doloremque nesciunt deserunt quis maiores soluta ut. Et pariatur recusandae, corporis aperiam
//           voluptatem hic debitis accusantium reprehenderit expedita quos reiciendis, fuga in esse commodi.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CarNumberGenerator;
// import React, { useEffect, useState } from 'react';
// import './App.css';


// const App = () => {
//   const [activeRed, setActiveRed] = useState(true);
//   const [activeOrange, setActiveOrange] = useState(false);
//   const [activeGreen, setActiveGreen] = useState(false);
//   const [timeRed, setTimeRed] = useState();
//   const [timeOrange, setTimeOrange] = useState();
//   const [timeGreen, setTimeGreen] = useState();

//   const trafficLights = () => {
//     setTimeout(() => {
//       setActiveRed(true);
//       setActiveOrange(false);
//       setActiveGreen(false);
//       setTimeRed(3);
//       setTimeOrange()
//       setTimeGreen()
//     }, 0);
//     setTimeout(() => {
//       setActiveRed(false);
//       setActiveOrange(true);
//       setActiveGreen(false);
//       setTimeOrange(3);
//       setTimeRed()
//       setTimeGreen()
//     }, 3000);
//     setTimeout(() => {
//       setActiveRed(false);
//       setActiveOrange(false);
//       setActiveGreen(true);
//       setTimeGreen(3);
//       setTimeOrange()
//       setTimeRed()
//     }, 6000);
//   };

//   useEffect(() => {
//     trafficLights();

//     const interval = setInterval(() => {
//       trafficLights();
//     }, 9000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       if (timeRed === 1 && activeRed) {
//         setTimeRed()
//         setTimeOrange(3)
//       } else if (timeOrange === 1 && activeOrange) {
//         setTimeOrange()
//         setTimeGreen(3)
//       } else if (timeGreen === 1 && activeGreen) {
//         setTimeGreen()
//         setTimeRed(3)
//       } else if (timeRed > 0 && activeRed) {
//         setTimeRed((prevTime) => prevTime - 1)
//     } else if (timeOrange > 0 && activeOrange) {
//         setTimeOrange((prevTime) => prevTime - 1)
//     } else if (timeGreen > 0 && activeGreen) {
//         setTimeGreen((prevTime) => prevTime - 1)
//       }
//     }, 1000);

//     return () => {
//       clearInterval(countdownInterval);
//     };
//   }, [timeRed, timeOrange, timeGreen, activeRed, activeOrange, activeGreen]);

//   return (
//     <div>
//       <div className="traffic">
//         <div className={activeRed ? 'red active' : 'red'}>
//           {timeRed}
//         </div>
//         <div className={activeOrange ? 'orange active' : 'orange'}>
//           {timeOrange}
//         </div>
//         <div className={activeGreen ? 'green active' : 'green'}>
//           {timeGreen}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useEffect, useState } from 'react'
// import './App.css'
// import Car from './images/2.jpg'


// const App = () => {
//   const [activeRed,setActiveRed]=useState(false)
//   const [activeOrange,setActiveOrange]=useState(false)
//   const [activeGreen,setActiveGreen]=useState(false)
//   let [timeRed,setTimeRed]=useState('')
//   let [timeOrange,setTimeOrange]=useState('')
//   let [timeGreen,setTimeGreen]=useState('')
//   const [goCar,setGoCar]=useState(false)

//   const trafficLights =()=>{
// setTimeout(()=>{
//   setActiveRed(true)
//   setTimeOrange(false)
//   setActiveGreen(false)
//   let remainingRedTime=3
//   setInterval(()=>{
//     if(remainingRedTime>=1){
//       remainingRedTime--
//       setTimeRed(remainingRedTime)
//     }
//   },999)
//   setTimeRed(remainingRedTime)
//   setTimeOrange('')
//   setTimeGreen('')
// },0)



// setTimeout(()=>{
//   setActiveRed(false)
//   setTimeOrange(true)
//   setActiveGreen(false)
//   let remainingOrangeTime=3
//   setInterval(()=>{
//     if(remainingOrangeTime>=1){
//       remainingOrangeTime--
//       setTimeRed(remainingOrangeTime)
//     }
//   },999)
//   setTimeRed('')
//   setTimeOrange(remainingOrangeTime)
//   setTimeGreen('')
// },3010)
// setTimeout(()=>{
//   setActiveRed(false)
//   setTimeOrange(false)
//   setActiveGreen(true)
//   let remainingGreenTime=3
//   setInterval(()=>{
//     if(remainingGreenTime>=1){
//       remainingGreenTime--
//       setTimeRed(remainingGreenTime)
//     }
//   },999)
//   setTimeRed('')
//   setTimeOrange('')
//   setTimeGreen(remainingGreenTime)
// },6000)
//   }

//   useEffect(()=>{
//     trafficLights()
// setInterval(()=>{
//   trafficLights()
// },9000)
//   },[])
//   return (
//     <div className='way'>
// <img width={200} className={goCar?'go':''} src={Car}/>
// <div className='traffic'>
//   <div className={activeRed?'red active':'red'}>{timeRed}</div>
//   <div className={activeOrange?'orange active':'orange'}>{timeOrange}</div>
//   <div className={activeGreen?'green active':'green'}>{timeGreen}</div>

// </div>
//     </div>
//   )
// }

// export default App
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import carImage from './images/1.jpg'

// function App() {
//   const [light, setLight] = useState('red'); 
//   const [timer, setTimer] = useState(3); 
//   const [carPosition, setCarPosition] = useState(0); 

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 1 ? prevTimer - 1 : 3));
//     }, 1000);

//     const lightInterval = setInterval(() => {
//       setLight((prevLight) => {
//         switch (prevLight) {
//           case 'red':
//             return 'yellow';
//           case 'yellow':
//             return 'green';
//           case 'green':
//             return 'red';
//           default:
//             return 'red';
//         }
//       });
//     }, 3000);

//     return () => {
//       clearInterval(timerInterval);
//       clearInterval(lightInterval);
//     };
//   }, []);

//   useEffect(() => {
//     const carInterval = setInterval(() => {
//       if (light === 'green'){
//         setCarPosition((prevPosition) => prevPosition + 7); 
//       }
//     }, 100);

//     return () => clearInterval(carInterval);
//   }, [light]);

//   return (
//     <div className="App">
//       <div className="traffic-light">
//         <div className={`light red ${light === 'red' ? 'active' : ''}`}>{light === 'red' && timer}</div>
//         <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}>{light === 'yellow' && timer}</div>
//         <div className={`light green ${light === 'green' ? 'active' : ''}`}>{light === 'green' && timer}</div>
//       </div>
//       <div className="road">
//         <div className="car" style={{ left: `${carPosition}px` }}>
//           <img width={400} height={150}  src={carImage} alt="car" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from 'react';
// import { CircleLoader } from 'react-spinners';
// import './App.css'
// import Cars from './images/3.jpg'

// const App = () => {
//   const [loader, setLoader] = useState(true)

//   useEffect(() => {
//     setTimeout(() => {
//       setLoader(false)
//     }, 2000);
//   })


//   return (
//     <div>
//           {loader ? <div className='loader'>
//         <CircleLoader className='spinner' size={250} color="#36d7b7" />
//       </div> : ''}
//       <h1>Hello</h1>
//       <img width={400} src={Cars}/>
//     </div>
//   );
// };

// export default App;
// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import Cards from './Cards'
// import { GiLion } from "react-icons/gi";

// const AppContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const App = () => {
//   const[zoos, setZoos] = useState([])

//   useEffect(() => {
//     fetch('https://api.api-ninjas.com/v1/animals?X-Api-Key=NeJxl4tKxgnjCmQXn7z23w==iqSmKHS3L8JgPdPa&name=tiger')
//       .then(response => response.json())
//       .then(data =>setZoos(data))
//   },[])

//   return (
//     <AppContainer>
//       <Cards zoos={zoos} />
//     </AppContainer>
//   )
// }

// export default App
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { GiLion } from "react-icons/gi";
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
// import "./App.css";

// const Container = styled.div`
//   display: flex;  
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const Navbar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   background-color: #333;
//   padding: 10px 20px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   position: relative;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// const NavItems = styled.div`
//   display: flex;
//   gap: 20px;

//   @media (max-width: 900px) {
//     display: ${props => props.show ? 'flex' : 'none'};
//     flex-direction: column;
//     width: 100%;
//   }
// `;

// const NavItem = styled.div`
//   position: relative;
//   color: #fff;
//   padding: 10px 20px;
//   cursor: pointer;
//   &:hover > div {
//     display: block;
//     margin-left: 100px;
//     margin-top: -40px;
//   }
// `;

// const Dropdown = styled.div`
//   display: none;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #444;
//   min-width: 160px;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   z-index: 1;
//   > div {
//     color: #fff;
//     padding: 10px 20px;
//     cursor: pointer;
//     &:hover {
//       background-color: #555;
//       margin-left: 20px;
//     }
//   }
// `;

// const BurgerMenu = styled(FaBars)`
//   display: none;
//   color: white;
//   cursor: pointer;
//   @media (max-width: 900px) {
//     display: block;
//   }
// `;
// const CloseMenu = styled(FaTimes)`
//   display: none;
//   color: white;
//   cursor: pointer;
//   @media (max-width: 900px) {
//     display: block;
//   }
// `;


// const SearchInput = styled.input`
//   padding: 10px;
//   margin: 20px 0;
//   width: 300px;
//   font-size: 1em;
//   border: 1px solid pink;
//   border-radius: 15px;
//   color: red;
  
// `;

// const CardsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// const Card = styled.div`
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 20px;
//   margin: 10px;
//   width: 250px;
//   box-shadow:5px 5px 5px blue;
// `;

// const Name = styled.h2`
//   font-size: 1.5em;
//   margin: 10px 0;
// `;

// const Info = styled.p`
//   color: #666;
// `;

// const convertSpeedToKmh = (mph) => {
//   const speed = parseFloat(mph);
//   if (isNaN(speed)) return 'None';
//   return (speed * 1.60934).toFixed(2) + ' km/h';
// };

// const AnimalCard1 = ({ name, speed, location, diet, lifespan, favoriteFood }) => (
//   <Card>
//     <Name>{name}</Name>
//     {speed && <Info><strong>Top Speed:</strong> {convertSpeedToKmh(speed)}</Info>}
//     {location && <Info><strong>Location:</strong> {location}</Info>}
//     {diet && <Info><strong>Diet:</strong> {diet}</Info>}
//     {lifespan && <Info><strong>Lifespan:</strong> {lifespan}</Info>}
//     {favoriteFood && <Info><strong>Favorite Food:</strong> {favoriteFood}</Info>}
//   </Card>
// );

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [animals, setAnimals] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [showMenu, setShowMenu] = useState(false);

  
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const fetchAnimals = (animalName) => {
//     if (animalName === '') return;

//     setLoading(true);
//     setError('');

//     fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
//       headers: { 'X-Api-Key': 'x45QF3oxh61bG3NLnPheGA==lrit03jpMrzPHUIG' }
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Ma`lumot Topilmadi');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setAnimals(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       fetchAnimals(searchTerm);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [searchTerm]);

//   return (
//     <Container>
//       <Navbar>
//       <GiLion style={{color:'gold',fontSize:'40px'}} />
//       <SearchInput 
//         type="text" 
//         placeholder="Animals Name" 
//         value={searchTerm} 
//         onChange={handleSearchChange}
//       />
// {showMenu?      <CloseMenu onClick={()=> setShowMenu(!showMenu)}/>:
//         <BurgerMenu onClick={() => setShowMenu(!showMenu)} />}
//         <NavItems show={showMenu}>
//           <NavItem>Home</NavItem>
//           <NavItem>
//             Animals
//             <Dropdown>
//               <div onClick={() => fetchAnimals('Bear')}>Bear</div>
//               <div onClick={() => fetchAnimals('Lion')}>Lion</div>
//               <div onClick={() => fetchAnimals('Tiger')}>Tiger</div>
//             </Dropdown>
//           </NavItem>
//           <NavItem>About</NavItem>
//           <NavItem>Contact</NavItem>
//         </NavItems>
    
//       </Navbar>
     
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       <CardsContainer>
//         {animals.map((animal) => (
//           <AnimalCard1 
//             key={animal.name}
//             name={animal.name}
//             speed={animal.characteristics.top_speed}
//             location={animal.locations.join(', ')}
//             diet={animal.characteristics.diet}
//             lifespan={animal.characteristics.lifespan}
//             favoriteFood={animal.characteristics.favorite_food}
//           />
//         ))}
//       </CardsContainer>
//     </Container>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from "react-icons/fa";
import { GiLion } from "react-icons/gi";
import "./App.css";

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.div`
  position: relative;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  &:hover > div {
    display: block;
    margin-left: 10px;
    margin-top: 0px;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  > div {
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: #555;
      margin-left: 20px;
    }

  }
`;

const BurgerMenu = styled(FaBars)`
  display: none;
  color: white;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

const CloseMenu = styled(FaTimes)`
  display: none;
  color: white;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  width: 300px;
  font-size: 1em;
  border: 1px solid green;
  border-radius: 15px;
  color: red;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2px;
  box-shadow:1px 1px 1px red
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const Info = styled.p`
  color: #666;
`;

const convertSpeedToKmh = (mph) => {
  const speed = parseFloat(mph);
  if (isNaN(speed)) return 'None';
  return (speed * 1.60934).toFixed(2) + ' km/h';
};

const AnimalCard1 = ({ name, speed, location, diet, lifespan, favoriteFood }) => (
  <Card>
    <Name>{name}</Name>
    {speed && <Info><strong>Top Speed:</strong> {convertSpeedToKmh(speed)}</Info>}
    {location && <Info><strong>Location:</strong> {location}</Info>}
    {diet && <Info><strong>Diet:</strong> {diet}</Info>}
    {lifespan && <Info><strong>Lifespan:</strong> {lifespan}</Info>}
    {favoriteFood && <Info><strong>Favorite Food:</strong> {favoriteFood}</Info>}
  </Card>
);

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchAnimals = (animalName) => {
    if (animalName === '') return;

    setLoading(true);
    setError('');

    fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
      headers: { 'X-Api-Key': 'x45QF3oxh61bG3NLnPheGA==lrit03jpMrzPHUIG' }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bu narsa Apida mavjud emas');
        }
        return response.json();
      })
      .then((data) => {
        setAnimals(data);
        setLoading(false);
        setShowMenu(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchAnimals(searchTerm);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchTerm]);

  return (
    <Container>
      <Navbar>
      <GiLion style={{color:'gold',fontSize:'40px'}} />
      <SearchInput 
        type="text" 
        placeholder="Animals Name" 
        value={searchTerm} 
        onChange={handleSearchChange}
      />
        {showMenu ? 
          <CloseMenu onClick={() => setShowMenu(!showMenu)} /> : 
          <BurgerMenu onClick={() => setShowMenu(!showMenu)} />
        }
        <NavItems show={showMenu}>
          <NavItem>Home</NavItem>
          <NavItem>
            Animals
            <Dropdown style={{marginLeft:'80px',textAlign:'center'}}>
              <div onClick={() => fetchAnimals('Bear')}>Bear</div>
              <div onClick={() => fetchAnimals('Lion')}>Lion</div>
              <div onClick={() => fetchAnimals('Tiger')}>Tiger</div>
            </Dropdown>
          </NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </NavItems>
      </Navbar>
     
      {loading && <p>Kutib turing</p>}
      {error && <p>{error}</p>}
      <CardsContainer>
        {animals.map((animal) => (
          <AnimalCard1 
            key={animal.name}
            name={animal.name}
            speed={animal.characteristics.top_speed}
            location={animal.locations.join(', ')}
            diet={animal.characteristics.diet}
            lifespan={animal.characteristics.lifespan}
            favoriteFood={animal.characteristics.favorite_food}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default App;


