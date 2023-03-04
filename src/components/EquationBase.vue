<template>
    <div class="container-func">
        <ion-label for="opt">P: </ion-label>
        <select id="opt" v-model="opt" name="opt" style="margin-right: 1rem;">
            <option value="min">min</option>
            <option value="max">max</option>
        </select>

        <ion-label for="inputs"> z=</ion-label>
        <div v-for="(vars, index) in cv" :key="index">
            <ion-label v-if="index > 0">+</ion-label>
            <input type="text" v-model="problem[index]">
            <ion-label>x<sub>{{ index+1 }}</sub></ion-label>
        </div>
    </div>

    <div class="rest-text">
        <ion-label>s.a.</ion-label>
    </div>

    <div class="container-func" v-for="(rest, i) in cr" :key="i">
        <div v-for="(vars, j) in cv" :key="j">
            <ion-label v-if="j > 0">+</ion-label>
            <input type="text" v-model="restrictions[i][j]">
            <ion-label>x<sub>{{ j+1 }}</sub></ion-label>
        </div>
        <select v-model="resCond[i][0]" name="sign" style="margin-right: 1rem;">
            <option value="mayigu">&ge;</option>
            <option value="igu"> = </option>
            <option value="menigu">&le;</option>
        </select>
        <input v-model="resCond[i][1]" type="text">
    </div>
    <div>
        <ion-button @click="imprimir">Resolver</ion-button>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { IonLabel, /*IonInput*/ IonButton } from '@ionic/vue';
export default defineComponent({
    name: 'EquationBase',
    components:{
        IonLabel,
        IonButton
        //IonInput
    },
    props:{
        cv: {
            type: Number,
            required: true
        },
        cr: {
            type: Number,
            required: true
        },
    },
    data(){
        return{
            opt: 'min',

            problem: [],
            restrictions: [[],[],[],[],[],[],[],[],[],[]],
            resCond: [[],[]]
        }
    },
    methods:{
        imprimir(){
            console.log(this.opt)
            console.table(this.problem)
            console.table(this.resCond);
            console.table(this.restrictions)
        }
    }
})
</script>
<style scoped>
.container-func {
  display: flex; /* Alineamos los elementos en fila */
  align-items: center; /* Centramos verticalmente los elementos */
}
.input-container {
    display: flex;
}
.input-container input {
    width: 5px;
    min-width: 5px; /* o cualquier otro valor que funcione para tu caso específico */
    margin-right: 5px;
}
.rest-text{
    text-align: left;
    width: 100%;
}
input{
    width: 25px;
    min-width: 5px; /* o cualquier otro valor que funcione para tu caso específico */
    margin-right: 5px;
}
</style>