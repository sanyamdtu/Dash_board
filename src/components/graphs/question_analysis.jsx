import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

var Chart = (props) => {
  var state = {
    chartData: {
      labels: ["Easy", "Medium", "Hard"],
      datasets: [
        {
          data: [60, 20, 20],
          backgroundColor: [
            "rgb(0, 204, 122)",
            "rgb(255, 153, 0)",
            "rgb(255, 92, 51)",
          ],
        },
      ],
    },
  };
  return (
    <div className="chart answer col-lg-4">
      <Pie
        data={state.chartData}
        options={{
          maintainAspectRatio: false,
          animation: {
            animateRotate: true,
          },
          title: {
            display: props.displayTitle,
            text: "Question Analysis",
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
};
Chart.defaultProps = {
  displayTitle: true,
  displayLegend: false,
  legendPosition: "right",
  location: "City",
};
export default Chart;
