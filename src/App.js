import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {

  const [getCounter, setCounter] = useState(0);
  const [getClick, setClick] = useState(1);
  const [getImg, setImg] = useState("https://images.vexels.com/content/323026/preview/chocolate-cookie-cartoon-character-7658f1.png");
  const CookieImg = ["https://images.vexels.com/content/322019/preview/cookie-retro-cartoon-birthday-71305f.png",
  "https://images.creativefabrica.com/products/thumbnails/2023/10/23/oWTV6PPy1/2XA7DfS5qRRbOMTXokfJd1vsn1d.png",
  "https://i.graphicmama.com/uploads/2021/12/61c05e2bae863-cute-cookie-star-cartoon.png",
  "https://images.creativefabrica.com/products/thumbnails/2023/10/18/i1rk1qC37/2Wvd2XP7xrjorLgR5TqpMa6XHC7.png",
      "https://images.vexels.com/content/323026/preview/chocolate-cookie-cartoon-character-7658f1.png"
  ]

    const [getColor, setColor] = useState("white")
    const Colors = ["#d96c95", "#82d37c", "#61dafb", "#e8e07c"]




    function Counter() {
      setCounter(getCounter + getClick)
    }

    function TwoPoints(){
        setClick(2);
    }

    function ThreePoints(){
        setClick(3);
    }

    function ChangeImage(){
      let randIndex = Math.floor(Math.random()*CookieImg.length);
        setImg(CookieImg[randIndex]);
    }

    function ChangeBackground(){
      let randIndex = Math.floor(Math.random()*Colors.length)
        setColor(Colors[randIndex]);
    }




  return (
      <div className="App">

        <div className="CardName"></div>

          <div className="Cookie_container" style={{backgroundColor: getColor}}>
              <div onClick={Counter} className="cookie" style={{backgroundImage: `url("${getImg}")`}}>Click me</div>
              <p>Points: {getCounter}</p>
          </div>

          <div className="upgrades_container">
              <div onClick={TwoPoints} className="upgrades">2 points per click</div>
              <div onClick={ThreePoints} className="upgrades">3 points per click</div>
              <div onClick={ChangeImage} className="upgrades">change cookie img</div>
              <div onClick={ChangeBackground} className="upgrades">change background color</div>
          </div>


      </div>
  );
}

export default App;


