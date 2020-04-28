import React from 'react';
import BikeList from './BikeList';
import ListFilters from './ListFilters';
import BikesSummary from './BikesSummary';
import { connect } from 'react-redux'
import { startSetBikes } from '../actions/bikes';

export class DashboardPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
       this.props.startSetBikes()
    }
render() {
    return(
    <div>
        <BikesSummary />
        {/* <ListFilters/> */}
        <BikeList/>
    </div>
    )
    }
}

    const mapDispatchToProps = (dispatch) => ({
        startSetBikes: () => dispatch(startSetBikes())
    }
    )


export default connect(undefined, mapDispatchToProps)(DashboardPage);