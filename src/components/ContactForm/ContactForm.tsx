import Button from '../../UI/Button/Button';
import styles from './ContactForm.module.scss';
import { useState,useReducer } from 'react';
import UserSVG from '../../SVG/UserSVG';
import LetterSVG from '../../SVG/LetterSVG';
import handleInputBlur from './handleInputBlur';
import handleSubmit from './handleSubmit';

import { INITTIAL_STATE, formReducer } from './ContactForm.state';

export default function ContactForm(){

	const [isActive, setActive] = useState({
		name:false,
		email:false,
		text:false
	});

	const [errorMessage, setErrorMessage] = useState({
		name:'',
		email:'',
		message:''
	});
    
	

	const [formState, dispatchForm] = useReducer(formReducer, INITTIAL_STATE);


	const {isValid} = formState;

	const handleInputFocus = (input: string): void => {
		
		if (input === 'name') {
			setActive({ ...isActive, name: true });
			dispatchForm({ type: 'RESET_VALIDITY' });
		} else if (input === 'email') {
			setActive({...isActive, email: true});
		}else if (input === 'massage') {
			setActive({...isActive, text:true});
		}

		
	};
    
	const handleBlurName = (e: React.FocusEvent<HTMLInputElement>) => {
   		handleInputBlur('name', e.target.value, 
			formState.isValid, dispatchForm, setActive);
	};

	const handleBlurEmail = (e: React.FocusEvent<HTMLInputElement>) =>{
	    handleInputBlur('email', e.target.value, 
			formState.isValid, dispatchForm, setActive);
	};

	const handleBlurMassage = (e: React.FocusEvent<HTMLTextAreaElement>) =>{

 	   handleInputBlur('massage', e.target.value, 
	   		formState.isValid, dispatchForm, setActive);
	};

	
	function handleFormSubmit(e: React.FormEvent) {
		handleSubmit(e, formState, setErrorMessage);
	}

	return <>
		<div className={styles['contact-form-wrap']} >
			<div className={styles['contact-form']}>
				<form onSubmit={handleFormSubmit}>
					<div className={styles['form-group']}>
						<label className={`${styles['label-not-activ']} ${isActive.name ? styles['label-activ'] : ''} 
                        ${!isValid.name ? styles['label-error'] : ''}`}
                         
						htmlFor="nameInput">
							<span>
								<UserSVG  isSelected={isActive.name} isValid={isValid.name} />
							</span>
						</label>
						<input 
							onBlur={handleBlurName}
							onFocus={() => handleInputFocus('name')}
							id="nameInput" name='your-name' 
							placeholder='Name' 
							className={styles['input-name']}  />
						
					</div>	

					<span className={styles['error-massage']}>{errorMessage.name}</span>

					<div className={styles['form-group']}>
						<label 
							className={`${styles['label-not-activ']} ${isActive.email ? styles['label-activ'] : ''}
                        ${!isValid.email ? styles['label-error'] : ''}`}	
							htmlFor="emailInput">
							<span
								className={`${styles['labe-iconl-not-activ']}
                             ${isActive.email ? styles['label-icon-activ'] : ''}`}>
                                @
							</span> 
						</label>
						<input
							onBlur={handleBlurEmail}
							onFocus={() => handleInputFocus('email')}
							id="emailInput" name='your-email'
							placeholder='Email'
							className={styles['input-email']}  />

					</div>

					<span className={styles['error-massage']}>{errorMessage.email}</span>


					<div className={styles['form-group']}>
						<label
							className={`${styles['message-textarea-not-activ']} ${
								isActive.text ? styles['message-textarea-activ'] : ''}
                                 ${!isValid.message ? styles['label-error'] : ''}`}
							htmlFor="messageInput">
							<span>
								<LetterSVG isSelected={isActive.text} isValid={isValid.message } />
							</span>


						</label>
						<textarea 
							onBlur={handleBlurMassage}
							onFocus={() => handleInputFocus('massage')} 
							name='your-massage' placeholder='Massage' 
							className={styles['massage']} ></textarea>

					</div>

					<span className={styles['error-massage']}>{errorMessage.message}</span>

					<div className={styles['btn']}>
						<Button children={'SEND MASSEGE'} />
					</div>
				</form>
			</div>
		</div>
	</>;
}