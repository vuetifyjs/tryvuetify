<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1 class="d-inline-block text-h2 font-weight-black">
        <span class="font-weight-thin text-h2">try</span><span class="text-primary">vuetify</span>
      </h1>

      <div class="py-4" />

      <v-card theme="dark" class="d-inline-block mx-auto pa-4">
        <template #title>
          <span style="font-family: 'Roboto Mono', mono;">
            vue create my-app -p vuetifyjs/v3-preset
          </span>
        </template>

        <template #append>
          <v-btn icon="mdi-content-copy" border variant="text">
            <v-icon color="grey" />
          </v-btn>
        </template>
      </v-card>

      <div class="py-12" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            append-icon="mdi-open-in-new"
            color="purple"
            href="https://next.vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            size="small"
            target="_blank"
            variant="outlined"
          >
            Full Guide
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>

  <v-footer app>
    <span class="text-caption ml-auto text-primary">
      What is Vuetify?
    </span>
  </v-footer>
</template>

<script setup>

</script>
