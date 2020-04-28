//Admin Reducer
const adminReducerDefaultState = false
export default (state = adminReducerDefaultState, action ) => {
    switch(action.type) {
        case 'SET_IS_ADMIN':
            console.log(action.isAdmin);
            return {
                isAdmin:action.isAdmin
            }
        default:
            return state;
    }
};