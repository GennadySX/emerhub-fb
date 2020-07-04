<template>
    <div class="d-flex  justify-content-start flex-wrap">
        <ItemCard
        :src='"https://surlybikes.com/uploads/bikes/_medium_image/Krampus-suspension-fork_BK2116-2000x1333.jpg"'
        btn-type="warning"
        body-text="blah blah blah"
        btn-title="Check status"
        />
    </div>
</template>

<script>
    import ItemCard from "../components/ItemCard";
    export default {
        name: "Home",
        components: {
            ItemCard
        }
    }
</script>

<style scoped>

</style>