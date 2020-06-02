<template>
    <div class="c-properties-item">
        <div class="c-properties-item__inner">
            {{ name }}
        </div>
        <div class="c-properties-item__inner">
            {{ value }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "CatalogCardProperties",
        props: {
            name: {
                type: [String, Number ]
            },
            value: {
                type: [String, Number ]
            }
        }
    }
</script>

<style scoped>

</style>