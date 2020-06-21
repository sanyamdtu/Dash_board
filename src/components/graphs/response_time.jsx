import React from "react";
import { Line } from "react-chartjs-2";
function Response_time(props) {
  var state = {
    chartData: {
      labels: ["Easy", "Medium", "Hard"],
      datasets: [
        {
          data: [40, 10, 20],
          fill: false,
          backgroundColor: "violet",
        },
      ],
    },
  };
  return (
    <div className="chart answer col-lg-4">
      <Line
        data={state.chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  drawOnChartArea: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
              },
            ],
          },
          fill: false,
          animation: {
            animateRotate: true,
          },
          title: {
            display: props.displayTitle,
            text: "Response Time based on Difficulty",
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
          },
        }}
      ></Line>
    </div>
  );
}
Response_time.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "right",
};
export default Response_time;
