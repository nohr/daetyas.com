import './App.css';
import Nav from './components/nav';
import ImgGrid from './components/ImgGrid';
import { GlobalStyle } from './components/theme';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <ImgGrid />
    </div>
  );
}

export default App;
