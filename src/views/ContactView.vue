<template>
    <div class="contact">
        <h1>Contact me for info</h1>
        <div class="contact-methods">
            <div v-for="method in contact.methods" :key="method.label" class="method-item">
                <button :href="method.link" target="_blank" rel="noopener">
                    <img :src="method.icon" alt="">
                </button>
                <span>{{ method.value }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import CONTACT from '../../data/contactDB.js'

export default {
    name: 'ContactView',
    components: {
    },
    setup() {
        const contact = ref(CONTACT)

        return {
            contact
        }
    }
}
</script>

<style scoped lang="scss">
.contact {
    display: flex;
    width: 75%;
    // height: 75%;
    gap: 40px;
    padding: 50px;
    align-items: center;
    flex-direction: column;
    
    @include breakpoint(xl_1) {
        margin: 100px auto 0;
    }
    
    @include breakpoint(sm) {
        width: 90%;
        padding: 50px 25px;
    }
}
.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    justify-content: center;
    align-items: start;

    .method-item {
        width: 100%;
        align-items: center;
        display: grid;
        gap: 20px;
        grid-template-columns: 10% auto;

        span {
            // padding-left: 20px;
            text-align: left;
        }

        button {
            // all: unset;
            cursor: pointer;
            width: 60px;
            height: 40px;
            // display: flex;
            // align-items: center;
            // justify-content: center;
            border-radius: 10px;
            background-color: #ffc18e;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            // transition: background-color 0.3s ease, transform 0.2s ease;
        }

        // img {
        //     width: 100%;
        //     height: 100%;
        //     object-fit: cover;
        //     border-radius: 10px;
        // }
        
        @include breakpoint(md) {
            grid-template-columns: 15% auto;
        }
        
        @include breakpoint(sm) {
            grid-template-columns: auto;
        }
    }

    // a {
    //     text-decoration: none;
    //     font-size: 1.5rem;
    //     font-weight: bold;
    //     color: #333;
    //     transition: all 0.3s ease;
    // }

    // a:hover {
    //     color: #007BFF;
    //     transform: scale(1.1);
    // }

    // a:active {
    //     color: #0056b3;
    //     transform: scale(0.9);
    // }

    // span {
    //     font-size: 1.2rem;
    //     font-weight: bold;
    //     text-transform: uppercase;
    //     letter-spacing: 2px;
    //     color: #333;
    //     transition: all 0.3s ease;
    // }
}
</style>