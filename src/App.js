import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Notification from './components/notification';
import Donate from './components/donate';
import About from './components/about';
import Faq from './components/faq';
import History from './components/history';
import Members from './components/members';
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div>
      <Snowfall color="white" snowflakeCount={200} />
      <Navbar/>
      <Header/>
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
