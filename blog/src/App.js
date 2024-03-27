import Home from "./components/Home";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Bar } from 'react-chartjs-2';
import 'chart.js';
import 'react-chartjs-2'; 


function App() {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 30], // Example data values
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'], // Example colors
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  return (

  <>
 
    <div>
      <h2>Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>




  
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/create" element={<Create />} />
        </Routes>
     </Router>
     </>
    
  );
}

export default App;
