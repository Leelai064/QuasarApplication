<template >
  <q-page class="bg-dark">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
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
          <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
              control-color="white" arrows thumbnails height="1250px" class="bg-black text-white shadow-1">
            <q-carousel-slide name="style" class="column no-wrap ">
              <embed class="" :src="videoUrls.length > 0 ? videoUrls[0].url : ''"  height="100%" width="100%" />
            </q-carousel-slide>
            <q-carousel-slide v-for="(video, index) in videoUrls.slice(1)" :key="index" :name="video.name" class="column no-wrap ">
              <embed class="" :src="video.url" height="100%" width="100%" />
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-icon name="live_tv" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
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
            </q-carousel-slide>
          </q-carousel>
        </div>
      <!-- FAQ section -->
      <div v-for="(QA, index) in QNAs" :key="index" href="F.A.Q" class="faq-item" >
        <h2 class="faq-question">{{QA.question}}</h2>
        <div v-for="(paragraph, pIndex) in QA.paragraphs" :key="pIndex" class="faq-answer">
            <p>{{paragraph}}</p>
        </div>
      </div>
      <!--<div class="" href="F.A.Q">
        <h2> Frequest Asked Questions</h2>
        <p>A custom internet connected hub which acts as a remote for one or many of a specific shocker. (One shocker is
          included with the PiShock Starter Kit.)</p>
        <h2> Why would I want it</h2>
        <h2> How does it feel</h2>
        <h2> Safety</h2>
        <h2> Can I use it on somebody in another country</h2>
        <h2> How easy is it to save controls</h2>
        <h2> What is the Pishock</h2>

      </div> -->

      <div class="q-pa-md q-gutter-sm">
        <q-tree :nodes="simple" node-key="label" no-connectors v-model:expanded="expanded" />
      </div>
    </div>

  </q-page>
</template>

<style>
@import '../css/app.css';
</style>

<script>
import { defineComponent, ref } from 'vue'
import { defineComponent, ref, onBeforeMount } from 'vue'

export default defineComponent({
  name: "IndexPage",
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
      expanded: ref(["Frquently Asked Questions"]),
      simple: [
        {
          label: "What is the Pishock",
          fontsize: "10000000px",
          children: [
            {
              story: "Good food"
            },
          ]
        }
      ],
      slide: ref("style"),
      lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
      videoUrls,
      QNAs
    };
  },
})
</script>

