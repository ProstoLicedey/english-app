import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        tg.ready();
    })
    const onClose = () => {
        tg.close();
        alert('Закрыто')
    }
  return (
    <div className="App">
        123
     <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
