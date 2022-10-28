<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1 class="d-inline-block text-h2 font-weight-black">
        <span class="font-weight-thin text-h2">Try</span> <span class="text-primary">Vuetify</span>
      </h1>

      <div class="py-3">
        <small class="text-medium-emphasis">Copy and paste the following into your terminal</small>
      </div>

      <div class="py-3" />

      <v-fade-transition appear>
        <v-card
          class="d-inline-block mx-auto pa-4 text-start"
          max-width="480"
          theme="dark"
          width="100%"
        >
          <template #title>
            <span style="font-family: 'Roboto Mono', mono">
              {{ cmd }}
            </span>
          </template>

          <template #append>
            <v-btn
              :icon="copied ? 'mdi-check' : 'mdi-content-copy'"
              aria-label="Copy Code"
              border
              variant="text"
              @click="copy"
            >
              <v-fade-transition leave-absolute>
                <v-icon
                  :key="copied"
                  color="grey"
                />
              </v-fade-transition>
            </v-btn>
          </template>
        </v-card>
      </v-fade-transition>
    </v-responsive>
  </v-container>

  <v-footer
    app
    height="64"
  >
    <a
      class="d-inline-block mx-auto"
      href="http://vuetifyjs.com/"
      target="_blank"
      rel="noopener noreferrer"
      title="Vuetify Documentation"
    >
      <v-img
        width="48"
        src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
      />
    </a>
  </v-footer>
</template>

<script setup>
  import { ref } from 'vue'

  const copied = ref(false)
  const cmd = 'yarn create vuetify'

  function copy () {
    copied.value = true

    navigator.clipboard.writeText(cmd)

    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
</script>
