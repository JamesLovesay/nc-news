export default function Error(error) {
    let displayError = ""
    if(error.error) {
        displayError += error.error
    } else {
        displayError += "404 - path not found, please redirect to the homepage using the link above."
    }
    return (
        <section className="error_container">
            <h2 className="error_message">{ displayError }</h2>
            <br />
            <img classNAme="error_image" src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="error-game-over" width="400" height="400"></img>
        </section>
    )
}