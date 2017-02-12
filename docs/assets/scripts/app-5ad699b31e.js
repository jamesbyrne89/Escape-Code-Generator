const character = document.getElementById('character');
const code = document.getElementById('code');
const instructions = document.getElementById('instructions');
const input = document.getElementById('input');
console.log(input);

var logKey = function(e){
  instructions.innerHTML=('Now press <img class="enter-icon" src="/assets/images/Enter Key-50.png"> to copy to clipboard');
  character.textContent=('Escape code:')
  if (input.value == '&'){
  //character.textContent=('&')
    code.textContent=('&#36;')
  }
  else if (input.value == ' '){
  code.textContent=('&#32;')
  }
  else if (input.value == '!'){
  code.textContent=('&#33;')
  }
  else if (input.value == '#'){
  code.textContent=('&#35;')
  }
  else if (input.value == '$'){
  code.textContent=('&#36;')
  }
  else if (input.value == '%'){
  code.textContent=('&#37;')  
  }
  else if (input.value == '\''){
  code.textContent=('&#39;')
  }
  else if (input.value == '('){
  code.textContent=('&#40;')
  }
  else if (input.value == ')'){
  code.textContent=('&#41;')
  }
  else if (input.value == '*'){
  code.textContent=('&#42;')
  }
  else if (input.value == '+'){
    code.textContent=('&#43;')
  }
  else if (input.value == ','){
    code.textContent=('&#44;')
  }
  else if (input.value == '-'){
    code.textContent=('&#45;')
  }
  else if (input.value == '.'){
    code.textContent=('&#46;')
  }
  else if (input.value == '/'){
    code.textContent=('&#47;')
  }
  else if (input.value == '0'){
    code.textContent=('&#48;')
  }
  else if (input.value == '1'){
    code.textContent=('&#49;')
  }
  else if (input.value == '2'){
    code.textContent=('&#50;')
  }
  else if (input.value == '3'){
    code.textContent=('&#51;')
  }
  else if (input.value == '4'){
    code.textContent=('&#52;')
  }
  else if (input.value == '5'){
    code.textContent=('&#53;')
  }
  else if (input.value == '6'){
    code.textContent=('&#54;')
  }
  else if (input.value == '7'){
    code.textContent=('&#55;')
  }
  else if (input.value == '8'){
    code.textContent=('&#56;')
  }
  else if (input.value == '9'){
    code.textContent=('&#57;')
  }
  else if (input.value == ':'){
    code.textContent=('&#58;')
  }
  else if (input.value == ''){
    code.textContent=('')
  }
};

function copyToClipboard(){
  document.execCommand('copy');
}


document.addEventListener('keyup', logKey)

