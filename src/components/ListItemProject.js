import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

////ADD CONNECT > GET BIKE ID - > GET PROJECT DATA 

import numeral from 'numeral'
import moduleName from './LinkButton';

 const ListItemProject= ({dispatch, id, description, category, note, createdAt, project}) => (
    
        <div className='list-item'> 
        {/* {console.log('PROPS project ', project)} */}
        <div>
            <h3 className='list-item__title'>{description}</h3>
            <h3 className='list-item__data'>{category}</h3>
            <h3 className='list-item__data'>{note}</h3>
            <span className='list-item__sub-title'> {moment(createdAt).format('MMMM Do, YYYY')}</span>
             {/*  TO DO: use onClick to point to a history object or url instead of nesting the links // or the other way around*/}
            <div className="mt-3">
                <Link  
                to={{
                    pathname:`/editProject/${id}`,
                    state:{
                        project
                    }
            }}>
                    <button className='button' onClick={console.log(`need to put in REdirect maybe`)}>Edit Project</button>
                </Link>
                </div>
          
        </div>
        {/* <h3 className='list-item__data'> {numeral(amount/100).format('$0,00.00')}</h3> */}
     

      
        </div>
         

 )

export default ListItemProject;