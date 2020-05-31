<template>
    <div class="content">
        <h1>Безопасность превыше всего</h1>
        <p>Мы учли важные моменты в наших бортиках</p>
        <div class="content-items">
            <div class="content-item">
                <div class="image-container">
                    <img src="https://thumb.tildacdn.com/tild6364-3135-4631-b264-643866616666/-/resize/100x/-/format/webp/icons8--80.png"
                         alt="">
                </div>
                <h1>Длина завязок - 30 см</h1>
                <p>По требованиям безопасности длина завязок не должна превышать 30 см. Это исключает риск того, что
                    малыш может запутаться в них.</p>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://thumb.tildacdn.com/tild6364-3135-4631-b264-643866616666/-/resize/100x/-/format/webp/icons8--80.png"
                         alt="">
                </div>
                <h1>Длина завязок - 30 см</h1>
                <p>По требованиям безопасности длина завязок не должна превышать 30 см. Это исключает риск того, что
                    малыш может запутаться в них.</p>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://thumb.tildacdn.com/tild6364-3135-4631-b264-643866616666/-/resize/100x/-/format/webp/icons8--80.png"
                         alt="">
                </div>
                <h1>Длина завязок - 30 см</h1>
                <p>По требованиям безопасности длина завязок не должна превышать 30 см. Это исключает риск того, что
                    малыш может запутаться в них.</p>
            </div>
            <div class="content-item">
                <div class="image-container">
                    <img src="https://thumb.tildacdn.com/tild6364-3135-4631-b264-643866616666/-/resize/100x/-/format/webp/icons8--80.png"
                         alt="">
                </div>
                <h1>Длина завязок - 30 см</h1>
                <p>По требованиям безопасности длина завязок не должна превышать 30 см. Это исключает риск того, что
                    малыш может запутаться в них.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CThirdBlock"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 40px;
        }

        .content > p {
            text-align: center;
            font-size: 24px;
            color: #6b6b6b;
            padding-bottom: 80px;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
        }
        .image-container {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item {
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 25px;
            margin-top: 18px;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .content-item > h1 {
            padding: 20px;
        }
        .content-item > p {
            font-family: 'Didact Gothic',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 40px;
        }

        .content > p {
            text-align: center;
            font-size: 24px;
            color: #6b6b6b;
            padding-bottom: 80px;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr ;
            grid-gap: 20px;
        }
        .image-container {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item {
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 25px;
            margin-top: 18px;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .content-item > h1 {
            padding: 20px;
        }
        .content-item > p {
            font-family: 'Didact Gothic',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 40px;
        }

        .content > p {
            text-align: center;
            font-size: 24px;
            color: #6b6b6b;
            padding-bottom: 80px;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
        }
        .image-container {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item {
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 25px;
            margin-top: 18px;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .content-item > h1 {
            padding: 20px;
        }
        .content-item > p {
            font-family: 'Didact Gothic',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 40px;
        }

        .content > p {
            text-align: center;
            font-size: 24px;
            color: #6b6b6b;
            padding-bottom: 80px;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
        .image-container {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item {
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 25px;
            margin-top: 18px;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .content-item > h1 {
            padding: 20px;
        }
        .content-item > p {
            font-family: 'Didact Gothic',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            text-align: center;
            font-size: 42px;
            color: #6b6b6b;
            padding-bottom: 40px;
        }

        .content > p {
            text-align: center;
            font-size: 24px;
            color: #6b6b6b;
            padding-bottom: 80px;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
        .image-container {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .content-item {
            text-align: center;
            font-size: 14px;
            line-height: 30px;
            margin-bottom: 25px;
            margin-top: 18px;
            font-family: 'IskraCYR',Arial,sans-serif;
            font-weight: 600;
            color: #4a4949;
        }
        .content-item > h1 {
            padding: 20px;
        }
        .content-item > p {
            font-family: 'Didact Gothic',Arial,sans-serif;
            font-weight: 300;
            color: #4a4949;
        }
    }
</style>
