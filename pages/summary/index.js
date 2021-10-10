import { LayoutDashboard } from "../../components"
import { useState, useEffect } from "react"
import { Card, Col, Row } from 'antd';
import { Gap } from "../../components"
import styles from './Summary.module.css'

export default function Summary() {
    const [data, setData] = useState([]); 
    useEffect(() => {
        fetch("https://mycorsproxy-covid.herokuapp.com/https://api.kawalcorona.com/indonesia").then(res => res.json()).then(
            (result) => {
                console.log(result)
        setData(result[0]);
            })
    }, []);
    return (
        <LayoutDashboard title="Summary">    
            <h1>Total Kasus COVID-19 di Indonesia</h1>
            <Card hoverable title="Kasus Positif" className={styles.card} style={{ color: 'blue' }}>
                {data.positif}
            </Card>
            <Gap height= {10}/>
            <Card hoverable  title="Kasus Sembuh" className={styles.card} style={{ color: 'green' }}>
                {data.sembuh}
            </Card>
            <Gap height= {10}/>
            <Card hoverable  title="Kasus Meninggal" className={styles.card} style={{ color: 'red' }}>
                {data.meninggal}
            </Card>
        </LayoutDashboard>
    )
}
