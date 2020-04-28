import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import selectBikes from '../selectors/bikes';


 export const BikeList = (props) => (
        <div className='content-container'>
            <div className='list-header'>
            <div className='show-for-mobile'>Bikes</div>
             <div className='show-for-desktop'>Bike</div>
            <div className='show-for-desktop'>Amount</div>
            </div> 
        <div className='list-body'>

            {
                props.bikes.length === 0 ? (
                    <div className='list-item list-item--message'>
                        <span>No bikes</span>
                    </div>
                   
                ) : (
         props.bikes.map((bike) => {
            //  console.log('this bike id is ', bike.id)
            //  console.log(props.bikes.length)
             return <ListItem key={bike.id} {...bike}/>
         })
                )
        }
          </div>
          </div>
 )

 const mapStateToProps = (state)=> {
        return {
            bikes: selectBikes(state.bikes, state.filters)
        }
    }


export default connect(mapStateToProps)(BikeList);

