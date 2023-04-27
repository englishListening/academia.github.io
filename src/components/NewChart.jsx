import React from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from "./Data";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend
} from "chart.js"

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Legend)

export const options = {
    plugins:{
        title:{
            display:true,
            text:"Students with IELTS +7",
        },
    },
    responsive:true,
    scales:{
        x:{
            stacked:true,
        },
        y:{
            stacked:true,
        },
    },
}

const labels = UserData.map((data) => data.years)

export const data = {
    labels,
    datasets:[
        {
            label:"This",
            data:[300,300,-400]
        },
        {
            label:"This1",
            data:[500,-300,800]
        },
        {
            label:"This2",
            data:[500,300,-400]
        },
    ]
}

export const NewChart = () => {
    return <div><Bar options={options} data={data}/></div>
}