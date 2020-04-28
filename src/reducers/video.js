
//Video Reducer
const videoReducerDefaultState = []
export default (state = videoReducerDefaultState, action ) => {
    switch(action.type) {
    case 'SET_VIDEOS':
                console.log(action.videos)
                return action.videos;
    default:
        return state;
    }
}