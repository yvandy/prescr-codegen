import { createStore } from "redux";
import { ActionItem, StateItem } from "../typings/types";

const initialState: StateItem = {
    medicines: {
    },
    formValues: {
    },
};

const reducer = (state = initialState, action: ActionItem): StateItem => {
    switch (action.type) {
        case "loadMedicines":
            return {
                ...state,
                medicines: action.payload,
            }
        case "submit":
            const submitPrescription = async () => {
                await fetch('https://prescription-app-84502-default-rtdb.firebaseio.com/prescriptions.json', {
                    method: 'POST',
                    body: JSON.stringify({
                        precription: action.payload,
                    })
                });
            }
            submitPrescription();
            return state;
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;
