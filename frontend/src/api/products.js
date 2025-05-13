import axios from 'axios';

let productsApi; // Declaramos pero no inicializamos aún

// Función para configurar la base URL del backend
async function setBaseURL() {
  const baseURL = `http://${window.location.hostname}:8000/api/productos/`;

  // Inicializamos productsApi con la URL correcta
  productsApi = axios.create({
    baseURL,
  });
}

// Asegúrate de que se ejecute antes de cualquier llamada a la API
await setBaseURL();

export const getProducts = () => productsApi.get();
export const getProduct = (id) => productsApi.get(`${id}`);
export const createProduct = (product) => productsApi.post('/', product);
export const updateProduct = (id, product) => productsApi.put(`/${id}/`, product);
export const deleteProduct = (id) => productsApi.delete(`/${id}/`);
