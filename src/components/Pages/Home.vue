<template>
  <div class="home" >
    <my-title>Home</my-title>

    <div v-scroll="onScroll">
      {{ position }}
      <paragraph>scrollTop:{{position.scrollTop}}</paragraph>
      <paragraph>
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
      </paragraph>
      <paragraph>
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
      </paragraph>
      <paragraph>
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
      </paragraph>
      <paragraph>
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
      </paragraph>
      <paragraph>
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
        homehomehomehomehomehomehomehomehomehomehomehomehomehome
      </paragraph>
    </div>
  </div>
</template>

<script>
import MyTitle from "@/components/Atoms/MyTitle";
import Paragraph from "@/components/Atoms/Paragraph";

export default {
  name: "home",
  components: {
    MyTitle,
    Paragraph
  },
  data () {
		return {
      // orders,
      position: { scrollTop: 0, scrollLeft: 0 }
    };
  },
  methods: {
    onScroll (e, position) {
      this.position = position;
      console.log(this.position);
    },
    test () {
			// console.log('test');
		},
  },
  mounted () {
    this.test();
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 1rem 2rem;
}
</style>
