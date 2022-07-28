<template>
  <Transition name="modal">
    <div v-show="modalActive" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <form target="_blank" action="https://formsubmit.co/octaviuscodes@gmail.com" method="POST">
            <div class="container">
              <div class="col-9 contact-card-center">
                <ContactCard>
                  <template v-slot:contact-card-header-slot>
                  <div class="row"><i @click="close" class="far fa-times-circle close-icon" ></i></div>
                    <div class="form-group">
                      <div class="form-row">
                        <label>
                          <p class="label-text">
                            Name: <span class="form-required">*</span>
                          </p>
                        </label>
                        <input placeholder="Full Name" type="text" name="Name" class="form-control" required />
                      </div>
                    </div>
                  </template>
                  <template v-slot:contact-card-subheader-slot>
                    <label>
                      <p class="label-text">
                        Email <span class="form-required">*</span></p>
                    </label>
                    <input placeholder="Email adress" type="email" name="E-mail" class="form-control" required />
                  </template>
                  <template v-slot:contact-card-description-slot>
                    <label>
                      <p class="label-text">
                        Your message: <span class="form-required">*</span></p>
                    </label>
                    <textarea placeholder="Your Message" class="form-control" name="Message" required></textarea>
                  </template>
                  <template v-slot:contact-card-button>
                    Send message
                  </template>
                </ContactCard>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>