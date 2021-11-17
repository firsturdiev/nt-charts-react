import { Bar } from 'react-chartjs-2';

function MyChart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Cryptocurrency prices"
          },
          legend: {
            display: true,
            position: "bottom"
          }
        }
      }}
    />
  );
}

export default MyChart;