import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedBarChart = ({ data, categories, colors, chartShape, height, width, colorsPosition, colorAllignment }) => {
  const options = {
    chart: {
      type: 'bar',
      height: height,
      stacked: true, // Stacked bar chart
    },
    plotOptions: {
      bar: {
        horizontal: chartShape, // Horizontal bars
        columnWidth: width,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    xaxis: {
      categories: categories, // Dynamically passed categories
      title: {
        text: 'Anount ($)',
      },
    },
    // yaxis: {
    //   title: {
    //     text: null,
    //   },
    // },
    fill: {
      opacity: 1,
    },
    colors: colors, // Dynamically passed colors for the segments
    legend: {
      position: colorsPosition, //'bottom','top'
      horizontalAlign: colorAllignment, //'center',
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={data} type="bar" height={height} />
    </div>
  );
};

export default StackedBarChart;
