import React from 'react';
class ListCom extends React.Component{
    constructor(props){
        super(props);//which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).
            this.state = {
                vehicle:"Car",
                brand:"Ford",
                model:"Mustand",
                Year:"2023"
            };         
    }
    static getDerivedStateFromProps(props,state){  //mounting
        return{brand:props.favbrand};  //called right before the render method

    }
    changeVehicle = () =>{
        this.setState({vehicle:"Bike"});
    }
   
    render(){
        return(
            <div className='listCom'>
            <p>
                It is {this.state.vehicle} of {this.state.brand} from {this.state.Year}
            </p>
            <button type='button' onClick={this.changeVehicle}>change vehicle</button>
            </div>
        )
    }
}
class List extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            candidateName:"pransu pathak",
            candidateAge:"22"
        }
    }
    componentDidMount(){
        setTimeout (() =>{
            this.setState({candidateName:"atul pathak"})
        },1000)
        
    }
    componentDidUpdate() {
        document.getElementById("candidate").innerHTML =
        "The updated candidate is " + this.state.candidateName;
    }
    
    render(){
        return(
            <div className="list">
             <h2>Welcome to our page {this.state.candidateName}</h2>
             <div id="candidate"></div>
             <ListCom favbrand = "volvo"/>
             </div>
        )      
    }
}

export default List;

//compo
