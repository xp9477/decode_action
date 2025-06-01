//Sun Jun 01 2025 02:37:13 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var ozO_db = Object['defineProperty'],
  Tg9gA1,
  _VJ0Cc,
  Tq6WN1,
  TX_dne0,
  lLonWS,
  EUGj8wh,
  CS9DpN,
  ULlpoTD;
function xzD7uy() {
  return globalThis;
}
function mTLAC0I() {
  return global;
}
function DRGHKT() {
  return window;
}
function CChifX() {
  return new Function("return this")();
}
function e9FIif(ozO_db = [xzD7uy, mTLAC0I, DRGHKT, CChifX], VmHktS, XyaZxl7 = [], Tg9gA1 = 0x0, _VJ0Cc) {
  VmHktS = VmHktS;
  try {
    VmHktS = Object
    XyaZxl7.push(''.__proto__["constructor"].name)
  } catch (e) {}
  dWo6XsK: for (Tg9gA1 = Tg9gA1; Tg9gA1 < ozO_db["length"]; Tg9gA1++) try {
    VmHktS = ozO_db[Tg9gA1]();
    for (_VJ0Cc = 0; _VJ0Cc < XyaZxl7["length"]; _VJ0Cc++) {
      if (typeof VmHktS[XyaZxl7[_VJ0Cc]] === "undefined") {
        continue dWo6XsK;
      }
    }
    return VmHktS;
  } catch (e) {}
  return VmHktS || this;
}
Tg9gA1 = e9FIif() || {}
_VJ0Cc = Tg9gA1["TextDecoder"]
Tq6WN1 = Tg9gA1.Uint8Array
TX_dne0 = Tg9gA1.Buffer
lLonWS = Tg9gA1.String || String
EUGj8wh = Tg9gA1.Array || Array
function sLz0Uf6(...ozO_db) {
  return ozO_db[ozO_db["length"] - 0x1];
}
function O4ou7E0(rrah5W, ozO_db) {
  switch (ULlpoTD) {
    case -6:
      return rrah5W * ozO_db;
    case 32:
      return !rrah5W;
    case -0x1f:
      return rrah5W + ozO_db;
    case 49:
      return -rrah5W;
  }
}
function LAOKBS4(rrah5W) {
  return sLz0Uf6(rrah5W = ULlpoTD + (ULlpoTD = rrah5W, 0), rrah5W);
}
ULlpoTD = ULlpoTD;
const xGDf96t = require('./jdCookie'),
  Rp4fwbp = require('./utils/Rebels_sendJDNotify'),
  LHaKvWR = require('./utils/Rebels_Token'),
  NaS87c = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: UmdOHsB
  } = require('./utils/Rebels_H'),
  o0uPQr = require('crypto-js'),
  s8s6KZM = process["env"]["jd_mpdz_draw"] || 0x32,
  HexxE8 = process["env"]["jd_mpdz_wait"] || 0x1,
  B4geHQ = process["env"]["jd_mpdz_Notify"] === "true",
  JFb0FE = process["env"]["jd_mpdz_break"] === "true";
let aCeUdd = O4ou7E0(parseInt(HexxE8), 0x3e8, LAOKBS4(-0x6));
const hxaeRNw = {
  ["jdMarket"]: "[京豆]",
  ["coin"]: "[金币]",
  ["point"]: "[积分]",
  ["integral"]: "[积分]",
  ["goods"]: "[实物]",
  ["product"]: "[广告]",
  ["coupon"]: "[优惠券]",
  ["chance"]: "[次数]",
  ["card"]: "[卡片]"
};
let pFsBpDv = '',
  Q5d599 = '',
  wOqoHE = Object["keys"](xGDf96t)["map"](rrah5W => xGDf96t[rrah5W])["filter"](rrah5W => rrah5W);
if (O4ou7E0(wOqoHE[0x0], ULlpoTD = 32)) {
  var tmbhh8 = ["name", "【提示】请先获取Cookie"];
  $["msg"]($[tmbhh8[0]], tmbhh8[0x1])
  process["exit"](0x1)
}
$["blacklist"] = process["env"]["jd_mpdz_blacklist"] || ''
IrC9wAd()
$["errMsgPin"] = []
$["errOpencard"] = []
O4ou7E0((async () => {
  if (sLz0Uf6(console["log"](`开卡类活动不会自动运行，请自行测试是否有水`), authorCodeList = await Xmyn0us("http://code.257999.xyz/jd_dplh1.json"), authorCodeList)) {
    console["log"]("\n服务状态正常，活动获取成功")
    $["authorCode"] = authorCodeList[_cDGME(0, authorCodeList["length"])]
  } else {
    $["authorCode"] = ''
    console["log"]("\n服务状态异常，请检查网络是否正常\n")
  }
  const SHfkSOp = sLz0Uf6($["actId"] = "JdMideaArbitrageAll2025", $["act_type"] = "dm/front/JdMideaArbitrageAll2025", $["act_method"] = "JdMideaArbitrageAll2025", $["hostname"] = "mpdz13-dz.isvjcloud.com", $["baseUrl"] = `https://${$["hostname"]}`, Rp4fwbp["config"]({
    ["title"]: $["name"]
  }), $["userId"] = "10299171", $["inviteNick"] = $["authorCode"] || '', process["env"]["WX_ADDRESS"] ? process["env"]["WX_ADDRESS"] : '');
  if (SHfkSOp && SHfkSOp != '') {
    const CChifX = SHfkSOp["split"]("|");
    if (sLz0Uf6($["randNum"] = Math["floor"](O4ou7E0(Math["random"](), CChifX["length"], LAOKBS4(-0x6))), CChifX[$["randNum"]]) === '') {
      var e9FIif = ["exit"];
      console["log"]("❌ 随机抽取到的收货地址信息为空，请正确使用 \"|\" 管道符以用于分割多个收货地址！\n")
      process[e9FIif[0x0]](0)
    }
    const [xGDf96t, LHaKvWR, UmdOHsB, o0uPQr, s8s6KZM, HexxE8] = CChifX[$["randNum"]]["split"]('@');
    for (let JFb0FE = 0x0; JFb0FE < 6; JFb0FE++) if (CChifX[JFb0FE] === '') {
      console["log"]("❌ 随机抽取到的收货地址信息格式存在错误（参数不能为空）\n")
      process["exit"](0x0)
    }
    $["receiver"] = xGDf96t
    $["phone"] = LHaKvWR
    $["province"] = UmdOHsB
    $["city"] = o0uPQr
    $["county"] = s8s6KZM
    $["address"] = HexxE8
  }
  for (let JFb0FE = 0x0; JFb0FE < wOqoHE["length"]; JFb0FE++) {
    if (sLz0Uf6($["index"] = O4ou7E0(JFb0FE, 0x1, LAOKBS4(-31)), pFsBpDv = wOqoHE[JFb0FE], Q5d599 = wOqoHE[JFb0FE], NaS87c["setCookie"](Q5d599), $["UserName"] = decodeURIComponent(NaS87c["getCookieValue"](pFsBpDv, "pt_pin")), $["UA"] = NaS87c["genUA"]($["UserName"]), $["message"] = Rp4fwbp["create"]($["index"], $["UserName"]), $["nickName"] = '', console["log"](`\n******开始【京东账号${$["index"]}】${$["nickName"] || $["UserName"]}******\n`), await OhRMjKj(), NaS87c["unsetCookie"](), $["outFlag"] || $["runEnd"])) {
      break;
    }
  }
  if ($["errMsgPin"]["length"] > 0x0) {
    let ERHQZXI = `\n以下账号可能是火爆，请加入黑名单\nexport jd_mpdz_blacklist="${$["errMsgPin"]["join"]('\u0026')}"`;
    console["log"](ERHQZXI);
  }
  if ($["errOpencard"]["length"] > 0) {
    let ERHQZXI = `\n以下账号开卡火爆，请自行决定是否加入黑名单\n"${$["errOpencard"]["join"]('\u0026')}"`;
    console["log"](ERHQZXI);
  }
  if (B4geHQ && Rp4fwbp["getMessage"]()) {
    Rp4fwbp["appendContent"](`\n【活动ID】${$["activityId"]}`)
    await Rp4fwbp["push"]()
  }
  if (global["redisTokenCloseAndExit"]) {
    await global["redisTokenCloseAndExit"]();
  } else {
    if (global["redisTokenClose"]) {
      await global["redisTokenClose"]();
    } else {
      setTimeout(() => (process["exit"](0x0), undefined), 0x64);
    }
  }
})()["catch"](rrah5W => $["logErr"](rrah5W))["finally"](() => $["done"]()), ULlpoTD = 32)
async function OhRMjKj() {
  try {
    if (sLz0Uf6($["skipRun"] = false, $["over"] = false, $["jdToken"] = '', $["runEnd"] || $["outFlag"])) {
      return;
    }
    if (sLz0Uf6($["jdToken"] = await LHaKvWR(Q5d599, $["baseUrl"]), O4ou7E0($["jdToken"], ULlpoTD = 32))) {
      return sLz0Uf6(console["log"]("获取 Token 失败！"), $["message"]["fix"]("获取[Token]失败"), undefined);
    }
    if (sLz0Uf6($["activityload"] = '', await NZlfXjX("activity_load"), $["MixNick"]) == '' && true) {
      return sLz0Uf6(console["log"]("获取[活动信息]失败，可能是黑号或者太卡了"), undefined);
    }
    if ($["runEnd"] || $["outFlag"] || $["skipRun"]) {
      return;
    }
    if (O4ou7E0($["hasPrintActInfo"], ULlpoTD = 0x20)) {
      const lLonWS = sLz0Uf6($["hasPrintActInfo"] = true, $["time"]("yyyy-MM-dd HH:mm", $["startTime"])),
        EUGj8wh = $["time"]("yyyy-MM-dd HH:mm", $["endTime"]),
        CS9DpN = Date["now"]();
      if ($["startTime"] && CS9DpN < $["startTime"]) {
        return sLz0Uf6(console["log"](`活动将在 ${lLonWS} 开始，晚点再来吧~`), $["message"]["fix"](`活动尚未开始，开始时间：${lLonWS}`), $["runEnd"] = true, undefined);
      }
      if ($["endTime"] && CS9DpN > $["endTime"]) {
        return sLz0Uf6(console["log"](`活动已于 ${EUGj8wh} 结束，下次早点来吧~`), $["message"]["fix"](`活动已结束，结束时间：${EUGj8wh}`), $["runEnd"] = true, undefined);
      }
    }
    for (let SHfkSOp = sLz0Uf6($["opencraderr"] = false, await NZlfXjX('绑定'), await $["wait"](parseInt(O4ou7E0(aCeUdd * 0x1, 100, LAOKBS4(-0x1f)), 0xa)), await NZlfXjX("completeState"), 0); SHfkSOp < $["completeState"]["length"]; SHfkSOp++) {
      let xzD7uy = sLz0Uf6($["missionType"] = $["completeState"][SHfkSOp]["type"], 0x1),
        mTLAC0I = $["completeState"][SHfkSOp]["hasGotNum"] || $["completeState"][SHfkSOp]["orderNum"];
      if (O4ou7E0($["completeState"][SHfkSOp]["isComplete"], LAOKBS4(0x20))) {
        switch ($["missionType"]) {
          case "buyHotProducts":
          case "payTrade":
          case "shareAct":
            break;
          case "openCard":
            break;
          case "uniteAddCart":
            for (let xGDf96t = 0; xGDf96t < 0x1; xGDf96t++) {
              $["missionType"] = "uniteAddCart"
              await NZlfXjX("uniteAddCart")
              await $["wait"](parseInt(O4ou7E0(Math["random"]() * 1000, 2000, LAOKBS4(-0x1f)), 10))
            }
            break;
          case "specialSign":
          case "uniteCollectShop":
            for (let xGDf96t = 0x0; xGDf96t < 0x1; xGDf96t++) {
              $["missionType"] = $["missionType"]
              await NZlfXjX("mission")
              await $["wait"](parseInt(O4ou7E0(Math["random"]() * 1000, 2000, ULlpoTD = -31), 0xa))
            }
            break;
          case "shareActGetAward":
            $["missionType"] = $["missionType"]
            await NZlfXjX("mission")
            await $["wait"](parseInt(O4ou7E0(Math["random"]() * 0x3e8, 0x7d0, LAOKBS4(-0x1f)), 10))
            break;
          case "uniteCollectCart":
            for (let xGDf96t = 0; xGDf96t < 1; xGDf96t++) $["missionType"] = "uniteCollectCart", await NZlfXjX("mission"), await $["wait"](parseInt(O4ou7E0(Math["random"]() * 0x3e8, 2000, ULlpoTD = -0x1f), 0xa));
            break;
          case "viewShopBrand":
            let UmdOHsB = ["1000014803", "1000196804", "1000015268", "1000149009", "1000014143", "1000159561"];
            for (let xGDf96t = 0; xGDf96t < UmdOHsB["length"] && true; xGDf96t++) $["missionType"] = "viewShopBrand", $["viewShopBrandId"] = UmdOHsB[xGDf96t], await NZlfXjX("viewShopBrand"), await $["wait"](parseInt(O4ou7E0(Math["random"]() * 0x3e8, 0x1388, LAOKBS4(-0x1f)), 0xa));
            break;
          case "viewShop":
            let o0uPQr = ["1000149009", "1000453921"];
            for (let xGDf96t = 0x0; xGDf96t < o0uPQr["length"] && true; xGDf96t++) {
              $["missionType"] = "viewShop"
              $["viewShopId"] = o0uPQr[xGDf96t]
              await NZlfXjX("viewShop")
              await $["wait"](parseInt(O4ou7E0(Math["random"]() * 0x3e8, 5000, ULlpoTD = -31), 0xa))
            }
            break;
          case "peopledisposable":
            for (let xGDf96t = 0x0; xGDf96t < 1; xGDf96t++) {
              $["missionType"] = "peopledisposable"
              $["problemId"] = 'A'
              await NZlfXjX("mission")
              await $["wait"](parseInt(O4ou7E0(Math["random"]() * 1000, 2000, LAOKBS4(-0x1f)), 10))
            }
            break;
          case "viewOne":
            for (let xGDf96t = 0; xGDf96t < 1; xGDf96t++) $["missionType"] = "viewOne", await NZlfXjX("mission"), await $["wait"](parseInt(O4ou7E0(Math["random"]() * 1000, 5000, ULlpoTD = -0x1f), 0xa));
            break;
          case "viewTimes":
            for (let xGDf96t = 0x0; xGDf96t < 3; xGDf96t++) {
              $["missionType"] = "viewTimes"
              await NZlfXjX("mission")
              await $["wait"](parseInt(O4ou7E0(Math["random"]() * 1000, 0x1388, ULlpoTD = -0x1f), 0xa))
            }
            break;
          case "shareAct":
            break;
          default:
            for (let xGDf96t = mTLAC0I; xGDf96t < xzD7uy; xGDf96t++) {
              await NZlfXjX("mission")
              await $["wait"](parseInt(O4ou7E0(Math["random"]() * 1000, 0x7d0, LAOKBS4(-31)), 0xa))
            }
        }
      }
    }
    if (sLz0Uf6(await $["wait"](parseInt(O4ou7E0(Math["random"]() * 0x3e8, 0x7d0, ULlpoTD = -0x1f), 10)), $["index"]) == 0x1 && true) {
      $["inviteNick"] = $["MixNick"];
    }
    await $["wait"](parseInt(O4ou7E0(aCeUdd * 1, 0x64, LAOKBS4(-0x1f)), 10))
    console["log"](`\n-------End---------`)
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function X1hmbz3(ozO_db, VmHktS) {
  try {
    switch (ozO_db) {
      case "activity_load":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 200) {
          if (sLz0Uf6($["activityload"] = VmHktS?.["data"]?.["data"], $["startTime"] = $["activityload"]?.["cusActivity"]?.["startTime"], $["endTime"] = $["activityload"]?.["cusActivity"]?.["endTime"], $["awardTime"] = $["activityload"]?.["cusActivity"]?.["awardTime"], $["MixNick"] = $["activityload"]?.["missionCustomer"]?.["buyerNick"], $["totalChance"] = $["activityload"]?.["missionCustomer"]?.["totalChance"], $["usedChance"] = $["activityload"]?.["missionCustomer"]?.["usedChance"], $["remainChance"] = $["activityload"]?.["missionCustomer"]?.["remainChance"], $["totalPoint"] = $["activityload"]?.["missionCustomer"]?.["totalPoint"], $["usedPoint"] = $["activityload"]?.["missionCustomer"]?.["usedPoint"], $["remainPoint"] = $["activityload"]?.["missionCustomer"]?.["remainPoint"], $["hasCollectShop"] = $["activityload"]?.["missionCustomer"]?.["hasCollectShop"], $["hasAddCart"] = $["activityload"]?.["missionCustomer"]?.["hasAddCart"], $["openCardStatus"] = $["activityload"]?.["openCardStatus"] || false, $["isGetRankGoods"] = $["activityload"]?.["isGetRankGoods"] || false, $["prizeInfo"] = $["activityload"]?.["cusAwardSetting"] || [], $["activityload"]?.["openCardMsg"]) && true) {
            console["log"]($["activityload"]?.["openCardMsg"]);
          }
        } else {
          if (VmHktS["data"]?.["status"] == 500) {
            console["log"](`${VmHktS["errorMessage"]}`)
            $["errMsgPin"]["push"]($["UserName"])
            $["message"]["fix"](`${VmHktS["errorMessage"]}`)
            $["skipRun"] = true
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case '绑定':
        if (!(VmHktS["success"] && VmHktS["data"]?.["status"] == 200)) {
          if (VmHktS["data"]?.["status"] == 500) {
            if (['结束', '开始']["some"](ozO_db => VmHktS["errorMessage"]["includes"](ozO_db))) {
              $["runEnd"] = true;
            }
            if (["助力失败"]["some"](ozO_db => VmHktS["errorMessage"]["includes"](ozO_db))) {
              $["opencraderr"] = true;
            }
          } else {}
        }
        break;
      case "completeState":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 200) {
          $["completeState"] = VmHktS?.["data"]?.["data"] || [];
        } else {
          if (VmHktS["data"]?.["status"] == 0x1f4) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case "uniteAddCart":
      case "collectChannel":
      case "viewShopBrand":
      case "viewShop":
      case "mission":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 0xc8 && true) {
          if (sLz0Uf6($["mission"] = VmHktS?.["data"]?.["data"], console["log"](`${VmHktS["msg"] || $["mission"]?.["remark"] || ''}`), $["message"]["fix"](`${VmHktS["msg"] || $["mission"]?.["remark"] || ''}`), ["会员成功"]["some"](ozO_db => $["mission"]?.["remark"]["includes"](ozO_db)))) {
            $["over"] = true;
          }
        } else {
          if (VmHktS["data"]?.["status"] == 0x1f4) {
            if (sLz0Uf6(console["log"](`${VmHktS["errorMessage"]}`), ["已完成过", "已经是会员", "会员成功", "出错啦"]["some"](ozO_db => VmHktS["errorMessage"]["includes"](ozO_db)))) {
              $["over"] = true;
            }
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case "getAwardSettingList":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 200) {
          $["getAwardSettingList"] = VmHktS?.["data"]?.["data"]?.["awardSettings"];
        } else {
          if (VmHktS["data"]?.["status"] == 0x1f4) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case "lockShopList":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 0xc8) {
          $["lockShopList"] = VmHktS?.["data"]?.["data"] || [];
        } else {
          if (VmHktS["data"]?.["status"] == 500) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case "exchangePost":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 0xc8) {
          let mTLAC0I = sLz0Uf6($["exchangesuccess"] = true, $["exchangePost"] = VmHktS?.["data"]?.["data"], $["exchangePost"]?.["awardSendLog"]),
            DRGHKT = mTLAC0I?.["awardType"];
          switch (DRGHKT) {
            case "jdMarket":
              console["log"](`🎉 ${mTLAC0I?.["awardName"]} 🐶`)
              $["message"]["fix"](`🎉 ${mTLAC0I?.["awardName"]} 🐶`)
              break;
            case "point":
            case "integral":
              console["log"](`🗑️ ${mTLAC0I?.["awardName"]}  🎟️`)
              $["message"]["fix"](`🗑️ ${mTLAC0I?.["awardName"]}  🎟️`)
              break;
            case "goods":
              $["generateId"] = mTLAC0I?.id
              $["prizeShiWu"] = mTLAC0I?.["awardName"]
              console["log"](`🎉 恭喜获得实物~`)
              console["log"](`奖品名称：${$["prizeShiWu"]}`)
              if (mTLAC0I?.["awardPic"]) {
                console["log"](`预览图片：${mTLAC0I?.["awardPic"]}`);
              }
              $["message"]["fix"](`🎉 恭喜获得实物，奖品名称：${$["prizeShiWu"]}`);
              if (process["env"]["WX_ADDRESS"]) {
                await NZlfXjX("updateAddress")
                await $["wait"](0xfa0)
              }
              break;
            case "coin":
            case "product":
            case "coupon":
            case "chance":
            case "card":
              console["log"](`🗑️ ${hxaeRNw[prizeType]}`);
              break;
            default:
              console["log"](`${DRGHKT} 暂时未收录，请联系作者添加\n`)
              console["log"](`${JSON["stringify"]($["exchangePost"])}`)
          }
        } else {
          if (VmHktS["data"]?.["status"] == 0x1f4) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case "inviteList":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 200) {
          $["inviteList"] = VmHktS?.["data"]?.["data"];
        } else {
          if (VmHktS["data"]?.["status"] == 0x1f4) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case "list":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 0xc8) {
          let CChifX = 0;
          for (let e9FIif in VmHktS["data"]["data"]["list"] || []) {
            let xGDf96t = VmHktS["data"]["data"]["list"][e9FIif];
            CChifX += Number(xGDf96t["awardDes"]);
          }
          if (CChifX > 0) {
            console["log"](O4ou7E0("查询奖励成功，累计获得" + CChifX, "京豆\n", LAOKBS4(-31)));
          }
        } else {
          if (VmHktS["data"]?.["status"] == 500) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case "updateAddress":
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 0xc8) {
          if (VmHktS?.["data"]?.["data"]?.["result"]) {
            if (sLz0Uf6(console["log"](`已提交收货地址 ✅\n登记为随机抽取到的第${O4ou7E0($["randNum"], 0x1, LAOKBS4(-0x1f))}套收货地址信息\n联系信息：${$["receiver"]} (${$["phone"]["replace"](/^(\d{3})\d{4}(\d{4})$/, "$1****$2")}）\n`), O4ou7E0(B4geHQ, LAOKBS4(0x20)))) {
              await Rp4fwbp["sendNotify"](`${$["name"]}中奖通知`, `【京东账号${$["index"]}】${$["nickName"]}\n抽中实物 ${$["prizeShiWu"]}，已成功自动登记收货地址\n\n活动ID：${$["activityId"]}`);
            }
            $["message"]["insert"](`${$["prizeShiWu"]}(已填地址)🎁`);
          } else {
            console["log"](VmHktS["data"]["data"]);
          }
        } else {
          if (VmHktS["data"]?.["status"] == 0x1f4) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
        break;
      case '抽奖':
        console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
        if (VmHktS["success"] && VmHktS["data"]?.["status"] == 0xc8) {
          let mTLAC0I = sLz0Uf6($["mpdzdraw"] = VmHktS?.["data"]?.["data"], $["mpdzdraw"]?.["awardSendLog"]);
          if (mTLAC0I) {
            let DRGHKT = mTLAC0I?.["awardType"];
            switch (DRGHKT) {
              case "jdMarket":
                console["log"](`🎉 ${mTLAC0I?.["awardName"]} 🐶`)
                $["message"]["fix"](`🎉 ${mTLAC0I?.["awardName"]} 🐶`)
                break;
              case "point":
              case "integral":
                console["log"](`🗑️ ${mTLAC0I?.["awardName"]}  🎟️`)
                $["message"]["fix"](`🗑️ ${mTLAC0I?.["awardName"]}  🎟️`)
                break;
              case "goods":
                $["generateId"] = mTLAC0I?.id
                $["prizeShiWu"] = mTLAC0I?.["awardName"]
                console["log"](`🎉 恭喜获得实物~`)
                console["log"](`奖品名称：${$["prizeShiWu"]}`)
                if (mTLAC0I?.["awardPic"]) {
                  console["log"](`预览图片：${mTLAC0I?.["awardPic"]}`);
                }
                $["message"]["fix"](`🎉 恭喜获得实物，奖品名称：${$["prizeShiWu"]}`);
                if (process["env"]["WX_ADDRESS"]) {
                  await NZlfXjX("updateAddress")
                  await $["wait"](0xfa0)
                }
                break;
              case "coin":
              case "product":
              case "coupon":
              case "chance":
              case "card":
                console["log"](`🗑️ ${hxaeRNw[DRGHKT]}`);
                break;
              default:
                console["log"](`${DRGHKT} 暂时未收录，请联系作者添加\n`)
                console["log"](`${JSON["stringify"]($["exchangePost"])}`)
            }
          } else {
            console["log"](`💨 空气`);
          }
        } else {
          if (VmHktS["data"]?.["status"] == 500) {
            console["log"](`${VmHktS["errorMessage"]}`);
          } else {
            console["log"](`❓${ozO_db} ${JSON["stringify"](VmHktS)}`);
          }
        }
    }
  } catch (e) {
    console["log"](`❌ 未能正确处理 ${ozO_db} 请求响应 ${e["message"] || e}`);
  }
}
async function NZlfXjX(ozO_db) {
  if ($["runEnd"] || $["outFlag"]) {
    return;
  }
  let VmHktS = $["baseUrl"],
    Tg9gA1 = $.act_type,
    _VJ0Cc = $.act_method,
    Tq6WN1 = null,
    TX_dne0 = null,
    lLonWS = "POST";
  switch (ozO_db) {
    case "activity_load":
      VmHktS += `/${Tg9gA1}/activity/load`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/activity/load`, Object["assign"]({
        ["jdToken"]: $["jdToken"],
        ["source"]: '\u0030\u0031',
        ["inviteNick"]: $["inviteNick"] || ''
      }, $["joinVenderId"] ? {
        ["shopId"]: `${$["joinVenderId"]}`
      } : {}))
      break;
    case '绑定':
      VmHktS += `/${Tg9gA1}/customer/inviteRelation`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/customer/inviteRelation`, Object["assign"]({
        ["missionType"]: "shareAct",
        ["inviterNick"]: $["inviteNick"] || ''
      }))
      break;
    case "mission":
      VmHktS += `/${Tg9gA1}/mission/completeMission`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/mission/completeMission`, Object["assign"]({
        ["missionType"]: $["missionType"]
      }, $["joinVenderId"] ? {
        ["shopId"]: $["joinVenderId"]
      } : {}, $["goodsId"] ? {
        ["goodsId"]: $["goodsId"]
      } : {}, $["goodsNumId"] ? {
        ["goodsNumId"]: $["goodsNumId"]
      } : {}))
      break;
    case "uniteAddCart":
      VmHktS += `/${Tg9gA1}/mission/completeMission`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/mission/completeMission`, Object["assign"]({
        ["missionType"]: "uniteAddCart",
        ["goodsId"]: "100032094647,6760937,100007655002,100005929367"
      }))
      break;
    case "collectChannel":
      VmHktS += `/${Tg9gA1}/mission/completeMission`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/mission/completeMission`, Object["assign"]({
        ["missionType"]: "collectChannel",
        ["goodsNumId"]: '',
        ["goodsId"]: ''
      }))
      break;
    case "viewShopBrand":
      VmHktS += `/${Tg9gA1}/mission/completeMission`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/mission/completeMission`, Object["assign"]({
        ["missionType"]: "viewShopBrand",
        ["goodsNumId"]: $["viewShopBrandId"]
      }))
      break;
    case "viewShop":
      VmHktS += `/${Tg9gA1}/mission/completeMission`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/mission/completeMission`, Object["assign"]({
        ["missionType"]: "viewShop",
        ["shopId"]: $["viewShopId"],
        ["goodsNumId"]: $["viewShopId"],
        ["goodsId"]: ''
      }))
      break;
    case "completeState":
      VmHktS += `/${Tg9gA1}/mission/completeState`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/mission/completeState`, {})
      break;
    case "getAwardSettingList":
      VmHktS += `/${Tg9gA1}/awards/getAwardSettingList`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/awards/getAwardSettingList`, {
        ["dataType"]: $["dataType"]
      })
      break;
    case "lockShopList":
      VmHktS += `/${Tg9gA1}/shopTask/lockShopList`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/shopTask/lockShopList`, {})
      break;
    case "exchangePost":
      VmHktS += `/${Tg9gA1}/interactive/exchangePost`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/interactive/exchangePost`, {
        ["dataType"]: $["dataType"],
        ["awardId"]: $["awardId"]
      })
      break;
    case '抽奖':
      VmHktS += `/${Tg9gA1}/interactive/drawPost`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/draw/drawPost`, {
        ["drawType"]: "draw"
      })
      break;
    case "updateAddress":
      VmHktS += `/${Tg9gA1}/awards/updateAddress`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/awards/updateAddress`, {
        ["receiverName"]: $["receiver"],
        ["receiverMobile"]: $["phone"],
        ["receiverProvince"]: $["province"],
        ["receiverCity"]: $["city"],
        ["receiverDistrict"]: $["county"],
        ["receiverAddress"]: $["address"],
        ["logId"]: $["generateId"]
      })
      break;
    case "inviteList":
      VmHktS += `/${Tg9gA1}/customer/inviteList`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["bizExtString"]: '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/customer/inviteList`, {})
      break;
    case "list":
      VmHktS += `/${Tg9gA1}/awards/list`
      TX_dne0 = {
        ["open_id"]: '',
        ["mix_nick"]: $["MixNick"] || '',
        ["bizExtString"]: '',
        ["user_id"]: $["userId"]
      }
      Tq6WN1 = CtcGK3(`/${_VJ0Cc}/awards/list`, {
        ["pageNo"]: 0x1,
        ["pageSize"]: 0x270f
      })
      break;
    default:
      console["log"](`❌ 未知请求 ${ozO_db}`);
      return;
  }
  const EUGj8wh = {};
  if (Tq6WN1) {
    Object["assign"](Tq6WN1, EUGj8wh);
  }
  if (TX_dne0) {
    Object["assign"](TX_dne0, EUGj8wh);
  }
  const CS9DpN = {
    ["url"]: VmHktS,
    ["method"]: lLonWS,
    ["headers"]: {
      ["Accept"]: "application/json",
      ["Accept-Encoding"]: "gzip, deflate, br",
      ["Accept-Language"]: "zh-cn",
      ["Connection"]: "keep-alive",
      ["Content-Type"]: "application/x-www-form-urlencoded",
      ["Cookie"]: pFsBpDv,
      ["User-Agent"]: $["UA"],
      ["X-Requested-With"]: "XMLHttpRequest"
    },
    ["params"]: TX_dne0,
    ["data"]: Tq6WN1,
    ["timeout"]: 0x7530
  };
  if (lLonWS === "GET" && true) {
    delete (delete CS9DpN["data"], CS9DpN["headers"]["Content-Type"]);
  }
  if ($["baseUrl"]["includes"]("mpdz13-dz.isvjcloud.com") && true) {
    delete (Object["assign"](CS9DpN["headers"], {
      ["Origin"]: "https://mpdz13-dz.isvjcloud.com",
      ["Content-Type"]: "application/json; charset=utf-8"
    }), CS9DpN["headers"]["Cookie"]);
  }
  const PS3WSC = 0x5;
  let TpgpTGW = 0x0,
    t3nu9t7 = null,
    SHfkSOp = false;
  while (TpgpTGW < PS3WSC) {
    if (TpgpTGW > 0x0) {
      await $["wait"](1000);
    }
    const xzD7uy = await NaS87c["request"](CS9DpN);
    if (O4ou7E0(xzD7uy["success"], LAOKBS4(0x20))) {
      t3nu9t7 = `🚫 ${ozO_db} 请求失败 ➜ ${xzD7uy["error"]}`
      TpgpTGW++
      continue;
    }
    if (O4ou7E0(xzD7uy["data"], ULlpoTD = 0x20)) {
      t3nu9t7 = `🚫 ${ozO_db} 请求失败 ➜ 无响应数据`
      TpgpTGW++
      continue;
    }
    await X1hmbz3(ozO_db, xzD7uy["data"])
    SHfkSOp = false
    break;
  }
  if (TpgpTGW >= PS3WSC) {
    if (sLz0Uf6(console["log"](t3nu9t7), SHfkSOp)) {
      if (O4ou7E0(JFb0FE, LAOKBS4(0x20))) {
        if (sLz0Uf6($["outFlag"] = true, $["message"])) {
          $["message"]["fix"](t3nu9t7);
        }
      }
    }
  }
}
function CtcGK3(rrah5W, ozO_db) {
  const Tg9gA1 = ERHQZXI({
      ["actId"]: $["activityId"],
      ...ozO_db,
      ["method"]: rrah5W,
      ["userId"]: $["userId"],
      ["buyerNick"]: $["MixNick"] || ''
    }),
    _VJ0Cc = {
      ["jsonRpc"]: "2.0",
      ["params"]: {
        ["commonParameter"]: {
          m: "POST",
          ["sign"]: Tg9gA1["sign"],
          ["timestamp"]: Tg9gA1["timeStamp"],
          ["userId"]: $["userId"]
        },
        ["admJson"]: {
          ["actId"]: $["actId"],
          ...ozO_db,
          ["method"]: rrah5W,
          ["userId"]: $["userId"],
          ["buyerNick"]: $["MixNick"] || ''
        }
      }
    };
  if (rrah5W["indexOf"]("missionInviteList") > O4ou7E0(1, LAOKBS4(0x31))) {
    delete _VJ0Cc["params"]["admJson"]["actId"];
  }
  return _VJ0Cc;
}
function ERHQZXI(rrah5W) {
  const ozO_db = "6cc5dbd8900e434b94c4bdb0c16348ed",
    GhwSi0 = "c1614da9ac68",
    VmHktS = new Date()["valueOf"](),
    Tg9gA1 = new RegExp('\u0027', '\u0067'),
    _VJ0Cc = new RegExp('\x7e', '\x67'),
    Tq6WN1 = encodeURIComponent(JSON["stringify"](rrah5W))["replace"](Tg9gA1, "%27")["replace"](_VJ0Cc, "%7E"),
    TX_dne0 = O4ou7E0('\u0066' + GhwSi0 + '\x44' + Tq6WN1 + '\x63' + VmHktS, ozO_db, LAOKBS4(-0x1f)),
    lLonWS = o0uPQr["MD5"](TX_dne0["toLowerCase"]())["toString"]();
  return {
    ["sign"]: lLonWS,
    ["timeStamp"]: VmHktS
  };
}
async function Xmyn0us(rrah5W) {
  const ozO_db = await NaS87c["request"]({
      ["url"]: rrah5W,
      ["method"]: "GET",
      ["headers"]: {
        ["User-Agent"]: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      ["proxy"]: null,
      ["debug"]: false,
      ["timeout"]: 0x7530
    }),
    GhwSi0 = ozO_db["data"];
  return GhwSi0;
}
function _cDGME(rrah5W, ozO_db) {
  return O4ou7E0(Math["floor"](Math["random"]() * (ozO_db - rrah5W)), rrah5W, ULlpoTD = -0x1f);
}
function IrC9wAd() {
  if ($["blacklist"] == '') {
    return;
  }
  const ozO_db = sLz0Uf6(console["log"]("当前已设置黑名单："), Array["from"](new Set($["blacklist"]["split"]('\x26'))));
  let GhwSi0 = sLz0Uf6(console["log"](O4ou7E0(ozO_db["join"]('\x26'), '\x0a', ULlpoTD = -0x1f)), ozO_db),
    VmHktS = [],
    Tg9gA1 = false;
  for (let _VJ0Cc = 0; _VJ0Cc < wOqoHE["length"]; _VJ0Cc++) {
    let Tq6WN1 = decodeURIComponent(wOqoHE[_VJ0Cc]["match"](/pt_pin=([^; ]+)(?=;?)/) && wOqoHE[_VJ0Cc]["match"](/pt_pin=([^; ]+)(?=;?)/)[1] || '');
    if (O4ou7E0(Tq6WN1, ULlpoTD = 32)) {
      break;
    }
    let TX_dne0 = false;
    for (let lLonWS of GhwSi0) if (lLonWS && lLonWS == Tq6WN1) {
      TX_dne0 = true;
      break;
    }
    if (O4ou7E0(TX_dne0, ULlpoTD = 32)) {
      Tg9gA1 = true
      VmHktS["splice"](_VJ0Cc, O4ou7E0(1, LAOKBS4(0x31)), wOqoHE[_VJ0Cc])
    }
  }
  if (Tg9gA1) {
    wOqoHE = VmHktS;
  }
}
async function P1eCsE(rrah5W) {
  if (O4ou7E0(pFsBpDv, ULlpoTD = 0x20)) {
    return sLz0Uf6(console["log"]("🚫 joinShopMember 请求失败 ➜ 未设置Cookie"), undefined);
  }
  if (O4ou7E0(rrah5W, LAOKBS4(32))) {
    return undefined;
  }
  try {
    const ozO_db = sLz0Uf6(rrah5W = ''["concat"](rrah5W), {
        ["venderId"]: rrah5W,
        ["bindByVerifyCodeFlag"]: 0x1,
        ["registerExtend"]: {},
        ["writeChildFlag"]: 0x0,
        ["channel"]: 0x196,
        ["appid"]: "27004",
        ["needSecurity"]: true,
        ["bizId"]: "shopmember_m_jd_com"
      }),
      GhwSi0 = {
        ["appId"]: "27004",
        ["appid"]: "shopmember_m_jd_com",
        ["functionId"]: "bindWithVender",
        ["clientVersion"]: "9.2.0",
        ["client"]: 'H5',
        ["body"]: ozO_db,
        t: true,
        ua: $["UA"]
      },
      VmHktS = await UmdOHsB["getH5st"](GhwSi0);
    if (O4ou7E0(VmHktS["paramsData"], ULlpoTD = 0x20)) {
      return undefined;
    }
    const Tg9gA1 = {
        ["url"]: "http://api.m.jd.com/client.action",
        ["method"]: "POST",
        ["headers"]: {
          ["Accept"]: "*/*",
          ["Accept-Encoding"]: "gzip, deflate, br",
          ["Accept-Language"]: "zh-CN,zh-Hans;q=0.9",
          ["Origin"]: "https://pages.jd.com",
          ["Referer"]: "https://pages.jd.com/",
          ["Sec-Fetch-Dest"]: "empty",
          ["Sec-Fetch-Mode"]: "cors",
          ["Content-Type"]: "application/x-www-form-urlencoded",
          ["User-Agent"]: $.UA,
          ["Cookie"]: pFsBpDv
        },
        ["data"]: Object["assign"]({}, VmHktS["paramsData"], {
          ["area"]: '',
          ["screen"]: "1290*2796",
          ["uuid"]: "88888"
        }),
        ["timeout"]: 0x7530
      },
      _VJ0Cc = await NaS87c["request"](Tg9gA1);
    if (O4ou7E0(_VJ0Cc["success"], LAOKBS4(0x20))) {
      return sLz0Uf6(console["log"](`🚫 joinShopMember 请求失败 ➜ ${_VJ0Cc["error"]}`), undefined);
    }
    if (O4ou7E0(_VJ0Cc["data"], LAOKBS4(32))) {
      return sLz0Uf6(console["log"]("🚫 joinShopMember 请求异常 ➜ 无响应数据"), undefined);
    }
    const Tq6WN1 = _VJ0Cc["data"];
    if (Tq6WN1?.["success"] === true) {
      if (Tq6WN1?.["result"] && Tq6WN1["result"]?.["giftInfo"]) {
        for (let TX_dne0 of Tq6WN1["result"]?.["giftInfo"]?.["giftList"]) console["log"](` >> 入会获得：${TX_dne0["discountString"]}${TX_dne0["prizeName"]}`);
      }
      if (Tq6WN1?.["message"] === "加入店铺会员成功") {
        return true;
      } else {
        if (Tq6WN1?.["message"] === "活动太火爆，请稍后再试") {
          console["log"](`🚫 加入店铺会员失败 ➜ ${Tq6WN1["message"]}`);
        } else {
          return sLz0Uf6(console["log"](`🚫 加入店铺会员失败 ➜ ${Tq6WN1?.["message"]}`), false);
        }
      }
    } else {
      if (Tq6WN1?.["message"]) {
        return sLz0Uf6(console["log"](`🚫 加入店铺会员失败 ➜ ${Tq6WN1["message"]}`), false);
      } else {
        console["log"](`🚫 加入店铺会员失败 ➜ ${JSON["stringify"](Tq6WN1)}`);
      }
    }
  } catch (error) {
    console["log"](`❌ joinShopMember 在处理请求中遇到了错误\n${error}`);
  }
  return undefined;
}