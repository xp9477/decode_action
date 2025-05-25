//Sun May 25 2025 06:10:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("海底捞");
const axios = require("axios");
const {
  sendNotify
} = require("./sendNotify");
const SyncRequest = require("sync-request");
let notifyStr = "";
(async () => {
  checkVersion("hdl.js", "598e46e81d4f01e6ccb6f5fb28b656d6");
  const _0x49734a = process.env.hdl_ck;
  if (!_0x49734a) {
    {
      logAndNotify("请设置 hdl_ck");
      return;
    }
  }
  let _0x1a916a = _0x49734a.split("\n");
  for (let _0x3254e4 = 0; _0x3254e4 < _0x1a916a.length; _0x3254e4++) {
    let _0xbdcf88 = _0x1a916a[_0x3254e4].split("#")[0];
    let _0x1f7681 = _0x1a916a[_0x3254e4].split("#")[1];
    const _0x12fb31 = await sendPostRequest("https://superapp-public.kiwa-tech.com/api/gateway/login/center/login/wechatLogin", undefined, {
      type: 1,
      country: "CN",
      codeType: 1,
      business: "登录",
      terminal: "会员小程序",
      openId: "" + _0xbdcf88,
      uid: "" + _0x1f7681
    });
    if (_0x12fb31.data.code !== 100000) {
      {
        logAndNotify("账号【" + (_0x3254e4 + 1) + "】已失效☹");
        continue;
      }
    }
    logAndNotify("🧐" + _0x12fb31.data.data.id + "🧐");
    logAndNotify("账号【" + (_0x3254e4 + 1) + "】【" + _0x12fb31.data.data.mobile + "】 登录成功");
    const _0x3c5d9d = _0x12fb31.data.data;
    const _0x54219d = await sendPostRequest("https://superapp-public.kiwa-tech.com/activity/wxapp/signin/query", _0x3c5d9d.token, {});
    logAndNotify("账号【" + (_0x3254e4 + 1) + "】活动名称【" + _0x54219d.data.data.activityName + "】");
    if (_0x54219d.data.data.signinOr === 0) {
      const _0x2e33bf = await sendPostRequest("https://superapp-public.kiwa-tech.com/activity/wxapp/signin/signin", _0x3c5d9d.token, {
        signinSource: "MiniApp"
      });
      if (_0x2e33bf.data.code === "ok") {
        const _0x165056 = _0x2e33bf.data.data.signinQueryDetailList;
        if (_0x165056.length === 0) {
          logAndNotify("账号【" + (_0x3254e4 + 1) + "】签到失败 signinList.length === 0");
          continue;
        }
        const _0x53ef6a = _0x165056[0];
        logAndNotify("账号【" + (_0x3254e4 + 1) + "】签到成功 碎片+【" + _0x53ef6a.fragment + "】 额外奖励+【" + _0x53ef6a.fragmentSeries + "】 菜品【" + _0x53ef6a.dishes + "】");
      }
    } else {
      {
        logAndNotify("账号【" + (_0x3254e4 + 1) + "】已签到过了");
      }
    }
    const _0x39b739 = await sendPostRequest("https://superapp-public.kiwa-tech.com/activity/wxapp/signin/queryFragment", _0x3c5d9d.token, {});
    logAndNotify("账号【" + (_0x3254e4 + 1) + "】碎片【" + _0x39b739.data.data.total + "】 活动结束时间【" + _0x39b739.data.data.expireDate + "】");
  }
})().catch(_0x497d9e => {
  logAndNotify(_0x497d9e);
}).finally(() => {
  sendNotify("海底捞", notifyStr);
  $.done();
});
function logAndNotify(_0x43acef) {
  $.log(_0x43acef);
  notifyStr += _0x43acef;
  notifyStr += "\n";
}
var headersTemp = {
  "content-type": "application/json",
  appId: 15,
  appVersion: "3.79.0",
  "Accept-Encoding": "gzip,compress,br,deflate",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003130) NetType/WIFI Language/zh_CN",
  Referer: "https://servicewechat.com/wx1ddeb67115f30d1a/138/page-frame.html"
};
function sendPostRequest(_0x11a116, _0x54c26a, _0x1c1f2a) {
  let _0x12c9bf = {};
  _0x54c26a ? _0x12c9bf = {
    ...headersTemp,
    ...{
      _HAIDILAO_APP_TOKEN: "" + _0x54c26a
    }
  } : _0x12c9bf = headersTemp;
  const _0x125bb9 = axios.create({
    headers: _0x12c9bf
  });
  return _0x125bb9.post(_0x11a116, _0x1c1f2a);
}
function Env(_0x40d6cf, _0x3bd522) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x57451d {
    constructor(_0x2aa684) {
      this.env = _0x2aa684;
    }
    send(_0x71c48e, _0x5f5079 = "GET") {
      _0x71c48e = "string" == typeof _0x71c48e ? {
        url: _0x71c48e
      } : _0x71c48e;
      let _0x384bb8 = this.get;
      "POST" === _0x5f5079 && (_0x384bb8 = this.post);
      return new Promise((_0x22b635, _0x445969) => {
        _0x384bb8.call(this, _0x71c48e, (_0xe5f04b, _0x211739, _0x4e5716) => {
          _0xe5f04b ? _0x445969(_0xe5f04b) : _0x22b635(_0x211739);
        });
      });
    }
    get(_0x4ca524) {
      return this.send.call(this.env, _0x4ca524);
    }
    post(_0x265c51) {
      return this.send.call(this.env, _0x265c51, "POST");
    }
  }
  return new class {
    constructor(_0x463663, _0x525888) {
      this.name = _0x463663;
      this.http = new _0x57451d(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x525888);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      {
        return "undefined" != typeof module && !!module.exports;
      }
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x53bf3d, _0x5121a2 = null) {
      {
        try {
          return JSON.parse(_0x53bf3d);
        } catch {
          return _0x5121a2;
        }
      }
    }
    toStr(_0x51d022, _0x286feb = null) {
      try {
        return JSON.stringify(_0x51d022);
      } catch {
        return _0x286feb;
      }
    }
    getjson(_0x283b2e, _0x25ea8d) {
      let _0xa86781 = _0x25ea8d;
      const _0x47a0af = this.getdata(_0x283b2e);
      if (_0x47a0af) {
        try {
          {
            _0xa86781 = JSON.parse(this.getdata(_0x283b2e));
          }
        } catch {}
      }
      return _0xa86781;
    }
    setjson(_0xe67c50, _0x59a461) {
      try {
        return this.setdata(JSON.stringify(_0xe67c50), _0x59a461);
      } catch {
        return false;
      }
    }
    getScript(_0x524771) {
      return new Promise(_0x2bb170 => {
        this.get({
          url: _0x524771
        }, (_0x31d739, _0x2e3942, _0x353876) => _0x2bb170(_0x353876));
      });
    }
    runScript(_0x22ae3e, _0xe86ddd) {
      {
        return new Promise(_0x32a765 => {
          let _0x3b9603 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0x3b9603 = _0x3b9603 ? _0x3b9603.replace(/\n/g, "").trim() : _0x3b9603;
          let _0x27c624 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x27c624 = _0x27c624 ? 1 * _0x27c624 : 20;
          _0x27c624 = _0xe86ddd && _0xe86ddd.timeout ? _0xe86ddd.timeout : _0x27c624;
          const [_0x5c0d2e, _0x510b1e] = _0x3b9603.split("@");
          const _0x23bac8 = {
            url: "http://" + _0x510b1e + "/v1/scripting/evaluate",
            body: {
              script_text: _0x22ae3e,
              mock_type: "cron",
              timeout: _0x27c624
            },
            headers: {
              "X-Key": _0x5c0d2e,
              Accept: "*/*"
            }
          };
          this.post(_0x23bac8, (_0x117753, _0x3302c2, _0x3cbd4c) => _0x32a765(_0x3cbd4c));
        }).catch(_0x27cd2f => this.logErr(_0x27cd2f));
      }
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x442845 = this.path.resolve(this.dataFile);
        const _0x4a986f = this.path.resolve(process.cwd(), this.dataFile);
        const _0x5ef75d = this.fs.existsSync(_0x442845);
        const _0x5b459b = !_0x5ef75d && this.fs.existsSync(_0x4a986f);
        if (!_0x5ef75d && !_0x5b459b) {
          return {};
        }
        {
          {
            const _0x423476 = _0x5ef75d ? _0x442845 : _0x4a986f;
            try {
              return JSON.parse(this.fs.readFileSync(_0x423476));
            } catch (_0x47b1b6) {
              return {};
            }
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x128c57 = this.path.resolve(this.dataFile);
          const _0x21d136 = this.path.resolve(process.cwd(), this.dataFile);
          const _0x4f15cb = this.fs.existsSync(_0x128c57);
          const _0x98b22d = !_0x4f15cb && this.fs.existsSync(_0x21d136);
          const _0x5a40bf = JSON.stringify(this.data);
          _0x4f15cb ? this.fs.writeFileSync(_0x128c57, _0x5a40bf) : _0x98b22d ? this.fs.writeFileSync(_0x21d136, _0x5a40bf) : this.fs.writeFileSync(_0x128c57, _0x5a40bf);
        }
      }
    }
    lodash_get(_0x255fed, _0xdd20e, _0x24f245) {
      {
        const _0x594492 = _0xdd20e.replace(/\[(\d+)\]/g, ".$1").split(".");
        let _0x409dca = _0x255fed;
        for (const _0x2730b6 of _0x594492) if (_0x409dca = Object(_0x409dca)[_0x2730b6], undefined === _0x409dca) {
          return _0x24f245;
        }
        return _0x409dca;
      }
    }
    lodash_set(_0x4ac36d, _0x27069a, _0x4bbcc8) {
      return Object(_0x4ac36d) !== _0x4ac36d ? _0x4ac36d : (Array.isArray(_0x27069a) || (_0x27069a = _0x27069a.toString().match(/[^.[\]]+/g) || []), _0x27069a.slice(0, -1).reduce((_0x5e176a, _0x3a4ec2, _0x480f39) => Object(_0x5e176a[_0x3a4ec2]) === _0x5e176a[_0x3a4ec2] ? _0x5e176a[_0x3a4ec2] : _0x5e176a[_0x3a4ec2] = Math.abs(_0x27069a[_0x480f39 + 1]) >> 0 == +_0x27069a[_0x480f39 + 1] ? [] : {}, _0x4ac36d)[_0x27069a[_0x27069a.length - 1]] = _0x4bbcc8, _0x4ac36d);
    }
    getdata(_0x420495) {
      let _0x5f2aa3 = this.getval(_0x420495);
      if (/^@/.test(_0x420495)) {
        const [, _0x2db781, _0x335b11] = /^@(.*?)\.(.*?)$/.exec(_0x420495);
        const _0x3064d3 = _0x2db781 ? this.getval(_0x2db781) : "";
        if (_0x3064d3) {
          try {
            {
              const _0x51241c = JSON.parse(_0x3064d3);
              _0x5f2aa3 = _0x51241c ? this.lodash_get(_0x51241c, _0x335b11, "") : _0x5f2aa3;
            }
          } catch (_0x12fbaf) {
            _0x5f2aa3 = "";
          }
        }
      }
      return _0x5f2aa3;
    }
    setdata(_0x36276a, _0x11bb86) {
      let _0x4b109d = false;
      if (/^@/.test(_0x11bb86)) {
        {
          const [, _0xe4e11, _0xc8b0ba] = /^@(.*?)\.(.*?)$/.exec(_0x11bb86);
          const _0x55fc2b = this.getval(_0xe4e11);
          const _0x456b18 = _0xe4e11 ? "null" === _0x55fc2b ? null : _0x55fc2b || "{}" : "{}";
          try {
            {
              const _0x3de4a6 = JSON.parse(_0x456b18);
              this.lodash_set(_0x3de4a6, _0xc8b0ba, _0x36276a);
              _0x4b109d = this.setval(JSON.stringify(_0x3de4a6), _0xe4e11);
            }
          } catch (_0x30a6e8) {
            {
              const _0x35ec8c = {};
              this.lodash_set(_0x35ec8c, _0xc8b0ba, _0x36276a);
              _0x4b109d = this.setval(JSON.stringify(_0x35ec8c), _0xe4e11);
            }
          }
        }
      } else {
        _0x4b109d = this.setval(_0x36276a, _0x11bb86);
      }
      return _0x4b109d;
    }
    getval(_0x1af974) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1af974) : this.isQuanX() ? $prefs.valueForKey(_0x1af974) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1af974]) : this.data && this.data[_0x1af974] || null;
    }
    setval(_0x2ad006, _0x2135ac) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2ad006, _0x2135ac) : this.isQuanX() ? $prefs.setValueForKey(_0x2ad006, _0x2135ac) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2135ac] = _0x2ad006, this.writedata(), true) : this.data && this.data[_0x2135ac] || null;
      }
    }
    initGotEnv(_0x2bfe42) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x2bfe42 && (_0x2bfe42.headers = _0x2bfe42.headers ? _0x2bfe42.headers : {}, undefined === _0x2bfe42.headers.Cookie && undefined === _0x2bfe42.cookieJar && (_0x2bfe42.cookieJar = this.ckjar));
    }
    get(_0x54508d, _0x57a020 = () => {}) {
      {
        _0x54508d.headers && (delete _0x54508d.headers["Content-Type"], delete _0x54508d.headers["Content-Length"]);
        this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x54508d.headers = _0x54508d.headers || {}, Object.assign(_0x54508d.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.get(_0x54508d, (_0x306b76, _0x5cbaf9, _0x2a62fb) => {
          !_0x306b76 && _0x5cbaf9 && (_0x5cbaf9.body = _0x2a62fb, _0x5cbaf9.statusCode = _0x5cbaf9.status);
          _0x57a020(_0x306b76, _0x5cbaf9, _0x2a62fb);
        })) : this.isQuanX() ? (this.isNeedRewrite && (_0x54508d.opts = _0x54508d.opts || {}, Object.assign(_0x54508d.opts, {
          hints: false
        })), $task.fetch(_0x54508d).then(_0x1e8d00 => {
          const {
            statusCode: _0x211ee5,
            statusCode: _0x79aa2a,
            headers: _0x4a44df,
            body: _0x2ad47c
          } = _0x1e8d00;
          _0x57a020(null, {
            status: _0x211ee5,
            statusCode: _0x79aa2a,
            headers: _0x4a44df,
            body: _0x2ad47c
          }, _0x2ad47c);
        }, _0x586e81 => _0x57a020(_0x586e81))) : this.isNode() && (this.initGotEnv(_0x54508d), this.got(_0x54508d).on("redirect", (_0x596627, _0x4c8a37) => {
          try {
            if (_0x596627.headers["set-cookie"]) {
              {
                const _0x41a52f = _0x596627.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x41a52f && this.ckjar.setCookieSync(_0x41a52f, null);
                _0x4c8a37.cookieJar = this.ckjar;
              }
            }
          } catch (_0xbf2c1e) {
            {
              this.logErr(_0xbf2c1e);
            }
          }
        }).then(_0x510198 => {
          {
            const {
              statusCode: _0x22a7b5,
              statusCode: _0x17f46b,
              headers: _0x366bb1,
              body: _0x2211d7
            } = _0x510198;
            _0x57a020(null, {
              status: _0x22a7b5,
              statusCode: _0x17f46b,
              headers: _0x366bb1,
              body: _0x2211d7
            }, _0x2211d7);
          }
        }, _0x234ff0 => {
          const {
            message: _0x62fa4c,
            response: _0x131e6a
          } = _0x234ff0;
          _0x57a020(_0x62fa4c, _0x131e6a, _0x131e6a && _0x131e6a.body);
        }));
      }
    }
    post(_0x1bdb49, _0x294fea = () => {}) {
      {
        if (_0x1bdb49.body && _0x1bdb49.headers && !_0x1bdb49.headers["Content-Type"] && (_0x1bdb49.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x1bdb49.headers && delete _0x1bdb49.headers["Content-Length"], this.isSurge() || this.isLoon()) {
          this.isSurge() && this.isNeedRewrite && (_0x1bdb49.headers = _0x1bdb49.headers || {}, Object.assign(_0x1bdb49.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.post(_0x1bdb49, (_0xdc1284, _0x444f7c, _0x541ddc) => {
            !_0xdc1284 && _0x444f7c && (_0x444f7c.body = _0x541ddc, _0x444f7c.statusCode = _0x444f7c.status);
            _0x294fea(_0xdc1284, _0x444f7c, _0x541ddc);
          });
        } else {
          if (this.isQuanX()) {
            _0x1bdb49.method = "POST";
            this.isNeedRewrite && (_0x1bdb49.opts = _0x1bdb49.opts || {}, Object.assign(_0x1bdb49.opts, {
              hints: false
            }));
            $task.fetch(_0x1bdb49).then(_0x4fa340 => {
              const {
                statusCode: _0xcbe0bc,
                statusCode: _0x286db0,
                headers: _0x9cd190,
                body: _0x2db5ff
              } = _0x4fa340;
              _0x294fea(null, {
                status: _0xcbe0bc,
                statusCode: _0x286db0,
                headers: _0x9cd190,
                body: _0x2db5ff
              }, _0x2db5ff);
            }, _0xf88144 => _0x294fea(_0xf88144));
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x1bdb49);
                const {
                  url: _0x54476b,
                  ..._0x253fa8
                } = _0x1bdb49;
                this.got.post(_0x54476b, _0x253fa8).then(_0x5ab575 => {
                  {
                    const {
                      statusCode: _0x41883f,
                      statusCode: _0xe15f60,
                      headers: _0xb177f5,
                      body: _0x4f5d44
                    } = _0x5ab575;
                    _0x294fea(null, {
                      status: _0x41883f,
                      statusCode: _0xe15f60,
                      headers: _0xb177f5,
                      body: _0x4f5d44
                    }, _0x4f5d44);
                  }
                }, _0x3c5c81 => {
                  {
                    const {
                      message: _0x4ba556,
                      response: _0xb1b144
                    } = _0x3c5c81;
                    _0x294fea(_0x4ba556, _0xb1b144, _0xb1b144 && _0xb1b144.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    time(_0x319605, _0x32118b = null) {
      const _0x711b0c = _0x32118b ? new Date(_0x32118b) : new Date();
      let _0x75e5f2 = {
        "M+": _0x711b0c.getMonth() + 1,
        "d+": _0x711b0c.getDate(),
        "H+": _0x711b0c.getHours(),
        "m+": _0x711b0c.getMinutes(),
        "s+": _0x711b0c.getSeconds(),
        "q+": Math.floor((_0x711b0c.getMonth() + 3) / 3),
        S: _0x711b0c.getMilliseconds()
      };
      /(y+)/.test(_0x319605) && (_0x319605 = _0x319605.replace(RegExp.$1, (_0x711b0c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x19837e in _0x75e5f2) new RegExp("(" + _0x19837e + ")").test(_0x319605) && (_0x319605 = _0x319605.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x75e5f2[_0x19837e] : ("00" + _0x75e5f2[_0x19837e]).substr(("" + _0x75e5f2[_0x19837e]).length)));
      return _0x319605;
    }
    msg(_0x1b4d2e = _0x40d6cf, _0xb11f76 = "", _0x18bc06 = "", _0x2d3383) {
      const _0x487892 = _0x3c8e97 => {
        {
          if (!_0x3c8e97) {
            return _0x3c8e97;
          }
          if ("string" == typeof _0x3c8e97) {
            return this.isLoon() ? _0x3c8e97 : this.isQuanX() ? {
              "open-url": _0x3c8e97
            } : this.isSurge() ? {
              url: _0x3c8e97
            } : undefined;
          }
          if ("object" == typeof _0x3c8e97) {
            {
              if (this.isLoon()) {
                {
                  let _0x2462ff = _0x3c8e97.openUrl || _0x3c8e97.url || _0x3c8e97["open-url"];
                  let _0x3a8ee6 = _0x3c8e97.mediaUrl || _0x3c8e97["media-url"];
                  return {
                    openUrl: _0x2462ff,
                    mediaUrl: _0x3a8ee6
                  };
                }
              }
              if (this.isQuanX()) {
                let _0x3d5496 = _0x3c8e97["open-url"] || _0x3c8e97.url || _0x3c8e97.openUrl;
                let _0x5d345b = _0x3c8e97["media-url"] || _0x3c8e97.mediaUrl;
                return {
                  "open-url": _0x3d5496,
                  "media-url": _0x5d345b
                };
              }
              if (this.isSurge()) {
                {
                  let _0x6767fa = _0x3c8e97.url || _0x3c8e97.openUrl || _0x3c8e97["open-url"];
                  return {
                    url: _0x6767fa
                  };
                }
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1b4d2e, _0xb11f76, _0x18bc06, _0x487892(_0x2d3383)) : this.isQuanX() && $notify(_0x1b4d2e, _0xb11f76, _0x18bc06, _0x487892(_0x2d3383))), !this.isMuteLog) {
        let _0x4afbca = ["", "==============📣系统通知📣=============="];
        _0x4afbca.push(_0x1b4d2e);
        _0xb11f76 && _0x4afbca.push(_0xb11f76);
        _0x18bc06 && _0x4afbca.push(_0x18bc06);
        console.log(_0x4afbca.join("\n"));
        this.logs = this.logs.concat(_0x4afbca);
      }
    }
    log(..._0x3fffad) {
      {
        _0x3fffad.length > 0 && (this.logs = [...this.logs, ..._0x3fffad]);
        console.log(_0x3fffad.join(this.logSeparator));
      }
    }
    logErr(_0xf563b, _0x3a67b3) {
      {
        const _0x43b9d6 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        _0x43b9d6 ? this.log("", "❗️" + this.name + ", 错误!", _0xf563b.stack) : this.log("", "❗️" + this.name + ", 错误!", _0xf563b);
      }
    }
    wait(_0x3ae95f) {
      {
        return new Promise(_0x490d59 => setTimeout(_0x490d59, _0x3ae95f));
      }
    }
    done(_0x4e7bb2 = {}) {
      const _0x4f1faf = new Date().getTime();
      const _0x2ef8c5 = (_0x4f1faf - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2ef8c5 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4e7bb2);
    }
  }(_0x40d6cf, _0x3bd522);
}
function checkVersion(_0x3c4b9b, _0x41a4cc) {
  try {
    {
      logAndNotify("文件md5：" + _0x41a4cc);
      const _0x1a9240 = SyncRequest("GET", "https://bus.yxrong.cn/api/update/check?fileName=" + _0x3c4b9b + "&fileMd5=" + _0x41a4cc);
      const _0xe0f8ed = JSON.parse(_0x1a9240.getBody("utf8"));
      _0xe0f8ed.code === 301 ? process.exit(0) : logAndNotify(_0xe0f8ed.data);
    }
  } catch (_0x30d582) {
    logAndNotify("版本检查失败:", _0x30d582);
  }
}