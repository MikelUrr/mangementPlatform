<template>
    <div class="side-menu">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidemenu',
  }
  </script>
  
  <style scoped>
  .side-menu {
    width: 100%; /* Ajustamos el ancho al 100% del contenedor padre */
    background-color: #f8f9fa;
    padding: 20px;
  }
  
  .nav-link {
    color: #333;
    text-decoration: none;
  }
  
  .nav-link:hover {
    color: #007bff;
  }
  </style>
  