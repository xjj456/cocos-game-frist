System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, EventManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../Base/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4410nfygxPDqQYzWEhAoRA", "EventManager", undefined);

      _export("default", EventManager = class EventManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "eventDic", new Map());
        }

        static get Instance() {
          return super.GetInstance();
        }

        on(eventName, func, ctx) {
          if (this.eventDic.has(eventName)) {
            this.eventDic.get(eventName).push({
              func,
              ctx
            });
          } else {
            this.eventDic.set(eventName, [{
              func,
              ctx
            }]);
          }
        }

        off(eventName, func) {
          if (this.eventDic.has(eventName)) {
            const index = this.eventDic.get(eventName).findIndex(i => i.func === func);
            index > -1 && this.eventDic.get(eventName).splice(index, 1);
          }
        }

        emit(eventName, ...params) {
          if (this.eventDic.has(eventName)) {
            this.eventDic.get(eventName).forEach(({
              func,
              ctx
            }) => {
              ctx ? func.apply(ctx, params) : func(params);
            });
          }
        }

        clear() {
          this.eventDic.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventManager.js.map