<template>
    <div class="portfolio">
        <h1>Welcome to my portfolio page</h1>
        <div class="personal-projects">
            <h2>My Personal projects</h2>
            <div class="portfolio-grid">
                <div v-for="project in portfolio.projects" :key="project.id" class="grid-item">
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                        <!-- <span>{{ project.title }}</span> -->
                        <img :src="project.image" :alt="project.description">
                    </a>
                </div>
            </div>
        </div>

        <div class="work-related">
            <h2>Commercial projects</h2>
            <p>These have been done in a collaborative team at Naked Kitchens</p>
            <div class="portfolio-grid-commercial">
                <div v-for="project in portfolio.workRelated" :key="project.id" class="grid-item">
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                        <!-- <span>{{ project.title }}</span> -->
                        <img :src="project.image" :alt="project.description">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import PORTFOLIO from '../../data/portfolioDB.js'

export default {
    name: 'PortfolioView',
    components: {
    },
    setup() {
        const portfolio = ref(PORTFOLIO)

        return {
            portfolio
        }
    }
}
</script>

<style scoped lang="scss">
.portfolio {
    display: flex;
    width: 75%;
    height: 75%;
    gap: 40px;
    padding: 50px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.personal-projects {
    width: 100%;
    margin-bottom: 50px;

    h2 {
        text-align: left;
    }
}

.work-related {
    margin-top: 50px;
}

.portfolio-grid {
    grid-column: 1 / span 10;
    grid-row: 8 / span 2;
    display: grid;
    gap: 20px;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);

    .grid-item {
        width: 200px;
        height: 200px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }

    &-commercial {
        display: grid;
        gap: 20px;
        width: 50%;
        grid-template-columns: 1fr 1fr;
        margin: auto;

        .grid-item {
            width: 100px;
            height: 100px;
            
            img {
                width: 75%;
                height: 75%;
                object-fit: cover;
                border-radius: 10px;
            }
        }
    }
}

.grid-item {
    background-color: #eaf3f9;
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
</style>