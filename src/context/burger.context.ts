import {Dispatch, SetStateAction, createContext, useContext} from 'react';


var BurgerContext = createContext<{
	moveToLeft: boolean,
	setmoveToLeft: Dispatch<SetStateAction<boolean>> | null,
}>({
	moveToLeft: false,
	setmoveToLeft: null
});

function useBurgerContext() {
	return useContext(BurgerContext);
}

export {
	useBurgerContext,
	BurgerContext	
};