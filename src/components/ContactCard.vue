<template>
  <div class="card contact-card grey-custom-color">
    <h4 class="contact-card-header"><strong><slot name="contact-card-header-slot"></slot></strong></h4>
    <h4 class="contact-card-subheader"><strong><slot name="contact-card-subheader-slot"></slot></strong></h4>
    <h5 class="contact-card-description"><slot name="contact-card-description-slot"></slot></h5>
    <button type="submit" class="btn btn-dark btn-block contact-button"><slot name="contact-card-button"></slot></button>
  </div>
</template>