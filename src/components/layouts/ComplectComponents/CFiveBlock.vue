<template>
    <div class="content">
        <div class="content-items">
            <div class="content-item block">
                <div>
                    <h1>Стирка и уход</h1>
                    <div class="t814__line " style="background-color: #d4b6b6;opacity:0.60;"></div>
                    <p>Благодаря качественным материалам, все наши бортики легко стираются, не линяют, не теряют своей
                        формы и цвет.</p>
                    <button>Читать подробнее</button>
                </div>
            </div>
            <div class="content-item images"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CFiveBlock"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            display: grid;
            position: relative;

            justify-content: center;
            align-items: center;
            padding-bottom: 10%;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 5fr 7fr;
            text-align: left;
        }

        .images {
            position: relative;
            top: -40px;
            width: 660px;
            height: 500px;
            background-size: auto;
            background-position: center;
            background-image: url("https://thumb.tildacdn.com/tild3438-3635-4030-b539-616439333739/-/cover/660x500/center/center/-/format/webp/best-baby-laundry-de.jpg");
            z-index: 1;
        }

        .block {
            position: relative;
            background-color: rgb(239, 239, 239);
            height: 500px;
            left: 150px;
            z-index: 2;
        }

        .content-item > div {
            padding: 60px;
        }

        .content-item > div > h1 {
            font-size: 42px;
            line-height: 1.23;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            padding-bottom: 15px;
        }

        .content-item > div > .t814__line {
            max-width: 50px;
            width: 100%;
            height: 3px;
            background-color: #666;
            display: block;
        }

        .content-item > div > p {
            font-size: 20px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        .content-item > div > button {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 100;
            letter-spacing: 0.5px;
            border-width: 2px;
            border-radius: 30px;
            background-color: #dba2a2;
            background-position: center center;
            border-color: #d4b6b6;
            border-style: none;
            padding-left: 50px;
            padding-right: 50px;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
            padding-top: 15px;
            padding-bottom: 15px;
        }

    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;
            position: relative;

            justify-content: center;
            align-items: center;
            padding-bottom: 10%;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 5fr 7fr;
            text-align: left;
        }

        .images {
            position: relative;
            top: -40px;
            width: 540px;
            height: 410px;
            background-size: auto;
            background-position: center;
            background-image: url("https://thumb.tildacdn.com/tild3438-3635-4030-b539-616439333739/-/cover/660x500/center/center/-/format/webp/best-baby-laundry-de.jpg");
            z-index: 1;
        }

        .block {
            position: relative;
            background-color: rgb(239, 239, 239);
            left: 150px;
            z-index: 2;
        }

        .content-item > div {
            padding: 60px;
        }

        .content-item > div > h1 {
            font-size: 42px;
            line-height: 1.23;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            padding-bottom: 15px;
        }

        .content-item > div > .t814__line {
            max-width: 50px;
            width: 100%;
            height: 3px;
            background-color: #666;
            display: block;
        }

        .content-item > div > p {
            font-size: 20px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        .content-item > div > button {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 100;
            letter-spacing: 0.5px;
            border-width: 2px;
            border-radius: 30px;
            background-color: #dba2a2;
            background-position: center center;
            border-color: #d4b6b6;
            border-style: none;
            padding-left: 50px;
            padding-right: 50px;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
            padding-top: 15px;
            padding-bottom: 15px;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;
            position: relative;

            justify-content: center;
            align-items: center;
            padding-bottom: 10%;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr;
            text-align: left;
        }

        .images {
            position: relative;
            height: 410px;
            background-size: auto;
            background-position: center;
            background-image: url("https://thumb.tildacdn.com/tild3438-3635-4030-b539-616439333739/-/cover/660x500/center/center/-/format/webp/best-baby-laundry-de.jpg");
            z-index: 1;
        }

        .block {
            position: relative;
            background-color: rgb(239, 239, 239);
            z-index: 2;
        }

        .content-item > div {
            padding: 60px;
        }

        .content-item > div > h1 {
            font-size: 42px;
            line-height: 1.23;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            padding-bottom: 15px;
        }

        .content-item > div > .t814__line {
            max-width: 50px;
            width: 100%;
            height: 3px;
            background-color: #666;
            display: block;
        }

        .content-item > div > p {
            font-size: 20px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        .content-item > div > button {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 100;
            letter-spacing: 0.5px;
            border-width: 2px;
            border-radius: 30px;
            background-color: #dba2a2;
            background-position: center center;
            border-color: #d4b6b6;
            border-style: none;
            padding-left: 50px;
            padding-right: 50px;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
            padding-top: 15px;
            padding-bottom: 15px;
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;
            position: relative;

            justify-content: center;
            align-items: center;
            padding-bottom: 10%;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr;
            text-align: left;
        }

        .images {
            position: relative;
            height: 410px;
            background-size: auto;
            background-position: center;
            background-image: url("https://thumb.tildacdn.com/tild3438-3635-4030-b539-616439333739/-/cover/660x500/center/center/-/format/webp/best-baby-laundry-de.jpg");
            z-index: 1;
        }

        .block {
            position: relative;
            background-color: rgb(239, 239, 239);
            z-index: 2;
        }

        .content-item > div {
            padding: 60px;
        }

        .content-item > div > h1 {
            font-size: 42px;
            line-height: 1.23;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            padding-bottom: 15px;
        }

        .content-item > div > .t814__line {
            max-width: 50px;
            width: 100%;
            height: 3px;
            background-color: #666;
            display: block;
        }

        .content-item > div > p {
            font-size: 20px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        .content-item > div > button {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 100;
            letter-spacing: 0.5px;
            border-width: 2px;
            border-radius: 30px;
            background-color: #dba2a2;
            background-position: center center;
            border-color: #d4b6b6;
            border-style: none;
            padding-left: 50px;
            padding-right: 50px;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
            padding-top: 15px;
            padding-bottom: 15px;
        }

    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;
            position: relative;

            justify-content: center;
            align-items: center;
            padding-bottom: 10%;
        }

        .content-items {
            display: grid;

            justify-content: center;
            align-items: start;

            grid-template-columns: 1fr;
            text-align: left;
        }

        .images {
            position: relative;
            height: 410px;
            background-size: auto;
            background-position: center;
            background-image: url("https://thumb.tildacdn.com/tild3438-3635-4030-b539-616439333739/-/cover/660x500/center/center/-/format/webp/best-baby-laundry-de.jpg");
            z-index: 1;
        }

        .block {
            position: relative;
            background-color: rgb(239, 239, 239);
            z-index: 2;
        }

        .content-item > div {
            padding: 60px;
        }

        .content-item > div > h1 {
            font-size: 42px;
            line-height: 1.23;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
            padding-bottom: 15px;
        }

        .content-item > div > .t814__line {
            max-width: 50px;
            width: 100%;
            height: 3px;
            background-color: #666;
            display: block;
        }

        .content-item > div > p {
            font-size: 20px;
            line-height: 1.55;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
            padding-top: 30px;
            padding-bottom: 30px;
        }

        .content-item > div > button {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 100;
            letter-spacing: 0.5px;
            border-width: 2px;
            border-radius: 30px;
            background-color: #dba2a2;
            background-position: center center;
            border-color: #d4b6b6;
            border-style: none;
            padding-left: 50px;
            padding-right: 50px;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
            padding-top: 15px;
            padding-bottom: 15px;
        }

    }
</style>
