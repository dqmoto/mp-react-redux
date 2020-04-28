import React from 'react';
import ProjectList from './ProjectList';
import ListFilters from './ListFilters';
import {connect} from 'react-redux';
import ProjectsSummary from './ProjectsSummary';
import { setBikeId } from '../actions/bikeId';


export class ProjectDashboardPage extends React.Component {
    constructor(props){
        super(props);


    }

    componentDidMount() {
        console.log('from did mount', this.props.bike.id);
        this.props.setBikeId(this.props.bike.id);
    }
 
    render() {
        // console.log('the bike id in project dashboard', this.props.bike.id)
        // console.log(this.props.bike.id)
       
    return(

    <div>
        <ProjectsSummary/>
        {/* <ListFilters/> */}
         <ProjectList />
    </div>
)}
}
  

const mapStateToProps = (state, props) =>{
    return {
        bike: state.bikes.find((bike) => bike.id === props.match.params.id),
    }
}

const mapDispatchToProps = (dispatch)=> ({ 
        setBikeId: (bikeId) => dispatch(setBikeId(bikeId)) 
})



export default connect(mapStateToProps, mapDispatchToProps)(ProjectDashboardPage);