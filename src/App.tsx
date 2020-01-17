import React from "react";

import { Footer } from "./components/Footer/Footer";
import { AppLayout } from "./ui/Layout/Layout";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";

const App: React.FC = () => {
  return (
    <AppLayout>
      <AuthProvider />

      <Footer />
    </AppLayout>
  );
};

export default App;
