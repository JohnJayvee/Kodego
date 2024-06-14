function Shoes({ image, title, description }) {
    return (
        <>
            <div className="d-inline-block ">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}.</p><a href="/" className="btn btn-danger">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shoes;