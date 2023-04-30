<template>
  <q-layout  view="lHh Lpr lFf">
    <q-header  elevated>
      <q-toolbar 
      class="bg-black text-white shadow-2 justify-center ">
      <q-btn class="pishockLogo" height="75px">
    <img
    src= "../assets/pishockLogo.png"
    style ="height: 75px; max-width: 500px;"/>
  </q-btn>
        <!-- <q-btn flat label="Pi-Shock" img src="../assets/pishockLogo.png" /> -->
        <q-space />
<!-- give these q-tabs an href? or is this done in Javascript -->
        <q-tabs v-model="tab"  shrink  class="navBar">
          <q-tab name="Shop" label="Shop" class="shop"/>
          <q-tab name="Learn" label="Learn" class="learn"/>
          <q-tab name="Setup" label="Setup" @click="showDialog" class="setup" />
          <q-tab name="Setup" label="F.A.Q" class="faq"/>
          <q-tab name="Setup" label="Support" class="support" />
          <q-tab name="Setup" label="Contact" class="contact"/>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
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
  
  setup() {
    // const $q = useQuasar()
    return {

    }
  }
})

</script>
