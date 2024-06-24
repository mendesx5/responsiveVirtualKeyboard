document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('key');
    const output = document.getElementById('output');

    function addCharacter(character) {
        output.value += character;
    }
})