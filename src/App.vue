<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AOS from 'aos'
AOS.init()
</script>

<template>
  <NavigationBar />
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>