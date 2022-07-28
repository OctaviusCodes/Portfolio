<template>
    <h1 class="body-margin-to-header">Welcome to my online portfolio/CV</h1>
    <p class="text-center">Click around the page or cards below to view more about me my skills, education and how to contact me.</p>
  <div class="container">
    <div class="row">
      <div class="col" data-aos="zoom-in-right" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <DynamicSmallCard>
          <template v-slot:card-header-slot>
            <RouterLink class="custom-card-routerlink" :to="{name:'Knowledge'}">Knowledge & Tools</RouterLink>
          </template>
          <template v-slot:card-description-slot>
            <p class="text-center">Here i show which tools and knowledge i have and use<br>- to be expanded</p>
          </template>
        </DynamicSmallCard>
      </div>
      <div class="col" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <DynamicSmallCard>
          <template v-slot:card-header-slot>
            <RouterLink class="custom-card-routerlink" :to="{name:'Education'}">Education & Certifications</RouterLink>
          </template>
          <template v-slot:card-description-slot>
            <p class="text-center">Here i show my education level and certifications<br>- to be expanded</p>
          </template>
        </DynamicSmallCard>
      </div>
      
      <div class="col" data-aos="zoom-in-right" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
          <DynamicSmallCard>
            <template v-slot:card-header-slot>
              <RouterLink class="custom-card-routerlink" :to="{ name: 'About' }">About me</RouterLink>
            </template>
            <template v-slot:card-description-slot>
              <p class="text-center">Wanna know more about me</p>
            </template>
          </DynamicSmallCard>
      </div>
    </div>
    <div class="row">
      <div class="col" data-aos="zoom-in-left" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <DynamicSmallCard>
          <template v-slot:card-header-slot>
            <RouterLink class="custom-card-routerlink" :to="{name:'Projects'}">Projects</RouterLink>
          </template>
          <template v-slot:card-description-slot>
            <p class="text-center">Here you can see a snip of my projects<br>- to be expanded</p>
          </template>
        </DynamicSmallCard>
      </div>
      <div class="col" data-aos="zoom-in-up" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <DynamicSmallCard>
          <template v-slot:card-header-slot>
            <RouterLink class="custom-card-routerlink" :to="{name:'Experience'}">Work Experience</RouterLink>
          </template>
          <template v-slot:card-description-slot>
            <p class="text-center">Here is a list of my work experience so far<br>- to be expanded</p>
          </template>
        </DynamicSmallCard>
      </div>
      <div class="col" data-aos="zoom-in-left" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <DynamicSmallCard>
          <template v-slot:card-header-slot>
            <RouterLink class="custom-card-routerlink" :to="{name:'Contact'}">Contact</RouterLink>
          </template>
          <template v-slot:card-description-slot>
            <p class="text-center">Contact information and form to get in touch with me</p>
          </template>
        </DynamicSmallCard>
      </div>
    </div>
  </div>
</template>
