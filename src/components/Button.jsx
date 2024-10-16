function CustomButton({ text, color, bg, customClick }) {
    return (
        <button style={{ color: color, background: bg }} onClick={customClick}>{text}</button>
    )
}

export default CustomButton;