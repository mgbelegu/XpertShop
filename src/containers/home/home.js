import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../hoc/Auxiliary";
import Product from "../../components/product/product";
import "./home.css";
import Spinner from "../ui/spinner/spinner";
import * as actions from "../store/actions/index";
import chevron from "../../assets/chevron.png";

class Store extends Component {
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
          <img src="http://via.placeholder.com/1920x800" alt="" />
        </div>

        <div className="categories">
          <div className="categoriesHeader">
            <h1>Kategorite</h1>
            <a href="/categories">
              Të gjitha <img className="chevron" src={chevron} />
            </a>
          </div>

          <div className="categoriesContainer">
            <div>
              <a href="/categories/woman">
                <img src="http://via.placeholder.com/150" />
              </a>
              <h3>Woman</h3>
            </div>
            <div>
              <a href="/categories/home">
                <img src="http://via.placeholder.com/150" />
              </a>
              <h3>Home</h3>
            </div>
            <div>
              <a href="/categories/electric">
                <img src="http://via.placeholder.com/150" />
              </a>
              <h3>Electric</h3>
            </div>
            <div>
              <a href="/categories/bike">
                <img src="http://via.placeholder.com/150" />
              </a>
              <h3>Bike</h3>
            </div>
            <div>
              <a href="/categories/food">
                <img src="http://via.placeholder.com/150" />
              </a>
              <h3>Food</h3>
            </div>
            <div>
              <a href="/categories/tech">
                <img src="http://via.placeholder.com/150" />
              </a>
              <h3>Tech</h3>
            </div>
          </div>
        </div>

        <div className="newProducts">
          <div className="newProductsHeader">
            <h1>Produktet e reja</h1>
            <a href="/newproducts">
              Të gjitha <img className="chevron" src={chevron} />
            </a>
          </div>
        </div>
        <div className="products">{productList}</div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
