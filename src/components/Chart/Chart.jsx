import './css/Chart.css'
import ChartBar from "./ChartBar";

export default function Chart(props){

    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPont => (
                    <ChartBar
                        key={dataPont.label}
                        value={dataPont.value}
                        maxValue={totalMaximum}
                        label={dataPont.label}
                    />))
            }
        </div>
    )
}