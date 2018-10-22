import React, { Component } from "react";

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity : 1
    }
    
    this.onChange = this.onChange.bind(this);
    this.sendAddToCart = this.sendAddToCartReq.bind(this);

  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  sendAddToCartReq() {
    this.props.addToCart({
      name : this.props.name,
      quantity: this.state.quantity
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={this.props.image_link} alt="Category"></img>
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{this.props.description}</p>
            <div className="row">
             <div className="col-md-6 text-left">Cost = ${this.props.cost}</div>
             <div className="col-md-6 text-left">
               Weight = {this.props.weight} {this.props.weight_unit}
             </div>
           </div>
           <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add to Cart</button>
           <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Quantity</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>How many items of {this.props.name} do you want to order?</p>
                  <input type="text" name="quantity" value = {this.state.quantity} onChange={this.onChange}></input>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.sendAddToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
