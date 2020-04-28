import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startEditProject, startRemoveProject } from '../actions/bikes';

export class EditProjectPage extends React.Component {
   

   componentDidMount() {
      const { project } = this.props.location.state;
      console.log('project from location state', project)
   }

    onSubmit = (project) => {
        console.log('on project edit submit', this.props.location.state.project)
        console.log('propject data to send', project)
        this.props.startEditProject(this.props.bikeId, this.props.location.state.project.id, project);
        this.props.history.push('/');
        console.log('updated',project )
    }

    onRemove = ()=> {
        this.props.startRemoveProject({id: this.props.location.state.project.id});
        this.props.history.push('/');
    }

    render (){
        console.log('project in edit page ', this.props.project)
        return(
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Edit Projects</h1>
                </div>
            </div>
            <div className='content-container'>
                {console.log('THIS PROJECT ', this.props.location.state.project)}
                {/* {console.log('THIS PROJECT  D ', this.props.project.id)} */}
                <ProjectForm 
                project = {this.props.location.state.project}
                onSubmit={this.onSubmit}
               />
                <button className=' button button--secondary' onClick={this.onRemove}>Remove Project</button>
                </div>
        </div>
        )
    }
}   

const mapStateToProps = (state, props) => {
    console.log('BIKE ID from Edit Project Page', state.bikeId.id)
    return {
        bikeId: state.bikeId.id
    }
}

const mapDispatchToProps =(dispatch, props)=>({
    startEditProject: (bikeId, id, project)=>dispatch(startEditProject(bikeId, id, project)),
    startRemoveProject: (data)=>dispatch(startRemoveProject(data))
 })

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPage);