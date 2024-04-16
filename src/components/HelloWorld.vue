<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <h1 class="d-inline-block text-h2 font-weight-black">
        <span class="font-weight-thin text-h2">Try</span> <span class="text-primary">Vuetify</span>
      </h1>

      <div class="py-3">
        <small class="text-medium-emphasis">Copy and paste this code into your terminal,<br>then follow the prompts</small>
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
            <span style="font-family: 'Roboto Mono', mono;">
              {{ pms[cmd] }}
            </span>
          </template>

          <template #append>
            <v-btn
              :icon="copied ? mdiCheck : mdiContentCopy"
              aria-label="Copy Code"
              border
              variant="text"
              @click="copy"
            >
              <v-fade-transition leave-absolute>
                <v-icon
                  :key="copied"
                  color="medium-emphasis"
                />
              </v-fade-transition>
            </v-btn>
          </template>
        </v-card>
      </v-fade-transition>

      <div class="text-overline py-3">
        <a
          v-for="(_, key) in pms"
          :key="key"
          :class="cmd !== key && 'text-decoration-none'"
          href="#"
          class="text-primary mx-2"
          @click.prevent="cmd = key"
          v-text="key"
        />
      </div>
    </v-responsive>
  </v-container>

  <app-footer />
</template>

<script setup>
  // Components
  import AppFooter from '@/components/Footer.vue'

  // Utilities
  import { ref } from 'vue'
  import { mdiCheck, mdiContentCopy } from '@mdi/js'

  const copied = ref(false)
  const cmd = ref('yarn')
  const pms = {
    yarn: 'yarn create vuetify',
    npm: 'npm init vuetify@latest',
    pnpm: 'pnpm create vuetify',
    bun: 'bun create vuetify',
  }

  function copy () {
    copied.value = true

    navigator.clipboard.writeText(pms[cmd.value])

    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
</script>

<style>
  .social-link {
    color: rgba(var(--v-theme-primary), var(--v-medium-emphasis-opacity));
    text-decoration: none;
    transition: .2s ease-in-out;
  }
  .social-link:hover {
    color: rgba(var(--v-theme-primary), 1);
  }
</style>
