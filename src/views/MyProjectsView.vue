<template>
  <h1 class="body-margin-to-header">Projects i have been responsible for, or a part of</h1>
  <h3>Need help to your project, please contact me through the contact tab or click <button
      style="background: none; border: none; color: #080808;" @click="toggleModal">here</button></h3>
  <ModalContact @close="toggleModal" :modalActive="modalActive"></ModalContact>
  <div class="container">
    <div class="row" data-aos="zoom-in-down" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
      <div class="col">
        <DynamicSmallCard class="blue-custom-color">
          <template v-slot:card-header-slot>
            <p>Your project ?</p>
          </template>
          <template v-slot:card-img-slot>
            <img class="card-center-img" src="" alt="">
          </template>
          <template v-slot:card-subheader-slot>
            <p></p>
          </template>
          <template v-slot:card-description-slot>
            <p></p>
            <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">What you
                need</span></p>
          </template>
        </DynamicSmallCard>
      </div>
      </div>
      <div class="row" data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
      <div class="col">
        <DynamicCard class="blue-custom-color">
          <template v-slot:card-header-slot>
            <p>Coloplast</p>
          </template>
          <template v-slot:card-img-slot>
            <img class="card-center-img" src="../assets/images/Coloplast.png" alt="Coloplast">
          </template>
          <template v-slot:card-subheader-slot>
            <p>DevOps Engineer & Cloud Infrastructure Specialist</p>
          </template>
          <template v-slot:card-description-slot>
            <p>In Coloplast I handle solutions covering multiple pipelines for each underlying projects, security on whole coloplast's infrastructure setup including external tools for CVE scanning and security reports</p>
            <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">Azure
                Pipelines</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">C#</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Android/IOS</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">YAML</span>
            </p>
          </template>
        </DynamicCard>
      </div>
      <div class="col">
        <DynamicCard class="blue-custom-color">
          <template v-slot:card-header-slot>
            <p>Kobaj Express</p>
          </template>
          <template v-slot:card-img-slot>
            <img class="card-center-img" src="../assets/images/KOBAJ.COM.png" alt="KOBAJ.com">
          </template>
          <template v-slot:card-subheader-slot>
            <p>DevOps Engineer</p>
          </template>
          <template v-slot:card-description-slot>
            <p>Kobaj express is a second business solution for KOBAJ.com where i were solely responsible for developing a cloud webshop solution, including server-side setup & maintenance, security, backend development and integration to payment, shipping and other solutions</p>
            <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">Wordpress</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Apache2</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Google Cloud - VM & Load
                Balancer</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">PHP</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">MySQL</span>
            </p>
          </template>
        </DynamicCard>
      </div>
      <div class="col">
        <DynamicCard class="blue-custom-color">
          <template v-slot:card-header-slot>
            <p>OctoCode.dk</p>
          </template>
          <template v-slot:card-subheader-slot>
            <p>Owner</p>
          </template>
          <template v-slot:card-description-slot>
            <p>My own online portfolio/CV to promote myself online and show my online tech profile</p>
            <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">VueJS</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Docker</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Firebase</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">HTML</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">CSS</span>
            </p>
          </template>
        </DynamicCard>
      </div>
      </div>
      <div class="row" data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
      <div class="col">
        <DynamicCard class="blue-custom-color">
          <template v-slot:card-header-slot>
            <p>KOBAJ.com - Python API</p>
          </template>
          <template v-slot:card-subheader-slot>
            <p>DevOps Engineer</p>
          </template>
          <template v-slot:card-description-slot>
            <p>API to serve KOBAJ.com's backend<br>Here i were co-responsible for developing this, from idea to deployed solution</p>
            <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">FastAPI -
                SlowAPI</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Alembic</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">GitHub Actions</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center"></span>
            </p>
          </template>
        </DynamicCard>
      </div>
      <div class="col">
        <DynamicCard class="blue-custom-color">
          <template v-slot:card-header-slot>
            <p>KOBAJ.com</p>
          </template>
          <template v-slot:card-img-slot>
            <img class="card-center-img" src="../assets/images/KOBAJ.COM.png" alt="KOBAJ.com">
          </template>
          <template v-slot:card-subheader-slot>
            <p>DevOps Engineer</p>
          </template>
          <template v-slot:card-description-slot>
            <p>KOBAJ.com is a co-buying platform, where i solved several features within feature development, security and cloud operations including server maintenance</p>
            <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">Nginx</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">PHP</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">PostgresSQL</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Google Cloud - VM & DB</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Docker</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">HTML</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">JavaScript</span>
            </p>
          </template>
        </DynamicCard>
      </div>
      <div class="col">
        <DynamicCard class="blue-custom-color">
          <template v-slot:card-header-slot>
            <p>KOBAJ.com - Business Interface</p>
          </template>
          <template v-slot:card-img-slot>
            <img class="card-center-img" src="../assets/images/KOBAJ.COM.png" alt="KOBAJ.com">
          </template>
          <template v-slot:card-subheader-slot>
            <p>DevOps Engineer</p>
          </template>
          <template v-slot:card-description-slot>
            <p>KOBAJ.com's Business Interface is an internal administrative web-interface to handle the day-to-day task.<br>Here i were co-responsible for developing this, from idea to deployed solution.</p>
            <p><b>Techstack:</b><br><span
                class="badge badge-pill mr-2 custom-card-badges text-center">Python/Django</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Docker</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Goggle Cloud - App Engine</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">KeyCloak/OIDC</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">PostgresSQL</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">HTML</span>
            </p>
          </template>
        </DynamicCard>
      </div>
      </div>
      <div class="row" style="margin-top: 20px;" data-aos="zoom-in-up" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <hr>
        <h2>A few projects done during my study for Computer Science</h2>
        <div class="col" id="OUK">
          <DynamicCard class="grey-custom-color">
            <template v-slot:card-header-slot>
              <p>OUK - Kaninfarm</p>
            </template>
            <template v-slot:card-img-slot>
              <img class="card-center-img" src="../assets/images/OUK-Kaninfarm.png" alt="OUK - Kaninfarm">
            </template>
            <template v-slot:card-subheader-slot>
              <p>Full Stack & Android developer</p>
            </template>
            <template v-slot:card-description-slot>
              <p>OUK - Kaninfarm is an Android application with a integrated and connected REST API with PostgresSQL DB, hosted at a local Raspberry pi.<br>OUK was my final exam project at my Computer Science study at Zealand. The solution covers the need for Rabbit Breeders to control their selective breeds and get recommendations on which breed would be a great match. The solution also covers a family tree for the breeds and a selection of choosing wheter the rabbit enter into future breeds or slaughter including other informations on the rabbit</p>
              <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">C#</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Android</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Docker</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">PostgresSQL</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Raspberry Pi</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">REST API</span>
              </p>
            </template>
          </DynamicCard>
        </div>
        <div class="col">
          <DynamicCard class="grey-custom-color">
            <template v-slot:card-header-slot>
              <p>WhatToDo</p>
            </template>
            <template v-slot:card-img-slot>
              <img class="card-center-img" src="../assets/images/WhatToDo.png" alt="WhatToDo">
            </template>
            <template v-slot:card-subheader-slot>
              <p>Full Stack developer</p>
            </template>
            <template v-slot:card-description-slot>
              <p>WhatToDo is an webapplication i worked on at 3rd semester on my Computer Science education at Zealand.<br>WhatToDo is a solution which covers the need of a lazy user to get told 'WhatToDo' during a period of daily spare time. In this solution there's in-build integration for sensors, example a sensor for the lawn needs to be moved, or triggers for indoor/outdoor activities.</p>
              <p><b>Techstack:</b><br><span class="badge badge-pill mr-2 custom-card-badges text-center">C#</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">REST API</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Selenium & Unit test</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Sensors</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">InMemoryDB</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">HTML, TypeScript, SCSS</span>
              </p>
            </template>
          </DynamicCard>
        </div>
      </div>
    </div>
    <TopButton></TopButton>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>