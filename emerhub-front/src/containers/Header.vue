<template>
    <fragment>
        <b-navbar toggleable="lg" type="dark" variant="warning">
            <div class="container">
                <b-navbar-brand class="header-brand text-dark" href="#">Emerhub TT</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown :text="lang" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right v-if="authed">
                            <template v-slot:button-content>
                                 User
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>


                    <Auth />
                </b-collapse>
            </div>
        </b-navbar>
    </fragment>
</template>

<script>
    import Auth from "../components/Auth";
    export default {
        name: "Header",
        components: {Auth},
        data() {
            return {
                lang: 'EN',
                authed: false
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap')
    .header-brand
        font-family: 'Coda Caption', sans-serif
        font-size: 1.7rem
    .navbar
        background: #42b983

</style>