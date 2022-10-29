import './scrollNum.css';

function getNum(p, unit = 'px') {
  if (isNaN(p * 1)) {
    return p;
  }
  return `${p}${unit}`
}

var def = {
  install: function (Vue, option = {}) {
    var name = option.name || 'scroll-num';
    Vue.component(name, {
      props: {
        height: { type: [Number, String], default: 20 },
        width: { type: [Number, String], default: 20 },
        size: { type: [Number, String], default: 16 },
        during: { type: [Number, String], default: 100 },
        value: { type: Number, default: 0 }
      },
      data: function () {
        return {
        }
      },
      render: function (h) {
        var circle = new Array(10).fill(0)
          .map((x, i) => h('div', {
            staticClass: 'box2',
            style: {
              ...this.getPositionStyle(i),
              ...this.unitStyle
            },
          }, [i]))
        return h('div', {
          staticClass: 'outter'
        }, [
          h('div', {
            staticClass: 'box1',
            style: this.unitStyle,
          }, [...circle]),
        ])
      },
      computed: {
        unitStyle() {
          const sty = {
            dispaly: 'inline-block',
            width: getNum(this.width),
            height: getNum(this.height),
            fontSize: getNum(this.size),
            during: getNum(this.during, 'ms')
          };

          return sty;
        },
        target() {
          return this.value % 10;
        }
      },
      methods: {
        getPositionStyle(i){
          // TODO: 两层计算来凑
        }
      },
    });
  }
};

export default def;
