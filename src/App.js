import {useState,useEffect} from "react"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './dashboard/pages/Dashboard';

function App() {

  const [infoState,setInfoState] = useState(
    [
      {
        "date": "22 Feb 2021",
        "product":"Jordan 11 Retro Jubilee",
        "size":"9.0",
        "website":"Footlocker UK",
        "peice": "$211"

    },
    {
        "date": "22 Feb 2021",
        "product":"Jordan 6 Retro Carmine (2021)",
        "size":"10",
        "website":"Footlocker UK",
        "peice": "$211"

    },
    {
        "date": "22 Feb 2021",
        "product":"Jordan 6 Retro Carmine (2021)",
        "size":"9.0",
        "website":"Footlocker UK",
        "peice": "$252"

    },
    {
        "date": "22 Feb 2021",
        "product":"Jordan 6 Retro Carmine (2021)",
        "size":"9.0",
        "website":"Footlocker UK",
        "peice": "$211"

    },
    {
        "date": "22 Feb 2021",
        "product":"Jordan 6 Retro Carmine (2021)",
        "size":"9.0",
        "website":"Footlocker UK",
        "peice": "$211"

    },
    {
        "date": "22 Feb 2021",
        "product":"Jordan 6 Retro Carmine (2021)",
        "size":"9.0",
        "website":"Footlocker UK",
        "peice": "$211"

    },
    {
        "date": "22 Feb 2021",
        "product":"Jordan 6 Retro Carmine (2021)",
        "size":"9.0",
        "website":"Footlocker UK",
        "peice": "$252"

    },
    {
        "date": "22 Feb 2021",
        "product":"Jordan 6 Retro Carmine (2021)",
        "size":"9.0",
        "website":"Footlocker UK",
        "peice": "$211"

    }
    
  ])

  
  return (
    <div className="container-fluid">
        <Dashboard info={infoState}/>
    </div>
  );
}

export default App;
