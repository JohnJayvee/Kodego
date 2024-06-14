import Shoes from './ShoesFunction';
import Gadget from './GadgetFunction';


function Two() {

    let selectedchoice = sessionStorage.getItem('choice');

    let shoeFunc = () => {
        let choice = document.getElementById('shoes').innerText;
        sessionStorage.setItem('choice', choice);
        window.location.reload();
        console.log(sessionStorage.getItem('choice'));
    }

    let gadFunc = () => {
        let choice = document.getElementById('gadget').innerText;
        sessionStorage.setItem('choice', choice);
        window.location.reload();
    }
    let condition = selectedchoice === "Shoes";
    return (
        <>
            <div className="text-center p-5">
                <button id='shoes' className="btn btn-outline-warning mx-3" onClick={shoeFunc}>Shoes</button>
                <button id='gadget' className="btn btn-outline-primary" onClick={gadFunc}>Gadget</button>
                {condition ? <Shoes /> : <Gadget />}
            </div>

        </>
    )
}

export default Two;