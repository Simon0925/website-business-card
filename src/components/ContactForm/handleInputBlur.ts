import { FormState, FormAction } from './ContactForm.state'; 

export default function handleInputBlur(
	input: string,
	value: string,
	isValid: FormState['isValid'],
	dispatchForm: React.Dispatch<FormAction>,
	setActive: React.Dispatch<React.SetStateAction<{ name: boolean; email: boolean; text: boolean }>>
) {
	let isValidValue = false;

	if (input === 'name') {
		isValidValue = value.length > 1;
		console.log('name ' + isValidValue);
	} else if (input === 'email') {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		isValidValue = emailRegex.test(value);
	} else if (input === 'massage') {
		isValidValue = value.length >= 10 && value.length <= 250;
		isValid.message = isValidValue;
	}

	if (!isValidValue) {
		dispatchForm({ type: 'UPDATE_VALIDITY', payload: { field: input, isValid: false } });
	}

	if (input === 'name') {
		setActive((prevActive) => ({ ...prevActive, name: false }));
	} else if (input === 'email') {
		setActive((prevActive) => ({ ...prevActive, email: false }));
	} else if (input === 'massage') {
		setActive((prevActive) => ({ ...prevActive, text: false }));
	}

	dispatchForm({
		type: 'UPDATE_VALIDITY',
		payload: { field: input, isValid: isValidValue }
	});
}
