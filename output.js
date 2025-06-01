//Sun Jun 01 2025 05:29:12 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var fakerkf3hge = Object['defineProperty'],
  fakerehu6sb,
  fakertd9mvl,
  fakerzxoq6,
  fakerxxmny,
  faker8prnp6,
  fakerpolyc,
  fakeru75c5q,
  faker3ce6o5,
  fakerml620h;
function faker84feze() {
  return globalThis;
}
function fakerc5h5as() {
  return global;
}
function faker7k6ebc() {
  return window;
}
function fakerx1hw81() {
  return new Function('return this')();
}
function fakererf2ip(fakerkf3hge = [faker84feze, fakerc5h5as, faker7k6ebc, fakerx1hw81], fakernvk8yo, fakerehu6sb = [], fakertd9mvl, fakerzxoq6) {
  fakernvk8yo = fakernvk8yo;
  try {
    fakernvk8yo = Object
    fakerehu6sb.push(''.__proto__.constructor.name)
  } catch (e) {}
  faCnvtE: for (fakertd9mvl = 0; fakertd9mvl < fakerkf3hge.length; fakertd9mvl++) try {
    fakernvk8yo = fakerkf3hge[fakertd9mvl]();
    for (fakerzxoq6 = 0; fakerzxoq6 < fakerehu6sb.length; fakerzxoq6++) if (typeof fakernvk8yo[fakerehu6sb[fakerzxoq6]] === 'undefined') {
      continue faCnvtE;
    }
    return fakernvk8yo;
  } catch (e) {}
  return fakernvk8yo || this;
}
fakerehu6sb = fakererf2ip() || {}
fakertd9mvl = fakerehu6sb.TextDecoder
fakerzxoq6 = fakerehu6sb.Uint8Array
fakerxxmny = fakerehu6sb.Buffer
faker8prnp6 = fakerehu6sb.String || String
fakerpolyc = fakerehu6sb.Array || Array
function faker1ovib(...fakerkf3hge) {
  return fakerkf3hge[fakerkf3hge["length"] - 1];
}
function fakerthxo6m(fakerirhmu, fakerkf3hge) {
  switch (faker3ce6o5) {
    case 39:
      return !fakerirhmu;
    case 20:
      return fakerirhmu / fakerkf3hge;
    case -0x26:
      return fakerirhmu + fakerkf3hge;
    case 48:
      return fakerirhmu * fakerkf3hge;
    case 61:
      return -fakerirhmu;
  }
}
function fakerj8vr6j(fakerirhmu) {
  return faker1ovib(fakerirhmu = faker3ce6o5 + (faker3ce6o5 = fakerirhmu, 0x0), fakerirhmu);
}
faker3ce6o5 = faker3ce6o5;
function fakerjhvl5(fakerkf3hge, fakernvk8yo) {
  return fakerml620h["call"](null, fakerkf3hge, "length", {
    ["value"]: fakernvk8yo,
    ["configurable"]: true
  });
}
fakerml620h = Object["defineProperty"];
const fakerzu9rqg = require('./jdCookie'),
  fakerypclxk = require('./utils/Rebels_jdCommon'),
  fakerlc7wjb = require('./utils/Rebels_sendJDNotify'),
  {
    ["H5st"]: faker5dyqu,
    ["jsTk"]: faker1756ia
  } = require('./utils/Rebels_H'),
  faker72zsq7 = require('crypto-js');
let fakerm24nqv = process["env"]["jd_618_url"] || '',
  fakerdlfxnm = (process["env"]["jd_618_ids"] || '')["split"](/[,@\n]+/g)["map"](fakerirhmu => {
    var fakerkf3hge = ["trim"];
    return fakerirhmu[fakerkf3hge[0]]();
  })["filter"](Boolean),
  fakerxznzv = process["env"]["jd_618_maxdraw"] || '3',
  fakergm37sc = process["env"]["jd_618_threads"] || "1";
const fakerwk4xx8 = process["env"]["jd_618_interval"] || "2000",
  faker0vfw9 = (process["env"]["jd_618_notify"] || process["env"]["jd_618_Notify"]) === "true",
  faker1payhd = (process["env"]["jd_618_pinFilter"] || '')["split"]('@'),
  faker7uz3oc = 0x19783c4c400,
  fakere3ebx = 5;
let fakerxsp59r = "31216",
  fakertoflk,
  fakerrhs9ph,
  fakerxljcwo = Object["keys"](fakerzu9rqg)["map"](fakerirhmu => fakerzu9rqg[fakerirhmu])["filter"](fakerirhmu => fakerirhmu);
if (fakerthxo6m(fakerxljcwo[0], faker3ce6o5 = 0x27)) {
  var faker4ukp66 = "name";
  $["msg"]($[faker4ukp66], "【提示】请先获取Cookie")
  process["exit"](1)
}
const fakerxht4bs = {
  [1]: "[红包]",
  [3]: "[优惠券]",
  0x6: "[打折券]",
  [17]: "[立减券]",
  0x12: "[实物]",
  [19]: "[超市卡]"
};
fakerthxo6m((async () => {
  if (faker1ovib(fakerlc7wjb["config"]({
    ["title"]: $["name"]
  }), await fakerouo4wj(), faker0vfw9 && fakerlc7wjb["getMessage"]())) {
    await fakerlc7wjb["push"]();
  }
})()["catch"](fakerirhmu => $["logErr"](fakerirhmu))["finally"](() => {
  return $["done"]();
}), fakerj8vr6j(0x27));
async function fakerouo4wj() {
  try {
    try {
      const fakerq84yc5 = parseInt(fakergm37sc);
      if (fakerq84yc5 > 0 && fakerq84yc5 !== 0x1) {
        fakergm37sc = fakerq84yc5;
      }
    } catch {
      fakergm37sc = 1;
    }
    if (faker1ovib(fakergm37sc = Math["min"](fakergm37sc, fakere3ebx), $["waitTime"] = null, fakerwk4xx8) && true) {
      try {
        const faker28epj = parseInt(fakerwk4xx8);
        if (faker28epj >= 0) {
          $["waitTime"] = faker28epj;
        }
      } catch {
        console["log"]("⚠ 自定义运行间隔时长设置错误");
      }
    }
    const fakerz58p8h = faker1ovib($["nowTime"] = Date["now"](), $["time"]("yyyy-MM-dd HH:mm", faker7uz3oc));
    if (faker7uz3oc && $["nowTime"] > faker7uz3oc) {
      return faker1ovib(console["log"](`活动已于 ${fakerz58p8h} 结束，下次早点来吧~`), undefined);
    }
    const fakerml620h = faker1ovib(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`间隔时长: [${fakerthxo6m($["waitTime"], 0x3e8, fakerj8vr6j(0x14))}秒]运行间隔时长`), console["log"](`代理开关: [${fakerypclxk["getProxyStatus"]()}]`), console["log"](`通知推送: [${faker0vfw9 ? '开启' : '关闭'}]`), console["log"](`账号过滤: [${faker1payhd["join"](', ')}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), `jd_${fakerypclxk["genRandomString"](0xd, "0123456789abcdefghijklmnopqrstuvwxyz")}`);
    if (faker1ovib($.UA = fakerypclxk["genUA"](fakerml620h), /https:\/\/u\.jd\.com\/.+/["test"](fakerm24nqv))) {
      if (fakerm24nqv["split"]('/')["pop"]()) {
        var fakerc5h5as = {
          fakermyjhvc: "split"
        };
        if (faker1ovib(fakerm24nqv = fakerm24nqv[fakerc5h5as.fakermyjhvc]('/')["pop"]()["split"]('?')["shift"](), fakerm24nqv["length"]) !== 0x7) {
          console["log"]("链接后面的字符必须为7位字符")
          console["log"](`你填写的链接为：${fakerm24nqv}`)
          console["log"](`请尽快修正，可尝试重启容器，默认继续运行`)
          fakerm24nqv = ''
        }
      } else {
        console["log"]("请填写正确的链接")
        console["log"](`你填写的链接为：${fakerm24nqv}`)
        console["log"](`请尽快修正，可尝试重启容器，默认继续运行`)
        fakerm24nqv = ''
      }
    } else {
      var faker72zsq7 = "length";
      fakerm24nqv = fakerm24nqv[faker72zsq7] === 7 && true ? fakerm24nqv : '';
    }
    if (faker1ovib(authorCodeList = await fakereszmo("https://updateteam.oss-cn-hangzhou.aliyuncs.com/618.json"), authorCodeList)) {
      $["authorCode"] = authorCodeList[fakertxqrqq(0x0, authorCodeList["length"])];
    } else {
      var fakerxsp59r = ["Q0dzaHZBTw=="];
      $["authorCode"] = atob(fakerxsp59r[0]);
    }
    if (faker1ovib($["red618code"] = fakerm24nqv ? fakerm24nqv : $["authorCode"], fakerthxo6m($["red618code"], faker3ce6o5 = 0x27))) {
      return faker1ovib(console["log"]("未填写正确的链接或活动码"), undefined);
    }
    if (faker1ovib($["red618_url"] = `https://u.jd.com/${$["red618code"]}`, fakerm24nqv)) {
      console["log"](`邀请链接: ${$["red618_url"]}`)
      console["log"](`邀请码: ${$["red618code"]}`)
    } else {
      console["log"](`【提示】有问题群内反馈`);
    }
    if (faker1ovib(console["log"](''), $["needRemoveCookieIndex"] = [], await fakerypclxk["concTask"](fakergm37sc, fakerxljcwo, fakerq72g2), $["runEnd"] = false, $["needRemoveCookieIndex"]["length"]) > 0x0) {
      fakerxljcwo = fakerxljcwo["filter"]((fakerehu6sb, fakertd9mvl) => fakerthxo6m($["needRemoveCookieIndex"]["includes"](fakerthxo6m(fakertd9mvl, 0x1, fakerj8vr6j(-38))), fakerj8vr6j(0x27)))
      $["needRemoveCookieIndex"] = []
    }
    const fakertoflk = fakerlc7wjb["getMessage"]();
    if (fakertoflk) {
      console["log"](`\n📣 运行结果\n${fakertoflk["replace"](/：/g, " ➜ ")}`);
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function fakerq72g2(fakerkf3hge, fakerehu6sb) {
  var fakerpolyc, fakeru75c5q;
  fakerpolyc = Object.create(null)
  fakeru75c5q = []
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  const faker95875d = decodeURIComponent(fakerypclxk["getCookieValue"](fakerkf3hge, "pt_pin")),
    faker28epj = `【账号${fakerehu6sb}】${fakerypclxk["dataMasking"](faker95875d, {
      ["printWidth"]: 0x6
    })}：`,
    fakerz58p8h = fakerlc7wjb["create"](fakerehu6sb, faker95875d);
  if (faker1payhd["length"] > 0 && (faker1payhd["includes"](faker95875d) || faker1payhd["includes"](encodeURIComponent(faker95875d)))) {
    return faker1ovib(fakerz58p8h["fix"]("已设置跳过运行当前账号"), console["log"](fakerz58p8h["getInlineContent"]()), $["needRemoveCookieIndex"]["push"](fakerehu6sb), undefined);
  }
  const fakerml620h = await fakerypclxk["getLoginStatus"](fakerkf3hge);
  if (fakerthxo6m(fakerml620h, faker3ce6o5 = 0x27) && typeof fakerml620h === "boolean" && true) {
    return faker1ovib(console["log"](`${faker28epj}账号无效`), $["needRemoveCookieIndex"]["push"](fakerehu6sb), undefined);
  }
  let fakererf2ip = false,
    fakerzu9rqg = $.red618code,
    fakerm24nqv,
    fakergm37sc,
    fakerwk4xx8;
  const faker0vfw9 = fakerypclxk["genUA"](faker95875d),
    faker7uz3oc = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    fakere3ebx = fakerkf3hge => fakerkf3hge["split"]('')["reduce"]((fakerkf3hge, fakerehu6sb) => faker1ovib(fakerkf3hge = fakerthxo6m((fakerkf3hge << 0x5) - fakerkf3hge, fakerehu6sb["charCodeAt"](0), fakerj8vr6j(-0x26)), fakerkf3hge & fakerkf3hge), 0),
    fakerxljcwo = [...new Set(fakerdlfxnm)];
  if (fakerxljcwo["length"] > 0x0) {
    var faker4ukp66 = ["floor"];
    fakerm24nqv = fakerxljcwo[Math[faker4ukp66[0x0]](fakerthxo6m(Math["random"](), fakerxljcwo["length"], faker3ce6o5 = 48))];
  } else {
    fakerm24nqv = '';
  }
  for (let fakerouo4wj = faker1ovib(fakerrhs9ph = "https://pro.m.jd.com/mall/active/jmyEA4EG3oauSUjpM3o84ed75PU/index.html", 0); fakerouo4wj < fakerxznzv; fakerouo4wj++) {
    const fakertxqrqq = faker72zsq7["MD5"](faker95875d)["toString"]();
    let faker6nwyig = fakera9vmrm("fakerjqmbg8", "faker2ztrzn"),
      faker207o9e = (fakeru75c5q = [fakertxqrqq], fakera9vmrm("fakers3vm4"));
    if (faker1ovib(fakergm37sc = `__jda=${faker207o9e};__jdb=${faker6nwyig["jdb"]};__jdc=${faker6nwyig["jdc"]};__jdv=${faker6nwyig["jdv"]};shshshfpa=${faker6nwyig["shshshfpa"]};mba_sid=${faker6nwyig["mba_sid"]};mba_muid=${faker6nwyig["mba_muid"]};pre_seq=${faker6nwyig["pre_seq"]};pre_session=${faker6nwyig["pre_session"]};`, ss = await fakerflu7pk($["red618_url"]), ss)) {
      let faker6f48i8 = ss?.["match"](/(https:\/\/u\.jd\.com\/jda[^']+)/);
      if (faker6f48i8) {
        $["hrl"] = faker6f48i8[0x1]
        await fakerws2o7h(faker6f48i8[0x1])
      } else {
        console["log"](`${faker28epj}没有获取到跳转链接`)
        fakererf2ip = true
      }
    } else {
      console["log"](`${faker28epj}链接失败`)
      fakererf2ip = true
    }
    let fakerrmk9rv = await faker1756ia(faker0vfw9, `https://pro.m.jd.com/mall/active/${fakertoflk}/index.html`, {
      ["bizId"]: "jd-babelh5",
      v: "3.2.1.1",
      qs: `stath=20&navh=44&tttparams=MiCEMF2eyJnTGF0IjoiMjkuNjA2OTI3IiwidW5fYXJlYSI6IjRfNTA5NTBfNTA5NTdfMCIsImRMYXQiOiIiLCJwcnN0YXRlIjoiMCIsImFkZHJlc3NJZCI6IjYyNzEwMzg4MDYiLCJsYXQiOiIiLCJwb3NMYXQiOiIyOS42MDY5MjciLCJwb3NMbmciOiIxMDYuNTY2NzEyIiwiZ3BzX2FyZWEiOiIwXzBfMF8wIiwibG5nIjoiIiwidWVtcHMiOiIwLTAtMCIsImdMbmciOiIxMDYuNTY2NzEyIiwibW9kZWwiOiJpUGhvbmU4LDIiLCJkTG5nIjoiIn70%3D&utm_source=kong&utm_term=626e4b23b76a4568aa45f7b551b5c4ef&d=kizfKM1&useNewLoad=1&uabt=384_3901_1_0-385_3902_1_0&utm_medium=jingfen&cu`
    });
    if (faker1ovib(fakerwk4xx8 = fakerrmk9rv["jsToken"], await fakerwlvaa("getCoupons"), fakererf2ip || $["runEnd"])) {
      break;
    }
    if ($["waitTime"]) {
      await $["wait"]($["waitTime"]);
    }
  }
  if ($["runEnd"]) {
    return {
      ["runEnd"]: true
    };
  }
  if ($["waitTime"]) {
    await $["wait"]($["waitTime"]);
  }
  async function fakerflu7pk(fakerehu6sb) {
    var fakerzxoq6 = ["data"];
    const fakerxxmny = await fakerypclxk["request"]({
        ["url"]: fakerehu6sb,
        ["method"]: "GET",
        ["headers"]: {
          ["Cookie"]: fakerkf3hge,
          ["User-Agent"]: faker7uz3oc
        },
        ["proxy"]: null,
        ["debug"]: false,
        ["timeout"]: 0x7530
      }),
      faker8prnp6 = fakerxxmny[fakerzxoq6[0x0]];
    let fakerpolyc = fakerxxmny && fakerxxmny["headers"] && (fakerxxmny["headers"]["set-cookie"] || fakerxxmny["headers"]["Set-Cookie"] || '') || '';
    if (fakerpolyc) {
      for (let fakeru75c5q of fakerpolyc) {
        let faker95875d = fakeru75c5q["split"](';')[0]["trim"]();
        if (faker95875d["split"]('=')[1]) {
          if (fakergm37sc["indexOf"](faker95875d["split"]("=")[0x1]) == fakerthxo6m(1, faker3ce6o5 = 61)) {
            fakergm37sc += fakerthxo6m(faker95875d["replace"](/ /g, ''), '; ', fakerj8vr6j(-0x26));
          }
        }
      }
    }
    return faker8prnp6;
  }
  async function fakerws2o7h(fakerehu6sb) {
    var fakerzxoq6 = {
      faker9b1dxc: "headers"
    };
    const fakerxxmny = await fakerypclxk["request"]({
      ["url"]: fakerthxo6m(fakerehu6sb, `&h5st=${fakere3ebx(faker7uz3oc)}`, fakerj8vr6j(-0x26)),
      ["maxRedirects"]: 0x0,
      ["method"]: "GET",
      [fakerzxoq6.faker9b1dxc]: {
        ["Cookie"]: fakerthxo6m(fakergm37sc + ' ', fakerkf3hge, faker3ce6o5 = -38),
        ["User-Agent"]: faker7uz3oc,
        ["Referer"]: $["red618_url"]
      },
      ["proxy"]: null,
      ["debug"]: false,
      ["timeout"]: 30000
    });
    let faker8prnp6 = fakerxxmny["headers"];
    if (faker8prnp6?.["location"]) {
      let fakerpolyc = faker8prnp6["location"];
      fakertoflk = fakerpolyc["match"](/\/active\/(\w+)\/index/)?.[1] || "3TifYMpjTrHU5g91ebxzQnnPAVpN"
      fakerrhs9ph = fakerpolyc
    }
    let fakeru75c5q = fakerxxmny && fakerxxmny["headers"] && (fakerxxmny["headers"]["set-cookie"] || fakerxxmny["headers"]["Set-Cookie"] || '') || '';
    if (fakeru75c5q) {
      for (let faker95875d of fakeru75c5q) {
        let faker28epj = faker95875d["split"](';')[0]["trim"]();
        if (faker28epj["split"]("=")[1]) {
          if (fakergm37sc["indexOf"](faker28epj["split"]("=")[1]) == fakerthxo6m(0x1, faker3ce6o5 = 61)) {
            fakergm37sc += fakerthxo6m(faker28epj["replace"](/ /g, ''), '; ', faker3ce6o5 = -0x26);
          }
        }
      }
    }
    return fakergm37sc;
  }
  async function fakero454ek(fakerkf3hge, fakerehu6sb) {
    try {
      switch (fakerkf3hge) {
        case "getCoupons":
          if (fakerehu6sb["code"] == 0x0) {
            var fakerzxoq6 = "join";
            let fakerxxmny = fakerehu6sb?.["data"]?.["couponList"] || [],
              faker8prnp6 = [];
            for (let fakerpolyc of fakerxxmny) {
              let fakeru75c5q = '';
              switch (fakerpolyc["type"]) {
                case 1:
                case 19:
                  {
                    fakeru75c5q = fakerthxo6m(fakerxht4bs[fakerpolyc["type"]], `${fakerpolyc["discount"]}元`, fakerj8vr6j(-0x26));
                    break;
                  }
                case 0x3:
                case 0x11:
                  {
                    let fakertrdchy = faker1ovib(fakeru75c5q = fakerthxo6m(fakerxht4bs[fakerpolyc["type"]], fakerpolyc["limitStr"], fakerj8vr6j(-38)), fakerpolyc["quota"] > 0 ? `满${fakerpolyc["quota"]}` : "无门槛");
                    fakeru75c5q += `(${fakertrdchy}减${fakerpolyc["discount"]})`;
                    break;
                  }
                case 0x6:
                  {
                    var fakerml620h = ["quota"];
                    let fakertrdchy = faker1ovib(fakeru75c5q = fakerthxo6m(fakerxht4bs[fakerpolyc["type"]], fakerpolyc["limitStr"], faker3ce6o5 = -38), fakerpolyc[fakerml620h[0x0]] > 0x0 ? `满${fakerpolyc["quota"]}` : "无门槛");
                    fakeru75c5q += `(${fakertrdchy}打${fakerpolyc["discount"]}折)`;
                    break;
                  }
                default:
                  {
                    fakeru75c5q = fakerxht4bs[fakerpolyc["type"] || "invalid"] || `[未知类型${fakerpolyc["type"]}]`
                    console["log"](`${faker28epj}${JSON["stringify"](fakerpolyc)}`)
                    break;
                  }
              }
              faker8prnp6["push"](fakeru75c5q);
            }
            let faker7k6ebc = faker1ovib(console["log"](`${faker28epj}${faker8prnp6["join"](', ')}`), faker8prnp6["map"](fakerkf3hge => (fakerkf3hge["includes"]("[优惠券]") || fakerkf3hge["includes"]("[打折券]") || fakerkf3hge["includes"]("[立减卷]")) && true ? '' : fakerkf3hge)["filter"](Boolean));
            fakerz58p8h["insert"](faker7k6ebc[fakerzxoq6](', '));
          } else {
            var fakerx1hw81 = {
              fakerqxs1el: "includes"
            };
            if (faker1ovib(console["log"](`${faker28epj}${fakerehu6sb["msg"]}[${fakerehu6sb["code"]}]`), fakerehu6sb["msg"]?.[fakerx1hw81.fakerqxs1el]("领取上限"))) {
              fakererf2ip = true;
            }
            if (fakerehu6sb["msg"]?.["includes"]("未开始")) {
              $["runEnd"] = true;
            }
          }
          break;
        case "shareUnionCoupon":
          if (fakerehu6sb["code"] == 0) {
            let fakerm24nqv = fakerehu6sb["data"]["shareUrl"]["match"](/\?s=([^&]+)/) && fakerehu6sb["data"]["shareUrl"]["match"](/\?s=([^&]+)/)[0x1] || '';
            console["log"](`${faker28epj}分享码: ${fakerm24nqv}`);
          } else {
            if (faker1ovib(console["log"](`${faker28epj}${fakerehu6sb["msg"]}`), fakerehu6sb["msg"]?.["includes"]("领取上限"))) {
              fakererf2ip = true;
            }
          }
      }
    } catch (e) {
      console["log"](`❌ 未能正确处理 ${fakerkf3hge} 请求响应 ${e["message"] || e}`);
    }
  }
  async function fakerwlvaa(fakerehu6sb) {
    if ($["runEnd"]) {
      return;
    }
    let faker8prnp6 = '',
      fakerpolyc = null,
      fakeru75c5q = null,
      faker28epj = {},
      fakerz58p8h = {};
    switch (fakerehu6sb) {
      case "getCoupons":
        fakerz58p8h = {
          ["appId"]: "c822a",
          ["functionId"]: "getCoupons",
          ["appid"]: "u_hongbao",
          ["clientVersion"]: fakerypclxk["getLatestAppVersion"](),
          ["client"]: "apple",
          ["body"]: {
            ["platform"]: 3,
            ["unionActId"]: fakerxsp59r,
            ["actId"]: fakertoflk,
            d: fakerzu9rqg,
            ["unionShareId"]: fakerm24nqv,
            ["type"]: 0x1,
            ["qdPageId"]: "MO-J2011-1",
            ["mdClickId"]: "jxhongbao_ck",
            ["actType"]: 0x1
          },
          ua: faker0vfw9,
          t: true
        }
        faker28epj = await faker5dyqu["getH5st"](fakerz58p8h)
        faker8prnp6 = "https://api.m.jd.com/api"
        fakerpolyc = faker28epj["paramsData"]
        break;
      case "shareUnionCoupon":
        fakerz58p8h = {
          ["appId"]: "c10dc",
          ["functionId"]: "shareUnionCoupon",
          ["appid"]: "u_hongbao",
          ["clientVersion"]: fakerypclxk["getLatestAppVersion"](),
          ["client"]: "apple",
          ["body"]: {
            ["platform"]: 0x4,
            ["unionActId"]: fakerxsp59r,
            ["actId"]: fakertoflk,
            d: fakerzu9rqg,
            ["unionShareId"]: '',
            ["supportPic"]: 2
          },
          ua: faker0vfw9,
          t: true
        }
        faker28epj = await faker5dyqu["getH5st"](fakerz58p8h)
        faker8prnp6 = "https://api.m.jd.com/api"
        fakeru75c5q = Object["assign"]({}, faker28epj["paramsData"])
        break;
      default:
        console["log"](`❌ 未知请求 ${fakerehu6sb}`);
        return;
    }
    const fakertrdchy = {
      ["x-api-eid-token"]: fakerwk4xx8,
      ["loginType"]: 2,
      _: fakerthxo6m(new Date()["getTime"]() + new Date()["getTimezoneOffset"]() * 0x3c * 0x3e8, 28800000, fakerj8vr6j(-38)),
      ["d_model"]: "0-2-999",
      ["osVersion"]: fakerypclxk["getLatestIOSVersion"]()
    };
    if (fakerpolyc) {
      fakerpolyc = {
        ...fakerpolyc,
        ...fakertrdchy
      };
    }
    if (fakeru75c5q) {
      fakeru75c5q = {
        ...fakeru75c5q,
        ...fakertrdchy
      };
    }
    const fakerml620h = {
      ["url"]: faker8prnp6,
      ["method"]: "GET",
      ["headers"]: {
        ["accept"]: "*/*",
        ["Accept-Language"]: "zh-cn",
        ["Content-Type"]: "application/x-www-form-urlencoded;charset=utf-8",
        ["Cookie"]: fakerthxo6m(fakergm37sc + ' ', fakerkf3hge, fakerj8vr6j(-38)),
        ["X-Requested-With"]: "XMLHttpRequest",
        ["Referer"]: fakerrhs9ph,
        ["Origin"]: "https://pro.m.jd.com",
        ["x-rp-client"]: "h5_1.0.0",
        ["User-Agent"]: faker0vfw9
      },
      ["params"]: fakeru75c5q,
      ["data"]: fakerpolyc,
      ["timeout"]: 30000,
      ["httpsTlsOptions"]: {
        ["secureProtocol"]: "TLSv1_2_method",
        ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
      }
    };
    {
      delete (delete fakerml620h["data"], fakerml620h["headers"]["Content-Type"]);
    }
    const faker84feze = 1;
    let fakerc5h5as = 0x0,
      faker7k6ebc = null,
      fakerx1hw81 = false;
    while (fakerc5h5as < faker84feze) {
      const fakererf2ip = await fakerypclxk["request"](fakerml620h);
      if (fakerthxo6m(fakererf2ip["success"], faker3ce6o5 = 0x27)) {
        faker7k6ebc = `🚫 ${fakerehu6sb} 请求失败 ➜ ${fakererf2ip["error"]}`
        fakerc5h5as++
        continue;
      }
      if (fakerthxo6m(fakererf2ip["data"], faker3ce6o5 = 39)) {
        faker7k6ebc = `🚫 ${fakerehu6sb} 请求失败 ➜ 无响应数据`
        fakerc5h5as++
        continue;
      }
      fakero454ek(fakerehu6sb, fakererf2ip["data"])
      fakerx1hw81 = false
      break;
    }
    if (fakerc5h5as >= faker84feze) {
      if (faker1ovib(console["log"](faker7k6ebc), fakerx1hw81)) {
        $["outFlag"] = true;
      }
    }
  }
  function fakera9vmrm(fakerkf3hge, fakerehu6sb, fakerzxoq6, fakerxxmny, faker8prnp6, faker95875d) {
    fakerxxmny = {
      ["fakert357rk"]: () => {
        var [fakerkf3hge, fakerehu6sb = "abcdef0123456789"] = fakeru75c5q;
        let fakerzxoq6 = '';
        for (let fakerxxmny of fakerkf3hge) fakerzxoq6 += fakerxxmny == 'x' ? fakerehu6sb["charAt"](Math["floor"](fakerthxo6m(Math["random"](), fakerehu6sb["length"], fakerj8vr6j(0x30)))) : fakerxxmny == 'X' ? fakerehu6sb["charAt"](Math["floor"](fakerthxo6m(Math["random"](), fakerehu6sb["length"], faker3ce6o5 = 0x30)))["toUpperCase"]() : fakerxxmny;
        return fakerzxoq6;
      },
      ["fakerjqmbg8"]: () => {
        let fakerkf3hge = "123",
          fakerehu6sb = "1",
          fakerzxoq6 = parseInt(fakerthxo6m(Date["now"](), 0x3e8, fakerj8vr6j(20)))["toString"](),
          fakerxxmny = fakerthxo6m(fakerzxoq6, parseInt(0x7fffffff * Math["random"]())["toString"](), faker3ce6o5 = -0x26),
          faker8prnp6 = [fakerkf3hge, fakerehu6sb, [fakerxxmny, fakerehu6sb]["join"]('|'), fakerzxoq6]["join"]("."),
          faker95875d = fakerkf3hge,
          faker28epj = [fakerkf3hge, "direct", "-", "none", '-', Date["now"]()["toString"]()]["join"]('|'),
          fakerpolyc = faker1ovib(faker28epj = encodeURIComponent(faker28epj), fakerthxo6m((fakeru75c5q = ["xxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx"], fakera9vmrm("fakert357rk")) + "-", fakerzxoq6, faker3ce6o5 = -0x26)),
          fakerz58p8h = "239",
          fakertrdchy = [fakerz58p8h, fakerehu6sb]["join"]('.'),
          fakerml620h = [fakerxxmny, fakerz58p8h, Date["now"]()["toString"]()]["join"]("."),
          faker84feze = fakerthxo6m(Math["round"](5 * Math["random"]()) * 2, 1, faker3ce6o5 = -38)["toString"](),
          fakerc5h5as = fakerthxo6m(fakerypclxk["genRandomString"](0x20, "abcdef0123456789"), "|278", fakerj8vr6j(-0x26));
        return {
          ["jdb"]: faker8prnp6,
          ["jdc"]: faker95875d,
          ["jdv"]: faker28epj,
          ["shshshfpa"]: fakerpolyc,
          ["mba_sid"]: fakertrdchy,
          ["mba_muid"]: fakerml620h,
          ["pre_seq"]: faker84feze,
          ["pre_session"]: fakerc5h5as
        };
      },
      ["fakerl8icck"]: () => {
        var [fakerkf3hge] = fakeru75c5q;
        const fakerehu6sb = new Date(),
          fakerzxoq6 = faker1ovib(fakerehu6sb["setHours"](0, 0, 0x0, 0x0), fakerehu6sb["getTime"]()),
          fakerxxmny = parseInt(fakerkf3hge["substring"](0, 8), 16) % 0x7fffffff;
        return `${fakerzxoq6}${fakerxxmny}`;
      },
      ["fakers3vm4"]: () => {
        var [fakerkf3hge] = fakeru75c5q;
        let fakerehu6sb = 0x7b,
          fakerzxoq6 = (fakeru75c5q = [fakerkf3hge], new fakera9vmrm("fakerl8icck", undefined, "fakerq0becm").fakerqrd0cz),
          fakerxxmny = fakerzxoq6["substr"](0, 10),
          faker8prnp6 = 0x1;
        return [fakerehu6sb, fakerzxoq6, fakerxxmny, fakerxxmny, fakerxxmny, faker8prnp6]["join"]('.');
      }
    }
    faker8prnp6 = faker8prnp6
    if (fakerehu6sb == "faker2ztrzn") {
      fakeru75c5q = [];
    }
    faker95875d = {
      ["fakert357rk"]: 0x1,
      ["fakerl8icck"]: 1,
      ["fakers3vm4"]: 1
    };
    function faker28epj() {
      var fakerehu6sb = function (...fakerehu6sb) {
          return faker1ovib(fakeru75c5q = fakerehu6sb, fakerxxmny[fakerkf3hge].call(this));
        },
        fakerzxoq6 = faker95875d[fakerkf3hge];
      if (fakerzxoq6) {
        return fakerjhvl5(fakerehu6sb, fakerzxoq6);
      }
      return fakerehu6sb;
    }
    faker8prnp6 = fakerehu6sb == "fakerodqrs" ? fakerpolyc[fakerkf3hge] || (fakerpolyc[fakerkf3hge] = faker28epj()) : fakerxxmny[fakerkf3hge]();
    return fakerzxoq6 == "fakerq0becm" ? {
      fakerqrd0cz: faker8prnp6
    } : faker8prnp6;
  }
}
async function fakereszmo(fakerkf3hge) {
  const fakerehu6sb = await fakerypclxk["request"]({
      ["url"]: fakerkf3hge,
      ["method"]: "GET",
      ["headers"]: {
        ["User-Agent"]: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      ["proxy"]: null,
      ["debug"]: false,
      ["timeout"]: 0x7530
    }),
    fakertd9mvl = fakerehu6sb["data"];
  return fakertd9mvl;
}
function fakertxqrqq(fakerirhmu, fakerkf3hge) {
  return fakerthxo6m(Math["floor"](Math["random"]() * (fakerkf3hge - fakerirhmu)), fakerirhmu, fakerj8vr6j(-0x26));
}