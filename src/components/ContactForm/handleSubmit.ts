export default async function handleSubmit(
	e: React.FormEvent,
	formState: { isValid: { name: boolean; email: boolean; message: boolean } },
	setErrorMessage: React.Dispatch<React.SetStateAction<{
      name: string;
      email: string;
      message: string;
    }>>
) {
	e.preventDefault();
  
	const form = e.currentTarget as HTMLFormElement;
  
	const formData = {
		name: form['your-name'].value,
		email: form['your-email'].value,
		message: form['your-massage'].value
	};
  
	const updatedErrorMessage = {
		name: !formState.isValid.name ? 'Enter correct name' : '',
		email: !formState.isValid.email ? 'Enter correct email' : '',
		message: !formState.isValid.message
			? 'Enter correct message, have to be more than 10 letters.'
			: ''
	};
  
	setErrorMessage(updatedErrorMessage);
    
	if (formState.isValid.name && formState.isValid.email && formState.isValid.message){
		try {
			const response = await fetch(
				'http://localhost:5045/api/website-buiness-card/contact-massage',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log('Success:', data);

			form.reset();

		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error('Error:', error.message);
			} else {
				console.error('Unknown error:', error);
			}
		}
	}
}
  