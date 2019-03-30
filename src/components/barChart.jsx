import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-annotation";

class WWWCharts extends Component {
  render() {
    const options = {
      legend: { display: false },
      title: {
        display: true,
        text: "Who is the best company in Izmir?"
      },
      annotation: {
        annotations: [
          {
            drawTime: "afterDatasetsDraw",
            responsive: true,
            legend: {
              position: "top"
            },
            title: {
              display: true,
              text: "Chart.js Bar Chart"
            },
            borderColor: "red",
            borderDash: [2, 2],
            borderWidth: 2,
            mode: "vertical",
            type: "line",
            value: 10,
            scaleID: "x-axis-0",
            label: {
              backgroundColor: "red",
              fontFamily: "sans-serif",
              fontSize: 10,
              fontStyle: "bold",
              fontColor: "#fff",
              textAlign: "center",
              xPadding: 4,
              yPadding: 4,
              cornerRadius: 4,
              position: "top",
              enabled: true,
              content: "Threshold"
            }
          }
        ]
      },
      maintainAspectRation: false
    };

    var data = {
      labels: ["Vestel", "Emakina", "Veri Park", "Witty", "OSF GLOBAL"],
      datasets: [
        {
          label: "Vote",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850"
          ],
          data: [30, 50, 20, 10, 1]
        }
      ]
    };

    return <Bar data={data} width={100} height={50} options={options} />;
  }
}

export default WWWCharts;
