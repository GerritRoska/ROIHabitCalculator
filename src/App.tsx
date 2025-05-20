import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { Footer } from "./components/ui/footer";

function Footer() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        console.log("Successfully shared!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <footer>
      <p>Footer Content</p>
      <button onClick={handleShare}>Share</button>
    </footer>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" enableSystem>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Footer />
        </>
      </Suspense>
    </ThemeProvider>
  );
}

async function shareResults(amount: number, years: number) {
  const text = `I saved $${amount.toLocaleString()} by optimizing my habits for ${years} years — try it yourself!`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My Investment Results',
        text,
        url: window.location.href
      });
    } catch (err) {
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  } else {
    navigator.clipboard.writeText(text);
    alert('Results copied to clipboard!');
  }
}

export default App;