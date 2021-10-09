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

const { Header, Content, Footer, Sider } = Layout;
var title = 'COVID-19';

export default function LayoutDashboard(props) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  function handleOnCollapse() {
    
    if (collapsed == false) {
      setCollapsed('collapsed');
      title = 'C19';
    }
    else {
      setCollapsed(false);
      title = 'COVID-19';
    }
  }
    return (
      <div>
      <Head>
          <meta property={props.property} content={props.content}/>
          <title>{props.title}</title>  
          <link rel="icon" href='https://static-00.iconduck.com/assets.00/coronavirus-icon-512x512-hy5e5gy7.png'/>  
      </Head> 
      <Layout style={{ minHeight: '100vh' }}>
        
        <Sider collapsible collapsed={collapsed} onCollapse={() => handleOnCollapse()} collapsedWidth={0} zeroWidthTriggerStyle={{top: 0, height:65, fontSize: 20, paddingTop: 10}} >
          <h1 className={styles.title}>{title}</h1>
            
          <Menu theme="dark" mode="inline">
            <Menu.Item icon={<PieChartOutlined />} onClick={() => router.push('/summary')}>
              Summary
            </Menu.Item>
            <Menu.Item icon={< FundProjectionScreenOutlined />} onClick={() => router.push('/graphic')}>
              Graphic
            </Menu.Item>
            <Menu.Item icon={<  DatabaseOutlined />} onClick={() => router.push('/tablereport')}>
              Report
            </Menu.Item>
          </Menu>
        </Sider>
        
        <Layout className={styles.site_layout}>
          <Header className={styles.header} style={{ padding: 0 }}>
            <p className={styles.title_content}>{props.title}</p>
          </Header>
          <Content style={{ margin: '16px 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className={styles.site_layout_background} style={{ padding: 24, minHeight: 360}}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>copyright ©2021 created by zxaenalios</Footer>
        </Layout>
      </Layout>
      
      </div>
    );
  }
// }
