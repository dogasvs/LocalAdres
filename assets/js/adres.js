let adresForm = document.querySelector('.adresForm');
let adresList = document.querySelector('.adresList');
let formSilme = document.querySelector('.delete');
let editItem = document.querySelector('.editItem');
let deleteItem = document.querySelector('.deleteItem');

let adresListesi = [{
  id: 0,
  name: 'Doğa',
  lastname: 'Savaş',
  phonenumber: '05333133376',
  adres: 'Bilmemne konutları b blok daire 4',
},
{
  id: 1,
  name: 'Nil',
  lastname: 'ALşan',
  phonenumber: '05334343334',
  adres: 'blabla Aprtmanı No:7 daire:5'
},
{
  id: 2,
  name: 'Çınar',
  lastname: 'Alşan',
  phonenumber: '05432567893',
  adres: 'Şaka Apart. no:3/1 daire:2 kat:1'
}
];

if(typeof localStorage.adresListesi !== 'undefined') {
  adresListesi = JSON.parse(localStorage.adresListesi);
  renderForm();
}

function handleSubmitForm(e) {
  e.preventDefault();
  let formData = new FormData(adresForm);
  let formObj = Object.fromEntries(formData);
  adresListesi.push(formObj);
  adresForm.reset();
  saveForm();
  renderForm();
}

adresForm.addEventListener('submit',handleSubmitForm);

function saveForm() {
  localStorage.adresListesi = JSON.stringify(adresListesi);
}

function renderForm() {
  adresList.innerHTML = '';
  for(let i = 0; i < adresListesi.length; i++) {
    adresList.innerHTML += ` <div class="adres-item">
    <p> ${adresListesi[i].name} </p> 
    <p> ${adresListesi[i].lastname} </p> 
    <p> ${adresListesi[i].phonenumber} </p> 
    <p> ${adresListesi[i].adres} </p>  
    <p> <strong class="editItem"> ✏️ </strong> <strong class="deleteItem"> 🗑️ </strong>
    `;
  }
}

function handleDeleteItem() {
  localStorage.removeItem('.adres-item');
}
deleteItem.addEventListener('click', handleDeleteItem);


function clearForm() {
  localStorage.clear(); 
  adresListesi = [];
  renderForm();
}

formSilme.addEventListener('click', clearForm);