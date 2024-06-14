import ChildFunction from "./ChildFunction"

function SampleFunction() {
    const player1 = {
        name: "Player 1",
        age: 18,
    }
    return (
        <>
            <h1>Props in function</h1>
            <ChildFunction name="Jayvee" age={24} />
            <ChildFunction name="Joy" age={23} />
            <ChildFunction name={player1.name} age={player1.age} />


        </>
    )
}
export default SampleFunction