<template>
    <div>
        <b-button @click="logInOpen($event)" variant="warning" class="text-light">Log in</b-button>
        <b-button @click="signUpOpen($event)" variant="warning" class="text-light">Sign up</b-button>
        <b-modal id="login-modal" centered :title="register ? 'Register' : 'Login'" hide-footer>
            <b-form @submit="onSubmit" v-if="show">
                <b-form-group
                        v-if="register"
                        id="input-group-0"
                        label="Your name :"
                        label-for="input-0"
                >
                    <b-form-input
                            id="input-0"
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="Enter name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            required
                            placeholder="Enter email"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
                    <b-form-input
                            id="input-2"
                            type="password"
                            v-model="form.password"
                            required
                            placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        v-if="register"
                        id="input-group-4"
                        label="Confirm password :"
                        label-for="input-4"
                >
                    <b-form-input
                            id="input-4"
                            v-model="form.c_password"
                            type="password"
                            required
                            placeholder="Enter password"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" class="justify-content-center d-flex" label-for="input-2">
                    <b-button type="submit" class="pl-5 pr-5" :variant="register ? 'success' : 'primary'">
                        Sign
                        {{register ? 'up': 'in'}}
                    </b-button>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "Auth",
        data() {
            return {
                register: false,
                form: {
                    email: '',
                    name: '',
                    password: '',
                    c_password: '',
                },
                foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                //alert(JSON.stringify(this.form))
            },
            logInOpen(e) {
                e.preventDefault()
                this.register = false
                this.$bvModal.show('login-modal')
            },
            signUpOpen(e) {
                e.preventDefault()
                this.register = true
                this.$bvModal.show('login-modal')
            }

        }
    }
</script>

<style scoped>

</style>