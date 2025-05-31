import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { VoteProvider } from "./context/contextVote";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <VoteProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
   </VoteProvider>
  </StrictMode>
);
