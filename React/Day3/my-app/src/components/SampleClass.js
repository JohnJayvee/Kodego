import React, { Component } from "react";

import ChildClass from "./ChildClass";


class SampleClass extends Component {
    render() {
        return (

            <>
                <ChildClass name="Jayvee" />
                <ChildClass name="Joy" />

            </>
        )
    }
}

export default SampleClass;