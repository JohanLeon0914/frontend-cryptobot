import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CryptoChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    let historicPrice = data.historic_price;
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: historicPrice.map((item) => item.date),
        datasets: [
          {
            label: data.currency_pair,
            data: historicPrice.map((item) => item.price),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default CryptoChart;