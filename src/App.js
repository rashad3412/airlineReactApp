export default function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

function NavBar() {
  return (
    <body>
      <div className="align-header">
        <header>
          <h1 id="logo">Airline Meez</h1>
          <nav>
            <ul>
              <li>Who Are We</li>
              <li>Plan Travel</li>
              <li>Travel Information</li>
              <li>Flight Schedule</li>
            </ul>
          </nav>
        </header>
      </div>
    </body>
  );
}
