import { LayoutDashboard } from "../../components"
import { useState, useEffect } from "react"
import axios from "axios";
import { Card, Col, Row } from 'antd';
import { Gap } from "../../components"
import styles from './Summary.module.css'

export default function Summary() {
    const [data, setData] = useState([]);
    const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
    
    useEffect(async () => {
        const result = await axios.get("https://api.kawalcorona.com/indonesia", config); 
        setData(result.data[0]);
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
