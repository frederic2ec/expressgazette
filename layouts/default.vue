<template>
  <v-app :dark="this.$store.state.dark">
    <navigation />
    <v-content>
      <v-container>
        <v-flex>
          <adsbygoogle :ad-slot="adsense_slot" />
        </v-flex>
        <nuxt />
      </v-container>
    </v-content>
    <foot />
  </v-app>
</template>

<script>
import navigation from '~/components/navigation.vue'
import foot from '~/components/foot.vue'

export default {
  components: {
    navigation,
    foot
  },
  data() {
    return {
      adsense_slot: process.env.ADSNSE_SLOT
    }
  }
}
</script>
