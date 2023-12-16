
import { useEffect, useState } from 'react';

import styles from './WordPrint.module.scss';

export default function WordPrint() {
	const codeText: string = '<code>';
   
    
	const [sentenceIndex, setSentenceIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);

	const variantText: string[] = ['automation tools.', 'design mockups.', 'web interfaces.', 'iOS and Android applications.'];

	useEffect(() => {
		const interval = setInterval(() => {
			setCharIndex((prevCharIndex) => (prevCharIndex + 1) % variantText[sentenceIndex].length);

			if (charIndex === variantText[sentenceIndex].length - 1) {
       
				setSentenceIndex((prevSentenceIndex) => (prevSentenceIndex + 1) % variantText.length);
			}
		}, 200); 

		return () => clearInterval(interval); 
	},[charIndex, sentenceIndex]);

	return <> 
		<div className={styles['baner-content']}>
			<span className={styles['code']} >{codeText}</span>  I build {variantText[sentenceIndex].slice(0, charIndex + 1)} 
			<span className={styles['print']}>|</span><span className={styles['code']}>{codeText}</span> 
		</div>
	</>;
}