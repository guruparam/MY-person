import logo from './logo.svg';
import './App.css';
import BioCard from './components';
import Bg from '../src/assets/Bg.jpg'
import CustomImageList from './components/Image';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App anta-regular" style={{
      backgroundImage: `url('https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      display:'block',
      padding: '10px',
    }}>
      <BioCard sx={{position: '-webkit-sticky'}} />
      <CustomImageList />
      <Footer />
    </div>
  );
}

export default App;
