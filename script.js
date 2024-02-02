function generatePassword() {
    const length = document.getElementById("passwordLength").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=";

    let validChars = lowercaseChars;

    if (includeUppercase) {
        validChars += uppercaseChars;
    }
    if (includeNumbers) {
        validChars += numberChars;
    }
    if (includeSymbols) {
        validChars += symbolChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }

    document.getElementById("passwordResult").innerText = `Generated Password: ${password}`;
}
