<template>
    <div class="content">
        <m-first-block class="m-first-block"></m-first-block>
        <m-third-block class="m-third-block"></m-third-block>
        <m-four-block class="m-four-block"></m-four-block>
        <m-five-block class="m-five-block"></m-five-block>
        <m-six-block class="m-six-block"></m-six-block>
        <m-second-block class="m-second-block"></m-second-block>
    </div>
</template>

<script>
    import MFirstBlock from "./CatalogComponents/MFirstBlock";
    import MSecondBlock from "./CatalogComponents/MSecondBlock";
    import MThirdBlock from "./CatalogComponents/MThirdBlock";
    import MFourBlock from "./CatalogComponents/MFourBlock";
    import MFiveBlock from "./CatalogComponents/MFiveBlock";
    import MSixBlock from "./CatalogComponents/MSixBlock";

    export default {
        name: "CatalogPage",
        components: {MSixBlock, MFiveBlock, MFourBlock, MThirdBlock, MSecondBlock, MFirstBlock}
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {

    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {

    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
    }
</style>
