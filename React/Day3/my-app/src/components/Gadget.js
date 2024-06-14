import React, { Component } from "react";


class Gadget extends Component {
    render() {
        return (
            <>
                <div className="d-inline-block ">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={this.props.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.description}.</p><a href="/" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Gadget