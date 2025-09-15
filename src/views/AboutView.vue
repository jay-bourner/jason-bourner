<template>
  <div class="about">
    <div class="about-content-wrapper">
      <h1>About Me</h1>
      <p>{{ about.description }}</p>
      <div class="about-content">
        <div class="skills">
          <h2>Skills</h2>
          <div v-for="skill in about.skills" :key="skill.title" class="skill-item">
            <strong>{{ skill.title }}: {{ skill.icon }}</strong>
            <div class="details">
              <span>level: <small>{{ skill.level }} with {{  skill.experience }}</small></span>
            </div>
          </div>
        </div>
        
        <div class="qualification">
          <h2>Qualifications</h2>
          <div v-for="qualification in about.qualifications" :key="qualification.title" class="qualification-item">
            <strong>{{ qualification.cert }}</strong>
            <div class="details">
              <span>Studied at {{ qualification.institution }} </span>
              <span><small>- {{ qualification.year }}</small></span>
            </div>
          </div>
        </div>
      </div>
      <div class="experience">
        <h2>Web Dev Experience</h2>
        <div v-for="experience in about.experience" :key="experience.company" class="experience-item">
          <strong>{{ experience.role }}</strong> at {{ experience.company }}
          <div class="details">
            <span><small>({{ experience.duration }})</small></span>
            <span>{{ experience.details }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ABOUT from '../../data/aboutDB.js'

export default {
  name: 'AboutView',
  components: {
  },
  setup() {
    const about = ref(ABOUT)

    return {
      about
    }
  }
}
</script>

<style scoped lang="scss">
.about {
    display: flex;
    width: 75%;
    height: 75%;
    gap: 40px;
    padding: 50px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;

  h2{
    text-align: left;
    text-decoration: underline;
  }
}

.skills, .qualification {
  text-align: left;
}

.skill-item, .qualification-item {
  margin-bottom: 15px;
}

.qualification-item .details {
  display: flex;
  justify-content: space-between;
}

.experience {
  width: 100%;
  margin-top: 50px;
  text-align: left;

  .details {
    display: flex;
    flex-direction: column;
  }
}

.experience-item {
  margin-bottom: 15px;
}
</style>