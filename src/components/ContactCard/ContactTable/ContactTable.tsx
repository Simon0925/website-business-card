import React from 'react';
import styles from './ContactTable.module.scss';

interface ContactTableProps{
    title1:string,
    dataTitle1:string,
    title2:string,
    dataTitle2:string,
    title3:string,
    dataTitle3:string
}


const ContactTable = React.memo(({ title1, dataTitle1, title2, dataTitle2, title3, dataTitle3 }: ContactTableProps) => {
	return(
		<div className={styles['contact-table']}>
                    
			<ul>
				<li>
					<span>{title1}</span>
					<p>{dataTitle1}</p>
				</li>
				<li>
					<span>{title2}</span>
					<p>{dataTitle2}</p>
				</li>
				<li>
					<span>{title3}</span>
					<p>{dataTitle3}</p>
				</li>
			</ul>
                    
		</div>
	);
});
export default ContactTable;