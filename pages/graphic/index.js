import { LayoutDashboard } from "../../components"
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
import React from "react";
import { useState, useEffect } from "react";

export default function Graphic() {
    const [kasuspositif, setKasuspositif] = useState([]);
    const [kasussembuh, setKasussembuh] = useState([]);
    const [kasusmeninggal, setKasusmeninggal] = useState([]);
    const positif = [];
    const sembuh = [];
    const meninggal = [];

    useEffect(async () => {
    const response = await axios.get("https://mycorsproxy-covid.herokuapp.com/https://api.kawalcorona.com/indonesia/provinsi")
        for (var i in response.data) {
            if (response.data[i].attributes.Provinsi == "DKI Jakarta") {
                positif.push(response.data[i].attributes.Kasus_Posi);
                sembuh.push(response.data[i].attributes.Kasus_Semb);
                meninggal.push(response.data[i].attributes.Kasus_Meni);
            }
            else if (response.data[i].attributes.Provinsi == "Jawa Barat") {
                positif.push(response.data[i].attributes.Kasus_Posi);
                sembuh.push(response.data[i].attributes.Kasus_Semb);
                meninggal.push(response.data[i].attributes.Kasus_Meni);
            }
            else if (response.data[i].attributes.Provinsi == "Jawa Tengah") {
                positif.push(response.data[i].attributes.Kasus_Posi);
                sembuh.push(response.data[i].attributes.Kasus_Semb);
                meninggal.push(response.data[i].attributes.Kasus_Meni);
            }
            else if (response.data[i].attributes.Provinsi == "Jawa Timur") {
                positif.push(response.data[i].attributes.Kasus_Posi);
                sembuh.push(response.data[i].attributes.Kasus_Semb);
                meninggal.push(response.data[i].attributes.Kasus_Meni);
            }
        }
        setKasuspositif(positif);
        setKasussembuh(sembuh);
        setKasusmeninggal(meninggal);       
    }, []);

    const data = {
        labels: ['Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur'],
        datasets: [
            { 
            label: 'Kasus Positif', 
            backgroundColor: 'rgb(54, 162, 235)', 
            data: kasuspositif, 
            stack: 1 
            }, 
            { 
            label: 'Kasus Sembuh', 
            backgroundColor: 'rgb(75, 192, 192)', 
            data: kasussembuh, 
            stack: 2 
            },
            { 
            label: 'Kasus Meninggal', 
            backgroundColor: 'rgb(255, 99, 132)', 
            data: kasusmeninggal, 
            stack: 3 
            }, 
        ], 
    }

    const options = {
        scales: {
            yAxes: [
            {
                ticks: {
                beginAtZero: true,
                },
            },
            ],
        },
    }
    return (
        <LayoutDashboard title="Graphic">
            <h1>Grafik Kasus COVID-19</h1>
            <Bar
                data={data}
                options={options}
            />
        </LayoutDashboard>
    )
}
