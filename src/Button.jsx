function doSomething(){
    console.log("Button Was Clicked!");
}
function handleHover(){
    console.log("Hover Was Clicked");
}
function DoubleClick(){
    console.log("Double Clicked!")
}
export default function Button() {
    return(
        <div>
            <button onClick={doSomething}>Click Me!</button>
            <p onMouseOver={handleHover} >Para hover on me!</p>
            <button onDoubleClick={DoubleClick}>Double Click Me!</button>
        </div>
    );
}