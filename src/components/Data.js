export const Productos = [
  {
    id: 1,
    title: "Zapatilla Nike",
    category: "Zapatillas",
    description: "Confortable zapatilla - Variados colores y numeros",
    price: 15500,
    stock: 10,
    initial: 1,
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1654952479/EcommerceReact/pexels-melvin-buezo-2529148_saow29.jpg",
  },
  {
    id: 2,
    title: "Zapatilla Adidas",
    category: "Zapatillas",
    price: 16640,
    stock: 17,
    initial: 1,
    description: "Zapatilla ideal para practicar deportes de alto impacto",
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1655845335/EcommerceReact/pexels-amar-preciado-9993285_m1etcs.jpg",
  },
  {
    id: 3,
    title: "Zapatilla Puma",
    category: "Zapatillas",
    price: 12220,
    description: "Comoda zapatilla - Todos los colores y numeros",
    stock: 20,
    initial: 1,
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1655845334/EcommerceReact/pexels-suraj-b-2759783_mp66ta.jpg",
  },
  {
    id: 4,
    title: "Remera 1",
    category: "Remeras",
    price: 2220,
    description: "Comoda remera - Todos los colores y numeros",
    stock: 15,
    initial: 1,
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1656240800/EcommerceReact/remera3_htva2w.png",
  },
  {
    id: 5,
    title: "Remera 2",
    category: "Remeras",
    price: 3220,
    description: "Comoda remera - Todos los colores",
    stock: 7,
    initial: 1,
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1656240456/EcommerceReact/remera2_huhrp7.png",
  },
  {
    id: 6,
    title: "Remera 3",
    category: "Remeras",
    price: 4220,
    description: "Comoda remera - Todos los colores y numeros",
    stock: 22,
    initial: 1,
    pictureUrl:
    "https://res.cloudinary.com/gabycoderhouse/image/upload/v1656240800/EcommerceReact/remera3_htva2w.png",
  },
  {
    id: 7,
    title: "Pantalon 1",
    category: "Pantalones",
    price: 3720,
    description: "Comoda pantalon deportivo - Todos los colores y numeros",
    stock: 25,
    initial: 1,
    pictureUrl:
    "https://res.cloudinary.com/gabycoderhouse/image/upload/v1656241373/EcommerceReact/pantalon3_xg7svd.png",
  },
  {
    id: 8,
    title: "Pantalon 2",
    category: "Pantalones",
    price: 3290,
    description: "Pantalon - Todos los colores y numeros",
    stock: 30,
    initial: 1,
    pictureUrl:
    "https://res.cloudinary.com/gabycoderhouse/image/upload/v1656241373/EcommerceReact/pantalon3_xg7svd.png",
  },
  {
    id: 9,
    title: "Pantalon 3",
    category: "Pantalones",
    price: 4720,
    description: "Pantalon deportivo - Todos los colores y numeros",
    stock: 18,
    initial: 1,
    pictureUrl:
      "https://res.cloudinary.com/gabycoderhouse/image/upload/v1656241194/EcommerceReact/pantalon2_ovqenj.png",
  },
];

export const obtenerProductoXId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Productos.length > 0) {
        resolve(Productos.find((unProducto) => unProducto.id === parseInt(id)));
      } else {
        reject("Sin datos...");
      }
    }, 500);
  });
};
