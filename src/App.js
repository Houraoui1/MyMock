import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { GetfromData } from "./redux/action/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/leads`
        );
        const data = dispatch(GetfromData(response.data)); 
        console.log(data, "hello");
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
