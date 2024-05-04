
const generateId = () => {
    const id = crypto.randomUUID();
    return id;
}


const generateFiveDigitId = () => {
    const str = "12345667890abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for (let i = 0; i < 5; i++) {
        output += str[Math.floor(Math.random() * str.length)];
    }
    return output;
}

export {
    generateFiveDigitId,
    generateId
}