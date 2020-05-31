<template>
    <div class="contant">
        <c-first-block class="c-first-block"></c-first-block>
        <c-second-block class="c-second-block"></c-second-block>
        <c-third-block class="c-third-block"></c-third-block>
        <c-four-block class="c-four-block"></c-four-block>
        <c-five-block class="c-five-block"></c-five-block>
        <c-six-block class="c-six-block"></c-six-block>
        <c-seven-block class="c-seven-block"></c-seven-block>
        <ten-block class="ten-block"></ten-block>
    </div>
</template>

<script>
    import CFirstBlock from "./ComplectComponents/CFirstBlock";
    import TenBlock from "./components/TenBlock";
    import CSecondBlock from "./ComplectComponents/CSecondBlock";
    import CThirdBlock from "./ComplectComponents/CThirdBlock";
    import CFourBlock from "./ComplectComponents/CFourBlock";
    import CFiveBlock from "./ComplectComponents/CFiveBlock";
    import CSixBlock from "./ComplectComponents/CSixBlock";
    import CSevenBlock from "./ComplectComponents/CSevenBlock";

    export default {
        name: "ComplectPage",
        components: {CSevenBlock, CSixBlock, CFiveBlock, CFourBlock, CThirdBlock, CSecondBlock, TenBlock, CFirstBlock}
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
