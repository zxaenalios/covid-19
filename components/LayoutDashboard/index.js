import Head from 'next/head'
import { Layout, Menu} from 'antd';
import {
  PieChartOutlined,
  FundProjectionScreenOutlined,
  DatabaseOutlined
} from '@ant-design/icons';
import styles from './Layout.module.css';
import { useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;
const logo = 'COVID-19';

export default function LayoutDashboard(props) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  function handleOnCollapse() {    
    if (collapsed == false) {
      setCollapsed('collapsed');
    }
    else {
      setCollapsed(false);
    }
  }
  return (
    <div>
      <Head>
          <meta property={props.property} content={props.content}/>
          <title>{props.title}</title>  
          <link rel="icon" href='https://static-00.iconduck.com/assets.00/coronavirus-icon-512x512-hy5e5gy7.png'/>  
      </Head> 
      <Layout className={styles.layout}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => handleOnCollapse()} collapsedWidth={0} zeroWidthTriggerStyle={{top: 0, height:65, fontSize: 20, paddingTop: 10}} >
          <p className={styles.logo}><Link href="/"><a>{logo}</a></Link></p>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="summary" icon={<PieChartOutlined />} onClick={() => router.push('/summary')}>
              Summary
            </Menu.Item>
            <Menu.Item key="graphic" icon={< FundProjectionScreenOutlined />} onClick={() => router.push('/graphic')}>
              Graphic
            </Menu.Item>
            <Menu.Item key="report" icon={<  DatabaseOutlined />} onClick={() => router.push('/tablereport')}>
              Report
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.site_layout}>
          <Header className={styles.header}>
            <p className={styles.title_content}>{props.title}</p>
          </Header>
          <Content className={styles.content}>     
            <div className={styles.site_layout_background}>
              {props.children}
            </div>
          </Content>
          <Footer className={styles.footer}>copyright ©2021 created by zxaenalios</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
