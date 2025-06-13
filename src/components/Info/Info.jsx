import { dataInfo } from "@components/Info/constant";
import InfoCard from "@components/Info/InfoCard/InfoCard";
import MainLayout from "@components/Layout/Layout";
import styles from './style.module.scss';

function Info() {
    const {container} = styles;
    return ( 
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item,index) => {
                        return <InfoCard 
                            content={item.title}
                            des={item.description}
                            src={item.src}
                        />
                    })}
                </div>                
            </MainLayout>
        </div>
     );
}

export default Info;