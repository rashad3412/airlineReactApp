import { useState } from "react";

const objAir = [
  {
    location: "Norfolk International",
    airportCode: 456,
    arrival: "8:00am",
  },
  {
    location: "Virgina Beach",
    airportCode: 753,
    arrival: "8:00am",
  },
];

export default function App() {
  const [airportInfo, setAirportInfo] = useState(objAir);
  // console.log(airportInfo);
  return (
    <div>
      <NavBar />
      <SloganAndImage />
      <AirPortInfo />
      <WhoAreWe whoarewe={airportInfo} />
      <PlanTravel plan={airportInfo} />
    </div>
  );
}

function AirPortInfo() {
  // Mapping over objAir to render on the page and taking items from ObjAir and destructing in ObjAirItem

  const Obj2 = objAir;

  return (
    <div>
      <ul>
        {Obj2.map((item) => (
          <ObjAirItem item={item} key={item.airportCode} />
        ))}
      </ul>
    </div>
  );
}

function ObjAirItem({ item }) {
  return (
    <div>
      <div className="items">
        {item.airportCode} {item.location} {item.arrival}
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <div className="align-header">
        <header>
          <div id="logo">
            <div id="logo2">
              <span>Air</span>
            </div>
            <span>A</span>
            <span>M</span>
          </div>
          <nav>
            <ul className="desc">
              <li>Who Are We</li>
              <li>Plan Travel</li>
              <li>Travel Information</li>
              <li>Flight Schedule</li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

function SloganAndImage() {
  return (
    <div>
      <div className="align-slogan">
        <h1 className="slogan ">
          <q>The Air in You</q>
        </h1>
      </div>
      <div className="align-img">
        <img className="airImg" src="airImg.jpg" alt="airPic" />
      </div>
    </div>
  );
}

function WhoAreWe({ whoarewe }) {
  return (
    <div>
      <div>
        <h3>
          <span>Who Are We</span>
        </h3>
      </div>
      <ul></ul>
      <div className="align-cards">
        <div className="card-container">
          <div id="carPic" className="card-display">
            <img className="cardImg" src="carImg.jpg" alt="carPic" />
          </div>
          <div id="bikePic" className="card-display">
            <img className="cardImg" src="bikeImg.jpg" alt="bikePic" />
          </div>
          <div className="card-display">
            <img
              id="roadPic"
              className="cardImg"
              src="roadImg.jpg"
              alt="roadPic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanTravel({ plan }) {
  console.log(plan);

  return (
    <div>
      <h3>
        <span>Plan Travel</span>
      </h3>
      <ul>
        {plan.map((item) => (
          <ObjAirItem item={item} key={item.airportCode} />
        ))}
      </ul>
      <div className="center-container">
        <div className="grid-container">
          <div>
            <img className="plannerImg" src="plannerImg.jpg" alt="plannerPic" />
            <span id="planning">Planning</span>
          </div>
          <div>Schedule</div>
          <div>People</div>
          <div>Where</div>
          <div>Luggage</div>
          <div>Hotels</div>
        </div>
      </div>
    </div>
  );
}
