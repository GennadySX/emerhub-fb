<template>
    <div class="mr-2 mb-2">
        <b-card
                :title="title"
                :img-src="src"
                :img-alt="alt"
                img-top
                tag="article"
                :style="style ? style : 'max-width: 20rem;'"
                :class="`mb-2 `+classCard"
        >
            <b-card-text>
                {{bodyText}}
            </b-card-text>

            <b-button
                    v-if="btnTitle"
                    @click="() => onPress()"
                    :variant="btnType ? btnType : 'primary'">{{btnTitle}}</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "ItemCard",
        props: {
            title: null,
            src: null,
            alt: null,
            bodyText: null,
            onPress: null,
            style: null,
            btnTitle: null,
            btnType: null,
            classCard: null,
        }
    }
</script>

<style scoped>

</style>