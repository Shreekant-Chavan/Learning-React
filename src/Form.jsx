function handleFormSubmit(event) {
    console.log("Form was Submitted!");
    // event.preventDefault();
}

export default function Form() {
    return(
        <form onSubmit={handleFormSubmit} action="action.php">
            <input type="text" placeholder="Write Name"/>
            <button>Submit</button>
        </form>
    );
}