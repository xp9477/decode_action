//Sun Jun 01 2025 06:06:12 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var aYnN4GG = Object['defineProperty'],
  jIUxCe6,
  OfTa9G,
  PDgVu0,
  TB6Uas,
  GXdxQq,
  ldT1MF,
  Y9NboLi,
  vQ6Ggd,
  RVsDsg,
  pIGGxC;
function ZO9UK57() {
  return globalThis;
}
function o4rsln() {
  return global;
}
function Y3vg0J() {
  return window;
}
function JcigT42() {
  return new Function('return this')();
}
function wn35js(aYnN4GG = [ZO9UK57, o4rsln, Y3vg0J, JcigT42], WMCpQmy, jIUxCe6 = [], OfTa9G, PDgVu0) {
  WMCpQmy = WMCpQmy;
  try {
    WMCpQmy = Object
    jIUxCe6.push(''.__proto__.constructor.name)
  } catch (e) {}
  XSLBLG: for (OfTa9G = 0; OfTa9G < aYnN4GG.length; OfTa9G++) try {
    WMCpQmy = aYnN4GG[OfTa9G]();
    for (PDgVu0 = 0; PDgVu0 < jIUxCe6.length; PDgVu0++) {
      if (typeof WMCpQmy[jIUxCe6[PDgVu0]] === "undefined") {
        continue XSLBLG;
      }
    }
    return WMCpQmy;
  } catch (e) {}
  return WMCpQmy || this;
}
jIUxCe6 = wn35js() || {}
OfTa9G = jIUxCe6.TextDecoder
PDgVu0 = jIUxCe6.Uint8Array
TB6Uas = jIUxCe6.Buffer
GXdxQq = jIUxCe6.String || String
ldT1MF = jIUxCe6.Array || Array
vQ6Ggd = ((VE9cZOh = {
  vcKiGa4: 0x35
}) => {
  return VE9cZOh;
})()
function YvhVqU(...aYnN4GG) {
  return aYnN4GG[aYnN4GG["length"] - 1];
}
function GeGDiF(VE9cZOh, aYnN4GG) {
  switch (RVsDsg) {
    case -30:
      return !VE9cZOh;
    case -0x5:
      return VE9cZOh + aYnN4GG;
    case 21:
      return -VE9cZOh;
  }
}
function nr3qsiS(VE9cZOh) {
  return YvhVqU(VE9cZOh = RVsDsg + (RVsDsg = VE9cZOh, 0x0), VE9cZOh);
}
RVsDsg = RVsDsg
pIGGxC = Object["create"](null)
class AAs5lNp {
  constructor() {
    this.title = ''
    this.content = ''
    this._sendNotify = require('../sendNotify').sendNotify
    this._accountsArray = []
    this._messageSeparator = ''
    this._messageMatchKeywords = []
    this._messageFilterKeywords = []
    this._messageClearKeywords = []
    this._showUserName = true
    this._userNameMasking = false
    this._nicknames = {}
    this._prefixFormat = ''
    this._defaultPrefixFormat = "【京东账号%】@："
    this._autoMergeType = ''
    this._initConfig()
  }
  ["_initConfig"]() {
    if (process["env"]["JD_NOTIFY_MATCH_KEYWORDS"]) {
      this["_messageMatchKeywords"] = process["env"]["JD_NOTIFY_MATCH_KEYWORDS"]["split"]("@")["map"](aYnN4GG => aYnN4GG["trim"]())["filter"](Boolean)
    }
    if (process["env"]["JD_NOTIFY_FILTER_KEYWORDS"]) {
      this["_messageFilterKeywords"] = process["env"]["JD_NOTIFY_FILTER_KEYWORDS"]["split"]("@")["map"](aYnN4GG => {
        return aYnN4GG["trim"]();
      })["filter"](Boolean)
    }
    if (process["env"]["JD_NOTIFY_CLEAR_KEYWORDS"]) {
      this["_messageClearKeywords"] = process["env"]["JD_NOTIFY_CLEAR_KEYWORDS"]["split"]('|')["filter"](Boolean)
    }
    if (YvhVqU(this["_messageSeparator"] = process["env"]["JD_NOTIFY_SEPARATOR"] || process["env"]["JD_NOTIFY_DELIMITER"] || '，', process["env"]["JD_NOTIFY_NICKNAMES"])) {
      const Bhs4_N = process["env"]["JD_NOTIFY_NICKNAMES"]["split"](',');
      Bhs4_N["forEach"](aYnN4GG => {
        let PDgVu0 = aYnN4GG["split"]('@');
        if (PDgVu0["length"] === 2 && PDgVu0[0] && PDgVu0[0x1]) {
          this["_nicknames"][PDgVu0[0]] = PDgVu0[0x1];
        }
      });
    }
    if (YvhVqU(this["_showUserName"] = GeGDiF(process["env"]["JD_NOTIFY_SHOW_USERNAME"] === "false", nr3qsiS(-30)), this["_userNameMasking"] = (process["env"]["JD_NOTIFY_USERNAME_MASKING"] || process["env"]["JD_NOTIFY_USERNAME_DESENSITIZATION"]) === "true", this["_prefixFormat"] = process["env"]["JD_NOTIFY_PREFIX_FORMAT"] || process["env"]["JD_NOTIFY_PREFIX_FORMATA"] || this["_defaultPrefixFormat"], process["env"]["JD_NOTIFY_AUTO_MERGE_TYPE"])) {
      this["_autoMergeType"] = process["env"]["JD_NOTIFY_AUTO_MERGE_TYPE"];
    }
  }
  ["config"]({
    ["title"]: VE9cZOh,
    ["content"]: aYnN4GG,
    ["messageSeparator"]: eog1z_d
  }) {
    if (VE9cZOh !== undefined) {
      this["title"] = VE9cZOh;
    }
    if (aYnN4GG !== undefined) {
      this["content"] = aYnN4GG;
    }
    if (eog1z_d !== undefined) {
      this["_messageSeparator"] = eog1z_d;
    }
  }
  ["setTitle"](VE9cZOh) {
    var aYnN4GG = ["title"];
    this[aYnN4GG[0]] = VE9cZOh;
  }
  ["unsetTitle"]() {
    var VE9cZOh = ["title"];
    this[VE9cZOh[0x0]] = '';
  }
  ["getTitle"]() {
    return this["title"];
  }
  ["setContent"](VE9cZOh) {
    var aYnN4GG = "content";
    this[aYnN4GG] = VE9cZOh;
  }
  ["appendContent"](VE9cZOh) {
    this["content"] += VE9cZOh;
  }
  ["clearContent"]() {
    this["content"] = '';
  }
  ["getContent"]() {
    var VE9cZOh = "content";
    return this[VE9cZOh];
  }
  ["updateContent"](VE9cZOh) {
    this["content"] = VE9cZOh;
  }
  ["create"](aYnN4GG, jIUxCe6) {
    const Y9NboLi = this["_messageMatchKeywords"],
      rHZK4XA = this["_messageFilterKeywords"],
      ZVIpYT6 = this["_messageClearKeywords"],
      yUDfX7U = this["_prefixFormat"],
      ZO9UK57 = this["_nicknames"];
    if (aYnN4GG === undefined && vQ6Ggd.vcKiGa4 > -73) {
      aYnN4GG = '';
    }
    const o4rsln = {
      ["index"]: `${''}`,
      ["userName"]: jIUxCe6,
      ["fixed"]: false,
      ["messages"]: [],
      ["originMessages"]: [],
      ["insert"](aYnN4GG) {
        if (GeGDiF(aYnN4GG, RVsDsg = -0x1e)) {
          return;
        }
        if (o4rsln["fixed"]) {
          return;
        }
        if (YvhVqU(o4rsln["originMessages"]["push"](aYnN4GG["trim"]()), Y9NboLi["length"] > 0 && GeGDiF(Y9NboLi["some"](jIUxCe6 => {
          return aYnN4GG["includes"](jIUxCe6);
        }), nr3qsiS(-30)))) {
          return;
        } else {
          if (rHZK4XA["length"] > 0 && rHZK4XA["some"](jIUxCe6 => {
            var OfTa9G = {
              IptGK66: "includes"
            };
            return aYnN4GG[OfTa9G.IptGK66](jIUxCe6);
          })) {
            return;
          }
        }
        if (ZVIpYT6["length"] > 0) {
          ZVIpYT6["forEach"](jIUxCe6 => {
            aYnN4GG = aYnN4GG["replace"](new RegExp(jIUxCe6, 'g'), '')
          });
        }
        o4rsln["messages"]["push"](aYnN4GG["trim"]());
      },
      ["fix"](aYnN4GG) {
        if (GeGDiF(aYnN4GG, RVsDsg = -30)) {
          return;
        }
        if (YvhVqU(o4rsln["fixed"] = true, o4rsln["originMessages"] = [aYnN4GG["trim"]()], Y9NboLi["length"] > 0x0 && GeGDiF(Y9NboLi["some"](jIUxCe6 => {
          var OfTa9G = "gHcKf1H" in pIGGxC;
          if (OfTa9G) {
            "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match(GeGDiF("q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", RVsDsg = -5))
          }
          return aYnN4GG["includes"](jIUxCe6);
        }), RVsDsg = -30))) {
          return;
        } else {
          if (rHZK4XA["length"] > 0 && rHZK4XA["some"](jIUxCe6 => aYnN4GG["includes"](jIUxCe6))) {
            return;
          }
        }
        if (ZVIpYT6["length"] > 0x0) {
          ZVIpYT6["forEach"](jIUxCe6 => (aYnN4GG = aYnN4GG["replace"](new RegExp(jIUxCe6, 'g'), ''), undefined));
        }
        o4rsln["messages"] = [aYnN4GG["trim"]()];
      },
      ["updateIndex"](jIUxCe6) {
        o4rsln["index"] = `${jIUxCe6}`;
      },
      ["updateUsername"](aYnN4GG) {
        o4rsln["userName"] = aYnN4GG;
      },
      ["getInlineContent"]() {
        var aYnN4GG = ["index"];
        let OfTa9G = this["originMessages"]["join"](this["_messageSeparator"])["trim"]();
        if (this["_autoMergeType"]) {
          OfTa9G = this["_mergeMessages"](OfTa9G, this["_autoMergeType"]);
        }
        const PDgVu0 = decodeURIComponent(ZO9UK57[this["userName"]] || this["userName"]),
          TB6Uas = yUDfX7U["replace"](/%/g, this[aYnN4GG[0]])["replace"](/@/g, PDgVu0);
        return `${TB6Uas}${OfTa9G || '无'}`;
      }
    };
    return YvhVqU(this["_accountsArray"]["push"](o4rsln), o4rsln);
  }
  ["dispose"](VE9cZOh) {
    this["_accountsArray"] = this["_accountsArray"]["filter"](aYnN4GG => aYnN4GG !== VE9cZOh);
  }
  ["disposeByUsername"](VE9cZOh) {
    const jIUxCe6 = this["_accountsArray"]["find"](jIUxCe6 => decodeURIComponent(jIUxCe6["userName"]) === decodeURIComponent(VE9cZOh));
    if (jIUxCe6) {
      this["dispose"](jIUxCe6);
    }
  }
  ["disposeByIndex"](VE9cZOh) {
    const aYnN4GG = this["_accountsArray"]["find"](aYnN4GG => aYnN4GG["index"] === `${VE9cZOh}`);
    if (aYnN4GG && vQ6Ggd.vcKiGa4 > -73) {
      this["dispose"](aYnN4GG);
    }
  }
  ["disposeAllMessage"]() {
    this["_accountsArray"] = [];
  }
  ["getMessage"](aYnN4GG = false) {
    if (this["_accountsArray"]["length"] === 0x0) {
      return '';
    }
    if (YvhVqU(this["_formatAcountsMessage"](), this["_accountsArray"]["length"]) === 0x0) {
      return '';
    }
    let OfTa9G = [];
    const PDgVu0 = this["_userNameMasking"],
      TB6Uas = this["_showUserName"],
      GXdxQq = GeGDiF(TB6Uas, RVsDsg = -0x1e) && this["_prefixFormat"] === this["_defaultPrefixFormat"] ? this["_prefixFormat"]["replace"](/：$/, '') : this["_prefixFormat"];
    for (const {
      ["userName"]: ldT1MF,
      ["index"]: Y9NboLi,
      ["messages"]: rHZK4XA
    } of this["_accountsArray"]) {
      let yUDfX7U = '';
      if (TB6Uas) {
        var vQ6Ggd = {
          ATKmla: "_nicknames"
        };
        const pIGGxC = decodeURIComponent(this[vQ6Ggd.ATKmla][ldT1MF] || ldT1MF);
        yUDfX7U = PDgVu0 && aYnN4GG ? this["_desensitizingUserName"](pIGGxC) : pIGGxC;
      }
      const ZO9UK57 = GXdxQq["replace"](/%/g, Y9NboLi)["replace"](/@/g, yUDfX7U),
        o4rsln = rHZK4XA["join"](this["_messageSeparator"])["trim"]();
      OfTa9G["push"](`${ZO9UK57}${o4rsln}`);
    }
    return OfTa9G["join"]('\n')["trim"]();
  }
  ["reset"]() {
    this["unsetTitle"]()
    this["clearContent"]()
    this["disposeAllMessage"]()
  }
  async ["send"](VE9cZOh, aYnN4GG) {
    await this["_sendNotify"](VE9cZOh, aYnN4GG);
  }
  async ["sendNotify"](VE9cZOh, aYnN4GG) {
    await this["send"](VE9cZOh, aYnN4GG);
  }
  async ["push"]() {
    let OfTa9G = this["content"]["trim"]();
    const PDgVu0 = this["getMessage"](true);
    if (PDgVu0) {
      OfTa9G = GeGDiF(`${PDgVu0["trim"]()}\n\n`, OfTa9G, RVsDsg = -5);
    }
    await this["send"](this["title"], OfTa9G);
  }
  ["_mergeMessages"](aYnN4GG, jIUxCe6) {
    try {
      function OfTa9G(aYnN4GG) {
        var jIUxCe6 = {
          UCs6Lq: "count"
        };
        const OfTa9G = aYnN4GG["match"](/(\d+)(.+)/);
        return OfTa9G ? {
          [jIUxCe6.UCs6Lq]: parseInt(OfTa9G[0x1]),
          ["name"]: OfTa9G[0x2]["trim"]()
        } : {
          ["count"]: null,
          ["name"]: aYnN4GG
        };
      }
      function PDgVu0(aYnN4GG, OfTa9G, PDgVu0) {
        return OfTa9G !== null && PDgVu0["split"]("@")["includes"](aYnN4GG);
      }
      for (let TB6Uas = 0x0; TB6Uas < aYnN4GG["length"]; TB6Uas++) {
        const {
          ["count"]: GXdxQq,
          ["name"]: ldT1MF
        } = OfTa9G(aYnN4GG[TB6Uas]);
        if (PDgVu0(ldT1MF, GXdxQq, jIUxCe6)) {
          for (let Y9NboLi = GeGDiF(TB6Uas, 1, RVsDsg = -5); Y9NboLi < aYnN4GG["length"]; Y9NboLi++) {
            const {
              ["count"]: rHZK4XA,
              ["name"]: ZVIpYT6
            } = OfTa9G(aYnN4GG[Y9NboLi]);
            if (ldT1MF === ZVIpYT6) {
              aYnN4GG[TB6Uas] = `${GeGDiF(GXdxQq, rHZK4XA, nr3qsiS(-5))}${ldT1MF}`
              aYnN4GG["splice"](Y9NboLi, 1)
              Y9NboLi--
            }
          }
        }
      }
      return aYnN4GG;
    } catch {
      return aYnN4GG;
    }
  }
  ["_desensitizingUserName"](aYnN4GG) {
    let jIUxCe6 = '';
    if (aYnN4GG["length"] < 5) {
      switch (aYnN4GG["length"]) {
        case 1:
          jIUxCe6 = aYnN4GG;
          break;
        case 0x2:
          jIUxCe6 = GeGDiF(aYnN4GG["slice"](0x0, 0x1), '*', RVsDsg = -5);
          break;
        case 3:
          jIUxCe6 = GeGDiF(aYnN4GG["slice"](0x0, 0x1) + "*", aYnN4GG["slice"](GeGDiF(0x1, RVsDsg = 21)), nr3qsiS(-5));
          break;
        case 4:
          jIUxCe6 = GeGDiF(aYnN4GG["slice"](0x0, 2), '**', nr3qsiS(-0x5));
      }
    } else {
      jIUxCe6 = GeGDiF(aYnN4GG["slice"](0, 2) + "*"["repeat"](aYnN4GG["length"] - 4), aYnN4GG["slice"](GeGDiF(2, RVsDsg = 21)), nr3qsiS(-5));
    }
    return jIUxCe6;
  }
  ["_formatAcountsMessage"]() {
    let VE9cZOh = [];
    for (let {
      ["userName"]: aYnN4GG,
      ["index"]: jIUxCe6,
      ["messages"]: OfTa9G
    } of this["_accountsArray"]) {
      var PDgVu0 = ["find"];
      const TB6Uas = YvhVqU(OfTa9G = OfTa9G["filter"](VE9cZOh => VE9cZOh !== null && VE9cZOh !== undefined && VE9cZOh !== ''), VE9cZOh[PDgVu0[0x0]](VE9cZOh => VE9cZOh["userName"] === aYnN4GG));
      if (TB6Uas) {
        if (TB6Uas["index"] === '') {
          TB6Uas["index"] = jIUxCe6;
        }
        if (OfTa9G["length"] > 0) {
          TB6Uas["messages"]["push"](...OfTa9G);
        }
      } else {
        VE9cZOh["push"]({
          ["userName"]: aYnN4GG,
          ["index"]: jIUxCe6,
          ["messages"]: OfTa9G
        });
      }
    }
    if (YvhVqU(VE9cZOh = VE9cZOh["filter"](VE9cZOh => VE9cZOh["messages"]["length"] > 0x0), this["_autoMergeType"])) {
      VE9cZOh["forEach"](VE9cZOh => {
        VE9cZOh["messages"] = this["_mergeMessages"](VE9cZOh["messages"], this["_autoMergeType"]);
      });
    }
    this["_accountsArray"] = VE9cZOh;
  }
}
module["exports"] = new AAs5lNp();