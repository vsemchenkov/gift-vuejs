<template>
    <div class="content">
        <h1>Основные преимущества наших мобилей</h1>
        <div class="content-items">
            <div class="content-item">
                <div class="image-container">
                    <img src="https://static.tildacdn.com/lib/tildaicon/30396164-6237-4437-b038-353631313235/3st_recycling.svg"
                         alt="">
                </div>
                <div class="text-container">
                    <h5>Безопасный и гипоаллергенный</h5>
                    <p>Фетр и холллофайбер, проверенные временем, гипоаллергенные материалы, из которых создаются наши мобили</p>
                </div>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://static.tildacdn.com/lib/tildaicon/39313236-6133-4961-a433-373062313439/Tilda_Icons_42_restaurant_chillout.svg"
                         alt="">
                </div>
                <div class="text-container">
                    <h5>Безопасный и гипоаллергенный</h5>
                    <p>Фетр и холллофайбер, проверенные временем, гипоаллергенные материалы, из которых создаются наши мобили</p>
                </div>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://static.tildacdn.com/lib/tildaicon/36636134-6565-4333-a533-636239336239/kideducate_kid.svg"
                         alt="">
                </div>
                <div class="text-container">
                    <h5>Безопасный и гипоаллергенный</h5>
                    <p>Фетр и холллофайбер, проверенные временем, гипоаллергенные материалы, из которых создаются наши мобили</p>
                </div>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://static.tildacdn.com/lib/tildaicon/30363330-3833-4666-a231-396261396635/Tilda_Icons_38_Cleaning_company_iron.svg"
                         alt="">
                </div>
                <div class="text-container">
                    <h5>Безопасный и гипоаллергенный</h5>
                    <p>Фетр и холллофайбер, проверенные временем, гипоаллергенные материалы, из которых создаются наши мобили</p>
                </div>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://static.tildacdn.com/lib/tildaicon/62616233-6639-4639-b535-613636396333/34Vet_hamster.svg"
                         alt="">
                </div>
                <div class="text-container">
                    <h5>Безопасный и гипоаллергенный</h5>
                    <p>Фетр и холллофайбер, проверенные временем, гипоаллергенные материалы, из которых создаются наши мобили</p>
                </div>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://static.tildacdn.com/lib/tildaicon/65336137-3332-4534-b361-353238373539/24br_kid.svg"
                         alt="">
                </div>
                <div class="text-container">
                    <h5>Безопасный и гипоаллергенный</h5>
                    <p>Фетр и холллофайбер, проверенные временем, гипоаллергенные материалы, из которых создаются наши мобили</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CatalogPage"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-top: 150px;
            padding-bottom: 150px;
        }

        .content > h1 {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-bottom: 80px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .content > .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-gap: 60px;
        }
        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;

            width: 460px;
            grid-template-columns: 3fr 12fr;
        }
        .content-item > .image-container {
            position: relative;
            bottom: 20px;
            padding: 20px;
        }
        .text-container {
            padding-left: 5px;
        }
        .text-container > h5 {
            font-size: 22px;
            line-height: 1.35;
            padding-top: 10px;
            padding-bottom: 10px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .text-container > p {
            font-size: 16px;
            line-height: 1.55;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 100;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-top: 150px;
            padding-bottom: 150px;
        }

        .content > h1 {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-bottom: 80px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .content > .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-gap: 60px;
        }
        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;

            width: 460px;
            grid-template-columns: 3fr 12fr;
        }
        .content-item > .image-container {
            position: relative;
            bottom: 20px;
            padding: 20px;
        }
        .text-container {
            padding-left: 5px;
        }
        .text-container > h5 {
            font-size: 20px;
            line-height: 1.35;
            padding-top: 10px;
            padding-bottom: 10px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .text-container > p {
            font-size: 14px;
            line-height: 1.55;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 100;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-top: 150px;
            padding-bottom: 150px;
        }

        .content > h1 {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-bottom: 80px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;

            text-align: center;
        }

        .content > .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 60px;
        }
        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;

            width: 600px;
            grid-template-columns: 3fr 12fr;
        }
        .content-item > .image-container {
            position: relative;
            bottom: 20px;
            padding: 20px;
        }
        .text-container {
            padding-left: 5px;
        }
        .text-container > h5 {
            font-size: 20px;
            line-height: 1.35;
            padding-top: 10px;
            padding-bottom: 10px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .text-container > p {
            font-size: 14px;
            line-height: 1.55;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 100;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-top: 150px;
            padding-bottom: 150px;
        }

        .content > h1 {
            display: grid;

            justify-content: center;
            align-items: center;
            padding-bottom: 80px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
            text-align: center;
        }

        .content > .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 60px;
        }
        .content-item {
            display: grid;

            justify-content: center;
            align-items: center;

            width: 100%;
            grid-template-columns: 3fr 12fr;
        }
        .content-item > .image-container {
            position: relative;
            bottom: 20px;
            padding: 20px;
        }
        .text-container {
            padding-left: 5px;
        }
        .text-container > h5 {
            font-size: 20px;
            line-height: 1.35;
            padding-top: 10px;
            padding-bottom: 10px;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .text-container > p {
            font-size: 14px;
            line-height: 1.55;

            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 100;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
    }
</style>
