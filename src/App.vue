<template>
    <div id="app">
        <div class="o-content">
            <MenuMain>
                <MenuMainItem
                    v-for="(menuItem, index) in menuItems"
                    :key="index"
                    :text="menuItem.text"
                    :url="menuItem.url"
                    :active="index === menuActiveIndex"
                >
                    <template
                        v-if="menuItem.icon"
                        v-slot:icon
                    >
                        <IconTemplate
                            :name="menuItem.icon.name"
                            :width="menuItem.icon.width"
                            :height="menuItem.icon.height"
                        />
                    </template>
                </MenuMainItem>
            </MenuMain>
            <div class="o-content__wrap">
                <router-view/>
            </div>
        </div>
    </div>
</template>


<script>
    import MenuMain from "@/components/MenuMain";
    import MenuMainItem from "@/components/MenuMainItem";

    export default {
        components: {
            MenuMainItem,
            MenuMain
        },

        data() {
            return {
                menuActiveIndex: null,
                menuItems: [
                    {
                        text: 'Каталог',
                        url: '/',
                        icon: {
                            name: 'dashboard',
                            width: 35,
                            height: 30
                        }
                    },
                    {
                        text: 'О компании',
                        url: '/about',
                        icon: {
                            name: 'info',
                            width: 33,
                            height: 33
                        }
                    },
                    {
                        text: 'Видео',
                        url: '/video',
                        icon: {
                            name: 'video',
                            width: 36,
                            height: 25
                        }
                    },
                    {
                        text: 'Фото',
                        url: '/photo',
                        icon: {
                            name: 'photos',
                            width: 40,
                            height: 34
                        }
                    }
                ]
            }
        },
        created() {
        }
    }
</script>