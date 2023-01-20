import logo from './logo.svg';
import './App.css';


function App() {
  const proverbs = [
    "모두에게 전성기가 있지만 어떤 이들의 전성기는 다른 이들보다 더 길다.",
    "싸우지 않고 적이 스스로 항복하는 것이 최고의 승리이다... 싸우지 않고 이기는 것이 최선이다.",
    "성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.", 
    "변명 중에서도 가장 어리석고 못난 변명은 '시간이 없어서'라는 변명이다."
  ]
  const getRandomIndex = value => {
    return parseInt(Math.random() * value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
