document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const output = document.getElementById('output');
    const isCapsLockOn = false;

    function addCharacter (character) {
        output.value += character;
    }

    function removeCharacter () {
        output.value = output.value.slice(0, -1);
    }

    function clearAll () {
        output.value = output.value.slice(0, -9999);
    }
    
    function toggleCapsLock() {
        isCapsLockOn = !isCapsLockOn;
        keys.forEach(key => {
            if (key.dataset.key && key.dataset.key.startsWith('Key')) {
                key.textContent = isCapsLockOn ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        });
        document.getElementById('capslock').classList.toggle('active', isCapsLockOn);
    }

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const character = key.textContent.trim();
            if (key.id === 'key-space') {
                addCharacter(' ')
            } else if (key.id === 'key-backspace') {
                removeCharacter()
            } else if (key.id === 'clear-button') {
                clearAll()
            } else {
                addCharacter(character)
            }
        })
    })
})

