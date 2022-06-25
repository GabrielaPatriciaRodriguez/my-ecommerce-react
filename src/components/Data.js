export const Productos = [
  {
    id: 1,
    title: "Zapatilla Nike",
    category: "Zapatilla",
    description: "Confortable zapatilla - Variados colores y numeros",
    price: 15500,
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg",
  },
  {
    id: 2,
    title: "Zapatilla Adidas",
    category: "Zapatilla",
    price: 16640,
    description:
      "Zapatilla ideal para practicar deportes de alto impacto",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1655845335/EcommerceReact/pexels-amar-preciado-9993285_m1etcs.jpg",
  },
  {
    id: 3,
    title: "Zapatilla Puma Clayde",
    category: "Zapatilla",
    price: 12220,
    description: "Comoda zapatilla - Todos los colores y numeros",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1655845334/EcommerceReact/pexels-suraj-b-2759783_mp66ta.jpg",
  },
  {
    id: 4,
    title: "Remera 1",
    category: "Remera",
    price: 12220,
    description: "Comoda zapatilla - Todos los colores y numeros",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1655845334/EcommerceReact/pexels-suraj-b-2759783_mp66ta.jpg",
  },
  {
    id: 5,
    title: "Remera 2",
    category: "Remera",
    price: 12220,
    description: "Comoda zapatilla - Todos los colores y numeros",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1655845334/EcommerceReact/pexels-suraj-b-2759783_mp66ta.jpg",
  },{
    id: 6,
    title: "Pantalon 1",
    category: "Pantalon",
    price: 12220,
    description: "Comoda zapatilla - Todos los colores y numeros",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1655845334/EcommerceReact/pexels-suraj-b-2759783_mp66ta.jpg",
  },
];


export const obtenerProductoXId = (id) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (Productos.length>0) {
        resolve(Productos.find(unProducto => unProducto.id === parseInt(id)))
      } else {
        reject("Sin datos...")
      }
    }, 500);
  })
}