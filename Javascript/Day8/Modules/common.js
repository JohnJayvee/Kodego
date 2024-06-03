const person = {
    firstName: "Juan",
    lastName: "Dela Cruz"
}

export function printFirstName(p) {
    console.log(p.firstName)
}

export const printLastName = lastName => console.log(lastName);

export default person;
// export { printFirstName,printLastName };