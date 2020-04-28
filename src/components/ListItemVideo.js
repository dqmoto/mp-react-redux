import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

////ADD CONNECT > GET BIKE ID - > GET PROJECT DATA 

import numeral from 'numeral'
import moduleName from './LinkButton';

 const ListItemVideo = ({dispatch, id, desc, category, note, videoUrl, thumbUrl, video, title}) => (
    
        <div className='list-item'> 
        {console.log('PROPS project ', video)}
        <div className="list-item__holder">
            <h3 className='list-item__title'>{title}</h3>
           <h3 className='list-item__data'>Category: {category}</h3>
            <h3 className='list-item__data'>{desc}</h3>
            {/* <span className='list-item__sub-title'> {moment(createdAt).format('MMMM Do, YYYY')}</span> */}
             {/*  TO DO: use onClick to point to a history object or url instead of nesting the links // or the other way around*/}
            <div className="mt-3">
                <a href={videoUrl} target='_blank'><img className="video__thumb" src={thumbUrl}/></a>
                
                {/* <Link  
                to={{
                    pathname:`/editProject/${id}`,
                    state:{
                        project
                    }
            }}>
                    <button className='button' onClick={console.log(`need to put in REdirect maybe`)}>Edit Project</button>
                </Link> */}
                </div>
          
        </div>
        {/* <h3 className='list-item__data'> {numeral(amount/100).format('$0,00.00')}</h3> */}
     

      
        </div>
         

 )

export default ListItemVideo;