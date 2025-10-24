import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure page loads from top on refresh
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

// Also handle the page load event
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById("root")!).render(<App />);
