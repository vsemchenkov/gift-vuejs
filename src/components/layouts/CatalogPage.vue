<template>
    <div class="content">
        <div class="catalog-items">
            <div class="catalog-item">
                <div class="image-cont">
                    <img src="https://thumb.tildacdn.com/tild6164-3939-4034-b861-316366666538/-/resize/360x/-/format/webp/detskoe_dress_2_2.jpg"
                         alt="">
                </div>
                <h1>Title</h1>
                <div class="button-cont">
                    <button>buy</button>
                </div>
            </div>
        </div>
        <c-first-block></c-first-block>
    </div>
</template>

<script>
    import CFirstBlock from "./CatalogComponents/CFirstBlock";

    export default {
        name: "CatalogPage",
        components: {CFirstBlock}
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .catalog-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: repeat(auto-fit, 1fr);
            grid-gap: 20px;
            padding-top: 150px;
            padding-bottom: 150px;
            padding-left: 40px;
            padding-right: 40px;
        }

        .catalog-item {
            display: grid;

            justify-content: center;
            align-items: center;

            text-align: center;
        }

        .catalog-item > .image-cont > img {
            width: 400px;
            padding: 20px;
        }

        .catalog-item > h1 {
            padding: 0px 0px 20px 0px;
        }

        .catalog-item > .button-cont > button {
            width: 100px;

            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
            letter-spacing: 0.5px;
            border-width: 2px;
            border-radius: 25px;
            background-color: #dba2a2;
            background-position: center center;
            border-color: #d4b6b6;
            border-style: none;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
            padding: 10px;
            cursor: pointer;
            outline: none;
        }
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
