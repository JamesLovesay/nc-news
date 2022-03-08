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

        </section>

    )
}