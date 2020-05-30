<template>
    <div id="app">
        <menu-block class="menu-block" id="menu" style="display: none;"></menu-block>
        <header-layout class="header-layout"></header-layout>
        <router-view></router-view>
        <footer-layout class="footer-layout"></footer-layout>
    </div>
</template>

<script>
    import HeaderLayout from "@/components/HeaderLayout";
    import FooterLayout from "@/components/FooterLayout";
    import MenuBlock from "@/components/menublock";


    export default {
        name: 'App',
        components: {
            MenuBlock,
            FooterLayout,
            HeaderLayout
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }


    @media screen and (min-width: 1200px) {
        .header-layout {
            position: fixed;
            top: 0;
            width: 100%;
            height: 80px;
            z-index: 2;
        }

        .frame {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-image: url("./assets/img/Frame.png");
            z-index: -1;
        }

        .first-block {
            z-index: 2;
        }

        .second-block {
            z-index: 2;
        }

        .third-block {
            z-index: 2;
        }

        .menu-block {
            display: none !important;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: scroll;
            min-width: 240px;
            max-width: 260px;
            height: 100vh;
            background-color: #f0f0f0;
            z-index: 9999;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .header-layout {
            position: fixed;
            top: 0;
            width: 100%;
            height: 80px;
            z-index: 2;
        }

        .frame {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-image: url("./assets/img/Frame.png");
            z-index: -1;
        }

        .first-block {
            z-index: 2;
        }

        .second-block {
            z-index: 2;
        }

        .third-block {
            z-index: 2;
        }
        .menu-block {
            display: none !important;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: scroll;
            min-width: 240px;
            max-width: 260px;
            height: 100vh;
            background-color: #f0f0f0;
            z-index: 9999;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .header-layout {
            position: relative;
            top: 0;
            width: 100%;
            height: 80px;
            z-index: 2;
        }

        .frame {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-image: url("./assets/img/Frame.png");
            z-index: -1;
        }

        .first-block {
            z-index: 2;
        }

        .second-block {
            z-index: 2;
        }

        .third-block {
            z-index: 2;
        }
        .menu-block {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: scroll;
            min-width: 240px;
            max-width: 260px;
            height: 100vh;
            background-color: #f0f0f0;
            z-index: 9999;
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .header-layout {
            position: relative;
            top: 0;
            width: 100%;
            height: 80px;
            z-index: 2;
        }

        .frame {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-image: url("./assets/img/Frame.png");
            z-index: -1;
        }

        .first-block {
            z-index: 2;
        }

        .second-block {
            z-index: 2;
        }

        .third-block {
            z-index: 2;
        }
        .menu-block {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: scroll;
            min-width: 240px;
            max-width: 260px;
            height: 100vh;
            background-color: #f0f0f0;
            z-index: 9999;
        }

    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .header-layout {
            position: relative;
            top: 0;
            width: 100%;
            height: 80px;
            z-index: 2;
        }

        .frame {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-image: url("./assets/img/Frame.png");
            z-index: -1;
        }

        .first-block {
            z-index: 2;
        }

        .second-block {
            z-index: 2;
        }

        .third-block {
            z-index: 2;
        }
        .menu-block {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: scroll;
            min-width: 240px;
            max-width: 260px;
            height: 100vh;
            background-color: #f0f0f0;
            z-index: 9999;
        }

    }
</style>
