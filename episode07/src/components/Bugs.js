import React, { Component } from 'react'
import StoreContext from '../contexts/storeContext'
import {loadBugs} from '../store/bugs';

 class Bugs extends Component {
    static contextType=StoreContext;

    state={bugs:[]}

    componentDidMount(){
       const store= this.context;
        console.log(store.getState());
       this.unsubscribe= store.subscribe(()=>{
           const bugsInStore= store.getState().entites.bugs.list;
           if(this.state.bugs !== bugsInStore)
             this.setState({bugs:bugsInStore});

       });

       store.dispatch(loadBugs());

    }

    componentWillUnmount(){
        this.unsubscribe=null;
    }
    render() {
        return (
            <div>
                <ul>
                     {this.state.bugs.map(bug=><li key={bug.id}>{bug.description}</li>)}
                </ul>
            </div>
        )
    }
}



export default Bugs;

