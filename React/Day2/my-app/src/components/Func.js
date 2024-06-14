import Pass from './Pass';
import Fail from './Fail';
import Boy from './Boy';
import Girl from './Girl';



function SampleFunc() {
    const nem = "Jayvee";
    let grade = 90;
    let condition = grade > 75;
    let condition2 = grade === 76;
    let x = 2;
    let gender = x === 1;
    return (
        <>
            <h1>{nem}</h1>
            {condition ? (condition2 ? <Pass /> : <Fail />) : <Fail />}
            {gender ? <Boy /> : <Girl />}
        </>
    )
}
export default SampleFunc;  