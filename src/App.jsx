import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const pageSize = 12;
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<News country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="general" pageSize={6} />} />
        <Route exact path="/business"
          element={<News key="business" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="business" pageSize={6} />}
        />
        <Route exact
          path="/entertainment"
          element={<News key="entertainment" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="entertainment" pageSize={6} />}
        />
        <Route exact
          path="/health"
          element={<News key="health" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="health" pageSize={6} />}
        />
        <Route exact
          path="/science"
          element={<News key="science" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="science" pageSize={6} />}
        />
        <Route exact
          path="/sports"
          element={<News key="sports" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="sports" pageSize={6} />}
        />
        <Route exact
          path="/technology"
          element={<News key="technology" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="technology" pageSize={6} />}
        />
        <Route exact
          path="/sports"
          element={<News key="sports" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="sports" pageSize={6} />}
        />
        <Route exact
          path="/technology"
          element={<News key="technology" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="technology" pageSize={6} />}
        />
      </Routes>

    </Router>
  )
}

export default App
