import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoint.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
