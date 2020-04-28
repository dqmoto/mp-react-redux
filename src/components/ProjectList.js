import React from 'react';
import { connect } from 'react-redux';
import ListItemProject from '../components/ListItemProject';
import selectProjects from '../selectors/projects';
import projects from '../selectors/projects';

 
 export class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        
       
        //  let { projects } = this.props.projects;
        console.log('in the constructor ', props.bike)
    }
    render() {

    return (
        <div className='content-container'>

           {/* {console.log('ttt ', this.props.projects.projects)} */}
            <div className='list-header'>
            <div className='show-for-mobile'>Projects</div>
             <div className='show-for-desktop'>Project</div>
            {/* <div className='show-for-desktop'>Amount</div> */}
            </div> 

        <div className='list-body'>
            {
            this.props.projects.length === 0 ? (
                    <div className='list-item list-item--message'>
                        <span>No Projects</span>
                    </div>
                ) : (
           this.props.projects.map((project) => {
            // console.log('THE PROJECT ID ', project.id)
            //     console.log('key 1 ', project)
                // console.log('key 2 ', index)
             return <ListItemProject key={project.id} {...project} project={project}/>
            })
                )
        }
          </div>
          </div>
 )
    }
}


 const mapStateToProps = (state)=> {
   //console.log(state.bikes)
  
    const bike = state.bikes.find((bike) => bike.id === state.bikeId.id)
    // console.log(bike)
    // console.log('just bike ', bike);
    let result = {...bike}
    let projects = result.projects
    
    let projectsArray = Object.values({...projects})
    let projectKeys = Object.keys({...projects})
    // for (var i=0; i< projectsArray.length; i++ ) {
    //     projectsArray.push(projectKeys[i])
    // }
   // let keysValues = Object.values({...projects}).map((key)=> [(key), {...projects}[key]]);
    //console.log(result)
    // console.log(projects)
    // console.log('keys only', projectKeys)
    // console.log('projects Array ', projectsArray)
    // console.log('keys values ', keysValues)
    
        return {
             projects : projectsArray
        }
    }


export default connect(mapStateToProps)(ProjectList);

