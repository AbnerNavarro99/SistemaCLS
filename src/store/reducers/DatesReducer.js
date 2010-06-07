const initial_state = {
    dateStartNewEvent: new Date(),
    dateEndNewEvent:  new Date(),
    dateInputSelected: "",
};

const DatesReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'NEW_EVENT_DATE_START_CHANGED':
            return { ...state, dateStartNewEvent: action.date };
        case 'NEW_EVENT_DATE_END_CHANGED':
            return { ...state, dateEndNewEvent: action.date };
        case 'NEW_EVENT_DATE_INPUT_SELECTED':
            console.log(action.inputName);
            let dateInputSelected = action.inputName;
            return { ...state, dateInputSelected };
        default:
            return { ...state };
    }
};

export default DatesReducer;