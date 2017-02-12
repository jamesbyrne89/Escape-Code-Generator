const character = document.getElementById('character');
const code = document.getElementById('code');
const instructions = document.getElementById('instructions');
const input = document.getElementById('input');

var logKey = function(e){
  instructions.innerHTML=('Now press <img class="enter-icon" src="/assets/images/Enter Key-50.png"> to copy to clipboard');
  
  if (input.val == '&'){
  character.textContent=('&')
    code.textContent=('&#36;')
  }
  else if (input.val == ' '){
    character.textContent=('Space')
  code.textContent=('&#32;')
  }
  else if (input.val == '!'){
    character.textContent=('!')
  code.textContent=('&#33;')
  }
  else if (input.val == '#'){
  character.textContent=('#')
    code.textContent=('&#35;')
  }
  else if (input.val = '$'){
  character.textContent=('$')
    characterBox.textContent=('&#36;')
  }
  else if (input.val && (e.keyCode == 53)){
  characterBox.textContent=('% = &#37;')
    
  }
  else if (input.val == '\''){
  characterBox.textContent=('\' = &#39;')
  }
  else if (input.val == '('){
  characterBox.textContent=('( = &#40;')
  }
  else if (input.val && (input.val == 48)){
  characterBox.textContent=(') = &#41;')
  }
  else if (input.val && (input.val == 56)){
  characterBox.textContent=('* = &#42;')
  }
  else if (input.val && (input.val == 187)){
  character.textContent=('Plus sign')
    code.textContent=('&#43;')
  }
  else if (input.val && (input.val == 188)){
  character.textContent=('Comma')
    code.textContent=('&#44;')
  }
  else if (input.val && (input.val == 189)){
  character.textContent=('Hyphen')
    code.textContent=('&#45;')
  }
  else if (input.val && (input.val == 190)){
  character.textContent=('Full stop')
    code.textContent=('&#46;')
  }
  else if (input.val == 191){
  character.textContent=('Forward slash')
    code.textContent=('&#47;')
  }
  else if (input.val == 48){
  character.textContent=('0')
    code.textContent=('&#48;')
  }
  else if (input.val == 49){
  character.textContent=('1')
    code.textContent=('&#49;')
  }
  else if (input.val == 50){
  character.textContent=('2')
    code.textContent=('&#50;')
  }
  else if (input.val == 51){
  character.textContent=('3')
    code.textContent=('&#51;')
  }
  else if (input.val == 52){
  character.textContent=('4')
    code.textContent=('&#52;')
  }
  else if (input.val == 53){
  character.textContent=('5')
    code.textContent=('&#53;')
  }
  else if (input.val == 54){
  character.textContent=('6')
    code.textContent=('&#54;')
  }
  else if (input.val == 55){
  character.textContent=('7')
    code.textContent=('&#55;')
  }
  else if (input.val == 56){
  character.textContent=('8')
    code.textContent=('&#56;')
  }
  else if (input.val == 57){
  character.textContent=('9')
    code.textContent=('&#57;')
  }
  else if (input.val && (input.val == 186)){
  character.textContent=('Colon')
    code.textContent=('&#58;')
  }
  else if (input.val == 52){
  character.textContent=('4')
    code.textContent=('&#52;')
  }
  else if (input.val == 52){
  character.textContent=('4')
    code.textContent=('&#52;')
  }  
};

function copyToClipboard(){
  document.execCommand('copy');
}


document.addEventListener('keyup', logKey)

