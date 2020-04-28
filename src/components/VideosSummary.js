import React from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import numeral from 'numeral';
import selectProjects from '../selectors/projects';


export const VideosSummary = ({bikeId, isAdmin}) => {
   
    console.log('from project summary', bikeId);
    // const projectWord = projectCount === 1 ? 'project' : 'projects';

    return(
        <div className="page-header">   
        <div className='content-container'>
            <h1 className="page-header__title">
                Videos
                {/* Viewing <span>{ projectCount}</span> {projectWord}. */}
            </h1>
                <div className="page-header__actions" >
                  
                    <div>
                    {isAdmin ? <Link className="button" to={`/createProject/${bikeId}`}>Add Video</Link>:null}
                    </div>

           
                </div>
            </div>
        </div>
    )
}


 const mapStateToProps = (state) =>{
    console.log(state)
    // const visibleProjects = selectProjects(state.bikes, state.filters);
    return {
        // projectCount:visibleProjects.length,
        // bikeTotal: selectBikesTotal(visibleBikes)
        bikeId : state.bikeId.id,
        isAdmin: state.admin.isAdmin
}
 }


export default connect(mapStateToProps)(VideosSummary)