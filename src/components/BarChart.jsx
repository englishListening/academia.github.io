import React from "react";
import {Line} from "react-chartjs-2"
import { UserData } from "./Data";
import { useState } from "react";
import {Chart as ChartJS} from "chart.js/auto"
const data = {
    labels:UserData.map((data) => data.years),
    datasets:[
        {
            label:"IELTS +7",
            
            data:UserData.map((data) => data.studentsgain),
            backgroundColor:["aqua"],
            borderColor:"black",
            borderWidth:1,
        },
        {
            label:"IELTS -7",
            data:UserData.map((data) => data.studentsLost),
            backgroundColor:["red"],
            borderColor:"black",
            borderWidth:1,
        }
    ]
}
export const BarChart = () =>{
    const [students,setStudents] = useState({
        labels:UserData.map((data) => data.years),
        datasets:[
            {
                
                data:[UserData.map((data) => data.studentsgain)],
                backgroundColor:["red","yellow","green","aqua","blue"],
                borderColor:"black",
                borderWidth:1,
            }
        ]
    })
    return <div><Line data={data}/></div>
}