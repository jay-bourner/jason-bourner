<template>
    <div class="portfolio">
        <h1>Take a look at my work <br><small>so far...</small></h1>
        <p>There are more projects built which are now being remade and upgraded to new technologies, for security, scalability and maintainabllity</p>
        <div class="personal-projects">
            <h2>My Personal projects</h2>
            <div class="portfolio-grid">
                <div v-for="project in portfolio.projects" :key="project.id" class="grid-item">
                    <PortfolioPopout :project="project" />

                    <div class="portButton">
                        <button @click="portfolioMenu(project)">
                            <img :src="project.image" :alt="project.description">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="work-related">
            <h2>Commercial projects</h2>
            <p>These have been done in a collaborative team at Naked Kitchens</p>
            <div class="portfolio-grid-commercial">
                <div v-for="project in portfolio.workRelated" :key="project.id" class="grid-item">
                    <a :href="project.link" target="_blank" rel="noopener noreferrer">
                        <img :src="project.image" :alt="project.description">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import PORTFOLIO from '../data/portfolioDB.js'

import PortfolioPopout from '../components/PortfolioPopout.vue'

export default {
    name: 'PortfolioView',
    components: {
        PortfolioPopout
    },
    setup() {
        const portfolio = ref(PORTFOLIO)

        const portfolioMenu = (project) => {
            project.isActive = !project.isActive
        }

        return {
            portfolio,
            portfolioMenu,
        }
    }
}
</script>

<style scoped lang="scss">
.portfolio {
    display: flex;
    width: 75%;
    gap: 40px;
    padding: 50px;
    align-items: center;
    flex-direction: column;
    margin: auto;

    @include breakpoint(xl_1) {
        margin: 100px auto 0;
    }
    
    @include breakpoint(sm) {
        width: 90%;
        padding: 50px 0 0;

        h1 {
            width: 100%;
        }
    }
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
    gap: 50px;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);

    .portButton {
        position: relative;
        min-width: 75px;
        background-color: #eaf3f9;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        position: relative;
        align-items: center;
        z-index: 2;
    }

    .grid-item {
        width: 200px;
        height: 200px;

        button {
            cursor: pointer;
            border: none;
            background: none;
        }
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        @include breakpoint(xl_1) {
            width: 100%;
            height: auto;
        }
    }

    &-commercial {
        display: grid;
        gap: 20px;
        width: 50%;
        grid-template-columns: 1fr 1fr;
        margin: 20px auto;

        .grid-item {
            width: 100px;
            height: 100px;
            margin: auto;

            a {
                position: relative;
                min-width: 75px;
                background-color: #eaf3f9;
                border: 1px solid #ccc;
                border-radius: 10px;
                box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: center;
                position: relative;
                align-items: center;
                padding: 10px;
            }
            
            img {
                width: 75%;
                height: 75%;
                object-fit: cover;
                border-radius: 10px;
            }
        }

        @include breakpoint(md_1) {
            width: 100%;
        }
    }

    @include breakpoint(sm) {
        grid-template-columns: 1fr 1fr;
    }
}

.grid-item {
    position: relative;

    // span {
    //     font-size: 0.9em;
    //     color: #333;
    //     transform: rotate(336deg);
    // }
}
</style>