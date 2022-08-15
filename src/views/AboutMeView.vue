<template>
    <div class="container body-margin-to-header" data-aos="zoom-in-down" data-aos-delay="50" data-aos-easing="ease-in"
        data-aos-duration="1000" data-aos-once="true">
        <div class="row">
            <div class="col">
                <DynamicSmallCard class="blue-custom-color">
                    <template v-slot:card-header-slot>
                        <p>About me</p>
                    </template>
                    <template v-slot:card-description-slot>
                        <p class="text-center"> Hi. I'm Daniel, 33 years and living in Denmark.<br>I'm educated in
                            computer science from Zealand in Roskilde, and holds an AP degree in Computer Science.<br>My
                            main work with computer science contains elements of 'Full stack', 'DevOps', 'Security
                            operations' & 'Cloud'. It's also within these elements my interest is. <br><br>Listed below
                            is some of my personal key values and core and abilities.
                            <br><br>
                        <p>See my CV <a href="files/CV/CV - Daniel Octavius Herlufsen Palmqvist.pdf" class="referece-text"
                                target="_blank">here</a></p>
                        </p>
                    </template>
                </DynamicSmallCard>
            </div>
        </div>
        <hr>
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="50" data-aos-easing="ease-in" data-aos-duration="1000"
        data-aos-once="true">
        <h3 class="text-center">Personal key values & core abilities</h3>
        <div class="container">
            <div class="row">
                <div class="col">
                    <DynamicSmallCard class="green-custom-color">
                        <template v-slot:card-header-slot>
                            <p>Work- & Goal driven</p>
                        </template>
                        <template v-slot:card-description-slot>
                            <p class="text-center">My mantra has for a long time been 'I don't stop when i'm tired, I stop when i'm done'
                                and
                                'Enough is never enough'</p>
                        </template>
                    </DynamicSmallCard>
                </div>
                <div class="col">
                    <DynamicSmallCard class="green-custom-color">
                        <template v-slot:card-header-slot>
                            <p>Inquisitive & Up-to-date</p>
                        </template>
                        <template v-slot:card-description-slot>
                            <p class="text-center">I'm always seeking new technologies, and updates on my current
                                knowledge,
                                to explore the unknown landscape of mine in IT</p>
                        </template>
                    </DynamicSmallCard>
                </div>
                <div class="col">
                    <DynamicSmallCard class="green-custom-color">
                        <template v-slot:card-header-slot>
                            <p>Loyal & Creative</p>
                        </template>
                        <template v-slot:card-description-slot>
                            <p class="text-center">I'm always loyal and responsible for the solutions i make. I approach
                                a
                                giving task in many and reflective ways - to find the best fitted solution</p>
                        </template>
                    </DynamicSmallCard>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <DynamicSmallCard class="green-custom-color">
                        <template v-slot:card-header-slot>
                            <p>Teamwork</p>
                        </template>
                        <template v-slot:card-description-slot>
                            <p class="text-center">I prioritize teamwork as a key value in development, through teamwork
                                we
                                accomplish complex solutions more easy. Although i also prefer focussing on my work -
                                with
                                music in my ears</p>
                        </template>
                    </DynamicSmallCard>
                </div>
                <div class="col">
                    <DynamicSmallCard class="green-custom-color">
                        <template v-slot:card-header-slot>
                            <p>Growth</p>
                        </template>
                        <template v-slot:card-description-slot>
                            <p class="text-center">If it is work or private hobby, I enjoy watching things grow. From
                                idea
                                at coding projects, to the final and deployed solution, to planting a seed and watch the
                                tree grow in my garden.</p>
                        </template>
                    </DynamicSmallCard>
                </div>
                <div class="col">
                    <DynamicSmallCard class="green-custom-color">
                        <template v-slot:card-header-slot>
                            <p>Family- & Twin dad</p>
                        </template>
                        <template v-slot:card-description-slot>
                            <p class="text-center">I'm a dad to my lovely twins and prioritize time with my family as
                                well
                                as friends through social activities</p>
                        </template>
                    </DynamicSmallCard>
                </div>
            </div>
        </div>
    </div>
    <TopButton></TopButton>
</template>
