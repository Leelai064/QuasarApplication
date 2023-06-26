<template>
  <q-layout>
    <q-header elevated>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer Section -->
    <q-footer class="bg-black q-footer text-white shadow-2 justify-center" height="50px">
      <div class="row"></div>
        <div class="row">
          <q-btn v-for="link in links" :key="link" class="mx-2 footerBtns " variant= "text" rounded="xl">
            {{ link }}
          </q-btn>
        </div>
        <div class="row"></div>
        <div class=" col-4 text-center mt-5" cols="15">
          {{ new Date().getFullYear() }} — <strong>PiShock Inc.</strong>
        </div>
 
    </q-footer>
  </q-layout>
</template>

<style>
@import '../css/app.css';
</style>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import useQuasar from 'quasar/src/composables/use-quasar.js';

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

export default defineComponent({
  name: 'MainLayout',
  methods: {
    scrollToAnchorPoint(x) {
      const el = this.$refs[x]
      el.scrollIntoView({ behavior: 'smooth' })
    }
  },
  data: () => ({
    links: [
      'Home',
      'Privacy Policy',
      'Terms and Conditions',
      'Returns Policy',
      'Contact Us',
    ],
  }),
  setup() {
    // const $q = useQuasar()
    return {

    }
  }
})

</script>
