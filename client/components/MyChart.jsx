// components/MyLineChart.tsx
"use client";

import {
    Chart as ChartJS,
    PointElement,
    ArcElement,
    Legend,
    Tooltip,
    plugins,
    scales,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    PointElement,
    ArcElement,
    Legend,
    Tooltip,
    scales
);

const MyChart = () => {
    return (
        <div className="lg:p-6 md:p-0">
            <Doughnut
                data={{
                    labels: ['Purchase Price: ₹', 'Stamp Duty: ₹', 'Brokerage: ₹', 'Legal Fee: ₹', 'Reserves: ₹'],
                    datasets: [{
                        
                        data: [358020000, 21481200, 10740600, 1500000, 4258200],
                        backgroundColor: [
                            '#f87171',
                            '#1f2937',
                            '#60a5fa',
                            '#8b5cf6',
                            '#ec4899'
                        ],
                        borderColor: 'transparent',
                        ArcElement: 10,
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
