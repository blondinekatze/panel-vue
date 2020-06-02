<template>
    <div class="c-filter">
        <div class="c-filter__list">
            <div class="c-filter-item">
                <div class="c-filter-item__lbl">Диагональ</div>
                <div class="c-filter-range">
                    <el-slider
                        v-model="filter.size"
                        range
                        :min="minSize"
                        :max="maxSize"
                        :show-tooltip="false"
                        @change="handleSizeSliderChange"
                    >
                    </el-slider>
                    <el-input
                        :value="formattedValue(filter.size)"
                        readonly
                    ></el-input>
                </div>
            </div>
            <div class="c-filter-item">
                <div class="c-filter-item__lbl">Стоимость</div>

                <div class="c-filter-range">
                    <el-slider
                        v-model="filter.price"
                        range
                        :min="minPrice"
                        :max="maxPrice"
                        :show-tooltip="false"
                        :step=1000
                        @change="handlePriceSliderChange"
                    >
                    </el-slider>
                    <el-input
                        :value="formattedValue(filter.price)"
                        readonly
                    ></el-input>
                </div>
            </div>
            <div class="c-filter-item btn">
                <el-button
                    @click="handleResetButtonClick"
                >
                    Сбросить
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import AccountingMixin from "@/mixins/accounting";

    import {mapState, mapGetters} from "vuex";


    export default {
        name: "CatalogFilter",

        mixins: [
            AccountingMixin
        ],

        watch: {
            filter: {
                handler() {
                    this.$store.commit("catalog/SET_FILTER", this.filter);
                },
                deep: true
            }
        },

        created() {
            this.$store.dispatch('catalog/RESET_FILTER');
        },

        computed: {
            ...mapState('catalog', [
                'filter'
            ]),

            ...mapGetters('catalog', [
                'minPrice',
                'maxPrice',
                'minSize',
                'maxSize'
            ]),
        },

        methods: {
            handleSizeSliderChange(value) {
                this.$store.commit("catalog/SET_FILTER_SIZE", value);
            },

            handlePriceSliderChange(value) {
                this.$store.commit("catalog/SET_FILTER_PRICE", value);
            },

            handleResetButtonClick() {
                this.$store.dispatch('catalog/RESET_FILTER');
            },

            formattedValue(array) {
                return `от ${this.fluentFormatNumber(array[0])} до ${this.fluentFormatNumber(array[1])}`;
            }
        }
    }
</script>