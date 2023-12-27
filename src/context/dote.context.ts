
import {Dispatch, SetStateAction, createContext, useContext} from 'react';




var DoteContext = createContext<{
	moveToRigth: boolean,
	setMoveToRigth: Dispatch<SetStateAction<boolean>> | null,
}>({
	moveToRigth: false,
	setMoveToRigth: null
});



function useDoteContext() {
	return useContext(DoteContext);
}

export {
	useDoteContext,
	DoteContext	
};