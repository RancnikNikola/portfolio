
import './glitch-button.styles.scss';

const GlitchButton = ({ text }) => {
    return (
        <button href="#" class="testing" title={text}>{text}</button>
    )
}

export default GlitchButton;