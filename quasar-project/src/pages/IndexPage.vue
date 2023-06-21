<template >
  <q-page class="bg-dark">
    <!-- Navbar section starts -->
    <q-toolbar class="bg-black text-white shadow-2 justify-center">
        <q-btn class="pishockLogo" height="75px">
          <img src="" style="height: 100px; max-width: 500px;" />
        </q-btn>

        <!-- <q-btn flat label="Pi-Shock" img src="../assets/pishockLogo.png" /> -->
        <q-tabs v-model="tab" shrink class="navBar">
          <q-tab name="Shop" label="Shop" class="shop" />
          <q-btn-dropdown auto-close stretch flat label="Learn" class="learn">
          <q-list>
            <q-item clickable @click="tab = 'PiShockDocs'">
              <q-item-section>PiShock Docs</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'PiShockAPI'">
              <q-item-section>PiShock API Docs</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'PiVaultDocs'">
              <q-item-section>PiVault Docs</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'PiVaultAPI'">
              <q-item-section>PiVault API Docs</q-item-section>
            </q-item>
          </q-list>

        </q-btn-dropdown>
        <q-btn-dropdown auto-close stretch flat label="Setup" class="setup">
          <q-list>
            <q-item clickable @click="tab = 'PiShockDocs'">
              <q-item-section>Setup Steps</q-item-section>
            </q-item>
            <q-item clickable @click="tab = 'PiShockAPI'">
              <q-item-section>Stream Tools</q-item-section>
            </q-item>
          </q-list>

        </q-btn-dropdown>

          <q-tab name="Setup" label="F.A.Q" class="faq" @click="scrollToAnchorPoint('faq')"/>
          <q-tab name="Setup" label="Support" class="support" />
          <q-tab name="Setup" label="Contact" class="contact" />
          <!-- <a class="btn-primary faq" @click="scrollToAnchorPoint('faq')">scroll test</a> -->
        </q-tabs>
        <q-space />
        <q-btn class="loginLogo" height="55px">
          <img src="" style="height: 55px; max-width: 500px;" />
        </q-btn>
        <q-btn class="pishockLogo" height="55px">
          <img src="" style="height: 65px; max-width: 500px;" />
        </q-btn>
      </q-toolbar>
   <!-- Navbar section ends -->
  
    <div class="text-center">
      <div class="row bg-black">
        <div class="col" height="700px">
          <div class="text-h1 text-bold text-blue q-my-xl q-py-xl callToAction">

            Your very own lightening cloud

          </div>
          <!-- Button Container displayed as columns -->
          <div class="buttonContainer ">
            <div class="row q-pl-lg justify-center shop">
              <q-btn style="background: goldenrod; color: black" label="Shop" class="q-mr-sm shopbtn" />
              <q-btn style="background: goldenrod; color: black" label="&#9654; Watch Video" class="videobtn" />


            </div>

          </div>
        </div>

      </div>
      <!-- Carasoul containter div below -->
      <!-- the embed track needs to fit the entire container. Need to give each video an image for the thumbnails. Maybe converge this into a different format that has images and can fullscreen into video -->
      <div>
        <q-carousel v-model="slide" animated navigation infinite control-color="white" arrows height="1250px" style="background: black">
          <!-- <q-carousel-slide name="style" class="column no-wrap ">
            <embed src="https://pishockcdn.nyc3.cdn.digitaloceanspaces.com/videos/Pishockvid_Optimized.mp4" height="100%"/>
          </q-carousel-slide> -->
          <!-- <q-carousel-slide name="1"
            img-src="https://as1.ftcdn.net/v2/jpg/00/99/52/10/1000_F_99521056_uVWyxbGVRlfcTut1MJSitEeRck4eot5Z.jpg" /> -->
          <!--<q-carousel-slide name="image1">
            <q-video class="absolute-full" src="https://www.youtube.com/embed/zH5DlRK9_k0" />
          </q-carousel-slide>
          <q-carousel-slide name="image2">
            <q-video class="absolute-full" src="https://www.youtube.com/embed/EvMCUh95Qxw" />
          </q-carousel-slide> =-->

          <!--<q-carousel-slide v-for="(video, index) in videoUrls" :key="index" :name="`image${index + 1}`">
            <video controls="" autoplay="" name="media" class="absolute-full" style="object-fit: cover; width: 100%; height: 100%;">
              <source :src="video.url" type="video/mp4"></video>
          </q-carousel-slide>-->

          <q-carousel-slide v-for="(video, index) in videoUrls" :key="index" :name="`image${index + 1}`">
            <video controls="" autoplay="" name="media" class="absolute-full" style="object-fit: cover; width: 100%; height: 100%;">
              <source :src="video.url" type="video/mp4">
            </video>
        </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- FAQ section -->
      <div ref="faq">

        <!--  <div class="row justify-center" id="faq">
          <div class=" q-px-xl faq-grid q-my-xl">
            <div class="q-pa-md q-gutter-md bg-grey-9 text-white ">
              <q-tree :nodes="faq" node-key="label" class="text-white text-h5" />
            </div>
          </div>
        </div> -->
        <div class="row justify-center" id="faq">
          
        </div>
        <div v-for="(QA, index) in QNAs" :key="index" class="q-pa-md q-gutter-md bg-grey-9 text-white " id="faq" > 
          <div class="text-white text-h5">{{QA.question}}</div>
          <div v-for="(paragraph, pIndex) in QA.paragraphs" :key="pIndex" class="">
              <p>{{paragraph}}</p>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<style>
@import '../css/app.css';
</style>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'

// import { scroll } from 'quasar';

// function scrollToEl(el) {
//   const target = getScrollTarget(el)
//   const offset = el.offsetTop
//   const duration = 1000
//   setVerticalScrollPosition(target, offset, duration)
// }

// const { getScrollTarget, setVerticalScrollPosition } = scroll

export default defineComponent({
  name: "IndexPage",
  created() {
    this.windowHeight = window.innerHeight + 'px'
  },
  methods: {
    scrollToAnchorPoint(x) {
      const el = this.$refs[x]
      el.scrollIntoView({ behavior: 'smooth' })
    }
  },
 
  setup() {
    const videoUrls = ref([]);
    const QNAs = ref([]);
    const loadVideoUrls = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/Fedack/05242e1f4bc97afe1200df1167b16792/raw');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        videoUrls.value = data["videoLinks"];
        QNAs.value = data["qa"];
      } catch (error) {
        console.error('There was a problem loading the video URLs:', error);
      }
    };
    
    onBeforeMount(loadVideoUrls);
    return {
      // Accordian FAQ
      // expanded: ref(["Frquently Asked Questions"]),
      // faq: [
      //   {
      //     label: "FAQ",
      //     fontsize: "32px",
      //     children: [
      //       {
      //         label: 'A custom internet connected hub which acts as a remote for one or many of a specific shocker. (One shocker is included with the PiShock Starter Kit.)'

      //       },

      //     ]
      //   },

      // ],
      // why: [
      //   {
      //     label: "Why would I want it?",
      //     fontsize: "32px",
      //     children: [
      //       {
      //         label: "It is a great toy to use in BDSM relationships. You can use it to punish subs, allowing doms instant reactions that draws satisfying squeals. It can be brought outside and on the go, allowing public play. It is great in games like VRChat where you can see reactions. Beyond BDSM, you can integrate it with games to make them more intense. You can even use it to train habits out of you.",

      //       },

      //     ]
      //   },
      // ],
      // HowDoesItFeel: [
      //   {
      //     label: "How does it feel?",
      //     fontsize: "32px",
      //     children: [
      //       {
      //         label: 'The sensation varies from person to person. Most testomonys state they feel a sharp tingling/tickle/biting senation in the area the device is attatched to.'

      //       },

      //     ]
      //   },

      // ],
      // IsItDangerous: [
      //   {
      //     label: "Is it Dangerous?",
      //     fontsize: "32px",
      //     children: [
      //       {
      //         label: 'Not if used responsiblity. The recommended locations to place this device on the body would be on the arms or legs. Please keep the device from sensitive areas such as the neck, spine, or chest.'

      //       },

      //     ]
      //   },

      // ],
      // Api: [
      //   {
      //     label: "Is the shocker built with an API for posisble game integration?",
      //     fontsize: "32px",
      //     children: [
      //       {
      //         label: 'Yes, each shocker has a unique API attatched to it that allows you to control shockers in new fun ways!'

      //       },

      //     ]
      //   },

      // ],
      // shipping: [
      //   {
      //     label: "Do you ship internationally?",
      //     fontsize: "32px",
      //     children: [
      //       {
      //         label: 'Yes, Pishock ships its product to most countries in the world. To check if Pishock ships to your country, go through checkout to determine the shipping rates to your country'

      //       },

      //     ]
      //   },

      // ],

      slide: ref("image1"),
      videoUrls,
      QNAs,
      lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
})
</script>