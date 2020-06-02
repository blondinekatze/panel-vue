<template>
    <div
        class="c-catalog"
        v-loading="isLoading"
    >
        <div class="c-title">Сенсорные панели</div>

        <CatalogFilter/>

        <transition-group
            name="fade"
            class="c-catalog__list"
            tag="div"
        >
            <CatalogCard
                v-if="filteredItems"
                v-for="(catalogItem, index) in filteredItems"
                :key="index"
                :name="catalogItem.name"
                :price="getMinPriceCard(catalogItem.offers)"
                :id="catalogItem.id"
            >
                <template
                    v-slot:images
                >
                    <img :src="catalogItem.url" class="c-catalog-card__img">
                </template>
                <template
                    v-slot:properties
                    v-if="catalogItem.properties"
                >
                    <CatalogProperties
                        v-for="(property, index) in catalogItem.properties"
                        :key="index"
                        :name="property.name"
                        :value="property.value"
                    >
                    </CatalogProperties>
                </template>
            </CatalogCard>
        </transition-group>

    </div>
</template>

<script>
    import store from "@/store";
    import CatalogFilter from "@/components/CatalogFilter";
    import CatalogCard from "@/components/CatalogCard";
    import CatalogProperties from "@/components/CatalogProperties";

    import {mapState, mapGetters} from "vuex";

    export default {
        name: "Catalog",

        async beforeRouteEnter(to, from, next) {
            await store.dispatch('catalog/getProductList');
            next();
        },

        components: {
            CatalogFilter,
            CatalogCard,
            CatalogProperties
        },

        computed: {
            ...mapGetters('catalog',[
                'filteredItems'
            ]),
            ...mapState('catalog',[
                'isLoading'
            ]),
        },
        methods: {
            getMinPriceCard(offers) {
                return Math.min(...offers.map(offer => offer.price));
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>