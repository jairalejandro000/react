import {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [Line1, setLine1] = useState('');
  const [Line2, setLine2] = useState('');

  const onChangeLine1 = function(value) {
    setLine1(value.target.value);
  }
  const onChangeLine2 = function(value) {
    setLine2(value.target.value);
  }
  const download = function(){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("img/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }
  return (
    <div className="App">
      <header>
        React-Prueba
      </header>
      <input placeholder="Line1" onChange={onChangeLine1} type="text" required /><br />
      <input placeholder="Line2" onChange={onChangeLine2} type="text" required /><br /><br />
      <input type="submit" value="Submit" onClick={download} />
      <div className="meme" id="meme">
        <span>{Line2}</span><br />
        <span>{Line1}</span><br />
        <img src="/img/50115070.png" alt="chuek" />
      </div>
    </div>
  );
}
export default App;
