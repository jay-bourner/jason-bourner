<template>
    <div id="sidebar">
        <div class="display-image">
            <img alt="Vue logo" :src="logo">
        </div>
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/about">About</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
        <footer>
            <p style="color: white; font-size: 12px;">&copy; {{  year }} Jason Bourner</p>
        </footer>
    </div>
</template>

<script>
import logo from '@/assets/logo.png' 

export default {
    name: 'Sidebar',

    setup() {
        const date = new Date();
        const year = date.getFullYear();

        return { 
            logo,
            year
        }
    }
}
</script>

<style lang="scss">
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
    border-right: 1px solid #eee;
    background-color: rgb(224, 140, 71);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    .display-image {
        margin: 20px 0;
        background-color: #ccc;
        border-radius: 50%;
        border: 2px solid grey;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

        img {
            width: 150px;
        }
    }

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
    }

    footer {
        position: absolute;
        bottom: 10px;
    }
}
</style>