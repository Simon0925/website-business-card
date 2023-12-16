import styles from './ScrollBar.module.scss';
import { ProgressSkill } from '../ProgressSkill/ProgressSkill';
import {ScrollBarPersonalData} from '../ScrollbarPersonalData/ScrollbarPersonalData';
import {WrapForScroll} from '../WrapForScroll/WrapForScroll';
import Progress from '../../UI/Progress/Progress';
import { ListSkill } from '../ListSkill/ListSkill';
import {DownloadCv} from '../DownloadCv/DownloadCv';
 
export function ScrollBar ()  {
	return (
		<div className={styles['scroll-bar']} >
			<WrapForScroll>
				<ScrollBarPersonalData />
			</WrapForScroll>
			<WrapForScroll>
				<ProgressSkill />
			</WrapForScroll>
			
			<WrapForScroll>
				<Progress text='HTML' percent={90} />
				<Progress text='CSS' percent={90} />
				<Progress text='JS' percent={70} />
				<Progress text='React JS' percent={80} />
				<Progress text='TypeSript' percent={50} />
				<Progress text='Node JS' percent={30} />
			</WrapForScroll>
			<WrapForScroll>
				<ListSkill />
			</WrapForScroll>
			<DownloadCv />
		</div>
		
	);
}