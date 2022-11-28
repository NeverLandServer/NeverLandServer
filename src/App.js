import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Notification from './components/notification';
import Donate from './components/donate';
import About from './components/about';
import Faq from './components/faq';
import History from './components/history';
import Members from './components/members';

function App() {
  return (
    <div>
      <Navbar/>
      <Notification/>
      <Donate/>
      <About/>
      <History/>
      <Faq/>
      <Members/>
    </div>
  )
}

export default App;
