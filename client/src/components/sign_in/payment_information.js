import React, { Component } from 'react';
import Input from '../form_validation';

export default class PaymentInformation extends Component {
    render() {
        return(
            <div>
                <label htmlFor="address" className="col-form-label">Address</label>
                <Input
                    name="address"
                    onChange={this.props.onChange}
                    value={this.props.address}
                    id="address"
                    type="text"
                />
                <label htmlFor="city" className="col-form-label">City</label>
                <Input
                    name="city"
                    onChange={this.props.onChange}
                    value={this.props.city}
                    id="city"
                    type="text"
                />
                <label htmlFor="state" className="col-form-label">State</label>
                <Input
                    name="state"
                    id="state"
                    onChange={this.props.onChange}
                    value={this.props.state}
                    type="text"
                />
                <label htmlFor="zipcode" className="col-form-label">Zip</label>
                <Input
                    name="zipCode"
                    onChange={this.props.onChange}
                    value={this.props.zipCode}
                    type="number"
                    id="zipCode"
                    error_msg="Invalid Zip Code"
                    min_input_length={5}
                />
                <label htmlFor="cardNumber" className="col-form-label">Card Number</label>
                <Input
                    value={this.props.creditCardNumber}
                    onChange={this.props.onChange}
                    type="number"
                    name="creditCardNumber"
                    id="creditCardNumber"
                    min_input_length={16}
                    error_msg="Invalid Credit Card Number"
                />
                <label htmlFor="expiryDate" className="col-form-label">Expiry</label>
                <Input
                    value={this.props.expirationDate}
                    onChange={this.props.onChange}
                    type="number"
                    name="expirationDate"
                    id="expirationDate"
                    min_input_length={5}
                    error_msg="Invalid Expiry Date"
                />
                <label htmlFor="cvc" className="col-form-label">CVC</label>
                <Input
                    value={this.props.cvc}
                    onChange={this.props.onChange}
                    type="number"
                    id="cvc"
                    name="cvc"
                    min_input_length={3}
                    error_msg="Invalid CVC"
                />
            </div>
        );
    }
}