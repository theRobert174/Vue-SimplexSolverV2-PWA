<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Simplex Solver</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <form @submit.prevent="submitForm">
          <ion-list>
            <ion-item  ref="cantVars">
              <ion-label position="floating">Cantidad de Variables</ion-label>
              <ion-input 
              v-model="cantVar" 
              type="number" 
              pattern="\d+" 
              min="2" max="10"
              @ion-input="validate"
              required
              ></ion-input>
            </ion-item>
  
            <ion-item  ref="cantRes">
              <ion-label position="floating">Cantidad de Restricciones</ion-label>
              <ion-input 
              v-model="cantRes" 
              type="number" 
              pattern="\d+" 
              min="2" max="10"
              @ion-input="validate"
              required
              ></ion-input>
            </ion-item>
          </ion-list>
  
          <ion-button type="submit" expand="block" color="primary" :disabled="!validNumber">
            Submit
          </ion-button>
        </form>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCard } from '@ionic/vue';

export default defineComponent({
  name: 'FormSimplex',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCard },
  data() {
    return {
      cantVar: '',
      cantRes: '',
    };
  },
  computed: {
    validNumber() {
      const num = parseInt(this.cantVar, 10);
      const res = parseInt(this.cantRes, 10);
      return (!isNaN(num) && num >= 2 && num <= 10) && (!isNaN(res) && res >= 2 && res <= 10);
    },
  },
  methods: {
    submitForm() {
      console.log(`Var: ${this.cantVar}`);
      console.log(`Res: ${this.cantRes}`);
      this.$router.push({ name: 'Base', params:{cv: this.cantVar, cr: this.cantRes} })
    },
    validate(ev:any){
      const value = ev.target.value;
      console.log(value)
    }
  },
});
</script>

<style scoped>

</style>
