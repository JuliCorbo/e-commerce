 
 //establezco la constante addCartButton para agregarle un selector query a todos los ID del boton en las cards
 const addCartButton = document.querySelectorAll("#addCart")

 


 //Evento para el click con un return 
 addCartButton.forEach(add => {
    add.addEventListener("click", clickAñadir);
 });

 const filaCarritoContenedora = document.querySelector(".carrito");
 //funcion para el boton añadir
 function clickAñadir(event){
    const boton = event.target;
    const item =boton.closest(".card-body"); //variable item usando closest

    

    const itemTitle = item.querySelector(".card-title").textContent;//recibo solo texto

    const itemPrecio = item.querySelector(".precio").textContent;
    
        agregarItemCarrito (itemTitle, itemPrecio); //establezco la funcion para agregar los items
 }


 function agregarItemCarrito(itemTitle, itemPrecio){
    const filaCarrito = document.createElement("div");

    const carritoHtml = `
    <div class="fila-container">
        <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Agregaste ${itemTitle}!</h4>
        <p>${itemPrecio}</p>

        <input  class="item-cantidad" type ="number" value ="1">
            <hr>
           
    
            <button class ="btn btn-danger buttonDelete" type="button">X</button>
           
        </div>
    </div>    
    `

    filaCarrito.innerHTML = carritoHtml
    filaCarritoContenedora.append(filaCarrito)

    totalPrecio()

 }

 function totalPrecio(){

    let total = 0 ;
    const shoppingCartTotal = document.querySelector(".shoppingCartTotal");

    const itemsCarrito = document.querySelectorAll(".cards-container")

    itemsCarrito.forEach(itemsCarrito => {
       precioitemsCarrito = itemsCarrito.querySelector(".precio").textContent;

       console.log(precioitemsCarrito)
    });
 }

