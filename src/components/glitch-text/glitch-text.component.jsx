import './glitch-text.styles.scss';

const GlitchText = ({ text }) => {
    return (
        <div className='glitch' title={text}>{text}</div>
    )
}

export default GlitchText;
