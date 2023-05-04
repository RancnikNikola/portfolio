import Portrait from '../../assets/images/person.PNG';
import './shadow-image.styles.scss';

const ShadowImage = () => {
    return (
        <div className='shadow-image-container'>
            <img src={Portrait} alt='image' />
        </div>
    )
}

export default ShadowImage;