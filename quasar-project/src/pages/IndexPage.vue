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
        <q-tab name="Shop" label="Shop" class="shop" clickable @click="enableCheckout = !enableCheckout" />
        <q-btn-dropdown auto-close stretch flat label="Learn" class="learn">
          <q-list>
            <q-item clickable @click="enablePiShockDocs = !enablePiShockDocs">
              <q-item-section>PiShock Docs</q-item-section>
            </q-item>
            <q-item clickable @click="enablePiShockApiDocs = !enablePiShockApiDocs">
              <q-item-section>PiShock API Docs</q-item-section>
            </q-item>
            <q-item clickable @click="enablePiVaultDocs = !enablePiVaultDocs">
              <q-item-section>PiVault Docs</q-item-section>
            </q-item>
            <q-item clickable @click="enablePiVaultApiDocs = !enablePiVaultApiDocs">
              <q-item-section>PiVault API Docs</q-item-section>
            </q-item>
          </q-list>

        </q-btn-dropdown>
        <q-btn-dropdown auto-close stretch flat label="Setup" class="setup">
          <q-list>
            <q-item clickable to="/setup">
              <q-item-section>Setup Steps</q-item-section>
            </q-item>
            <q-item clickable href="https://stream.pishock.com">
              <q-item-section>Stream Tools</q-item-section>
            </q-item>
          </q-list>

        </q-btn-dropdown>

        <q-tab name="Setup" label="F.A.Q" class="faq" @click="scrollToAnchorPoint('faq')" />
        <q-tab name="Setup" label="Support" class="support" />
        <q-tab name="Setup" label="Contact" class="contact" />
        <!-- <a class="btn-primary faq" @click="scrollToAnchorPoint('faq')">scroll test</a> -->
      </q-tabs>
      <q-space />
      <q-btn class="loginLogo" height="55px">
        <img src="../assets/user.png" style="height: 55px; max-width: 500px;" />
      </q-btn>
      <q-btn class="pishockLogo" height="55px">
        <img src="../assets/shoppingCart.png" style="height: 65px; max-width: 500px;" />
      </q-btn>
    </q-toolbar>
    <!-- Navbar section ends -->
    <!-- Breaker here add animation charging up -->
    <div class="navBreaker"></div>
    <!-- Sidebar/QDrawer on the right hands side Starts -->
    <!-- <q-drawer show-if-above v-model="rightDrawerOpen" side="right">

    </q-drawer> -->


    <!-- Call to action section starts -->
    <div class="text-center">
      <div class="row bg-black">
        <div class="col" height="700px">
          <q-image src="../assets/lightSpark.gif" style="position:absolute">
            <iframe src="https://giphy.com/embed/AEG5SmOuiI48mDcf48" width="1050" height="440" frameBorder="0"
              class="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com/stickers/MediaExpert-sparkle-thunder-raio-AEG5SmOuiI48mDcf48"></a></p>
          </q-image>

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
        <q-carousel v-model="slide" animated navigation infinite control-color="white" arrows height="1250px"
          style="background: black">

          <q-carousel-slide v-for="(video, index) in videoUrls" :key="index" :name="`${index}`">
            <video controls="" autoplay="" name="media" class="static"
              style="object-fit: cover; width: 95%; height: 100%;">
              <source :src="video.url" type="video/mp4">
            </video>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <!-- Socials Section -->
      <section>

        <div>
          <div class="row socialsSection ">
            <div class="col">
              <q-card class="socialCard">
                <!-- <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">

                  <div class="container absolute-bottom text-title1 text-center">
                    <h4 class="text-center">Miss Rogue</h4>
                    <p>Hello its me</p>
                  </div>
                </q-img> -->
                <div class="bg">
              </div>
              <div class="nft">
                <div class='main'>
                  <q-img class='tokenImage'
                    src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="NFT" />
                  <h2>Miss Rogue</h2>
                  <p class='description'>Twitch Creator & PiShock Front-end Dev</p>
                  <hr />
                  <div class='creator'>

                    <p><ins>Twitch</ins> Kiberbash</p>
                  </div>
                </div>
              </div>
              </q-card>
            </div>
            <!-- <div class="col">
              <div class="bg">
              </div>
              <div class="nft">
                <div class='main'>
                  <q-img class='tokenImage'
                    src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="NFT" />
                  <h2>Miss Rogue</h2>
                  <p class='description'>Twitch Creator & PiShock Front-end Dev</p>
                  <hr />
                  <div class='creator'>

                    <p><ins>Twitch</ins> Kiberbash</p>
                  </div>
                </div>
              </div>
            </div> -->

          </div>
        </div>

      </section>
      <!-- About Me Description Section -->
      <section class="aboutMeSection">
        <div class="row aboutMeRow">
          <div class="col lethosLearnMore">
            <p class="aboutTitle">About the Creator</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.</p>
          </div>
          <div class="col">
            <q-img class="aboutMeCard " src="../assets/lethosAboutMe.png">
              <iframe src="https://giphy.com/embed/6E3CWgsz0a1KeLuFKY" width="420" height="980" frameBorder="0"
                class="lethosBolt" allowFullScreen></iframe>

            </q-img>
          </div>

        </div>

      </section>
      <!-- FAQ section -->
      <h1>Frequently Asked Questions</h1>
      <div class="FAQ">
        <div ref="faq">
          <q-expansion-item label="" data-hover="Click to Learn More">
            <q-tooltip>
              Some text as content of Tooltip
            </q-tooltip>
            <div v-for="(QA, index) in QNAs" :key="index" class="q-pa-md q-gutter-md bg-grey-9 text-white " id="faq">
              <div class="text-white text-h5">{{ QA.question }}</div>
              <div v-for="(paragraph, pIndex) in QA.paragraphs" :key="pIndex" class="">
                <p>{{ paragraph }}</p>
              </div>
            </div>

          </q-expansion-item>
          <div class="row justify-center dropDown" id="faq">

          </div>
        </div>

      </div>
    </div>
    <vue-markdown :enable="enablePiShockDocs" v-on:close="enablePiShockDocs = false" target="PiShock" />
    <vue-markdown :enable="enablePiShockApiDocs" v-on:close="enablePiShockApiDocs = false" target="pishock_api" />
    <vue-markdown :enable="enablePiVaultApiDocs" v-on:close="enablePiVaultApiDocs = false" target="pivault_api" />
    <vue-markdown :enable="enablePiVaultDocs" v-on:close="enablePiVaultDocs = false" target="PiVault" />
    <Checkout :enable="enableCheckout" v-on:close="enableCheckout = false" />
  </q-page>
</template>

<style>
@import '../css/app.css';
@import'../css/socials.css';
</style>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import jsonData from '../assets/affiliates.json';
import VueMarkdown from '../components/VueMarkdown.vue'
import Checkout from '../components/Checkout.vue'
import axios from 'axios';
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
  data() {
    return {
      enablePiShockDocs: false,
      enablePiShockApiDocs: false,
      enablePiVaultApiDocs: false,
      enablePiVaultDocs: false,
      enableCheckout: false
    }
  },
  methods: {
    scrollToAnchorPoint(x) {
      const el = this.$refs[x]
      el.scrollIntoView({ behavior: 'smooth' })
    }
  },
  components: {
    VueMarkdown,
    Checkout
  },
  setup() {
    const affiliates = ref([]);
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
    async function get_oauth_token(client_id, client_secret) {
      const url = "https://id.twitch.tv/oauth2/token";
      const payload = {
        'client_id': client_id,
        'client_secret': client_secret,
        'grant_type': 'client_credentials'
      }
      let response = await axios.post(url, null, { params: payload });
      if (response.status === 200) {
        return response.data.access_token;
      } else {
        throw new Error(`Failed to get access token, status code: ${response.status}`);
      }
    }

    const loadAffiliates = async () => {
      const client_id = "dl0furnqyhwdcx0gmjwaa1mj8cds2h"; // your client id
      const client_secret = "guj8xxrimgtnyqw04y924kzm5vdtu7"; // your client secret

      const access_token = await get_oauth_token(client_id, client_secret);
      const affiliatesjson = jsonData["affiliates"];
      const headers = {
        'Client-ID': client_id,
        'Authorization': `Bearer ${access_token}`,
      };

      const requests = affiliatesjson.map(async (affiliate) => {

        try {
          if (!affiliate.fetch_twitch || affiliate.user_id == null) {
            return {
              displayName: affiliate.name,
              id: affiliate.user_id,
              profile_image: affiliate.profile_image,
              description: affiliate.description
            };

          }
          const params = { 'id': affiliate.user_id };
          const response = await axios.get('https://api.twitch.tv/helix/users', { headers, params });

          if (response.status === 200) {
            return response.data.data.map(channel => ({
              displayName: channel.display_name,
              id: channel.id,
              profile_image: channel.profile_image_url,
              description: affiliate.description
            }));
          } else {
            console.log(`Request returned status code ${response.status}`);
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      });

      const results = await Promise.allSettled(requests);

      affiliates.value = results.filter(result => result.status === "fulfilled" && result.value != null).map(result => result.value).flat();
    };

    onBeforeMount(loadAffiliates);
    onBeforeMount(loadVideoUrls);
    return {
      expanded: ref(false),
      slide: ref("0"),
      slide2: ref("0"),
      videoUrls,
      affiliates,
      QNAs,
      lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
})
</script>