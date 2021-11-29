import './Display.css';

function Display(props) {
    return (
        <div className="display">
            {props.text}
        </div>
    );
}

export default Display;