// components/MyLineChart.tsx
"use client";

import {
    Chart as ChartJS,
    PointElement,
    ArcElement,
    Legend,
    Tooltip
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    PointElement,
    ArcElement,
    Legend,
    Tooltip
);

const MyChart = () => {
    return (
        <div className="lg:p-6 md:p-0">
            <Doughnut
                data={{
                    labels: ['Monthly Rent', 'TDS   ', 'Property Management Fee',],
                    datasets: [{
                        
                        data: [50, 10, 32],
                        backgroundColor: [
                            '#ef4444',
                            '#6b7280',
                            '#bae6fd',
                        ],
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
