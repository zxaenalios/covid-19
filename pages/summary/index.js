import { LayoutDashboard } from "../../components"
import { useState, useEffect } from "react"
import axios from "axios";
import { Card, Col, Row } from 'antd';
import { Gap } from "../../components"
import styles from './Summary.module.css'
import cors from 'cors';

export default function Summary() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://mycorsproxy-covid.herokuapp.com/https://api.kawalcorona.com/indonesia").then(res => res.json()).then(
            (result) => {
                console.log(result)
        setData(result[0]);
            })
    }, []);

    console.log(data.name);

    return (
        <LayoutDashboard title="Summary">    
            <h1>Informasi mengenai jumlah kasus COVID-19 di Indonesia</h1>
            <Card title="Kasus Positif" className={styles.card} style={{ color: 'blue' }}>
            {data.positif}
            </Card>
            <Gap height= {10}/>
            <Card title="Kasus Sembuh" className={styles.card} style={{ color: 'green' }}>
            {data.sembuh}
            </Card>
            <Gap height= {10}/>
            <Card title="Kasus Meninggal" className={styles.card} style={{ color: 'red' }}>
            {data.meninggal}
            </Card>
        </LayoutDashboard>
    )
}
