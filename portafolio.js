console.log("hola");
const trabajos = [ 
{
	imagen: "img/1.png",
	titulo: "Muñeca Bauhaus",
	categoria:"Conceptualización"
},
{
	imagen: "img/2.png",
	titulo: "Cuchillos identicos",
	categoria: "Laboratorio de prototipado"
},
{
	imagen: "img/3.png",
	titulo: "Boomerang impresión 3D",
	categoria: "Elaboración digital"
},
{
	imagen: "img/4.png",
	titulo: "Taller 4: De vuelta a Casa (Juego de mesa)",
	categoria: "Proyecto Examen"
},
{
	imagen: "img/5.png",
	titulo: "Taller 4: ClickNotes (Notas magneticas)",
	categoria: "Proyecto Examen"
},
{
	imagen: "img/6.png",
	titulo: "Llaveros personalizados",
	categoria: "Elaboración digital"
},
{
	imagen: "img/7.png",
	titulo: "Bolso con serigrafía",
	categoria: "Laboratorio de prototipado"
},
{
	imagen: "img/8.png",
	titulo: "Katana de Tomioka Giyuu",
	categoria: "Elaboración digital"
},
{
	imagen: "img/9.png",
	titulo: "Taller 4: Book (proceso)",
	categoria: "Proyecto Examen"
},
{
	imagen: "img/10.png",
	titulo: "Contramoldes y moldes de pellet biosustentables",
	categoria: "Elaboración digital"
},	
];

const portafolio = document.getElementById("portafolio");

trabajos.forEach(trabajo =>
{
	const item = document.createElement("div");
	item.classList.add("gallery-item");

	item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.titulo}" width="500" height="500">
         <div class="gallery-overlay">
        	<h3>${trabajo.titulo}</h3>
       	 	<p>${trabajo.categoria}</p>
        </div>
	`;

	portafolio.appendChild(item);

	});

