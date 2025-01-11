import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready();
    })
    const onClose = () => {
        tg.close();
        alert('123')
    }
  return (
    <div className="App">
     <button onClick={() =>onClose}>Закрыть</button>
    </div>
  );
}

export default App;
