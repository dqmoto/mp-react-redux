
import uuid from 'uuid';
import db from '../firebase/firebase';
import { database } from 'firebase';



//IS ADMIN
export const startSetIsAdmin =()=>{
    console.log('trying to set the isAdmin')
     return (dispatch, getState) =>{
        const uid = getState().auth.uid;
       return db.ref(`users/${uid}`).once('value').then((snapshot)=>{
         let isAdmin = false
         console.log('SNAPSHOT ', snapshot.val().isAdmin)
        isAdmin = snapshot.val().isAdmin
         dispatch(setIsAdmin(isAdmin));
    })

     }
  }
  
  export const setIsAdmin =(isAdmin)=> {
      console.log('inside the set admin', isAdmin)
    return ({
      type:'SET_IS_ADMIN',
      isAdmin
  })
}