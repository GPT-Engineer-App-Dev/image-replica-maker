import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Flex>
        <Navbar />
        <Box flex="1">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/dashboards" element={<Dashboard />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;