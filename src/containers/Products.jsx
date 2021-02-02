import { connect } from "react-redux";
import Products from "../components/Products/Products";
import {
  getProducts,
  redeemUserPoints,
  sortProductsByPrice,
} from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.usersReducer,
    products: state.productsReducer,
    points: state.pointsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getProducts()),
    getPoints: (userId) => dispatch(redeemUserPoints(userId)),
    sortProducts: (products, sort) =>
      dispatch(sortProductsByPrice(products, sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
