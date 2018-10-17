import React, { Component } from 'react'

class VerifiableField extends Component {
    constructor(props){
        /* minimum length, special character checking, no numbers for first name/last name, password have a letter and a number*/
        this.state = {
            minLength: this.props.minLength,
            specialChars: this.props.specialChars, /* Should be an array 8 */
            isAlphanumeric: this.props.isAlphanumeric,
            value: "",
            isValid: false
        }
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        if(this.checkLength && this.checkSpecialCharacters){
            this.setState({isValid:true});
        }
        this.setState({ isValid: false });
    }

    checkLength(){
        if (this.state.value.length < minLength) {
            return false;
        }
        return true;
    }

    checkSpecialCharacters(){
        let valid = false;
        for (let i = 0; i < this.state.value.length; i++){
            if(this.state.value.charAt(i).equals(this.props.specialChars)){
                valid = true;
            }
        }
        return valid;
    }

    onChange(e){
        this.setState({value:e.target.value});
        this.isValid();
    }

    render() {
        if(this.state.isValid){
            return(
                <input value={this.state.value} onChange={} className="form-control is-valid"></input>
            );
        }
        else {
            return (
                <input value={this.state.value} onChange={} className="form-control is-invalid"> </input>
            );
        }
      
    }
}

export default VerifiableField;