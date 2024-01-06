
import ContactCard from '../../components/ContactCard/ContactCard';
import Footer from '../../layout/Footer/Footer';
import styles from './Contact.module.scss';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
	return <>
		<div className={styles['contact-wrap']}>
			<h4 className={styles['title']} ><span>Contact information</span></h4>
			<ContactCard />
			<h4 className={styles['title']} ><span>Get in touch</span></h4>
			<ContactForm />
			<Footer />

		</div>
	</>;
}