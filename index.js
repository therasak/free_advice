
const adviceElement = document.getElementById('advice');
const nameBox = document.getElementsByClassName('getName')[0];
const refershBtn = document.getElementById('refreshButton');
const titel = document.getElementById('Title');
const desc = document.getElementById('desc');

let UserName = "";

titel.textContent = `Hey ${UserName} Welcome! 😇`

if (localStorage.getItem('username')) {
  UserName = localStorage.getItem('username');
  titel.textContent = `Hey ${UserName} Welcome! 😇`
  nameBox.style.display = 'none'
  refershBtn.style.display = ''
  desc.style.display = ''


}
else {
  nameBox.style.display = ''
  refershBtn.style.display = 'none';
  titel.style.display = 'none'
  desc.style.display = 'none'


}

function getAdvice() {

  nameBox.style.display = 'none'
  refershBtn.style.display = ''
  desc.style.display = ''
  const getName = document.getElementById('name').value;
  UserName = getName;
  titel.style.display = ''
  titel.textContent = `Hey ${UserName} Welcome! 😇`

  if (!localStorage.getItem('username')) {
    localStorage.setItem('username', getName)
  }
  else {
    titel.style.display = ''
    UserName = localStorage.getItem('username');
    titel.textContent = `Hey ${UserName} Welcome! 😇`
  }


  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {

      const advise = data.slip.advice;
      adviceElement.textContent = `" ${advise} "`

    })
    .catch(error => {
      adviceElement.innerHTML='<span>Sorry i am hungry ☹️ i cant able to motivate you right now <br> (network problem)</span>';

      console.error('Error:', error)});
}