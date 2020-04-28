import React from 'react';
import { connect } from 'react-redux';
import BikeForm from './BikeForm';
import { startEditBike, startRemoveBike } from '../actions/bikes';

export class EditBikePage extends React.Component {
    // console.log(props);
    onSubmit = (bike) => {
        this.props.startEditBike(this.props.bike.id, bike);
        this.props.history.push('/');
        console.log('updated',bike )
    }
    onRemove = ()=> {
        this.props.startRemoveBike({id: this.props.bike.id});
        this.props.history.push('/');
    }

    render (){
        return(
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Edit Bikes</h1>
                </div>
            </div>
            <div className='content-container'>
                <BikeForm 
                bike = {this.props.bike}
                onSubmit={this.onSubmit}
               />
                <button className=' button button--secondary' onClick={this.onRemove}>Remove Bike</button>
                </div>
        </div>
        )
    }
}   

const mapStateToProps = (state, props) =>{
    return {
        bike: state.bikes.find((bike) => bike.id === props.match.params.id)
    }
}

const mapDispatchToProps =(dispatch,props)=>({
    startEditBike: (id, bike)=>dispatch(startEditBike(id, bike)),
    startRemoveBike: (data)=>dispatch(startRemoveBike(data))
 })

export default connect(mapStateToProps, mapDispatchToProps)(EditBikePage);