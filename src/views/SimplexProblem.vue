<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Problem Base</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-label></ion-label>
        <equation-base :cv="cantVar" :cr="cantRes"></equation-base>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel} from '@ionic/vue';
import EquationBase from '@/components/EquationBase.vue';

export default defineComponent({
    name: 'SimplexProblem',
    components: { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent , 
        EquationBase,
        IonLabel
    },
    props: {
    },
    data() {
        return {
            cantVar: 0,
            cantRes: 0,
        };
    },
    mounted(){
        const cv = this.$route.params.cv
        const cr = this.$route.params.cr
        this.cantVar = parseInt(cv.toString())
        this.cantRes = parseInt(cr.toString())
    },
    methods: {

    }
})
</script>

<style scoped>

</style>