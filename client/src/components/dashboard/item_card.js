import React, { Component } from "react";

export default class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.productName,
      quantity : 1
    };

    this.onChange = this.onChange.bind(this);
    this.sendAddToCartReq = this.sendAddToCartReq.bind(this);

  }


  onChange(event) {
    this.setState({quantity: event.target.value});
  }

  sendAddToCartReq() {
    this.props.addToCart({name: this.props.productName, quantity: this.state.quantity, cost:this.props.cost, weight:this.props.weight, weight_unit:this.props.weight_unit, productID:this.props.productID, userId:this.props.id});
  }

  render() {
    return (
      <div className="col-md-3"  >
        <div className="card " style={{width:'220px', height:'400px'}}>
          <img className="card-img-top" src={this.props.imageLink} alt="Category" style={{ height: '400px',width: '220px', overflow: 'hidden', objectFit:'cover'}}></img>
          <div className="card-body">
            <h4 className="card-title">{this.props.productName}</h4>
            <p className="card-text">{this.props.description}</p>
            <div className="row" style={{borderTop: '1px solid rgb(231, 231, 231)', marginBottom: '10px'}}>
             <div className="col-sm-12 col-md-6 text-left">${this.props.cost}</div>
             <div className="col-sm-12 col-md-6 text-left">
               {this.props.weight} {this.props.weight_unit}
             </div>
           </div>
           <input
              className={"form-control"}
              value={this.state.quantity}
              onChange={this.onChange}
              type="number"
              name={this.props.name}
              required
            />
            <button
            class="btn btn-primary float-right"
            onClick={() => this.sendAddToCartReq()}
            style={{marginLeft: '17px'}}
            >
            Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
