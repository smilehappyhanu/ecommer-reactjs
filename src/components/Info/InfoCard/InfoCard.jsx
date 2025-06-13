import styles from '../style.module.scss';
import TruckIcon from '@icons/svgs/truck.svg';

function InfoCard({content,des,src}) {
    const {containerCard,containerContent,title,description} = styles;
    return ( 
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt="TruckIcon" />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={description}>{des}</div>
            </div>
        </div>
     );
}

export default InfoCard;