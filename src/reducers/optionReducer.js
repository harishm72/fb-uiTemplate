const initialState = [];

const optionReducer = (state = initialState, action) => {

    switch (action.option) {
        case "image":
            console.log(action.currentState.filter(post => post['image']))
            return action.currentState.filter(post => post['image'])

        case "text":
            console.log(action.currentState.filter(post => !post['image']))
            return action.currentState.filter(post => !post['image'])

        case "imageAndText":
            console.log(action.currentState)
            return action.currentState;

        case 'none':
            return []

        default:
            return state;
    }
}
export default optionReducer;