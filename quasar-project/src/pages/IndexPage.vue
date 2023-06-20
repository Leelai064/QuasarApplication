<template >
  <q-page class="bg-dark">
    <!-- Navbar section starts -->
    <q-toolbar class="bg-black text-white shadow-2 justify-center">
        <q-btn class="pishockLogo" height="75px">
          <img src="../assets/pishockLogo.png" style="height: 100px; max-width: 500px;" />
        </q-btn>
        <!-- <q-btn flat label="Pi-Shock" img src="../assets/pishockLogo.png" /> -->
        <q-space />
        <q-tabs v-model="tab" shrink class="navBar">
          <q-tab name="Shop" label="Shop" class="shop" />
          <q-tab name="Learn" label="Learn" class="learn" />
          <q-tab name="Setup" label="Setup" @click="showDialog" class="setup" />
          <q-tab name="Setup" label="F.A.Q" class="faq" @click="scrollToAnchorPoint('faq')"/>
          <q-tab name="Setup" label="Support" class="support" />
          <q-tab name="Setup" label="Contact" class="contact" />
          <!-- <a class="btn-primary faq" @click="scrollToAnchorPoint('faq')">scroll test</a> -->
        </q-tabs>
       
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
        <q-carousel v-model="slide" animated navigation infinite control-color="white" arrows height="1250px">
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

          <q-carousel-slide name="image1">
              <q-video class="absolute-full" :src="videoUrls.length > 0 ? videoUrls[0].url : ''" />
            </q-carousel-slide>
          <q-carousel-slide v-for="(video, index) in videoUrls.slice(1)" :key="index" :name="video.name">
              <q-video class="absolute-full" :src="video.url"/>
          </q-carousel-slide>

          <!-- <div class="q-mt-md text-center">
              {{ lorem }}
            </div> -->
          <!-- </q-carousel-slide> -->
          <!--  <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-icon name="layers" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-icon name="terrain" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide> -->
        </q-carousel>

        <div class="row justify-center">
          <q-btn-toggle glossy v-model="slide" :options="[
              { label: '1', value: 'image1' },
              { label: '2', value: 'image2' },
            ]" />
        </div>
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
      
       <!-- <div class="row justify-center">
          <div class=" q-px-xl faq-grid q-my-xl">
            <div class="q-pa-md q-gutter-md bg-grey-9 text-white ">
              <q-tree :nodes="why" node-key="label" class="text-white text-h5" />
            </div>
          </div>
        </div>

        <div class="row justify-center">
          <div class=" q-px-xl faq-grid q-my-xl">
            <div class="q-pa-md q-gutter-md bg-grey-9 text-white ">
              <q-tree :nodes="HowDoesItFeel" node-key="label" class="text-white text-h5" />
            </div>
          </div>
        </div>


        <div class="row justify-center">
          <div class=" q-px-xl faq-grid q-my-xl">
            <div class="q-pa-md q-gutter-md bg-grey-9 text-white ">
              <q-tree :nodes="IsItDangerous" node-key="label" class="text-white text-h5" />
            </div>
          </div>
        </div>


        <div class="row justify-center">
          <div class=" q-px-xl faq-grid q-my-xl">
            <div class="q-pa-md q-gutter-md bg-grey-9 text-white ">
              <q-tree :nodes="Api" node-key="label" class="text-white text-h5" />
            </div>
          </div>
        </div>


        <div class="row justify-center">
          <div class=" q-px-xl faq-grid q-my-xl">
            <div class="q-pa-md q-gutter-md bg-grey-9 text-white ">
              <q-tree :nodes="shipping" node-key="label" class="text-white text-h5" />
            </div>
          </div>
        </div>-->
      </div>

      <!--<vue-embed-gist gist-id="996eb51d1de3d7498c34a161d3413692" file="regex-Tutorial" />-->



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