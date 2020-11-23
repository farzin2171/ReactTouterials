import SlodeShow from './SlideShow '
import './App.css';

function App() {
  return (
    <div className="App">
       <SlodeShow>
          <img src="http://placekitten.com/300/200" alt="Cat Pic" />
          <img src="http://placekitten.com/300/201" alt="Cat Pic" />
          <img src="http://placekitten.com/300/202" alt="Cat Pic" />
       </SlodeShow>
    </div>
  );
}

export default App;
