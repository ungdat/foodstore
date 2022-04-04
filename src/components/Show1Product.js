import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../action/actCart";

class Show1Product extends Component {
    constructor() {
        super();
        this.state = { wishlist: false }
    }
    addWishlist = () => {
        this.setState(prevStatus => ({ wishlist: !prevStatus.wishlist }))
    }

    render() {
        return (
            <div className="col-4">
                <div className="img-wrap">
                    <Link to={`/products/${this.props.id}`}><img src={this.props.url} alt="" /></Link>
                </div>
                <Link to={`/products/${this.props.id}`}><h4 className="product-name">{this.props.name}</h4></Link>
                <div className="rating">
                    <p>{this.props.author}</p>
                </div>
                <div className="cart">
                    <p>{this.props.price.toFixed(3)} VND</p>
                    <p className="wishlist-icon" onClick={this.addWishlist}><i className={this.state.wishlist === true ? "fa fa-heart" : "fa fa-heart-o"}></i></p>
                    <div className="btn-cart">
                        <button onClick={()=>{this.props.addtocart(this.props.product)}} >Mua</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatch = (g) =>{
    return{
        addtocart:(f)=>{
            g(addToCart(f))
        }
    }
}

export default connect (null, mapDispatch)(Show1Product)