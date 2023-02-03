import History from './components/History/History';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <div className="Wrap">
        <Profile />
      </div>
      <div className="Wrap">
        <Statistics />
      </div>
      <div className="Wrap">
        <History />
      </div>
    </div>
  );
}

export default App;
