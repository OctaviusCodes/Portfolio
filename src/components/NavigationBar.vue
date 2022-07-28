import RouterLink from "vue-router"; 
<template>
  <div class="container">
    <header>
      <nav class="navbar">
        <img class="custom-img" src="../assets/images/Photoshoot-Coloplast.png"
          alt="Daniel O. H. Palmqvist"><RouterLink class="custom-header-menu-center" :to="{ name: 'Home' }">Daniel O. H. Palmqvist</RouterLink>
        <ul class="nav-menu" @click="closeHamburger">
          <li class="custom-header-li">
            <RouterLink class="custom-header-menu-text" :to="{ name: 'Knowledge' }">Knowledge & Tools</RouterLink>
          </li>
          <li class="custom-header-li">
            <RouterLink class="custom-header-menu-text" :to="{ name: 'Projects' }">Projects</RouterLink>
          </li>
          <li class="custom-header-li">
            <RouterLink class="custom-header-menu-text" :to="{ name: 'Education' }">Education & certifications
            </RouterLink>
          </li>
          <li class="custom-header-li">
            <RouterLink class="custom-header-menu-text" :to="{ name: 'Experience' }">Work Experience</RouterLink>
          </li>
          <li class="custom-header-li">
            <RouterLink class="custom-header-menu-text" :to="{ name: 'About' }">About me</RouterLink>
          </li>
          <li class="custom-header-li">
            <RouterLink class="custom-header-menu-text" :to="{ name: 'Contact' }">Contact</RouterLink>
          </li>
        </ul>
        <div class="hamburger" @click="toggleHamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    toggleHamburger(event) {
      const hamburger = document.querySelector(".hamburger").classList.toggle("active");
      const navMenu = document.querySelector(".nav-menu").classList.toggle("active");
    },
    closeHamburger(event) {
      const hamburger = document.querySelector(".hamburger").classList.remove("active");
      const navMenu = document.querySelector(".nav-menu").classList.remove("active");
    }
  }
}
</script>