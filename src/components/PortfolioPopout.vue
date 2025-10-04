<template>
    <div class="popoutPanel" :class="(project.isActive ? 'active' : '')">
        <button @click="gotToLink(project.link)">
            <img :src="eye" alt="">
        </button>
        <hr>
        <button @click="showModal">
            <img :src="clipboard" alt="">
        </button>
    </div>
    <teleport to="#modals" v-if="modalActive">
        <Modal :modalActive="modalActive" :showModal="showModal">
            <h2>{{ project.title }}</h2>
            <p v-for="(description, index) in project.description" :key="index">
                {{ description }}
            </p>
            <p v-if="project.technologies">
                <strong>Technologies used:</strong> {{ project.technologies.join(', ') }}
            </p>
            <p v-if="project.link">
                <strong>Link: </strong>
                <a :href="project.link" target="_blank" rel="noopener noreferrer">{{ project.link }}</a>
            </p>
        </Modal>
    </teleport>
</template>

<script>
import { ref } from 'vue'
import Modal from './Modal.vue'
import eye from '../assets/icons/eye.svg'
import clipboard from '../assets/icons/clipboard-text.svg'

export default {
    name: 'PortfolioPopout',
    props: ['project'],
    components: {
        Modal
    },
    setup(props) {
        const gotToLink = (link) => {
            window.open(link, '_blank')
        }

        const modalActive = ref(false)

        const showModal = () => {
            modalActive.value = !modalActive.value
        }

        return {
            eye,
            clipboard,
            gotToLink,
            modalActive,
            showModal
        }
    }
}
</script>

<style scoped lang="scss">

div.popoutPanel {
    width: 60px;
    height: 50px;
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    background-color: #eaf3f9;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px 5px;
    box-shadow: 0 2px 5px inset rgba(255, 255, 255, 0.2), 0 -2px 5px inset rgba(255, 255, 255, 0.2);
    z-index: 2;
    flex-direction: column;
    align-items: end;
    transition: right 0.3s ease-in-out;

    &.active {
        right: -47px;
    }

    hr {
        width: 95%;
    }

    button, a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(224, 140, 71);
        color: white;
        width: 35px;
        border-radius: 5px;
        cursor: pointer;
        overflow: hidden;
        border: 1px solid #757575;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3), 
                    0 2px 5px inset rgba(255, 255, 255, 0.2), 
                    0 -2px 5px inset rgba(255, 255, 255, 0.2);

        img {
            width: 15px;
            height: 15px;
            object-fit: contain;
        }

        svg {
            width: 10px;
            height: 10px;
        }
    }
}
</style>