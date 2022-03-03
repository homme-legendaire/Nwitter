import { useState } from "react";
import { authService } from "./Router";
import RouterBase from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <RouterBase isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Switter</footer>
    </>
  );
}

export default App;
