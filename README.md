# Droid9 South America E-commerce

Este proyecto de E-commerce es un modelo de prueba que luego de finalizado el curso, será parte de una plataforma perteneciente a un sello discográfico de música electrónica llamado **Droid9 South America**.
En el mismo se encuentran todos los productos comercializados por el sello al dia de hoy.

Este proyecto, desarrollado en **ReactJS**, corre sobre **Node.js** mediante el script **npm start**

## Librerias utilizadas en el proyecto:

### `react`
### `react-router-dom`
### `mui/material `
### `emotion/react`
### `emotion/styled`
### `mui/icons-material`

El proyecto cuenta con un componente funcional llamado **NavBar** que permite direccionar a las diferentes secciones de la SPA, cada una con su informacion correspondiente.
Tambien cuenta con un **Footer**, con iconos clickeables que direccionan a enlaces externos.

En la seccion **products** encontraremos la posibilidad de filtrar por categoria todos los productos listados en el **Home**.

Todos los productos son llamados de una base de datos alojada en **Firebase** y cuentan con las siguientes propiedades unicas:
### `id`
### `category`
### `description`
### `image`
### `price`
### `sotck`
### `tittle`

y pueden ser agregados o eliminados del carro de compras, esta ultima funcionalidad puede ser ejecutada para ya sea eliminar un producto como asi tambien la totalidad del contenido del carro de compras

Luego de confirmada la compra, la orden de la misma es almacenada en otra coleccion de la base de datos de **`Firebase.`**

Link a Gif Navegabilidad: [https://drive.google.com/drive/folders/1JhgZzC9nwKhQP0w6Qa4jgF5lhMR4MYhu?usp=sharing](https://drive.google.com/drive/folders/1JhgZzC9nwKhQP0w6Qa4jgF5lhMR4MYhu?usp=sharing)