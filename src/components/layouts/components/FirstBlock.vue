<template>
    <div class="frame-for-firstblock">
        <div class="frame-for-content">
            <div class="wrap-slider-firstblock">
                <div class="item-firstblock">
                </div>
                <div class="item-firstblock it1">
                    <h1>
                        Сошьем качественный детский текстиль за 2 дня по вашим размерам, подберем расцветку под интерьер
                        комнаты
                    </h1>
                </div>
                <div class="item-firstblock it2">
                    <div class="list" field="tn_text_1469206839338">
                        <strong>➜ Собственное производство в Москве<br>
                            ➜ Более 100 расцветок ткани на Ваш выбор<br>
                            ➜ Для любого типа кроваток, даже не стандартных
                        </strong>
                    </div>
                </div>
                <div class="item-firstblock it3">
                    <button class="btn-firstblock">Кнопка</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FirstBlock"
    }
</script>

<style scoped>

    * {
        font-size: 20px;
        font-weight: 500;
        font-family: 'IskraCYR';
    }

    @media screen and (min-width: 1200px) {
        .frame-for-firstblock {
            min-height: 800px;
            height: 90vh;
            background-position: center top;
            background-attachment: scroll;
            background-image: url(https://static.tildacdn.com/tild3034-3335-4438-b034-646436303731/0703-2019-0831199109.jpeg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .frame-for-content {
            min-height: 800px;
            height: 90vh;
            background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.3)));
            background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

            display: grid;

            justify-content: center;
            align-items: center;
        }

        .wrap-slider-firstblock {
            display: grid;
            position: relative;

            grid-template-rows: 0.7fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;

            height: 690px;
        }

        .item-firstblock {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .it1 {
            max-width: 900px;
            min-width: 100px;
        }


        .list {
            max-width: 620px;
            min-width: 100px;
            padding-left: 20px;
            padding-right: 20px;
            color: #ffffff;
            font-size: 22px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 300;
            background-position: center center;
            border-color: transparent;
            border-style: solid;

        }

        h1 {
            color: #ffffff;
            font-size: 34px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 700;
            letter-spacing: 0.5px;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

        .btn-firstblock {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
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
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .frame-for-firstblock {
            min-height: 800px;
            height: 90vh;
            background-position: center top;
            background-attachment: scroll;
            background-image: url(https://static.tildacdn.com/tild3034-3335-4438-b034-646436303731/0703-2019-0831199109.jpeg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .frame-for-content {
            min-height: 800px;
            height: 90vh;
            background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.3)));
            background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

            display: grid;

            justify-content: center;
            align-items: center;
        }

        .wrap-slider-firstblock {
            display: grid;
            position: relative;

            grid-template-rows: 0.7fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;

            height: 690px;
        }

        .item-firstblock {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .it1 {
            width: 900px;
        }


        .list {
            max-width: 620px;
            min-width: 100px;
            padding-left: 20px;
            padding-right: 20px;
            color: #ffffff;
            font-size: 16px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 300;
            background-position: center center;
            border-color: transparent;
            border-style: solid;

        }

        h1 {
            color: #ffffff;
            font-size: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 700;
            letter-spacing: 0.5px;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

        .btn-firstblock {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
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
        }
    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .frame-for-firstblock {
            min-height: 800px;
            height: 90vh;
            background-position: center top;
            background-attachment: scroll;
            background-image: url(https://static.tildacdn.com/tild3034-3335-4438-b034-646436303731/0703-2019-0831199109.jpeg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .frame-for-content {
            min-height: 800px;
            height: 90vh;
            background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.3)));
            background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

            display: grid;

            justify-content: center;
            align-items: center;
        }

        .wrap-slider-firstblock {
            display: grid;
            position: relative;

            grid-template-rows: 0.7fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;

            height: 690px;
        }

        .item-firstblock {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .it1 {
            max-width: 900px;
            min-width: 100px;
            padding-left: 20px;
            padding-right: 20px;
        }


        .list {
            max-width: 620px;
            min-width: 100px;
            color: #ffffff;
            font-size: 16px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 300;
            background-position: center center;
            border-color: transparent;
            border-style: solid;

        }

        h1 {
            color: #ffffff;
            font-size: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 700;
            letter-spacing: 0.5px;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

        .btn-firstblock {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
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
        }
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .frame-for-firstblock {
            min-height: 800px;
            height: 90vh;
            background-position: center top;
            background-attachment: scroll;
            background-image: url(https://static.tildacdn.com/tild3034-3335-4438-b034-646436303731/0703-2019-0831199109.jpeg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .frame-for-content {
            min-height: 800px;
            height: 90vh;
            background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.3)));
            background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

            display: grid;

            justify-content: center;
            align-items: center;
        }

        .wrap-slider-firstblock {
            display: grid;
            position: relative;

            grid-template-rows: 0.7fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;

            height: 690px;
        }

        .item-firstblock {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .it1 {
            max-width: 900px;
            min-width: 100px;
            padding-left: 20px;
            padding-right: 20px;
        }


        .list {
            max-width: 620px;
            min-width: 100px;
            color: #ffffff;
            font-size: 16px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 300;
            background-position: center center;
            border-color: transparent;
            border-style: solid;

        }

        h1 {
            color: #ffffff;
            font-size: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 700;
            letter-spacing: 0.5px;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

        .btn-firstblock {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
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
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .frame-for-firstblock {
            min-height: 800px;
            height: 90vh;
            background-position: center top;
            background-attachment: scroll;
            background-image: url(https://static.tildacdn.com/tild3034-3335-4438-b034-646436303731/0703-2019-0831199109.jpeg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .frame-for-content {
            min-height: 800px;
            height: 90vh;
            background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.3)));
            background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

            display: grid;

            justify-content: center;
            align-items: center;
        }

        .wrap-slider-firstblock {
            display: grid;
            position: relative;

            grid-template-rows: 0.7fr 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;

            height: 690px;
        }

        .item-firstblock {
            display: grid;
            justify-content: center;
            align-items: center;
        }


        .it1 {
            max-width: 900px;
            min-width: 100px;
            padding-left: 20px;
            padding-right: 20px;
        }


        .list {
            max-width: 620px;
            min-width: 100px;
            color: #ffffff;
            font-size: 16px;
            font-family: 'IskraCYR',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 300;
            background-position: center center;
            border-color: transparent;
            border-style: solid;

        }

        h1 {
            color: #ffffff;
            font-size: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.3;
            font-weight: 700;
            letter-spacing: 0.5px;
            background-position: center center;
            border-color: transparent;
            border-style: solid;
        }

        .btn-firstblock {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR',Arial,sans-serif;
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
        }
    }

</style>
