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
      <div class="col-md-4">
        <div class="card">
          <img class="card-img-top" src={this.props.image_link} alt="Category"></img>
          <div class="card-body">
            <h4 class="card-title">{this.props.name}</h4>
            <p class="card-text">{this.props.description}</p>
            <div class="row">
             <div className="col-md-6 text-left">Cost = ${this.props.cost}</div>
             <div className="col-md-6 text-left">
               Weight = {this.props.weight} {this.props.weight_unit}
             </div>
           </div>
           <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add to Cart</button>
           <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Quantity</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>How many items of {this.props.name} do you want to order?</p>
                  <input type="text" name="quantity" value = {this.state.quantity} onChange={this.onChange}></input>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.sendAddToCart}>Add to Cart</button>
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
