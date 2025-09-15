<template>
  <div class="home">
    <div class="intro">
      <h1>{{ intro.title }}</h1>
      <h2>{{ intro.subtitle }}</h2>
      <p>{{ intro.description }}</p>
      
      <div class="home-grid" :style="style">
        <div v-for="service in intro.services" :key="service" class="grid-item">
          <span>{{ service }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import INTRO from '../../data/homeDB.js'


export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    // Composition API logic can be added here
    const intro = ref(INTRO)
    const style = ref('')
    style.value = '--grid-cols: ' + intro.value.services.length

    return {
      intro,
      style
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  width: 75%;
  height: 75%;
  gap: 40px;
  padding: 50px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  @include breakpoint(lg_1) {
    width: 100%;
    // height: 100%;
  }
  
  @include breakpoint(sm) {
    height: 100%;        
    margin-top: 170px;
  }
}

.intro {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 20px;

  h1 {
    grid-column: 1 / span 10;
    grid-row: 1 / span 2;
    font-size: 3em;
    text-align: left;
    font-weight: bold;
    color: #333;
    animation: slideInDown 1s ease-out forwards;

    @include breakpoint(lg_1) {
      font-size: 2em;
      grid-column: 1 / span 10;
      grid-row: 2 / span 2;
    }
    
    @include breakpoint(sm) {
      grid-column: 1 / span 10;
      grid-row: 2 / span 2;
    }
  }
  
  h2 {
    grid-column: 2 / span 8;
    grid-row: 3 / span 2;
    font-size: 1.5em;
    text-align: left;
    font-weight: bold;
    color: #333;
    opacity: 0;
    animation: slideInRight 1s .5s ease-out forwards;
    
    @include breakpoint(lg_1) {
      font-size: 1em;
      grid-column: 1 / span 10;
      grid-row: 4 / span 2;
    }
  }

  p {
    grid-column: 3 / span 6;
    grid-row: 5 / span 4;
    font-size: 1em;
    text-align: left;
    color: #666;
    opacity: 0;
    animation: fadeIn 1s 1s ease-out forwards;
    
    @include breakpoint(lg_1) {
      grid-column: 1 / span 10;
      grid-row: 5 / span 5;
    }
  }
  
  .home-grid {
    grid-column: 1 / span 10;
    grid-row: 8 / span 2;
    display: grid;
    gap: 20px;
    width: 50%;
    grid-template-columns: repeat(var(--grid-cols), 1fr);

    .grid-item {
      width: 100px;
      height: 100px;
      background-color: #c5e6fd;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 0.9em;
        color: #333;
        transform: rotate(336deg);
      }
    }
    
    @include breakpoint(lg_1) {
      grid-row: 8;
      grid-template-columns: repeat(3, 1fr);

      .grid-item {
        width: 80px;
        height: 80px;

        span {
          font-size: 0.8em;
        }
      }
    }
    
    @include breakpoint(sm_2) {
      grid-row: 8;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>