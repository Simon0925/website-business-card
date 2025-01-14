

interface UserSVGProps {
    isSelected:boolean,
	isValid: boolean
}

export default function UserSVG ({isSelected,isValid}:UserSVGProps) {

	const fillColor = isSelected ? 'white' : (isValid ?'#5C5C6E'  : 'white');

	return(
		<>
			<svg  width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g  id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g  id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
				<g  id="SVGRepo_iconCarrier">
					<rect width="24" height="24" ></rect> 
					<path fillRule="evenodd" clipRule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" 
						fill={fillColor}>
					</path> 
					<path fillRule="evenodd" clipRule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill={fillColor}></path>
				</g>
			</svg>
		</>
	);

}