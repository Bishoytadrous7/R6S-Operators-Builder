import './App.css';
import OperatorDetail from './pages/OperatorDetail';
import { useRoutes } from 'react-router-dom'
import ReadOperators from './pages/ReadOperators'
import CreateOperators from './pages/CreateOperators'
import EditOperators from './pages/EditOperators'
import CrewmateDetail from './components/CrewmateDetail';
import { Link } from 'react-router-dom'


const App = () => {
 
  let element = useRoutes([
    {
      path:"/crewmate/:id",
      element: <CrewmateDetail />
    },
    {
      path: "/",
      element:<ReadOperators/>
    },
    {
      path:"/edit/:id",
      element: <EditOperators />
    },
    {
      path:"/new",
      element: <CreateOperators />
    },
    {
    path: "/operator/:id",
    element: <OperatorDetail />
    }
  ]);

  return ( 
    <div className="App">
      <div className="header">
        <h1>🎮 Rainbow Six Seige Operators</h1>
        <Link to="/"><button className="headerBtn"> View Operators 👀 </button></Link>
        <Link to="/new"><button className="headerBtn"> Add Operator ➕ </button></Link>
      </div>
      {element}
    </div>
  );
}
  

export default App
