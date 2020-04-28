import React from 'react';
import {connect} from 'react-redux';
import {NavLink,Link} from 'react-router-dom';
import numeral from 'numeral';
import selectBikes from '../selectors/bikes';
// import selectBikesTotal from '../selectors/bikes-total';   

export const BikesSummary = ({bikeCount, isAdmin}) =>{
   
    const bikeWord = bikeCount === 1 ? 'bike' : 'bikes';
    // const formattedBikeTotal = numeral(bikeTotal/100).format('$0,0.00');
    return(
        <div className="page-header">   
        <div className='content-container'>
            <h1 className="page-header__title">
                Viewing <span>{ bikeCount}</span> {bikeWord}.
            </h1>
                <div className="page-header__actions" >
                    <div>
                    <Link className="button" to="/create">Add Bike</Link>
                    </div>
                    {/* <div className='nav-holder'>
                    <NavLink className="button button--nav" to={'/videos'}>Videos</NavLink>
                    <NavLink className="button button--nav" to={'/settings'}>Settings</NavLink>
                 {isAdmin ? 
                    <NavLink className="button button--nav" to={'/admin'}>Admin</NavLink>
                 : null }
                </div> */}
                </div>
               
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    const visibleBikes = selectBikes(state.bikes, state.filters);
    return {
        bikeCount:visibleBikes.length,
        isAdmin: state.admin.isAdmin
        // bikeTotal: selectBikesTotal(visibleBikes)
    }
}

export default connect(mapStateToProps)(BikesSummary);