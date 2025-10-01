<template>
    <Navigation v-if="isMobile" :expand="mobileNav" :class="[expanded ? 'expanded' : '']" />
    <div id="sidebar">
        <div class="display-image">
            <img alt="Vue logo" :src="image">
        </div>
        <button class="expand" :class="[navActive ? 'active' : '']" @click="mobileNav">
            <img :src="caret" alt="">
        </button>
        <Navigation v-if="!isMobile" />
        <footer>
            <p style="color: white; font-size: 12px;">&copy; {{  year }} Jason Bourner</p>
        </footer>
    </div>
</template>

<script>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import logo from '@/assets/images/logo.png' 
import caret from '@/assets/icons/caret-right.svg'
import image from '@/assets/images/me-1.jpg'
// import image from '@/assets/images/jb-favicon.png'

export default {
    name: 'Sidebar',
    components: {
        Navigation
    },
    setup() {
        const date = new Date()
        const year = date.getFullYear()
        const expanded = ref(false)
        const isMobile = ref(window.innerWidth <= 900)
        const navActive = ref(false)
        
        window.addEventListener('resize', () => {
            isMobile.value = window.innerWidth <= 900
            if (!isMobile.value) {
                expanded.value = false
            }
        })
        const mobileNav = () => {
            expanded.value = !expanded.value
            navActive.value = !navActive.value
        }

        return {
            isMobile,
            Navigation,
            logo,
            caret,
            year,
            mobileNav,
            expanded,
            image,
            navActive
        }
    }
}
</script>

<style lang="scss">
.expand {
    display: none;

    @include breakpoint(lg_1) {
        position: absolute;
        bottom: -15px;
        right: 10px;
        background-color: rgb(224, 140, 71);
        border: 2px solid grey;
        border-radius: 50%;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 11;
        transform: rotate(90deg);
        transition: transform 0.3s ease;

        img {
            width: 15px;
            filter: invert(1);
        }
    }

    &.active {
        transform: rotate(270deg);
    }
}
#sidebar {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: rgb(224, 140, 71);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    .display-image {
        width: 150px;
        height: 150px;
        margin: 20px 0;
        background-color: #ccc;
        border-radius: 50%;
        border: 2px solid grey;
        overflow: hidden;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

        img {
            width: 160px;
            object-fit: cover;
        }
    }

    footer {
        position: absolute;
        bottom: 10px;
    }

    @include breakpoint(lg_1) {
        width: 150px;
        height: 150px;
        justify-content: start;
        z-index: 10;


        .display-image {
            img {
                width: 75px;
            }
        }
    }
}
</style>