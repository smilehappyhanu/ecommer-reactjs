import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fb.svg';
import instagramIcon from '@icons/svgs/instagram.svg';
import youtubeIcon from '@icons/svgs/youtube.svg';
import heartIcon from '@icons/svgs/heart.svg';
import reloadIcon from '@icons/svgs/reload.svg';
import cartIcon from '@icons/svgs/cart.svg';

function BoxIcon({type,href}) {
    const {boxIcon}  = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'inst':
                return instagramIcon;
            case 'ytb':
                return youtubeIcon;
        }
    }

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
      );
}

export default BoxIcon;