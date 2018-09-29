import React, { Component } from 'react'

class SignIn extends Component {
    render(){
        return(
            <div>
                <h1>Organic Food Store Delivery Service</h1>
                <form>
                <label>
                    User Name:
                    <input type="text" name="name" />
                </label>
                <br></br>
                <label>
                    Password:
                    <input type="text" name="name" />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default SignIn;