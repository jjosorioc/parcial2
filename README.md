# Parcial 2 del curso de Programación con Tecnologías Web

## Paso a paso para la ejecución del parcial.
Antes que nada debería darle npm install a los dos repos.
1. Agregar "app.enableCors();" en el archivo src/main.ts del back.
2. Ejecutar el back con "npm run start" (el back debe estar en localhost:3000).
3. Ejecutar el front con "npm run start" y autorizar el uso de otro puerto.
4. Entrar a la página y dirigirse a la ruta {urlFront}/login y {urlFront}/home para ver sus funcionalidades. El url del front solo no le va a mostrar nada, puesto que se indicó que solo se deben crear dos rutas.

## Reporte de las decisiones y explicando el proceso del desarrollo del parcial.
1. Componentes utilizados:
   - Login.jsx: Este componente se encarga de manejar el inicio de sesión en la aplicación. Utiliza componentes de la biblioteca `mdb-react-ui-kit` como `MDBBtn` y `MDBInput` para construir el formulario de inicio de sesión. También utiliza la librería `react-intl` para la internacionalización de los textos.
   - Home.jsx: Este componente representa la página principal de la aplicación. Utiliza componentes de la biblioteca `react-bootstrap` como `Card` para mostrar una lista de libros. También utiliza el componente `FormattedMessage` de `react-intl` para traducir los textos a diferentes idiomas.

2. Proceso de Desarrollo:
   - Importación de recursos: Comencé importando los recursos necesarios para mi aplicación, como imágenes y estilos CSS.
   - Configuración de rutas: Utilicé el componente `BrowserRouter` de `react-router-dom` para configurar las rutas en mi aplicación.
   - Creación de componentes: Desarrollé los componentes `Login.jsx` y `Home.jsx` para representar las diferentes páginas y funcionalidades de la aplicación.
   - Implementación de funciones: Dentro de los componentes, implementé funciones para manejar la lógica de inicio de sesión, obtención de libros y selección de un libro específico.
   - Obtención de datos: Utilicé la función `fetch` para realizar solicitudes HTTP y obtener datos de una API. En el caso de `Home.jsx`, obtuve la lista de libros y los detalles de un libro específico.
   - Presentación de datos: Utilicé los componentes de React y bibliotecas como `react-bootstrap` para mostrar los datos obtenidos de forma visualmente atractiva.
   - Internacionalización: Utilicé la librería `react-intl` para traducir los textos de la aplicación a diferentes idiomas. Definí archivos de mensajes (`localeEsMessages` y `localeEnMessages`) con las traducciones correspondientes y utilicé el componente `IntlProvider` para configurar la internacionalización en la aplicación.
