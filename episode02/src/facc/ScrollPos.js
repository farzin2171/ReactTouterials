import React,{Component} from 'react'
import PropTypes from "prop-types";

class ScrollPos extends Component{

    state={
        position:null
    };


    static propTypes={
        children:PropTypes.func.isRequired
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll=(event)=>{
        const scrollTop = event.target.body.scrollTop;
        console.log(scrollTop);
        this.setState({
            position:scrollTop
        });
    };


    render(){
    return  <div>{this.props.children(this.state.position)}</div>
    }
}


export default ScrollPos