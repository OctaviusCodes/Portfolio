<template>
  <div class="card custom-card">
    <h2 class="custom-card-header"><b><slot name="card-header-slot"></slot></b></h2>
    <div class="card-center-img"><slot name="card-img-slot"></slot></div>
    <h3 class="custom-card-subheader"><b><slot name="card-subheader-slot"></slot></b></h3>
    <p class="custom-card-description"><slot name="card-description-slot"></slot></p>
  </div>
</template>