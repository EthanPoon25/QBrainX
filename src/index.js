// Optional: Provided for convenience if you export this as a CRA/Vite project.
// Not used by the v0 preview. In CRA/Vite, import './app.css' inside app.js.
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app.js"

const root = createRoot(document.getElementById("root"))
root.render(<App />)
