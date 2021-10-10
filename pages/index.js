import { LayoutDashboard } from '../components';
import { Carousel } from 'antd';

const contentStyle = {
  height: '400px',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '5px',
};

export default function Home() {
  return (
    <LayoutDashboard title="Dashboard Covid-19">
      <h1>Informasi seputar Covid-19 di Indonesia</h1>
      <Carousel autoplay="true">
        <div>
          <img src="https://www.internationalsos.co.id/-/media/indonesia-website/images/carousel/carousel--prokes-wide.jpg?h=450&la=en&mw=1280&w=1280&hash=68DC9C7962A3731D7FB3C4561C635DC3DEB1B823" style={contentStyle}/>
        </div>
        <div>
          <img src="https://web.kominfo.go.id/sites/default/files/users/4896/Banner%20Bantu%20Masyarakat%20Tahu%20COVID-19.jpeg" style={contentStyle}/>
        </div>
      </Carousel>
    </LayoutDashboard>
  );
}