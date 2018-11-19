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
    this.props.addToCart(this.state);
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
           <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft: '17px'}}>Add to Cart</button>
           <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header " >
                  <h5 className="modal-title" id="exampleModalLabel">Quantity</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <p>How many items of {this.props.productName} do you want to order?</p>
                  <input type="text" name="quantity" value ={this.state.quantity} onChange={this.onChange}></input>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.sendAddToCartReq}>Add to Cart</button>
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
