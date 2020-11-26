import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/product/product";
import "./home.css";
import Spinner from "../ui/spinner/spinner";
import * as actions from "../store/actions/index";
import chevron from "../../assets/chevron.png";
import Layout from "../layout/layout";
import { NavLink } from "react-router-dom";

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
          productId={productItem.id}
        />
      ));
    }

    return (
      <Layout>
        <div className="storeHeaderImage">
          <img src="http://via.placeholder.com/1920x800" alt="" />
        </div>

        <div className="categories">
          <div className="categoriesHeader">
            <h1>Kategorite</h1>
            <NavLink to="/categories">
              Të gjitha <img className="chevron" src={chevron} alt="" />
            </NavLink>
          </div>

          <div className="categoriesContainer">
            <div>
              <a href="/categories/woman">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Woman</h3>
            </div>
            <div>
              <a href="/categories/home">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Home</h3>
            </div>
            <div>
              <a href="/categories/electric">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Electric</h3>
            </div>
            <div>
              <a href="/categories/bike">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Bike</h3>
            </div>
            <div>
              <a href="/categories/food">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Food</h3>
            </div>
            <div>
              <a href="/categories/tech">
                <img src="http://via.placeholder.com/150" alt="" />
              </a>
              <h3>Tech</h3>
            </div>
          </div>
        </div>

        <div className="newProducts">
          <div className="newProductsHeader">
            <h1>Produktet e reja</h1>
            <NavLink to="/new-products">
              Të gjitha <img className="chevron" src={chevron} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="products">{productList}</div>
      </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Store);
