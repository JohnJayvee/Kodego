import ShoesChild from "./Shoes"

import image1 from "../img/shoes1.jpg"
import image2 from "../img/shoes2.jpg"
import image3 from "../img/shoes3.jpg"


function ShoesFunction() {
    // const player1 = {
    //     name: "Player 1",
    //     age: 18,
    // }
    return (
        <>
            <div className=" bg-warning p-5 m-5  text-center">
                <h1>Shoes' Section</h1>
                <ShoesChild image={image1} title="Shoes 1" description="Description 1" />
                <ShoesChild image={image2} title="Shoes 2" description="Description 2" />
                <ShoesChild image={image3} title="Shoes 3" description="Description 3" />
            </div>
        </>
    )
}
export default ShoesFunction