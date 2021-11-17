import { useEffect, useState } from "react";
import MyChart from "./components/MyChart/MyChart";

function App() {
  // fetching chart data
  useEffect(() => {
    fetch('https://api.coincap.io/v2/assets/?limit=5')
      .then(response => response.json())
      .then(data => {
        setChartData({
          labels: data.data.map((crypto) => crypto.name),
          datasets: [
            {
              label: "Price in USD",
              data: data.data.map((crypto) => crypto.priceUsd),
              backgroundColor: [
                "#ffbb11",
                "#C0C0C0",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ]
            }
          ]
        });
      });
  }, []);

  // setting state for chart data
  const [chartData, setChartData] = useState({});

  return (
    <MyChart chartData={chartData} />
  )
}

export default App;