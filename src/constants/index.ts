export const managers = [
  {
    value: 'npm',
    label: 'npm',
    icon: 'tabler:brand-npm',
  },
  {
    value: 'pnpm',
    label: 'pnpm',
    icon: 'tabler:brand-pnpm',
  },
  {
    value: 'yarn',
    label: 'yarn',
    icon: 'tabler:brand-yarn',
  },
  {
    value: 'bun',
    label: 'bun',
    icon: 'simple-icons:bun',
  },
]

export const commands = {
  pnpm: 'pnpm create vuetify',
  yarn: 'yarn create vuetify',
  npm: 'npm create vuetify',
  bun: 'bun create vuetify',
  deno: 'deno init --npm vuetify',
}
