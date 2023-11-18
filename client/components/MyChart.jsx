// components/MyLineChart.tsx
"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Legend
} from "chart.js";
import { Line, Doughnut, } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Legend
);

const MyChart = () => {
    return (
        <div className="lg:p-6 md:p-0">
            <Doughnut
                data={{
                    labels: ['Point 1-$2131', 'Point 2', 'Point 4'],
                    datasets: [{
                        
                        data: [50, 10, 32],
                        backgroundColor: [
                            '#ef4444',
                            '#6b7280',
                            '#bae6fd',
                        ],
                        hoverOffset: 20,
                        borderColor: 'transparent',
                        ArcElement: 10
                    }],
                }}
                width={600}
                height={600}
                options={{ maintainAspectRatio: false }}

            />

        </div>
    );
};
export default MyChart;
