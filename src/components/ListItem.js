import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'
import moduleName from './LinkButton';

 const ListItem = ({dispatch, id, make, model, year, description, createdAt}) => (
    
        <Link className='list-item' to={`/projectDashboard/${id}`}> 
        <div>
            <h3 className='list-item__title'>{description}</h3>
            <h3 className='list-item__data'>{make}</h3>
            <h3 className='list-item__data'>{model}</h3>
            <h3 className='list-item__data'>{year}</h3>
            <span className='list-item__sub-title'> {moment(createdAt).format('MMMM Do, YYYY')}</span>
            <Link to={`/edit/${id}`}> 
            {/* TO DO: use onClick to point to a history object or url instead of nesting the links // or the other way around*/} 
            
                <div className="mt-3">
                    <button className='button'>Edit Bike</button>
                </div>
             </Link>
        </div>
        {/* <h3 className='list-item__data'> {numeral(amount/100).format('$0,00.00')}</h3> */}
     

      
        </Link>
         

 )

export default ListItem;