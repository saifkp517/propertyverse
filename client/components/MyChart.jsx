// components/MyLineChart.tsx
"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    ArcElement
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

//labels
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement
);

const labelArray = ['ads', 'asdasd', 'asdad']

const MyChart = () => {
    return (
        <div>
            <Doughnut
                data={{
                    datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 10, 32, 32],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        hoverOffset: 4
                    }]
                }}
                width={400}
                height={400}
                plugins={[ChartDataLabels]}
                label={true}
                options={{ maintainAspectRatio: false }}

            />
        </div>
    );
};
export default MyChart;
