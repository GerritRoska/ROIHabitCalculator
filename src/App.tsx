import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

```
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;
```

Adding footer component with share functionality.
```javascript
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

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

export default App;