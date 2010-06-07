const initState = {
    events: null
}

const EventsReducer = (state = initState, action) => {

    switch (action.type) {
        case 'REGISTER_EVENT_SUCCESS':
            console.log('Event added successfully')
            return {
                ...state,
                eventError: null
            }
        case 'REGISTER_EVENT_ERROR':
            console.log('Event not added')
            return {
                ...state,
                eventError:
                action.err
            }
        default:
            return state;
    }
}

export default EventsReducer;