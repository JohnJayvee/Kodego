import Card from './Cards'
import one from '../assets/img/womens.jpg'
import two from '../assets/img/mens.jpg'
import three from '../assets/img/shoes.jpg'

function AllCards() {
    return (
        <div className="text-align-center" style={{ display: "inline-flex" }}>
            <Card prod="" text="" img={one} />
            <Card prod="" text="" img={two} />
            <Card prod="" text="" img={three} />
            <Card prod="" text="" img={one} />

        </div>
    )
}

export default AllCards;