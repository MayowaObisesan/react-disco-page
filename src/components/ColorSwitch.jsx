function ColorSwitcher() {
    const arrayOfColors = ["red", "green", "blue", "orange", "cyan", "magenta", "pink", "white", "tomato", "navajowhite", "purple", "violet", "skyblue"];

    function handlePageColorChange() {
        const valueBetween0and10 = Math.round(Math.random() * arrayOfColors.length - 1);
        console.log(valueBetween0and10, arrayOfColors[valueBetween0and10]);

        document.body.style.backgroundColor = arrayOfColors[valueBetween0and10];
    }

    return (
        <button onClick={handlePageColorChange}>Change Page color</button>
    )
}

export default ColorSwitcher;