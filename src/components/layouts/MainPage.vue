<template>
    <div>
        <section class="frame"></section>
        <first-block class="first-block"></first-block>
        <second-block class="second-block"></second-block>
        <third-block class="third-block"></third-block>
        <fourth-block class="fourth-block"></fourth-block>
        <five-block class="five-block"></five-block>
        <seven-block class="seven-block"></seven-block>
        <six-block class="six-block"></six-block>
        <eighth-block class="eighth-block"></eighth-block>
        <ninth-block class="ninth-block"></ninth-block>
        <ten-block class="ten-block"></ten-block>
    </div>
</template>

<script>
    import FirstBlock from "./components/FirstBlock";
    import SecondBlock from "./components/SecondBlock";
    import ThirdBlock from "./components/ThirdBlock";
    import FourthBlock from "./components/FourthBlock";
    import FiveBlock from "./components/FiveBlock";
    import SixBlock from "./components/SixBlock";
    import SevenBlock from "./components/SevenBlock";
    import EighthBlock from "./components/EighthBlock";
    import NinthBlock from "./components/NinthBlock";
    import TenBlock from "./components/TenBlock";

    export default {
        name: 'MainPage',
        components: {
            TenBlock,
            NinthBlock,
            EighthBlock,
            SevenBlock,
            SixBlock,
            FiveBlock,
            FourthBlock,
            ThirdBlock,
            SecondBlock,
            FirstBlock,
        }
    }
</script>

<style scoped>
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
            background-image: url("../../assets/img/Frame.png");
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
            background-image: url("../../assets/img/Frame.png");
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
            background-image: url("../../assets/img/Frame.png");
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
            background-image: url("../../assets/img/Frame.png");
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
            background-image: url("../../assets/img/Frame.png");
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
