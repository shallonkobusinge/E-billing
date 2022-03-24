import React from 'react';
import './App.css';
import Report from './views/report';
import TableHeader from './components/TableHeader';
import Navbar from './components/Navbar';
import GenerateReport from './views/generateToken';
// import "./assets/main.css"

function App() {
  const [showForm, setShowForm] = React.useState("token")

  return (
    <div>
      <Navbar>
        <div className=" flex justify-around mt-4 text-xl ">
          <button className="uppercase" onClick={() => setShowForm("token")}>Generate Token </button>
          <button className="uppercase" onClick={() => setShowForm("report")}>Get Report </button>
        </div>
        <div>
          {showForm === "token" && <GenerateReport setShowForm={setShowForm} />}
          {showForm === "report" && <Report setShowForm={setShowForm} showForm={showForm} />}
        </div>


      </Navbar>
    </div>
  )
}

export default App;
