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
  return (
    <div>
      <NavBar />
      <SloganAndImage />
      {/* <AirPortInfo /> */}
      <WhoAreWe />
    </div>
  );
}

function AirPortInfo() {
  // Mapping over objAir to render on the page and taking items from ObjAir and destructing in ObjAirItem
  return (
    <div>
      <ul>
        {objAir.map((item) => (
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

function WhoAreWe() {
  return (
    <div className="card-container">
      <div className="card-display">Story</div>
      <div className="card-display">Community</div>
      <div className="card-display">Industry</div>
    </div>
  );
}
