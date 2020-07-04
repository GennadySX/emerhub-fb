<template>
    <div id="app">
        <Header/>
        <div class="container mt-2">
            <router-view>   </router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from "./containers/Header";
    import Footer from "./containers/Footer";

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="sass">
    body
        font-family: Helvetica, sans-serif
</style>