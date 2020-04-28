import uuid from 'uuid';
import db from '../firebase/firebase';
import { database } from 'firebase';

export const setStockBikes = (stockBikes) => ({
    type:'SET_STOCK_BIKES',
    stockBikes
})

export const getStockBikes = () => {
    return (dispatch, getState) =>{
        //const uid = getState().auth.uid;
       return db.ref(`bikes/`).once('value').then((snapshot)=>{
           // console.log(snapshot);
            const stockBikes = [];
            const sbArray = [];
            snapshot.forEach((childSnapshot)=>{
               // console.log(childSnapshot)
                stockBikes.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setStockBikes(stockBikes));
        })
    }
};
