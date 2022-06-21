export const Productos = [
  {
    id: 1,
    title: "Zapatilla Mujer",
    description: "Confortable zapatilla de mujer",
    price: 5500,
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg",
  },
  {
    id: 2,
    title: "Zapatilla Hombre",
    price: 640,
    description:
      "Zapatilla de hombre, ideal para practicar deportes de alto impacto",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg",
  },
  {
    id: 3,
    title: "Zapatilla",
    price: 1220,
    description: "Comoda zapatilla para niños - unisex",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg",
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