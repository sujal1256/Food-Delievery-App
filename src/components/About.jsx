import { Outlet } from "react-router-dom";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log('Parent Constructor');
        
    }
    componentDidMount(){
        console.log('Parent Mount');
        
    }
    render(){
            console.log('Parent render');
            
            return (
                <>
                    <div>
                        <h1>About Us page</h1>
                        <p>React-Router-DOM</p>
                    </div>
                    <Outlet />
                </>)
        }
}
export default About;