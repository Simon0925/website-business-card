
import { useEffect, useState,useMemo, useCallback } from 'react';

import styles from './WordPrint.module.scss';

export default function WordPrint() {
	const codeText: string = '<code>';
   
    
	const [sentenceIndex, setSentenceIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	

	const variantText = useMemo(() => ['automation tools.','design mockups.', 'web interfaces.','iOS and Android applications.'], []);

	const typeCharacter = useCallback(() => {
		if (charIndex < variantText[sentenceIndex].length) {
		  setCharIndex(charIndex + 1);
		} else {
		  setIsDeleting(true);
		}
	  }, [charIndex, sentenceIndex, variantText]);
	
	  const deleteCharacter = useCallback(() => {
		if (charIndex > 0) {
		  setCharIndex(charIndex - 1);
		} else {
		  setIsDeleting(false);
		  setSentenceIndex((prev) => (prev + 1) % variantText.length);
		}
	  }, [charIndex, variantText.length]);

	  useEffect(() => {
		const interval = isDeleting 
		  ? setTimeout(deleteCharacter, 50)
		  : setTimeout(typeCharacter, 200);
	
		return () => clearTimeout(interval);
	  }, [charIndex, deleteCharacter, isDeleting, sentenceIndex, typeCharacter, variantText]);
	

	return <> 
		<div className={styles['baner-content']}>
			<span className={styles['code']} >{codeText}</span>  I build {variantText[sentenceIndex].slice(0, charIndex + 1)} 
			<span className={styles['print']}>|</span>
			<span className={styles['code']}>{codeText}</span> 
		</div>
	</>;
}