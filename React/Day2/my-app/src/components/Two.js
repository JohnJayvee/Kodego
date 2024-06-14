import Shoes from './Shoes';
import Gadget from './Gadget';


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
            <button id='shoes' onClick={shoeFunc}>Shoes</button>
            <button id='gadget' onClick={gadFunc}>Gadget</button>
            {condition ? <Shoes /> : <Gadget />}
        </>
    )
}

export default Two;