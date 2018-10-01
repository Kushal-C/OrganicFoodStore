import React, { Component } from 'react'

class SignIn extends Component {
    render(){
        return(
            <div>
                <h1>Organic Food Store Delivery Service</h1>
                <form>
                <label>
                    User Name:
                    
                </label>
                    <input type="text" name="name" />
                <br></br>
                <label>
                    Password:
                </label>
                    <input type="text" name="name" />
                <br></br>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default SignIn;