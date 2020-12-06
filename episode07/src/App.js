import logo from './logo.svg';
import './App.css';
import configureStore from './configureStore'
import {bugAdded,bugAssignedToUser} from "./store/bugs"
import {projectAdded} from './store/projects'
import {userAdded} from './store/users'
import * as actions from './store/api'
import {loadBugs,addBug} from './store/bugs'
import Bugs from './components/Bugs'
import StoreContext from './contexts/storeContext'


function App() {

  const store=configureStore();
  // store.dispatch(userAdded({name:"farzin"}));
  // store.dispatch(userAdded({name:"farzin1"}));
  // store.dispatch(userAdded({name:"farzin3"}));

  // store.dispatch(projectAdded({name:"Project 1"}));
  // store.dispatch(bugAdded({description:"Bug 1"}));
  // store.dispatch(bugAssignedToUser({userId:1,bugId:1}));

  // store.dispatch((dispatch,getState)=>{
  //   //Call an API
  //   //When the promise is resolved =>dispatch
  //   dispatch({type:"bugRecived",bugs:[1,2,3]});
  //   //If the promise is rejected =>dispatch

  // });
  // store.dispatch(loadBugs());
  // store.dispatch(addBug({
  //   description:"bug added"
  // }))
  
  
  // console.log(store.getState())
  return (
    <div className="App">
        <StoreContext.Provider value={store}>
         <Bugs />
       </StoreContext.Provider>
    </div>
  );
}

export default App;
