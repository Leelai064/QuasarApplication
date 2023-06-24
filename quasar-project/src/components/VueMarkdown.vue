<template>
    <q-dialog v-model="isVisible" @hide="$emit('close')" @before-show="getMDFile()">
      <q-card class="text-secondary bg-dark full-width">
        <q-card-section class="full-width">
          <div v-html="html" id="doc" class="full-width"></div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    props: ['enable', 'target'],
    data() {
      return {
        isVisible: this.enable,
        fileContent: '',
        converter: null,
        text: '# hello, markdown!',
        html: null,
        ready: false,
      };
    },
    watch: {
      enable(newVal) {
        this.isVisible = newVal;
      },
      isVisible(newVal) {
        if (newVal !== this.enable) {
          this.$emit('update:enable', newVal);
        }
      },
    },
    mounted() {},
    methods: {
      changeClass(target, to) {
        var element = document.getElementById('doc');
        var t = element.getElementsByTagName(target),
          len = t !== null ? t.length : 0,
          i = 0;
        for (i; i < len; i++) {
          t[i].className += ' ' + to;
        }
      },
      format() {
        setTimeout(() => {
          this.changeClass('h1', 'text-h3');
          this.changeClass('h2', 'text-h4');
          this.changeClass('h3', 'text-h5');
          this.changeClass('h4', 'text-h6');
          this.changeClass('p', 'text-body1 flex');
          this.changeClass('img', 'text-center');
          this.changeClass('a', 'text-center full-width');
          this.changeClass('table', 'docsTable');
        }, 200);
      },
      getMDFile() {
        var thisVue = this;
        axios
          .get(
            'https://raw.githack.com/Fedack/PiShockDocs/main/docs/' +
              this.target +
              '.md'
          )
          .then((res) => {
            this.fileContent = res.data;
            axios
              .post('https://api.github.com/markdown', JSON.stringify({ text: this.fileContent }))
              .then((res2) => {
                thisVue.html = res2.data;
                thisVue.format();
              });
          });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .docsTable {
    background-color: #f2f2f2;
  }
  </style>
  