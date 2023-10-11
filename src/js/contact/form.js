//Get form
const form = document.getElementById('form');
console.log(form);


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const text = document.getElementById('text').value;

    alert(email);
    alert(name);
    alert(surname);
    alert(text);
    
});
