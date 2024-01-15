interface LetterSVGProps {
    isSelected:boolean,
	isValid: boolean
}



export default function LetterSVG({isSelected,isValid}:LetterSVGProps){
	const fillColor = isSelected ? 'white' : (isValid ?'#5C5C6E'  : 'white');

	return(
		<>
			<svg fill={fillColor}width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
				<g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 2" id="Layer_2"> 
					<path d="M29,11H3a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V12A1,1,0,0,0,29,11Zm-2.79,2L16,20.23,5.79,13ZM4,28V14.18l11.42,8.09a1,1,0,0,0,1.16,0L28,14.18V28Z">
					</path> 
				</g> 
				</g>
			</svg>
		</>
	);
}