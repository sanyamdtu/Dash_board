import React from "react";
import { Doughnut } from "react-chartjs-2";
function Quiz_score() {
  return (
    <div className="chart answer col-lg-6">
      <Doughnut
        data={{
          labels: ["Easy", "Medium", "Hard"],
          datasets: [
            {
              backgroundColor: [
                "rgb(0, 204, 122)",
                "rgb(255, 153, 0)",
                "rgb(255, 92, 51)",
              ],
              borderColor: "#fff",
              data: [60, 20, 20],
            },
          ],
        }}
        options={{
          circumference: 1 * Math.PI,
          rotation: 1 * Math.PI,
          cutoutPercentage: 50,
          title: {
            display: true,
            text: "Quiz Score",
            fontSize: 25,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}

export default Quiz_score;
