import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          <button
            onClick={() =>
              loginWithRedirect({
                appState: {
                  returnTo: `/register`,
                },
              })
            }
          >
            Log in
          </button>
        ) : (
          <button onClick={() => logout()}>Log out</button>
        )}
      </header>
    </div>
  );
}

export default App;
