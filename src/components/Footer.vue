<template>
  <v-footer
    app
    theme="dark"
    height="40"
  >
    <a
      class="d-inline-block me-2 text-decoration-none text-primary"
      href="https://vuetifyjs.com/"
      target="_blank"
      title="Vuetify Documentation"
      rel="noopener noreferrer"
    >
      <v-img
        alt="Vuetify logo"
        src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
        width="32"
      />
    </a>

    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon size="18">
        {{ item.icon }}
      </v-icon>
    </a>

    <div
      class="text-caption"
      style="position: absolute; right: 16px;"
    >
      Copyright &copy; 2016-{{ (new Date()).getFullYear() }} Vuetify, LLC
    </div>
  </v-footer>
</template>

<script>
  import {
    mdiDiscord,
    mdiGithub,
    mdiReddit,
    mdiShieldStarOutline,
    mdiTwitter,
  } from '@mdi/js'

  export default {
    data: () => ({
      items: [
        {
          title: 'Vuetify Support',
          icon: mdiShieldStarOutline,
          href: 'https://support.vuetifyjs.com/',
        },
        {
          title: 'Vuetify Twitter',
          icon: mdiTwitter,
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          title: 'Vuetify GitHub',
          icon: mdiGithub,
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          title: 'Vuetify Discord',
          icon: mdiDiscord,
          href: 'https://community.vuetifyjs.com/',
        },
        {
          title: 'Vuetify Reddit',
          icon: mdiReddit,
          href: 'https://reddit.com/r/vuetifyjs',
        },
      ],
    }),
  }
</script>

<style>
  .social-link svg {
    color: rgba(25, 118, 210, .32);
    text-decoration: none;
    transition: .2s ease-in-out;

    &:hover {
      color: rgba(25, 118, 210, 1);
    }
  }
</style>
