import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/product/product";
import "./home.css";
import Spinner from "../ui/spinner/spinner";
import * as actions from "../store/actions/index";
import chevron from "../../assets/chevron.png";
import Layout from "../layout/layout";
import { NavLink } from "react-router-dom";
import bannerIMG from "../../assets/banner.svg";
import pc from "../../assets/pc/Computer-&-Laptop-Bardhe.png";
import monitor from "../../assets/monitor/TV-&-Monitor-Bardhe.png";
import printer from "../../assets/printer/Copier-Printer-Scanner-Bardhe.png";
import phones from "../../assets/phones/Phone-Bardhe.png";
import hardware from "../../assets/hardware/Hardware-Equipments-Bardhe.png";
import network from "../../assets/network/Network-Equipments-Bardhe.png";

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
          <img src={bannerIMG} alt="" />
        </div>

        <div className="categories">
          <div className="categoriesH">
            <h1>Kategorite</h1>
            <NavLink to="/categories">
              Të gjitha <img className="chevron" src={chevron} alt="" />
            </NavLink>
          </div>

          <div className="categoriesContainer row d-flex justify-content-center">
            <div className="col-sm-2" id="pcCategory">
              <NavLink to="/categories/computers">
                <img className="img-fluid" src={pc} alt="" />
                <h4 className="text-center">Computer & Laptops</h4>
              </NavLink>
            </div>

            <div className="col-sm-2">
              <NavLink to="/categories/monitors">
                <img className="img-fluid" src={monitor} alt="" />
                <h4 className="text-center">TV & Monitors</h4>
              </NavLink>
            </div>

            <div className="col-sm-2">
              <NavLink to="/categories/printers">
                <img className="img-fluid" src={printer} alt="" />
                <h4 className="text-center">Copier, Printers & Scanners</h4>
              </NavLink>
            </div>

            <div className="col-sm-2">
              <NavLink to="/categories/phones">
                <img className="img-fluid" src={phones} alt="" />
                <h4 className="text-center">Phones</h4>
              </NavLink>
            </div>

            <div className="col-sm-2">
              <NavLink to="/categories/hardware">
                <img className="img-fluid" src={hardware} alt="" />
                <h4 className="text-center">Hardware equipments</h4>
              </NavLink>
            </div>

            <div className="col-sm-2" id="pcCategory">
              <NavLink to="/categories/network">
                <img className="img-fluid" src={network} alt="" />
                <h4 className="text-center">Network equipments</h4>
              </NavLink>
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
