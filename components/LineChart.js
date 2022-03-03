import React, { Component, useRef } from "react";
import { Area, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef();
  // const
  // const ctx = chartRef.current.canvas.getContext("2d");
  // const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  // gradient.addColorStop(0, "#0183d0");
  // gradient.addColorStop(1, "#05121a");
  return (
    <div className="chart-container">
      <div className="chart-title">Saldo biezqce sprawy</div>
      <div className="chart-value">
        12 5000 <span className="chart-value__title"> PLN</span>
      </div>
      <div className="line-chart">
        <Line
          ref={chartRef}
          data={{
            labels: [65, 59, 80, 81, 56, 55, 40],
            datasets: [
              {
                lineTension: 0.1,
                borderColor: "transparent",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                fill: true,
                data: [65, 59, 80, 81, 56, 55, 40],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            backgroundColor: "#0183d0",
            fill: true,
            label: "",
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: false,
              },
              tooltip: {
                intersect: true,
              },
            },
            scales: {
              x: {
                grid: {
                  display: true,
                  borderDash: [10],
                  borderDashOffset: 20,
                  borderWidth: 0,
                },
                ticks: {
                  font: {
                    size: 10,
                  },
                  mirror: true,
                },
              },
              y: {
                grid: {
                  display: false,
                  borderWidth: 0,
                },
                ticks: {
                  callback: function (value, index, ticks) {
                    return value + "K";
                  },
                  font: {
                    size: 10,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
