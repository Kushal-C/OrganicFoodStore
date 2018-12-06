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
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <Input
                            name="city"
                            onChange={this.props.onChange}
                            value={this.props.city}
                            id="city"
                            type="text"
                        />
                    </div>
                    <div className="col-md-3" style={{paddingLeft:'15px', paddingRight:'15px'}}>
                        <label htmlFor="state" className="col-form-label" >State</label>
                        <Input
                            name="state"
                            id="state"
                            onChange={this.props.onChange}
                            value={this.props.state}
                            type="text"
                        />
                    </div>
                    <div className="col-md-3" style={{paddingLeft:'15px', paddingRight:'15px'}}>
                        <label htmlFor="zipcode" className="col-form-label">Zip</label>
                        <Input
                            name="zipCode"
                            onChange={this.props.onChange}
                            value={this.props.zipCode}
                            type="number"
                            id="zipCode"
                            error_msg="Invalid Zip Code"
                            min_input_length={4}
                        />
                    </div>
                </div>

                <label htmlFor="cardNumber" className="col-form-label">Card Number</label>
                <Input
                    value={this.props.creditCardNumber}
                    onChange={this.props.onChange}
                    type="number"
                    name="creditCardNumber"
                    id="creditCardNumber"
                    min_input_length={15}
                    error_msg="Invalid Credit Card Number"
                />
                <div className="row">
                    <div className="col-md-6">
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
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cvc" className="col-form-label">CVC</label>
                        <Input
                            value={this.props.cvc}
                            onChange={this.props.onChange}
                            type="number"
                            id="cvc"
                            name="cvc"
                            min_input_length={2}
                            error_msg="Invalid CVC"
                        />
                    </div>
                </div>
            </div>
        );
    }
}