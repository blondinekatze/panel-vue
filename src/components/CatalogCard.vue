<template>

    <router-link
        class="c-catalog-card"
        :id="id"
        :to="linkOpen">
        <div class="c-catalog-card__img-wrap">
            <slot name="images"></slot>
        </div>
        <div class="c-catalog-card__content">
            <div class="c-catalog-card__name">
                {{ name }}
            </div>
            <div class="c-catalog-card__price">
                от {{ fluentFormatNumber(price) }} ₽
            </div>
         <!--   <div
                class="c-catalog-card__properties"
            >
                <slot name="properties"></slot>
            </div>-->
        </div>
        <div class="c-catalog-card__bottom">
            <el-button>Подробнее</el-button>
        </div>
    </router-link>

</template>

<script>
    import AccountingMixin from "@/mixins/accounting";

    export default {
        name: "CatalogCard",

        mixins: [
            AccountingMixin
        ],

        props: {
            name: {
                type: [String, Number]
            },
            price: {
                type: [String, Number]
            },
            id: {
                type: Number
            }
        },

        computed: {
            linkOpen() {
                return `/catalog/${this.id}`;
            }
        }

    }
</script>

<style scoped>

</style>