import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../../components/product/product";
import Spinner from "../../ui/spinner/spinner";
import * as actions from "../../store/actions/index";
import Aux from "../../hoc/Auxiliary";
import bannerIMG from "../../../assets/banner.svg";

class NewProducts extends Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    let productList = <Spinner />;

    if (!this.props.loading) {
      productList = this.props.products.map((productItem, i) => (
        <Product
          key={i}
          productImage={productItem.img}
          productTitle={productItem.title}
          productDescription={productItem.description}
          productPrice={productItem.price}
        />
      ));
    }
    return (
      <Aux>
        <div className="storeHeaderImage">
          <img src={bannerIMG} alt="" />
        </div>
        <div className="newProducts">
          <div className="newProductsHeader">
            <h1>Produktet e reja</h1>
          </div>
        </div>
        <div className="products">{productList}</div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    loading: state.products.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
