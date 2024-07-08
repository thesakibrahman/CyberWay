
// Dataset of valid flags
var validFlags = [
    'CTF{Your_First_Flag}',
    'CTF{Your_Second_Flag}',
    'CTF{Your_Third_Flag}',
    'CTF{"Image_Is_Unlocked"}',
    'CTF{"YOU_ARE_HACKED"}',
    'CTF{You_Can_Move_To_The_Next}',
    'CTF{next_time_I_will_try_2_rounds_of_rot13}',
    'CTF{Caesar_ciper_is_decrypted}'
    
    // Add more valid flags as needed
];

function submitFlag() {
    var flagInput = document.getElementById('flagInput').value;
    var validationMessage = document.getElementById('validationMessage');

    if (validFlags.includes(flagInput)) {
        validationMessage.innerHTML = 'Flag is valid! Congratulations!';
        validationMessage.style.color = '#5bc0de'; // Blue color for success
    } else {
        validationMessage.innerHTML = 'Wrong flag. Please try again.';
        validationMessage.style.color = '#d9534f'; // Red color for error
    }
}

function showFlagSubmitPopup(challengeId) {
    document.getElementById('flagSubmitPopup').style.display = 'block';
    document.getElementById('validationMessage').innerHTML = ''; // Clear previous validation message
}

function closeFlagSubmitPopup() {
    document.getElementById('flagSubmitPopup').style.display = 'none';
}


