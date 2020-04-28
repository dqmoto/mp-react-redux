import React from 'react';
import ProjectForm from './ProjectForm';
import { connect } from 'react-redux';
import { startAddProject} from '../actions/bikes';

export class AddProjectPage extends React.Component {
    constructor(props){
        super(props);
    }
    onSubmit = (project) => {
        console.log('from the Add Project page ',project.description)
        this.props.startAddProject(this.props.bikeId, project);
        console.log('all the project data ',project)
        this.props.history.push('/');
    };
    render(){
        return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                <h1 className='page-header__title'>Add Project</h1>
                </div>
            </div> 
            <div className='content-container'>
        <ProjectForm onSubmit={this.onSubmit}/>    
        </div>
    </div>
        )
    }
} 

const mapStateToProps = (state, props) => {
    return {
        //bike: state.bikes.find((bike) => bike.id === props.match.params.id),
        bikeId: state.bikeId.id
    }
}

const mapDispatchToProps = (dispatch, props)=> ( { 
    
    startAddProject: (bikeId, project) => dispatch(startAddProject(bikeId, project)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddProjectPage);