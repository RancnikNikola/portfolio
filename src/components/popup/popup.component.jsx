
import './popup.styles.scss';

const Popup = (props) => {
    return (
        <div className="popup-message">
          {props.message}
        </div>
      );
}

export default Popup;