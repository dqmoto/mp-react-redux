import uuid from 'uuid';
import db from '../firebase/firebase';
import { database } from 'firebase';

export const setVideos = (videos) => ({
    type:'SET_VIDEOS',
    videos
})

export const getVideos = () => {
    return (dispatch, getState) =>{
        //const uid = getState().auth.uid;
       return db.ref(`videos/`).once('value').then((snapshot)=>{
            console.log(snapshot);
            const videos = [];
            const vidArray = [];
            snapshot.forEach((childSnapshot)=>{
               // console.log(childSnapshot)
                videos.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setVideos(videos));
        })
    }
};
