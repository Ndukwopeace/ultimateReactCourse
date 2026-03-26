import {StrictMode,} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './styles.css'
import App from './App.jsx'
import StarRating from "./StarRating.jsx";
import TextExpander from "./TextExpander.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
