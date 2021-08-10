import React from 'react';
import {Component} from 'react';
import Logo from "./logo.svg";

class Footer extends Component{
    render(){
        return(
            <div style={{ color:'white',backgroundColor:'black', height:'auto', minHeight:'200px',position:'relative', margin:'20px 0px', marginBottom:'0px',alignContent:'center'}}>
                <row style={{display:'flex',width:'100%',padding:'20px' ,height:'auto'}}>
                    <column style={{width:'25%', height:'auto'}}>
                      <img src={Logo} alt="Logo" style={{width:'100px', height:'100px'}}/>
                    </column>
                    <column style={{width:'25%', height:'auto'}}>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                    </column>
                    <column style={{width:'50%', height:'auto'}}>
                    <h3>Contact Us</h3>
                    <p>sajbdkgasbfjabsjfgaskbjababksabkasjkas</p>
                    </column>
                </row>
            </div>
        );
    }
}

export default Footer;