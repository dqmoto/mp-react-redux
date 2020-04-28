import uuid from 'uuid';
import db from '../firebase/firebase';
import { database } from 'firebase';


export const setBikeId = (id = '') => ({
    type:'SET_BIKE_ID',
    id
 })