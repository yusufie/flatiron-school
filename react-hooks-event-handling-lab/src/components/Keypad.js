// Code Keypad Component Here

function Keypad() {

    function handlePasswordChange() {
        console.log("Entering password...");
    }
    return (
        <input type="password" onChange={handlePasswordChange} />

    )
}

export default Keypad;