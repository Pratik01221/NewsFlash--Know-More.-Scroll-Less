import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<News country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="general" />} />
        <Route exact path="/business"
          element={<News key="business" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="business" />}
        />
        <Route exact
          path="/entertainment"
          element={<News key="entertainment" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="entertainment" />}
        />
        <Route exact
          path="/health"
          element={<News key="health" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="health" />}
        />
        <Route exact
          path="/science"
          element={<News key="science" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="science" />}
        />
        <Route exact
          path="/sports"
          element={<News key="sports" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="sports" />}
        />
        <Route exact
          path="/technology"
          element={<News key="technology" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="technology" />}
        />
        <Route exact
          path="/sports"
          element={<News key="sports" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="sports" />}
        />
        <Route exact
          path="/technology"
          element={<News key="technology" country="us" apiKey="ffb31b1f8cab4624abb72f6a6c81ca6a" category="technology" />}
        />
      </Routes>

    </Router>
  )
}

export default App
