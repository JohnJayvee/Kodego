try
{
let dividend = 10;
let divisor = 10;

if (divisor == 0){
    throw new Error ("Division by zero");
}

}catch (error){
    console.log("Contact system administrator"); //redirect to a different
    console.log(`Error encountered: ${error.message} in line 13 of script.js`); //log this to a file
} finally {
    // let quotient = dividend / divisor;
    // console.log(`quotient: ${quotient}`);
    //clean up code
    console.log("finish calculation");
}