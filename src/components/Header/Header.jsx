import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu} from "./constants";
import Menu from "./Menu/Menu";
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.webp';
import ReloadIcon from '@icons/svgs/reload.svg';
import HeartIcon from '@icons/svgs/heart.svg';
import CartIcon from '@icons/svgs/cart.svg';

function Header() {
    const {containerBoxIcon,containerMenu,containerHeader,container} = styles;
    return ( 
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerMenu}>
                    <div className={containerBoxIcon}>
                        {
                            dataBoxIcon.map((item) => {
                                return <BoxIcon type={item.type} href={item.href} />
                            })
                        }
                    </div>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(0,3).map((item) => {
                                return <Menu content={item.content} href={item.href} />
                            })
                        }
                    </div>
                </div>
                <div>
                    <img src={Logo} alt="Logo" style={{
                        width: '153px',
                        height: '53px'
                    }}/>
                </div>
                <div className={containerMenu}>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(3,dataMenu.length).map((item) => {
                                return <Menu content={item.content} href={item.href} />
                            })
                        }
                    </div>

                    <div className={containerBoxIcon}>
                        <img width={26} height={26} src={ReloadIcon} alt="Reload" />
                        <img width={26} height={26} src={HeartIcon} alt="Heart" />
                        <img width={26} height={26} src={CartIcon} alt="Cart" />
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Header;