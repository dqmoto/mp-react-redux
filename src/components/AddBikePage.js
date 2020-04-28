import React from 'react';
import BikeForm from './BikeForm';
import { connect } from 'react-redux';
import { startAddBike } from '../actions/bikes';

export class AddBikePage extends React.Component {
    onSubmit = (bike) => {
        this.props.startAddBike(bike);
        this.props.history.push('/');
    };
    render(){
        return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                <h1 className='page-header__title'>Add Bike</h1>
                </div>
            </div> 
            <div className='content-container'>
        <BikeForm onSubmit={this.onSubmit}/>    
        </div>
    </div>
        )
    }
} 

const mapDispatchToProps = (dispatch)=> ({ 
    startAddBike: (bike)=> dispatch(startAddBike(bike)) 
})

export default connect(undefined, mapDispatchToProps)(AddBikePage);