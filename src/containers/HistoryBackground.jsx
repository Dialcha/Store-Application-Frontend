import React, { useEffect } from 'react'
import Top from '../components/Top/Top';
import Header from '../components/Header/Header';
import styled from "styled-components";
import Menu from "../components/Menu/Menu";
import History from '../components/History/History';
import { connect } from "react-redux";
import usePagination from "../hooks/pagination";
import { getHistory } from "../redux/actions";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #F9F9F9;
`

function HistoryBackground({history, getHistory}) {

    useEffect(() => {
        getHistory();
      }, [getHistory]);

      const paginatedProducts = usePagination(history.history, 16);
      const splicedProducts = paginatedProducts.currentData();
      console.log('SPLICED PRODUCTS HISTORY', splicedProducts)

    return (
        <Container>
            <Top/>
            <Header title={'Rewards History'}/>
            <Menu allProducts={history.history} products={paginatedProducts}/>
            <br></br>
            <History getHistory={getHistory} products={splicedProducts}/>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
      history: state.historyReducer,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getHistory: () => dispatch(getHistory()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HistoryBackground)