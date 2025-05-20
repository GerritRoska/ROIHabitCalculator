
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="app-theme">
      <Suspense fallback={<p>Loading...</p>}>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
