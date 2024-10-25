const rangeInput = document.getElementById('rangeInput');
const rangeValue = document.getElementById('rangeValue');

const screen = document.getElementById('screen');
const screenbtn = document.getElementById('screenBtn');

let checkbox = document.getElementsByClassName('checkbox');
const barre = document.getElementsByClassName('bar');
const strength = document.getElementById('strength');

const generate = document.getElementById('generate');

const KEYOBJECT = {

  'uppercase': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  'lowercase': ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  'numbers': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  'symbols': ['!', '@', '#', '%', '^', '&', '*', '(', ')', '_', '+', '=', ',', '.', '/', '?', '<', '>', ']', '[', '{', '}', ';', ':', '"']

}

let range = 10;

rangeValue.innerHTML = Math.floor(rangeInput.value / 5);

rangeInput.oninput = function () {
  rangeValue.innerHTML = Math.floor(rangeInput.value / 5);
  range = Math.floor(rangeInput.value / 5);
  generatePassword(range, checkbox);
}

for(let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', ()=>{
    generatePassword(range, checkbox);
  })
}


screenbtn.addEventListener('click', () => {
  screen.select();
  if (screen.value.length > 0) {
    navigator.clipboard.writeText(screen.value);

    let copyModal = document.createElement('div');

    copyModal.classList.add('copyModal');
    copyModal.classList.add('add');
    copyModal.innerHTML = 'Code copié!';

    document.body.appendChild(copyModal);

    setTimeout(() => {
      copyModal.remove();
    }, 2000)
  } else {
    let copyModal = document.createElement('div');

    copyModal.classList.add('copyModal');
    copyModal.classList.add('add');
    copyModal.innerHTML = 'Emplacement vide!';

    document.body.appendChild(copyModal);

    setTimeout(() => {
      copyModal.remove();
    }, 2000)
  }

});

function generatePassword(range, checkbox) {

  let elementTab = [];

  for (let i = 0; i < checkbox.length; i++) {

    if (checkbox[i].checked == true) {

      elementTab.push(checkbox[i].getAttribute('data-element'));
    }
  }

  let usable = [];

  for (let i = 0; i < elementTab.length; i++) {
    usable.push(KEYOBJECT[elementTab[i]]);
  }

  let generateWord = [];

  while (generateWord.length < range) {
    let r1 = Math.floor((usable.length) * Math.random());

    let r2 = Math.floor((usable[r1].length) * Math.random());

    generateWord.push(usable[r1][r2]);
  }

  screen.value = generateWord.join('').toString();


  if (usable.length == 1) {

    for (let i = 0; i < barre.length; i++) {
      barre[0].style.backgroundColor = 'red';
      barre[i].style.backgroundColor = 'white';
    }


    if (range < 5) {
      strength.innerText = 'LOL';
    } else {
      strength.innerText = 'WEAK';
    }

  } else if (usable.length == 2) {

    if (range < 9) {

      for (let i = 0; i < barre.length; i++) {
        barre[0].style.backgroundColor = 'red';
        barre[i].style.backgroundColor = 'white';
      }

      strength.innerText = 'WEAK';

    } else {

      for (let i = 0; i < barre.length; i++) {
        barre[i].style.backgroundColor = 'yellow';
        barre[3].style.backgroundColor = 'white';
      }

      strength.innerText = 'MEDIUM';

    }

  } else if (usable.length == 3) {

    if (range < 8) {

      for (let i = 0; i < barre.length; i++) {
        barre[0].style.backgroundColor = 'red';
        barre[i].style.backgroundColor = 'white';
      }

      strength.innerText = 'WEAK';

    } else if (range > 8) {

      for (let i = 0; i < barre.length; i++) {
        barre[i].style.backgroundColor = 'yellow';
        barre[3].style.backgroundColor = 'white';
      }

      strength.innerText = 'MEDIUM';

    } else if (range > 15) {

      for (let i = 0; i < barre.length; i++) {
        barre[i].style.backgroundColor = 'yellow';
        barre[3].style.backgroundColor = 'white';
      }

      strength.innerText = 'STRONG ENOUGH';

    }

  } else if (usable.length == 4) {

    if (range < 8) {

      for (let i = 0; i < barre.length; i++) {
        barre[0].style.backgroundColor = 'red';
        barre[i].style.backgroundColor = 'white';
      }

      strength.innerText = 'WEAK';
    } else if (range > 8 && range < 15) {


      for (let i = 0; i < barre.length; i++) {
        barre[i].style.backgroundColor = 'yellow';
        barre[3].style.backgroundColor = 'white';
      }

      strength.innerText = 'STRONG ENOUGH';

    } else if (range > 15) {

      for (let i = 0; i < barre.length; i++) {
        barre[i].style.backgroundColor = 'var(--clr-btn-img)';
      }

      strength.innerText = 'VERY STRONG';

    }

  }
}
generatePassword(range, checkbox);
