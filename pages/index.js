import { LayoutDashboard } from '../components';
import { Carousel } from 'antd';

const contentStyle = {
  height: 'auto',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '10px'
};

export default function Home() {
  return (
    <LayoutDashboard title="Dashboard Covid-19">
      <h1>Informasi seputar Covid-19 di Indonesia</h1>
      <Carousel autoplay="true">
        <div>
          <img src="https://web.kominfo.go.id/sites/default/files/users/4896/Banner%20Bantu%20Masyarakat%20Tahu%20COVID-19.jpeg" style={contentStyle}/>
        </div>
        <div>
          <img src="https://web.kominfo.go.id/sites/default/files/users/4896/Banner%20Bantu%20Masyarakat%20Tahu%20COVID-19.jpeg" style={contentStyle}/>
        </div>
        <div>
          <img src="https://web.kominfo.go.id/sites/default/files/users/4896/Banner%20Bantu%20Masyarakat%20Tahu%20COVID-19.jpeg" style={contentStyle}/>
        </div>
      </Carousel>
    </LayoutDashboard>
  );
}