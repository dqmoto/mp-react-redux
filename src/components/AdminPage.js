import React from 'react';
// import StockBikeForm from './StockBikeForm';
import { connect } from 'react-redux';
// import { startAddStockBike } from '../actions/stockBikes';

export class AdminPage extends React.Component {
    onSubmit = (stockBike) => {
        this.props.startAddStockBike(stockBike);
        this.props.history.push('/');
    };
    render(){
        return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                <h1 className='page-header__title'>Admin Page</h1>
                </div>
            </div> 
            <div className='content-container'>
                {'CHOOSE to add stock bike, or add new video'}
        {/* <StockBikeForm onSubmit={this.onSubmit}/>     */}
        </div>
    </div>
        )
    }
} 

const mapDispatchToProps = (dispatch)=> ({ 
   // startAddBike: (bike)=> dispatch(startAddBike(bike)) 
})

export default connect(undefined, mapDispatchToProps)(AdminPage);