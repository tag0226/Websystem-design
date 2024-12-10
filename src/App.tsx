import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnalyzeForm from './pages/analyze_form_page'
import Home from './pages/home'
import AllStoreAnalyzePage from './pages/all-store-analyze-page'
import { ShopAAnalysis } from './pages/shop-a-analysis'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze-form" element={<AnalyzeForm />} />
        <Route path="/all-store-analysis" element={<AllStoreAnalyzePage />} />
        <Route path="/shop-a-analysis" element={<ShopAAnalysis />} />
      </Routes>
    </Router >
  )
}

export default App
