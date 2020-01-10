import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppLayout } from "./components/Layout";
import { AuthProvider } from "./components/AuthProvider";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Header />

      <main>
        <AuthProvider />
      </main>

      <Footer />
    </AppLayout>
  );
};

export default App;
