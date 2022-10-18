<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1 class="d-inline-block text-h2 font-weight-black">
        <span class="font-weight-thin text-h2">try</span><span class="text-primary">Vuetify</span>
      </h1>

      <div class="py-4" />

      <v-card theme="dark" class="d-inline-block mx-auto pa-4">
        <template #title>
          <span style="font-family: 'Roboto Mono', mono;">
            vue create my-app -p vuetifyjs/v3-preset
          </span>
        </template>

        <template #append>
          <v-btn
            :icon="copied ? 'mdi-check' : 'mdi-content-copy'"
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

      <div class="py-3">
        <v-btn
          href="https://next.vuetifyjs.com/getting-started/installation/"
          target="_blank"
          rel="noopener noreferrer"
          append-icon="mdi-open-in-new"
        >
          Full Guide
        </v-btn>
      </div>
    </v-responsive>
  </v-container>

  <v-footer app>
    <a
      class="d-inline-block mx-auto"
      href="http://vuetifyjs.com/"
      target="_blank"
      rel="noopener noreferrer"
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

  function copy () {
    copied.value = true

    navigator.clipboard.writeText('vue create my-app -p vuetifyjs/v3-preset')

    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
</script>
