//Sun Jun 01 2025 06:09:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var VQxB60 = Object['defineProperty'],
  jt44zn,
  WB68VQX,
  H9lgq8,
  oECAV4,
  ankVpxN,
  _XUzzr,
  vocXan,
  EzqYWX,
  Bg4tgDB,
  EKiiYk,
  RyjG7H;
function TIIfpRf() {
  return globalThis;
}
function jUPus4O() {
  return global;
}
function drFA_q() {
  return window;
}
function nSH47u() {
  return new Function('return this')();
}
function _pN2cS(VQxB60 = [TIIfpRf, jUPus4O, drFA_q, nSH47u], UZhcqe, jt44zn = [], WB68VQX = 0x0, H9lgq8) {
  UZhcqe = UZhcqe;
  try {
    UZhcqe = Object
    jt44zn.push(''.__proto__.constructor.name)
  } catch (e) {}
  brZz1xp: for (WB68VQX = WB68VQX; WB68VQX < VQxB60.length; WB68VQX++) try {
    UZhcqe = VQxB60[WB68VQX]();
    for (H9lgq8 = 0; H9lgq8 < jt44zn.length; H9lgq8++) if (typeof UZhcqe[jt44zn[H9lgq8]] === 'undefined') {
      continue brZz1xp;
    }
    return UZhcqe;
  } catch (e) {}
  return UZhcqe || this;
}
jt44zn = _pN2cS() || {}
WB68VQX = jt44zn.TextDecoder
H9lgq8 = jt44zn.Uint8Array
oECAV4 = jt44zn.Buffer
ankVpxN = jt44zn.String || String
_XUzzr = jt44zn.Array || Array
function F6JRkR(...VQxB60) {
  return VQxB60[VQxB60["length"] - 1];
}
function klYQGdU(sSxpeUJ, VQxB60) {
  switch (EzqYWX) {
    case 0x3:
      return !sSxpeUJ;
    case 47:
      return typeof sSxpeUJ;
    case -0x2a:
      return sSxpeUJ + VQxB60;
    case 0x13:
      return sSxpeUJ * VQxB60;
  }
}
function qyGjzL(sSxpeUJ) {
  return F6JRkR(sSxpeUJ = EzqYWX + (EzqYWX = sSxpeUJ, 0x0), sSxpeUJ);
}
EzqYWX = EzqYWX;
function lnQYnOw(VQxB60, UZhcqe) {
  return Bg4tgDB["call"](null, VQxB60, "length", {
    ["value"]: UZhcqe,
    ["configurable"]: true
  });
}
Bg4tgDB = Object["defineProperty"]
EKiiYk = Object.create(null)
RyjG7H = []
const Pnw_dZq = require('./jdCommon'),
  lV1CJUl = require('./jdCrypto');
async function JTKvx7(VQxB60) {
  let {
    ["baseUrl"]: EKiiYk,
    ["cookie"]: TIIfpRf,
    ua: jUPus4O,
    ["activityId"]: drFA_q,
    ["activityType"]: nSH47u,
    ["venderId"]: _pN2cS,
    ["secretPin"]: qyGjzL,
    ["prizeName"]: lnQYnOw,
    ["generateId"]: lV1CJUl
  } = VQxB60;
  const JTKvx7 = (RyjG7H = [lnQYnOw], Zcdrxt("qe9v3j"));
  if (typeof JTKvx7 === "boolean" && klYQGdU(JTKvx7, EzqYWX = 0x3)) {
    return false;
  }
  const {
    ["receiver"]: gcc4jM_,
    ["phone"]: RHOF1OS,
    ["province"]: oLxJrD,
    ["city"]: yVA7ZDM,
    ["county"]: JGgoRv,
    ["address"]: e0Q4C3,
    ["areaCode"]: XqVp2R,
    ["postalCode"]: ClTHN5m,
    ["index"]: pqlGXjB
  } = JTKvx7;
  let qlOqZb;
  if (Array["isArray"](_pN2cS)) {
    qlOqZb = _pN2cS[1]
    _pN2cS = _pN2cS[0]
  }
  const jil7WeR = `${EKiiYk}/wxAddress/save`,
    CD0TU_M = {
      ["venderId"]: _pN2cS,
      ["pin"]: EKiiYk["includes"]("cjhy") ? encodeURIComponent(qyGjzL) : qyGjzL,
      ["activityId"]: drFA_q,
      ["actType"]: nSH47u,
      ["prizeName"]: lnQYnOw,
      ["receiver"]: gcc4jM_,
      ["phone"]: RHOF1OS,
      ["province"]: oLxJrD,
      ["city"]: yVA7ZDM,
      ["county"]: JGgoRv,
      ["areaCode"]: XqVp2R,
      ["address"]: e0Q4C3,
      ["generateId"]: lV1CJUl,
      ["postalCode"]: ClTHN5m
    },
    UiA6TuX = {
      ["url"]: jil7WeR,
      ["method"]: "POST",
      ["headers"]: {
        ["Accept"]: "application/json",
        ["Accept-Encoding"]: "gzip, deflate, br",
        ["Accept-Language"]: "zh-CN,zh;q=0.9",
        ["Connection"]: "keep-alive",
        ["Content-Type"]: "application/x-www-form-urlencoded",
        ["Cookie"]: TIIfpRf,
        ["Origin"]: EKiiYk,
        ["Referer"]: `${jil7WeR}/`,
        ["User-Agent"]: jUPus4O
      },
      ["data"]: CD0TU_M,
      ["timeout"]: 0x7530
    },
    MxQKZl = 3;
  let W6DvrZN = 0x0,
    vEkNUsj = null;
  while (W6DvrZN < MxQKZl) {
    const aOygQ6 = await Pnw_dZq["request"](UiA6TuX);
    if (klYQGdU(aOygQ6["success"], EzqYWX = 3)) {
      var vEfrNBR = ["error"];
      vEkNUsj = `🚫 savePrize 请求失败 ➜ ${aOygQ6[vEfrNBR[0]]}`
      W6DvrZN++
      continue;
    }
    if (klYQGdU(aOygQ6["data"], EzqYWX = 0x3)) {
      vEkNUsj = `🚫 savePrize 请求失败 ➜ 无响应数据`
      W6DvrZN++
      continue;
    }
    if (aOygQ6["data"]["result"] && true) {
      return F6JRkR((RyjG7H = [gcc4jM_, RHOF1OS, pqlGXjB], new Zcdrxt("tg2nbm", undefined, "tddBn6Q").vbv9wF), true);
    } else {
      if (W6DvrZN === 0 && qlOqZb) {
        UiA6TuX["data"] = {
          ["venderId"]: qlOqZb,
          ["pin"]: EKiiYk["includes"]("cjhy") ? encodeURIComponent(qyGjzL) : qyGjzL,
          ["activityId"]: drFA_q,
          ["actType"]: nSH47u,
          ["prizeName"]: lnQYnOw,
          ["receiver"]: gcc4jM_,
          ["phone"]: RHOF1OS,
          ["province"]: oLxJrD,
          ["city"]: yVA7ZDM,
          ["county"]: JGgoRv,
          ["areaCode"]: XqVp2R,
          ["address"]: e0Q4C3,
          ["generateId"]: lV1CJUl,
          ["postalCode"]: ClTHN5m
        }
        W6DvrZN++
        continue;
      }
      vEkNUsj = `🚫 savePrize 保存收货地址失败 ➜ ${aOygQ6["data"]?.["errorMessage"] || JSON["stringify"](aOygQ6["data"])}`;
    }
    break;
  }
  if (W6DvrZN >= MxQKZl) {
    var NIMksfW = {
      P_cKLb: "log"
    };
    console[NIMksfW.P_cKLb](vEkNUsj);
  }
  return false;
}
async function bNNhDS1(VQxB60, lcvGbJ, jt44zn, WB68VQX, H9lgq8, oECAV4, ankVpxN, _XUzzr, vocXan) {
  var LBr8WWa = ["generateId"];
  return await JTKvx7({
    ["baseUrl"]: VQxB60,
    ["cookie"]: lcvGbJ,
    ua: jt44zn,
    ["activityId"]: WB68VQX,
    ["activityType"]: H9lgq8,
    ["venderId"]: oECAV4,
    ["secretPin"]: ankVpxN,
    ["prizeName"]: _XUzzr,
    [LBr8WWa[0]]: vocXan
  });
}
async function gcc4jM_(VQxB60) {
  let {
    ["baseUrl"]: ankVpxN,
    ["requestUrl"]: _XUzzr,
    ["uuid"]: vocXan,
    ["cookie"]: LBr8WWa,
    ["ua"]: avQAdaA,
    ["activityId"]: Bg4tgDB,
    ["activityType"]: EKiiYk,
    ["venderId"]: TIIfpRf,
    ["secretPin"]: jUPus4O,
    ["prizeName"]: drFA_q,
    ["itemsId"]: nSH47u,
    ["activityUrl"]: _pN2cS
  } = VQxB60;
  const lnQYnOw = (RyjG7H = [drFA_q], new Zcdrxt("qe9v3j", undefined, "tddBn6Q").vbv9wF);
  if (typeof lnQYnOw === "boolean" && klYQGdU(lnQYnOw, EzqYWX = 3)) {
    return false;
  }
  const {
      ["receiver"]: lV1CJUl,
      ["phone"]: JTKvx7,
      ["province"]: bNNhDS1,
      ["city"]: gcc4jM_,
      ["county"]: RHOF1OS,
      ["address"]: oLxJrD,
      ["areaCode"]: yVA7ZDM,
      ["postalCode"]: JGgoRv,
      ["index"]: e0Q4C3
    } = lnQYnOw,
    XqVp2R = _XUzzr,
    KL1lYO = {
      ["venderId"]: TIIfpRf,
      ["activityId"]: Bg4tgDB,
      ["uuid"]: vocXan,
      ["actType"]: EKiiYk,
      ["prizeName"]: drFA_q,
      ["receiver"]: lV1CJUl,
      ["phone"]: JTKvx7,
      ["province"]: bNNhDS1,
      ["city"]: gcc4jM_,
      ["county"]: RHOF1OS,
      ["areaCode"]: yVA7ZDM,
      ["address"]: oLxJrD,
      ["itemsId"]: nSH47u,
      ["generateId"]: generateId,
      ["postalCode"]: JGgoRv,
      ["idCardNumber"]: '',
      ["pin"]: jUPus4O
    },
    Zo7U3Hx = {
      ["url"]: XqVp2R,
      ["method"]: "POST",
      ["headers"]: {
        ["Accept"]: "application/json",
        ["Accept-Encoding"]: "gzip, deflate, br",
        ["Accept-Language"]: "zh-cn",
        ["Connection"]: "keep-alive",
        ["Content-Type"]: "application/x-www-form-urlencoded",
        ["Cookie"]: LBr8WWa,
        ["Origin"]: ankVpxN,
        ["Referer"]: _pN2cS,
        ["User-Agent"]: avQAdaA
      },
      ["data"]: KL1lYO,
      ["timeout"]: 0x7530
    },
    yyvY9R = 3;
  let elG3Kt = 0,
    URMgeC = null;
  while (elG3Kt < yyvY9R) {
    var MBE6BF = "data";
    const YvgQKFY = await Pnw_dZq["request"](Zo7U3Hx);
    if (klYQGdU(YvgQKFY["success"], qyGjzL(3))) {
      URMgeC = `🚫 savePrize 请求失败 ➜ ${YvgQKFY["error"]}`
      elG3Kt++
      continue;
    }
    if (klYQGdU(YvgQKFY[MBE6BF], qyGjzL(3))) {
      URMgeC = `🚫 savePrize 请求失败 ➜ 无响应数据`
      elG3Kt++
      continue;
    }
    if (YvgQKFY["data"]["result"]) {
      return F6JRkR((RyjG7H = [lV1CJUl, JTKvx7, e0Q4C3], Zcdrxt("tg2nbm")), true);
    } else {
      var iqRMmH = ["stringify"];
      URMgeC = `🚫 savePrize 保存收货地址失败 ➜ ${YvgQKFY["data"]?.["errorMessage"] || JSON[iqRMmH[0]](YvgQKFY["data"])}`;
    }
    break;
  }
  if (elG3Kt >= yyvY9R) {
    console["log"](URMgeC);
  }
  return false;
}
async function RHOF1OS(VQxB60) {
  let {
    ["baseUrl"]: oECAV4,
    ["newbaseUrl"]: ankVpxN,
    ["ua"]: _XUzzr,
    ["token"]: vocXan,
    ["prizeName"]: LBr8WWa,
    ["orderCode"]: avQAdaA
  } = VQxB60;
  const EzqYWX = (RyjG7H = [LBr8WWa], Zcdrxt("qe9v3j"));
  if (typeof EzqYWX === "boolean" && klYQGdU(EzqYWX, qyGjzL(3))) {
    return false;
  }
  const {
      ["receiver"]: Bg4tgDB,
      ["phone"]: EKiiYk,
      ["province"]: wPBbqD,
      ["city"]: g29oGO9,
      ["county"]: TIIfpRf,
      ["address"]: jUPus4O,
      ["index"]: drFA_q
    } = EzqYWX,
    nSH47u = `${ankVpxN}/api/my/prize/update`,
    _pN2cS = {
      ["realName"]: Bg4tgDB,
      ["mobile"]: EKiiYk,
      ["address"]: jUPus4O,
      ["orderCode"]: avQAdaA,
      ["province"]: wPBbqD,
      ["city"]: g29oGO9,
      ["county"]: TIIfpRf
    },
    MUliVl = {
      ["url"]: nSH47u,
      ["method"]: "POST",
      ["headers"]: {
        ["Accept"]: "application/json",
        ["Accept-Encoding"]: "gzip, deflate, br",
        ["Accept-Language"]: "zh-cn",
        ["Connection"]: "keep-alive",
        ["Content-Type"]: "application/json;charset=UTF-8",
        ["token"]: vocXan,
        ["Origin"]: oECAV4,
        ["Referer"]: `${nSH47u}/`,
        ["User-Agent"]: _XUzzr
      },
      ["data"]: _pN2cS,
      ["timeout"]: 0x7530
    },
    lnQYnOw = 3;
  let lV1CJUl = 0x0,
    JTKvx7 = null;
  while (lV1CJUl < lnQYnOw) {
    const RHOF1OS = await Pnw_dZq["request"](MUliVl);
    if (klYQGdU(RHOF1OS["success"], qyGjzL(3))) {
      JTKvx7 = `🚫 savePrize 请求失败 ➜ ${RHOF1OS["error"]}`
      lV1CJUl++
      continue;
    }
    if (klYQGdU(RHOF1OS["data"], qyGjzL(3))) {
      JTKvx7 = `🚫 savePrize 请求失败 ➜ 无响应数据`
      lV1CJUl++
      continue;
    }
    if (RHOF1OS["data"]["resp_code"] === 0) {
      var oLxJrD = {
        OMS6fk: "tg2nbm"
      };
      return F6JRkR((RyjG7H = [Bg4tgDB, EKiiYk, drFA_q], Zcdrxt(oLxJrD.OMS6fk)), true);
    } else {
      if (RHOF1OS["data"]["resp_code"] === 0x2) {
        return F6JRkR(console["log"](`🚫 savePrize 保存收货地址失败 ➜ ${RHOF1OS["data"]["resp_msg"] || JSON["stringify"](RHOF1OS["data"])}`), false);
      } else {
        var JGgoRv = "resp_msg";
        JTKvx7 = `🚫 savePrize 保存收货地址失败 ➜ ${RHOF1OS["data"][JGgoRv] || JSON["stringify"](RHOF1OS["data"])}`;
      }
    }
    break;
  }
  if (lV1CJUl >= lnQYnOw) {
    console["log"](JTKvx7);
  }
  return false;
}
async function oLxJrD(VQxB60) {
  const {
    ["baseUrl"]: H9lgq8,
    ["newbaseUrl"]: oECAV4,
    ["cookie"]: ankVpxN,
    ua: _XUzzr,
    ["token"]: vocXan,
    ["prizeName"]: LBr8WWa,
    ["orderCode"]: avQAdaA
  } = VQxB60;
  return await RHOF1OS({
    ["baseUrl"]: H9lgq8,
    ["newbaseUrl"]: oECAV4,
    ["cookie"]: ankVpxN,
    ua: _XUzzr,
    ["token"]: vocXan,
    ["prizeName"]: LBr8WWa,
    ["orderCode"]: avQAdaA
  });
}
async function yVA7ZDM(VQxB60) {
  let {
    ["baseUrl"]: H9lgq8,
    ["newbaseUrl"]: oECAV4,
    ["ua"]: ankVpxN,
    ["token"]: _XUzzr,
    ["activityId"]: vocXan,
    ["shopId"]: LBr8WWa,
    ["activityType"]: avQAdaA,
    ["prizeName"]: Bg4tgDB,
    ["addressId"]: EKiiYk,
    ["activityPrizeId"]: wPBbqD,
    ["activityUrl"]: g29oGO9
  } = VQxB60;
  const TIIfpRf = (RyjG7H = [Bg4tgDB], new Zcdrxt("qe9v3j", undefined, "tddBn6Q").vbv9wF);
  if (typeof TIIfpRf === "boolean" && klYQGdU(TIIfpRf, qyGjzL(3))) {
    return false;
  }
  const {
      ["receiver"]: jUPus4O,
      ["phone"]: drFA_q,
      ["province"]: nSH47u,
      ["city"]: _pN2cS,
      ["county"]: MUliVl,
      ["address"]: lnQYnOw,
      ["index"]: JTKvx7
    } = TIIfpRf,
    bNNhDS1 = `${oECAV4}/api/${avQAdaA}/userAddressInfo`,
    gcc4jM_ = {
      ["realName"]: jUPus4O,
      ["mobile"]: drFA_q,
      ["address"]: lnQYnOw,
      ["province"]: nSH47u,
      ["city"]: _pN2cS,
      ["county"]: MUliVl,
      ["addressId"]: EKiiYk,
      ["activityPrizeId"]: wPBbqD
    },
    RHOF1OS = lV1CJUl["wuxianDefense"]["interactionV2"]["encrypt"](gcc4jM_),
    oLxJrD = {
      ["url"]: bNNhDS1,
      ["method"]: "POST",
      ["headers"]: {
        ["Accept"]: "application/json",
        ["Accept-Encoding"]: "gzip, deflate, br",
        ["Accept-Language"]: "zh-cn",
        ["Connection"]: "keep-alive",
        ["Content-Type"]: "application/json;charset=UTF-8",
        ["Origin"]: H9lgq8,
        ["Referer"]: g29oGO9,
        ["User-Agent"]: ankVpxN,
        ["Activity-Id"]: vocXan,
        ["Activity-Type"]: avQAdaA,
        ["Pin-Token"]: _XUzzr,
        ["Shop-Id"]: LBr8WWa
      },
      ["data"]: RHOF1OS,
      ["timeout"]: 0x7530
    },
    yVA7ZDM = 0x3;
  let JGgoRv = 0x0,
    e0Q4C3 = null;
  while (JGgoRv < yVA7ZDM) {
    const m0RZuA = await Pnw_dZq["request"](oLxJrD);
    if (klYQGdU(m0RZuA["success"], EzqYWX = 3)) {
      e0Q4C3 = `🚫 savePrize 请求失败 ➜ ${m0RZuA["error"]}`
      JGgoRv++
      continue;
    }
    if (klYQGdU(m0RZuA["data"], EzqYWX = 3)) {
      e0Q4C3 = `🚫 savePrize 请求失败 ➜ 无响应数据`
      JGgoRv++
      continue;
    }
    if (m0RZuA["data"]["data"] && klYQGdU(m0RZuA["data"]["data"], EzqYWX = 0x2f) === "string") {
      try {
        var h9yXkXe = "data";
        m0RZuA["data"][h9yXkXe] = lV1CJUl["wuxianDefense"]["interactionV2"]["decrypt"](m0RZuA["data"]["data"]);
      } catch {}
    }
    if (m0RZuA["data"]["code"] === 0xc8) {
      return F6JRkR((RyjG7H = [jUPus4O, drFA_q, JTKvx7], new Zcdrxt("tg2nbm", undefined, "tddBn6Q").vbv9wF), true);
    } else {
      e0Q4C3 = `🚫 savePrize 保存收货地址失败 ➜ ${m0RZuA["data"]?.["message"] || JSON["stringify"](m0RZuA["data"])}`;
    }
    break;
  }
  if (JGgoRv >= yVA7ZDM) {
    console["log"](e0Q4C3);
  }
  return false;
}
async function JGgoRv(VQxB60) {
  let {
    ["baseUrl"]: lcvGbJ,
    ["cookie"]: jt44zn,
    ["ua"]: WB68VQX,
    ["venderId"]: H9lgq8,
    ["prizeName"]: oECAV4,
    ["orderCode"]: ankVpxN
  } = VQxB60;
  const _XUzzr = (RyjG7H = [oECAV4], new Zcdrxt("qe9v3j", undefined, "tddBn6Q").vbv9wF);
  if (typeof _XUzzr === "boolean" && klYQGdU(_XUzzr, qyGjzL(3))) {
    return false;
  }
  const {
      ["receiver"]: vocXan,
      ["phone"]: LBr8WWa,
      ["province"]: avQAdaA,
      ["city"]: Bg4tgDB,
      ["county"]: EKiiYk,
      ["address"]: wPBbqD,
      ["index"]: g29oGO9
    } = _XUzzr,
    TIIfpRf = `${lcvGbJ}/ql/front/postBuyerInfo`,
    jUPus4O = {
      ["receiverName"]: vocXan,
      ["mobile"]: LBr8WWa,
      ["address"]: `${avQAdaA}+${Bg4tgDB}+${EKiiYk}${wPBbqD}`,
      ["log_id"]: ankVpxN,
      ["user_id"]: H9lgq8
    },
    drFA_q = {
      ["url"]: TIIfpRf,
      ["method"]: "POST",
      ["headers"]: {
        ["Accept"]: "application/json, text/plain, */*",
        ["Accept-Encoding"]: "gzip, deflate, br",
        ["Accept-Language"]: "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
        ["Connection"]: "keep-alive",
        ["Content-Type"]: "application/x-www-form-urlencoded",
        ["Cookie"]: jt44zn,
        ["Origin"]: lcvGbJ,
        ["Referer"]: `${TIIfpRf}/`,
        ["User-Agent"]: WB68VQX
      },
      ["data"]: jUPus4O,
      ["timeout"]: 0x7530
    },
    nSH47u = 0x3;
  let _pN2cS = 0,
    MUliVl = null;
  while (_pN2cS < nSH47u) {
    const lnQYnOw = await Pnw_dZq["request"](drFA_q);
    if (klYQGdU(lnQYnOw["success"], EzqYWX = 3)) {
      MUliVl = `🚫 savePrize 请求失败 ➜ ${lnQYnOw["error"]}`
      _pN2cS++
      continue;
    }
    if (klYQGdU(lnQYnOw["data"], EzqYWX = 3)) {
      MUliVl = `🚫 savePrize 请求失败 ➜ 无响应数据`
      _pN2cS++
      continue;
    }
    if (lnQYnOw["data"]["succ"]) {
      return F6JRkR((RyjG7H = [vocXan, LBr8WWa, g29oGO9], Zcdrxt("tg2nbm")), true);
    } else {
      if (lnQYnOw["data"]["succ"] === false) {
        return F6JRkR(console["log"](`🚫 保存收货地址失败 ➜ ${lnQYnOw["data"]["msg"] || JSON["stringify"](lnQYnOw["data"])}`), false);
      } else {
        MUliVl = `🚫 savePrize 保存收货地址失败 ➜ ${lnQYnOw["data"]["msg"] || JSON["stringify"](lnQYnOw["data"])}`;
      }
    }
    break;
  }
  if (_pN2cS >= nSH47u) {
    console["log"](MUliVl);
  }
  return false;
}
module["exports"] = {
  ["wuxian_savePrize"]: JTKvx7,
  ["wxSavePrize"]: bNNhDS1,
  ["lzkj_interactsaas_savePrize"]: RHOF1OS,
  ["loreal_savePrize"]: oLxJrD,
  ["lzkj_interaction_v2_savePrize"]: yVA7ZDM,
  ["lzdz1_savePrize"]: gcc4jM_,
  ["jinggeng_savePrize"]: JGgoRv
};
function Zcdrxt(VQxB60, jt44zn, WB68VQX, H9lgq8, oECAV4, ankVpxN, _XUzzr) {
  oECAV4 = {
    ["tg2nbm"]: () => {
      var [VQxB60, jt44zn, WB68VQX] = RyjG7H;
      console["log"](`已自动提交收货地址 ✅\n登记为随机抽取到的第${klYQGdU(WB68VQX, 1, qyGjzL(-0x2a))}套收货地址信息\n联系信息：${VQxB60} (${jt44zn["replace"](/^(\d{3})\d{4}(\d{4})$/, "$1****$2")}）\n`);
    },
    ["qe9v3j"]: (VQxB60, jt44zn, WB68VQX) => {
      var [oECAV4] = RyjG7H;
      try {
        const ankVpxN = process["env"]["WX_ADDRESS"] || '',
          _XUzzr = process["env"]["WX_ADDRESS_BLOCK"] || '';
        if (ankVpxN === '') {
          return false;
        }
        const vocXan = ankVpxN["split"]('|'),
          LBr8WWa = Math["floor"](klYQGdU(Math["random"](), vocXan["length"], qyGjzL(0x13)));
        if (vocXan[LBr8WWa] === '') {
          return F6JRkR(console["log"]("❌ 随机抽取到的收货地址信息为空，请正确使用 \"|\" 管道符以用于分割多个收货地址！\n"), false);
        }
        const [avQAdaA, EzqYWX, Bg4tgDB, EKiiYk, TIIfpRf, jUPus4O, drFA_q, nSH47u] = vocXan[LBr8WWa]["split"]('@');
        if (nSH47u === undefined) {
          return F6JRkR(console["log"]("❌ 随机抽取到的收货地址信息格式存在错误（参数不足或过多）\n"), false);
        }
        for (let lnQYnOw = 0x0; lnQYnOw < 7; lnQYnOw++) if (vocXan[lnQYnOw] === '') {
          return F6JRkR(console["log"]("❌ 随机抽取到的收货地址信息格式存在错误（参数不能为空）\n"), false);
        }
        if (_XUzzr !== '') {
          const Pnw_dZq = _XUzzr["split"]('@');
          if (Pnw_dZq["some"](VQxB60 => oECAV4["includes"](VQxB60))) {
            return F6JRkR(console["log"](`\n🚫 触发实物奖品自动登记收货地址屏蔽关键词，跳过~\n`), false);
          }
        }
        return {
          ["receiver"]: avQAdaA,
          ["phone"]: EzqYWX,
          ["province"]: Bg4tgDB,
          ["city"]: EKiiYk,
          ["county"]: TIIfpRf,
          ["address"]: jUPus4O,
          ["areaCode"]: drFA_q,
          ["postalCode"]: nSH47u,
          ["index"]: LBr8WWa
        };
      } catch (error) {
        return F6JRkR(console["log"](`❌ 获取用户收货地址配置信息异常 ➜ ${error["message"] || error}`), false);
      }
    }
  }
  ankVpxN = ankVpxN
  if (jt44zn == "y3zTZP") {
    RyjG7H = [];
  }
  _XUzzr = {
    ["tg2nbm"]: 3,
    ["qe9v3j"]: 0x1
  };
  function vocXan(jt44zn = 0x221, WB68VQX = 0x11a, ankVpxN, vocXan, LBr8WWa) {
    ankVpxN = -390
    vocXan = -0x137
    LBr8WWa = {
      S: () => {
        return LBr8WWa.P(), LBr8WWa.Q(), vocXan += 759;
      },
      P: () => jt44zn -= 0x73,
      j: (Bg4tgDB = true) => {
        if (!Bg4tgDB) {
          return arguments;
        }
        return jt44zn += (vocXan == jt44zn - 0x16c ? 62 : 126) > vocXan ? -129 : -0x56, WB68VQX += WB68VQX - 0x373, ankVpxN *= false ? -0x3c : 2, ankVpxN -= vocXan == -0x137 ? -242 : 'h', vocXan += 836;
      },
      Q: () => WB68VQX -= 0x259,
      ab: 1,
      X: 0x76,
      ["ae"]: -23,
      ["af"]: -63,
      d: 61,
      ai: () => {
        return WB68VQX += 98;
      },
      H: 45,
      T: 0x1b1,
      ["ah"]: 98,
      C: 2,
      ag: () => vocXan == -63,
      ["R"]: 0x2f7,
      p: () => {
        WB68VQX = -37
        LBr8WWa.j()
        return 'n';
      },
      M: 23,
      W: () => {
        return lnQYnOw(LBr8WWa.U = Bg4tgDB, false ? globalThis : EKiiYk);
      },
      ap: jt44zn => {
        return jt44zn + 0x204;
      }
    }
    while (jt44zn + WB68VQX + ankVpxN + vocXan != 0x56 && true) switch (jt44zn + WB68VQX + ankVpxN + vocXan) {
      default:
      case 0x323:
      case 0x35c:
        LBr8WWa.am = 'an'
        LBr8WWa.a = ankVpxN == (vocXan == -311 ? -390 : 'N') && EKiiYk
        LBr8WWa.S()
        break;
      case 0x66:
        if (LBr8WWa.p() == 'n') {
          break;
        }
      case 0x86:
      case 0x20f:
      case 0x110:
        if (WB68VQX == -23) {
          jt44zn += 0x0
          WB68VQX += ankVpxN + 0x186
          ankVpxN += 0x0
          vocXan += 0
          break;
        }
        return Bg4tgDB;
      case 142:
      case 0x3b9:
        jt44zn -= 0x73
        WB68VQX -= 0x263
        vocXan += false ? LBr8WWa.aa : 0x2ce
        break;
      case 83:
      case 0x28c:
      case 244:
      case 112:
        WB68VQX = -0x25
        LBr8WWa.ai()
        ankVpxN -= 0x4c
        break;
      case WB68VQX - 0xfe:
        delete LBr8WWa.ai;
        if (WB68VQX == jt44zn + (vocXan == (LBr8WWa["hasOwnProperty"]("d") ? -0x137 : LBr8WWa.z) ? -0x19e : LBr8WWa.B)) {
          jt44zn -= 129
          WB68VQX -= 0x259
          vocXan *= 2
          vocXan += 0x47b
          break;
        }
        return LBr8WWa.D = Bg4tgDB;
      case 0x39:
        if (LBr8WWa.a && 1) {
          jt44zn += 0x73
          WB68VQX += ankVpxN == (110 == jt44zn ? -0x2 : 1) ? -0x31 : 0x263
          vocXan -= 0x2f7
          break;
        }
        vocXan += 0x4d;
        break;
      case LBr8WWa.ap(ankVpxN):
        var Bg4tgDB = function (...jt44zn) {
            return F6JRkR(RyjG7H = jt44zn, oECAV4[VQxB60].call(this));
          },
          EKiiYk = _XUzzr[ankVpxN == 23 || VQxB60];
        jt44zn -= 0x70;
        break;
      case 36:
        if (LBr8WWa.ag()) {
          WB68VQX *= 0x2
          WB68VQX += 0x203
          break;
        }
        vocXan = 61
        WB68VQX += 98
        break;
      case 24:
        return LBr8WWa.W();
    }
  }
  ankVpxN = jt44zn == "Af9svi1" ? EKiiYk[VQxB60] || (EKiiYk[VQxB60] = vocXan()) : oECAV4[VQxB60]();
  return WB68VQX == "tddBn6Q" ? {
    vbv9wF: ankVpxN
  } : ankVpxN;
}