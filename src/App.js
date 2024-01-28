import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App=()=> {
  const pageSize = 6;
 
 
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress} 
      />
          <Routes>
            <Route exact key="home" path="/" element={<News setProgress={setProgress} pageSize={pageSize} category="general" /> }> </Route>
            <Route exact key="business" path="/business" element={<News setProgress={setProgress} pageSize={pageSize} category="business" />}>  </Route>
            <Route exact key="entertainment" path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} category="entertainment" />}>  </Route>
            <Route exact key="general" path="/general" element={<News setProgress={setProgress} pageSize={pageSize} category="general" />}>  </Route>
            <Route exact key="health" path="/health" element={<News setProgress={setProgress} pageSize={pageSize} category="health" />}>  </Route>
            <Route exact key="science" path="/science" element={<News setProgress={setProgress} pageSize={pageSize} category="science" />}>  </Route>
            <Route exact key="sports" path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} category="sports" />}>  </Route>
            <Route exact key="technology" path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} category="technology" />}>  </Route>
          </Routes> 
        </Router>
      </div>
    )

}

export default App
