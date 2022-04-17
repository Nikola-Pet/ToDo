function dodajZadatak(){
    let zadatak = document.querySelector('#textZadatka');
    zadatak = zadatak.value;

    let rok = document.querySelector('#rok');
    rok = rok.value;

console.log(rok)

    if(rok !== "" && zadatak !==""){
        let now = new Date().toLocaleString();

     let newtr = document.createElement('tr');
      newtr.innerHTML += `<td>${now}</td>
                          <td>${zadatak}</td>
                          <td>${rok}</td>`;

     document.querySelector('#zadaci').appendChild(newtr);
    }   
    else{
        alert('UNESITE SVE PODATKE!')
    }
   
}