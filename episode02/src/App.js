import logo from './logo.svg';
import  ScrollPos from './facc/ScrollPos'
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="spacer">   
       </div>
       <ScrollPos>
         {
           position=><h1>{position}</h1>
         }
       </ScrollPos>
       <div className="spacer">   
       </div>
      
    </div>
  );
}

export default App;
