
import React, { Component } from "react";

import GadgetChild from "./Gadget"

import image1 from "../img/gadget1.jpg"
import image2 from "../img/gadget2.png"
import image3 from "../img/gadget3.jpg"


class GadgetFunction extends Component {
    render() {
        return (

            <>
                <div className=" bg-primary p-5 m-5  text-center">
                    <h1 style={{ color: 'white' }}>Gadgets' Section</h1>
                    <GadgetChild image={image1} title="Gadget 1" description="Description 1" />
                    <GadgetChild image={image2} title="Gadget 2" description="Description 2" />
                    <GadgetChild image={image3} title="Gadget 3" description="Description 3" />
                </div>

            </>
        )
    }
}

export default GadgetFunction