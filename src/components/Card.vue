<template>
  <div class="card custom-card">
    <h2 class="custom-card-header"><strong><slot name="card-header-slot"></slot></strong></h2>
    <div class="card-center-img"><slot name="card-img-slot"></slot></div>
    <h3 class="custom-card-subheader"><strong><slot name="card-subheader-slot"></slot></strong></h3>
    <p class="custom-card-description"><slot name="card-description-slot"></slot></p>
  </div>
</template>