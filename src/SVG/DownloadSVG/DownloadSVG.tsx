
interface DownloadCvProps{
	isHovered:boolean
}

export default function DownloadSVG ({isHovered}:DownloadCvProps){
	return(
		<>
			<a href='https://github.com/Simon0925'>
				<svg
					width='13px'
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1792 1792"
					id="Download"
					fill={isHovered ? 'black' : '#5c5c6f'}
				>
					<path d="M1344 1344q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28H160q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h465l135 136q58 56 136 56t136-56l136-136h464q40 0 68 28t28 68zm-325-569q17 41-14 70l-448 448q-18 19-45 19t-45-19L403 621q-31-29-14-70 17-39 59-39h256V64q0-26 19-45t45-19h256q26 0 45 19t19 45v448h256q42 0 59 39z" />
				</svg>
			</a>
		</>
	);
}