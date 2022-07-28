<template>
  <h2 class="body-margin-to-header">Here you can see an overview of my professionel career and work experience</h2>
  <div class="container">
    <div class="row">
      <div class="col" data-aos="zoom-in-right" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <DynamicCard class="green-custom-color">
          <template v-slot:card-header-slot>
            <p>Coloplast</p>
            <h6><b>2022 - Present</b></h6>
          </template>
          <template v-slot:card-subheader-slot>
            <p>DevOps Engineer & Cloud Infrastructure Specialist</p>
          </template>
          <template v-slot:card-description-slot>
            <p>At Coloplast i mainly work with DevOps, cloud infrastructure solutions and security to cover whole Coloplast's setup. This covers work with daily and multiple pipelines as a core flow in their setup, CVE, vulnerability scanning, pen-testing and security reporting on multiple projects.</p>
            <p><b>Key responsibilities:</b><br>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Azure Pipelines</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Security</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Cloud Infrastucture</span>
            </p>
          </template>
        </DynamicCard>
      </div>
      <div class="col" data-aos="zoom-in-left" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <DynamicCard class="green-custom-color">
          <template v-slot:card-header-slot>
            <p>KOBAJ.com</p>
            <h6><b>2021 - 2022</b></h6>
          </template>
          <template v-slot:card-subheader-slot>
            <p>DevOps Engineer</p>
          </template>
          <template v-slot:card-description-slot>
            <p>During my work at KOBAJ.com I developed several key features and solutions for both their website, secondary business and integrational tools withing their whole setup. This including main website features and development, infrastructurel solutions to be used through Google Cloud to each project and security around their whole setup</p>
            <p><b>Key responsibilities:</b><br>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Site & Application Security</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Cloud solutions & operations</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Development of key features to
                webshop</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center">Solely responsible for second
                business</span>
              <span class="badge badge-pill mr-2 custom-card-badges text-center"></span>
            </p>
          </template>
        </DynamicCard>
      </div>
      <div class="row">
        <div class="col" data-aos="zoom-in-right" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
          <DynamicCard class="green-custom-color">
            <template v-slot:card-header-slot>
              <p>KOBAJ.com</p>
              <h6><b>2021</b></h6>
            </template>
            <template v-slot:card-subheader-slot>
              <p>Internship</p>
            </template>
            <template v-slot:card-description-slot>
              <p>In my study for Computer Science at Zealand i held my Interneship at KOBAJ.com where i where co-responsible for developing their 'Business Interface', solely-responsible for developing their 'Supplier Interface' and coverede several security issues based on and external vulnerability analyze. Through my internship i worked closedly related with whole KOBAJ.com's IT stack, which covered CTO and another Computer Science Intership student.</p>
              <p><b>Key responsibilities:</b><br>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Co-Responsible for 'Business
                  Interface'</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Solely responsible for 'Supplier
                  Interface'</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Site & Appliaction Security</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Cloud solutions & operations</span>
              </p>
              <p>Get reference from this job <a href="files/references/Recommendation - KOBAJ.com.pdf"
                  class="referece-text" target="_blank">here</a></p>
            </template>
          </DynamicCard>
        </div>
        <div class="col" data-aos="zoom-in-left" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
          <DynamicCard class="green-custom-color">
            <template v-slot:card-header-slot>
              <p>Køge Kommune</p>
              <h6><b>2009 - 2020</b></h6>
            </template>
            <template v-slot:card-subheader-slot>
              <p>Social- & Health Care worker</p>
            </template>
            <template v-slot:card-description-slot>
              <p>At my career as Social & Health care worker, i worked mostly with helping sick and elder people at their own homes. Later on, i developed skills withing daily planning, and held solely-responsible for the team IT and PDA solutions. In this i worked mostly with support and onboarding.</p>
              <p><b>Key responsibilities:</b><br>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Daily planning for Day & Night
                  shift</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">PDA & IT</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Health- & Safety
                  representatice</span>
                <span class="badge badge-pill mr-2 custom-card-badges text-center">Student Supervisor</span>
              </p>
            </template>
          </DynamicCard>
        </div>
      </div>
    </div>
    <TopButton></TopButton>
  </div>
</template>