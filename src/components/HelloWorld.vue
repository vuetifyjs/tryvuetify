<template>
  <v-container class="h-100 d-flex align-center pa-6 ">
    <v-row align="center">
      <v-col cols="12" md="6">
        <div class="text-h6 font-weight-regular">
          We love making things simple and amazing
        </div>

        <h1 class="text-h4 text-md-h2 font-weight-bold mb-6">
          Welcome to Vuetify
        </h1>

        <div class="text-body-1 text-medium-emphasis mb-10">
          Vuetify is a component library that helps you create amazing web
        </div>

        <div class="d-flex ga-4 align-center justify-start flex-wrap">
          <v-card
            v-tooltip="{ text: 'Click to copy or select needed manager', location: 'bottom', openDelay: 2000, class: '', theme: 'light' }"
            background-color="transparent"
            border
            class="shrink-0"
            density="compact"
            flat
            rounded="lg"
          >
            <div class="d-flex ga-4 align-center py-2 px-4">
              <v-menu>
                <template #activator="{ props }">
                  <v-icon-btn
                    cursor="pointer"
                    v-bind="props"
                    :icon="managerIcon"
                    size="16"
                  />
                </template>
                <v-list density="compact" variant="flat">
                  <v-list-item
                    v-for="manager in managers"
                    :key="manager.value"
                    :value="manager.value"
                    @click="selectedManger = manager.value, copy()"
                  >
                    <template #prepend>
                      <v-icon size="small">
                        {{ manager.icon }}
                      </v-icon>
                    </template>
                    <v-list-item-title>
                      {{ manager.label }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <button class="text-mono" @click="copy">
                {{ commands[selectedManger] }}
              </button>
            </div>
          </v-card>

          <span>or</span>

          <v-btn
            border
            class="text-none"
            flat
            href="https://play.vuetifyjs.com/"
            rounded="lg"
            slim
            text="Open Vuetify Play"
          >
            <template #prepend>
              <v-icon>
                <svg
                  aria-hidden="true"
                  class="v-icon__svg"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z" /><path d="M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z" fill-opacity="0.6" /></svg>
              </v-icon>
            </template>
          </v-btn>
        </div>
      </v-col>

      <v-col class="hidden-sm-and-down" cols="6">
        <v-img class="lg-md-auto" max-height="300" position="right" :src="logo" />
      </v-col>
    </v-row>

    <div class="v-bg position-absolute top-0 right-0 left-0 bottom-0">
      <div aria-hidden="true" class="overflow-hidden opacity-20 w-100 h-100" />
    </div>
  </v-container>
  <Footer />
  <v-snackbar-queue v-model="messages" rounded="lg" variant="tonal" />
</template>

<script setup>
  import { commands, managers } from '@/constants'
  import { computed, shallowRef } from 'vue'
  import { VIconBtn } from 'vuetify/labs/components'
  import logo from '../assets/logo.svg'
  import Footer from './Footer.vue'

  const selectedManger = shallowRef('npm')

  const managerIcon = computed(() => {
    return managers.find(m => m.value === selectedManger.value)?.icon
  })

  const messages = shallowRef([])

  function copy () {
    navigator.clipboard.writeText(commands[selectedManger.value])
    messages.value = [{
      text: 'Copied, now paste it to your terminal',
      timeout: 2000,
    }]
  }

</script>
