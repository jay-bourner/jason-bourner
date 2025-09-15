<template>
    <nav>
        <router-link @click="expand" to="/">Home</router-link> 
        <router-link @click="expand" to="/about">About</router-link>
        <router-link @click="expand" to="/portfolio">Portfolio</router-link>
        <router-link @click="expand" to="/contact">Contact</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    props: ['expand'],
    setup(props) {
        // Composition API logic can be added here
        const expand = props.expand

        return {
            expand
        }
    }

}
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    flex-direction: column;
    padding: 20px;

    a {
        font-weight: bold;
        color: white;
        text-decoration: none;
        margin-bottom: 20px;

        &.router-link-exact-active {
            text-decoration: underline;
        }
    }

    @include breakpoint(lg_1) {
        display: flex;
        flex-direction: row;
        gap: 10px;
        position: absolute;
        // top: -60px;
        left: -150px;
        z-index:2;
        padding: 0 20px;
        border-bottom-right-radius: 10px;
        background-color: rgb(224, 140, 71);
        transition: left 0.3s ease;

        a {
            color: black;
            margin: 20px 0;
        }
    }

    &.expanded {
        left: 150px;
    }
    
    @include breakpoint(sm) {
        gap: unset;
        height: 150px;
        flex-direction: column;
        justify-content: space-evenly;

        a {
            margin: 5px 0;
        }
    }
}
</style>