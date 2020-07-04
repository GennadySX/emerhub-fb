<template>
    <fragment>
        <b-navbar toggleable="lg" type="dark" variant="warning">
            <div class="container">
                <b-navbar-brand href="#">Stolen Bike</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Link</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown text="Language" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">RU</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                                 User
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>

                </b-collapse>
            </div>
        </b-navbar>
    </fragment>
</template>

<script>
    export default {
        name: "Header",
        components: {},
        mounted() {

        }
    }
</script>

<style scoped>
    .navbar {
        background: #42b983;
    }
</style>