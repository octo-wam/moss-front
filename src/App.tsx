import React from "react";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AuthProvider } from "./components/AuthProvider";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <AuthProvider />
      </div>

      <Footer />
    </div>
  );
};

export default App;
