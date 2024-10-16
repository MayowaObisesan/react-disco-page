// A component is a function or a class.
// It can be reused multiple times - reusable.
// It must start with a Capital letter.
// It must return a markup.

function NameComponent({ text, imgSrc }) {
    return (
        <div>
            <h1 className="" style={{ background: 'navajowhite' }}>{text}</h1>
            <img src={imgSrc} alt="" />
        </div>
    )
}

export default NameComponent;