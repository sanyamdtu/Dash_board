import React from "react";
import { Bar } from "react-chartjs-2";
function Analytics(props) {
  var state = {
    chartData: {
      labels: ["Easy", "Medium", "Hard"],
      datasets: [
        {
          backgroundColor: [
            "rgb(0, 204, 122)",
            "rgb(255, 153, 0)",
            "rgb(255, 92, 51)",
          ],
          data: [2.5, 1.25, 1.25],
        },
      ],
    },
  };
  return (
    <div className="chart answer col-lg-4">
      <Bar
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
          title: {
            display: props.displayTitle,
            text: "Analytics Based on difficulty",
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
          },
        }}
      />
    </div>
  );
}
Analytics.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "right",
};
export default Analytics;
