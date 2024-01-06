export interface FormState {
    isValid: {
        name: boolean;
        email: boolean;
        message: boolean;
    };
    values: {
        name: string | undefined;
        email: string | undefined;
        message: string | undefined;
    };
    isFormReadyToSubmit: boolean;
}

export type FormAction =
  | { type: 'RESET_VALIDITY' }
  | { type: 'UPDATE_VALIDITY'; payload: { field: string; isValid: boolean } };

export function formReducer(state: FormState, action: FormAction): FormState {
	switch (action.type) {
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITTIAL_STATE.isValid };
	case 'UPDATE_VALIDITY':
		if (action.payload.field === 'message') {
       
			return {
				...state,
				isValid: { ...state.isValid, message: action.payload.isValid }
			};
		}
		return {
			...state,
			isValid: { ...state.isValid, [action.payload.field]: action.payload.isValid }
		};
	default:
		return state;
	}
}


export const INITTIAL_STATE: FormState = {
	isValid:{
		name: true,
		email:true,
		message: true
	},
	values:{
		name: undefined,
		email:undefined,
		message: undefined
	},
	isFormReadyToSubmit:false
};


