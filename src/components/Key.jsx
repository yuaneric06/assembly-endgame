export default function Key(props) {
    return (
        <button 
            onClick={props.handleClick}
            className={props.className}
            disabled={props.isDisabled}
            aria-disabled={props.isAriaDisabled}
            aria-label={`Letter ${props.letter}`}
        >{props.letter}</button>
    )
}