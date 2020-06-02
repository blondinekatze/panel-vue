<template>
    <div
        class="c-menu-item"
        :class="{'is-active': active}"
    >
        <router-link
            v-if="!active"
            :to="url"
            class="c-menu-item__link"
        >
            <span class="c-menu-item__icon">
                <slot name="icon"></slot>
            </span>
            {{ text }}
        </router-link>
<!--        <span
            v-else
            class="c-menu-item__link"
        >
            <span class="c-menu-item__icon">
                <slot name="icon"></slot>
            </span>
            {{ text }}
        </span>-->

    </div>
</template>

<script>
    export default {
        name: "MenuItem",

        props: {
            text: {
                type: [String, Number]
            },
            url: {
                type: String
            },
            active: {
                type: Boolean
            }
        }
    }
</script>