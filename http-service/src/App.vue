<template>
  <div id="app">
    <h1>Peoples</h1>
    <ul>
      <li v-for="people in peoples">
        name: {{ people.name }}<br/>
        surname: {{ people.surname }}<br/>
        age: {{ people.age }}<br/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class App extends Vue {
    peoples: any[];

    constructor() {
      super();
      this.peoples = [];
    }

    created() {
      this.axios.get('/apiGtw/hybridAdvisory/dummy/people')
              .then((response) => {
                console.log(response.data.peopleList);
                this.peoples = response.data.peopleList;
              });

    }

  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;

      li {
        padding: 30px;
        border: 2px dashed green;
        list-style: none;
        margin: 5px;
        text-align: left;
      }
    }
  }
</style>
