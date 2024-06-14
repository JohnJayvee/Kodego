function ChildFunction({ name, age }) {
    return (
        <>
            {/* <h1>Hello! {props.name}, you are {props.age} years old</h1> */}
            <h1>Hello! {name}, you are {age} years old</h1>

        </>
    )
}

ChildFunction.defaultProps = {
    name: "_____",
    age: "_____"
}

export default ChildFunction