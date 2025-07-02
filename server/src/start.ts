import app from "."

function main() {
    app.listen(4000, () => {
        console.log(`App listening on port ${4000}`)
    })
}

main()