//bootstrap valid 

    //     // Example starter JavaScript for disabling form submissions if there are invalid fields
    //     (function () {
    //       'use strict';
    //       window.addEventListener('load', function () {
    //           // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //           var forms = document.getElementsByClassName('needs-validation');
    //           // Loop over them and prevent submission
    //           var validation = Array.prototype.filter.call(forms, function (form) {
    //               form.addEventListener('submit', function (event) {
    //                   if (form.checkValidity() === false) {
    //                       event.preventDefault();
    //                       event.stopPropagation();
    //                   }
    //                   form.classList.add('was-validated');
    //               }, false);
    //           });

              
    //       }, false);
    //   })();


 



// Sumir e aparecer as telas 

var butto = document.getElementById('proximo')
const tela1 = document.getElementById('tela1')
const tela2 = document.getElementById('tela2')
butto.addEventListener('click', () => {

    tela1.style.display = "none"
    tela2.style.display = "block"

})
var voltar = document.getElementById('voltar')

voltar.addEventListener('click', () => {

    tela1.style.display = "block"
    tela2.style.display = "none"
})





// aparecer o botão de adicionar os itesns
const solicitacao = document.getElementById('solicitacoes').onclick = function () {
var comboCidades = document.getElementById("solicitacoes");
var area = document.getElementById('table')
var are2 = document.getElementById('are2')


if (comboCidades.options[comboCidades.selectedIndex].text == "Orçamento") {

area.style.display = "block"

} else

area.style.display = "none"

};



//   Adicionar o botão de adicionar itens

// const inputContainer = document.querySelector('#input-container');
// const addInputButton = document.querySelector('#add-input');

// let inputNames = [];
// let inputCount = 1;
// addInputButton.addEventListener('click', function () {
//     const inputName = `itemNome${inputCount}`;
//     if (inputNames.includes(inputName)) {
//         alert(`O nome do item "${inputName}" já existe!`);
//         return;
//     }
//     inputNames.push(inputName);
//     const inputHTML = `
// <div class="form-group">
//     <div class="d-flex" >
//     <div class=" mb-3">
//         <select class="form-control" name="item${inputCount}" style="width: 80%;" required>
//             <option value="">Escolha os</option>
//             <% for(var i=0; i<item.length; i++) { %>

//                 <option value="<%= item[i].nome  %>"> <%= item[i].nome %></option>
//                <% } %>
//         </select>
//     </div>
//     <div class="mx-3">                       
//         <input type="text" class="form-control" maxlength="7" width="20%"  autocomplete="off" name="itemQuantidade${inputCount}" placeholder="quantidade">
//     </div>
//     <div class="mx-3">
//         <select class="form-control" name="medida${inputCount}" required>
//             <option value="">Escolha a Medida</option>
//             <option value="KG">KG</option>
//             <option value="LT">LT</option>
//             <option value="SC">SC</option>
//             <option value="ML">ML</option>
//             <option value="UN">UN</option>
//         </select>
//     </div>
//     <button type='button' class='btn btn-outline-danger' style="height: 4vh; justify-content: center;" onclick='deleteProduct(this)'>
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
//         <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
//       </svg>
//     </button>
//     </div>
//     </div>`
//     inputContainer.insertAdjacentHTML('beforeend', inputHTML);
//     inputCount++;

// });



function deleteEmpresa(el) {

    el.previousElementSibling.remove();

    el.remove();

}

function deleteProduct(el) {

    el.previousElementSibling.remove();
    el.previousElementSibling.remove();
    el.previousElementSibling.remove();
    el.remove();

}



// select empresas 



const select = document.getElementById("mySelect");
const removeBtn = document.getElementById("removeBtn");
let selectedOptions = [];

select.addEventListener("change", function () {
    for (let i = 0; i < select.options.length; i++) {
        const cont = `empresa${i}`
        if (select.options[i].selected) {
            selectedOptions.push(select.options[i].value);

            if(select.options[i].value == ""){
              alert("vaziu")
              break
            }else
            select.options[i].disabled = true // desabilitar para não ser escolhido de novo..!!
            document.getElementById("selected").insertAdjacentHTML('beforeend', `                                                                         <li class="list-group-item d-flex justify-content-between align-items-start">

        <div class="input-group mb-3">
         <input  type="text"  class="form-control" id="floatingInputGrid" name="${cont}" style="width: 90%; "  value="${select.options[i].value}" readonly  />
         <button type='button'  class="input-group-text"  onclick="deleteEmpresaLista(this)">X</button>
        </div>

  `)
        }
    }
});

function deleteEmpresaLista(element) {
    const select = document.getElementById("mySelect");
    

    const parentDiv = element.parentNode.parentNode;
    parentDiv.remove();

    for (let i = 0; i < select.options.length; i++) {

        select.options[i].disabled = false // abilitar de novo
    }
}





