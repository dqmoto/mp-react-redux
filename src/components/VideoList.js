import React from 'react';
import { connect } from 'react-redux';
import ListItemVideo from '../components/ListItemVideo';
import selectVideo from '../selectors/videos';


 export const VideoList = (props) => (
        <div className='content-container'>
            <div className='list-header'>
            <div className='show-for-mobile'>Videos</div>
             <div className='show-for-desktop'>Video</div>
            {/* <div className='show-for-desktop'>Amount</div> */}
            </div> 
        <div className='list-body'>

            {
                props.videos.length === 0 ? (
                    <div className='list-item list-item--message'>
                        <span>No videos</span>
                    </div>
                   
                ) : (
         props.videos.map((video) => {
            //  console.log('this video id is ', video.id)
            //  console.log(props.video.length)
             return <ListItemVideo key={video.id} {...video}/>
         })
                )
        }
          </div>
          </div>
 )

 const mapStateToProps = (state)=> {
        return {
             videos: state.videos
        }
    }


export default connect(mapStateToProps)(VideoList);

