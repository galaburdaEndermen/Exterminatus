import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    noConnectionReuse: false,
    // vus: 20,
    vus: 2,
    duration: '100000000s'
}
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


export default function () {
    let list = [
        'http://kremlin.ru/?fbclid=IwAR0CqKgsqwB3FZYA_ozYcv2KaS_6lWwhRJwdfFyVJjGiRzAYVmpZP05d3wc',
        `http://kremlin.ru`,
        'http://www.scrf.gov.ru',
        'https://ach.gov.ru',
        'https://epp.genproc.gov.ru',
        'https://www.gosuslugi.ru',
        'https://www.gosuslugi.ru',
        'https://www.sberbank.ru',
        'https://www.vtb.ru/',
        'https://www.gazprombank.ru/',
        'https://www.gosuslugi.ru/',
        'https://www.mos.ru/uslugi/',
        'http://government.ru/',
        'https://www.nalog.gov.ru/',
        'https://customs.gov.ru/',
        'https://pfr.gov.ru/',
        'https://rkn.gov.ru/',
        'https://mil.ru'
    ];


    const params = {
        headers: { 'Cache-Control': 'no-cache' },
    };

    let ip = http.get("http://jsonip.com/", params);
    console.log(ip.body);


    list.forEach(l => {
        let res = http.get(l, params);
        console.log(res.status + res.url);
        let res2 = http.get(l + `/${makeid(5)}=${makeid(5)}`, params);
        console.log(res2.status + res2.url);

        // let res3 = http.post(l, params);
        // console.log(res.status + res.url);
        // let res2 = http.post(l + `/${makeid(5)}=${makeid(5)}`, params);
        // console.log(res.status + res.url);
    });
}