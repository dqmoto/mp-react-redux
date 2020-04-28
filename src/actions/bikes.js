import uuid from 'uuid';
import db from '../firebase/firebase';
import { database } from 'firebase';

//component calls action generator
//action generator returns object
//component dispatches object
//redux store changes

//component calls action generator
//action generator returns function
//component dispatches function (?)
//function runs (has the ability to dispatch other actions and do whatever it wants)


  

//ADD_PROJECT
export const addProject = (id, updates) => {
    console.log('trying to add the project')
    return ({
    type:"ADD_PROJECT",
    id,
    updates
})
}

export const startAddProject = (bikeId, projectData = {}) => {
    console.log('from the start Add in bikes action' , projectData)
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        const {
        category = '',
        description = '', 
        note = '', 
        createdAt = 0} = projectData;
        let project = {category, description, note, createdAt}
       return db.ref(`users/${uid}/bikes/${bikeId}/projects`).push(project).then((ref)=>{
           console.log('ref key ', ref.key)
            dispatch(addProject(bikeId, {
                id: ref.key,
                ...project
            }))
        })
    }
}

    //EDIT_PROJECT
    export const editProject = (bikeId, id, updates) => ({
        type:'EDIT_PROJECT',
        bikeId,
        id,
        updates
    })

   //START EDIT_PROJECT
   export const startEditProject = (bikeId, id, updates) => {
       console.log('UPDATES' ,updates)
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
       return db.ref(`users/${uid}/bikes/${bikeId}/projects/${id}`).update({...updates}).then(()=>{
            dispatch(editProject(bikeId, id, updates));
        })
    }
 }

//ADD_BIKE
export const addBike = (bike) => 
{
   return ({
        type:"ADD_BIKE",
        bike
    })
}

export const startAddBike = (bikeData = {}) => {
        return (dispatch, getState) =>{
            const uid = getState().auth.uid;
            const {
            description = '', 
            model = '',
            make = '',
            year = '',
            note = '', 
            createdAt = 0,
            projects = [] } = bikeData;
            const bike = {description, note, createdAt, make, model, year, projects}
           return db.ref(`users/${uid}/bikes`).push(bike).then((ref)=>{
                dispatch(addBike({
                    id: ref.key,
                    ...bike
                }))
            })
        }
    }
    
    //REMOVE_BIKE
    export const removeBike = ({ id } = {}) => ({
        type:'REMOVE_BIKE',
        id
    })

    //START REMOVE BIKE
     export const startRemoveBike= ({id} ={})=>{  
        return (dispatch, getState) =>{
            const uid = getState().auth.uid;
            return db.ref(`users/${uid}/bikes/${id}`).remove().then(()=>{
                dispatch(removeBike({id}))
            })
        }
    }
    
    //EDIT_BIKE
   export const editBike = (id, updates) => ({
        type:'EDIT_BIKE',
        id,
        updates
    })

    //START EDIT_BIKE 
    export const startEditBike = (id, updates) => {
       return (dispatch, getState) => {
           const uid = getState().auth.uid;
          return db.ref(`users/${uid}/bikes/${id}`).update(updates).then(()=>{
               dispatch(editBike(id, updates));
           })
       }
    }

    //SET_BIKES
    export const setBikes = (bikes) =>({
        type:'SET_BIKES',
        bikes
    }
    );

    export const startSetBikes = () => {
        return (dispatch, getState) =>{
            const uid = getState().auth.uid;
           return db.ref(`users/${uid}/bikes`).once('value').then((snapshot)=>{
                const bikes = [];
                snapshot.forEach((childSnapshot)=>{
                   // console.log('the child snapshot', childSnapshot.val().projects)
                    bikes.push({
                        id:childSnapshot.key,
                        ...childSnapshot.val()
                    })
                 childSnapshot.forEach((projectSnapshot) => {
                    //console.log('projectSnapshot', projectSnapshot.key)
                   // console.log('LOOK HERE')
                    if (projectSnapshot.key === 'projects') {
                        console.log(projectSnapshot.val())
                        projectSnapshot.forEach((snap)=>{
                           // console.log(snap.key);
                           // console.log(snap.val().description)
                            snap.val().id = snap.key
                           let n =  {
                               ...snap.val(),
                               id:snap.key
                            }
                       // console.log('N', n)
                           bikes.map((bike)=>{
                            // console.log(bike)
                            // console.log('is projects', bike.projects)
                            // console.log('is projects', bike.projects != undefined)
                            // console.log( 'truthy', Object.keys(bike.projects).length > 0)
                            if(Object.keys(bike.projects).length > 0) {
                              //  console.log('the snap id ', bike.projects[snap.key].id )
                                bike.projects[snap.key].id 
                                bike.projects[snap.key].id = snap.key
                               // console.log(bike.projects)
                           }
                           })
                        })
                    }
                    
                 })
                 
               
               // console.log('bikes array ', bikes)
                   
                
                })
                dispatch(setBikes(bikes));
            })
        }
    };

