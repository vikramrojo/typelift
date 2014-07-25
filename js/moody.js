window.onload = function() {

  var base,
  val = [],
  ratio,
  line=1.35;

  // function modularScale (msBase, msValue, msRatio) {
  //   for ( var x=0; x<msValue; x++) {
  //     val[x] = '' + Math.pow(msRatio,x)*msBase; + 'px'
  //   }
  // };

  // modularScale (1, 5, ratio);

  var absurd = Absurd();

  absurd.di.register('modularScale', function (msBase, msValue, msRatio){
    for ( var x=0; x<msValue; x++) {
        val[x] = '' + Math.pow(msRatio,x)*msBase; + 'px'
        console.log(val[x]);
    }
  });

  absurd.di.register('modularCss', function (){
    var ms = absurd.component("", {
      css: {
        body: {
          fz: base + 'px',
          lh: line + 'em'
        },
        h1: {
          fz: val[4] + 'em',
          mt: line/val[4] + 'em',
          lh: line/val[4]*4 + 'em',
          mb: line/val[4] + 'em'
        },
        h2: {
          fz: val[3] + 'em',
          mt: line/val[3] + 'em',
          lh: line/val[3]*1.5 + 'em',
          mb: line/val[3] + 'em'
        },
        h3: {
          fz: val[2] + 'em',
          mt: line/val[2] + 'em',
          lh: line/val[2]*1.5 + 'em',
          mb: line/val[2] + 'em'
        },
        p: {
          fz: val[0] + 'em',
          mt: line + 'em',
          lh: line + 'em',
          mb: line + 'em'
        },
        '.pure-g > div':{
          '-mw-bxz': 'bb'
        },
        '.pure-u-1': {
          padding: line + 'em'
        }
      },
      constructor: function(name) {
        this.set('parent', this.qs('body')).populate();
      }
    });
    ms();
  });

  absurd.component("msButton", {
    html: '.controller',
    buttonGolden: function(modularScale, modularCss) {
      modularScale(1,5,1.618);
      modularCss();
    },
    buttonFourth: function(modularScale, modularCss) {
      modularScale(1,5,1.33333);
      modularCss();
    },
    buttonFifth: function(modularScale, modularCss) {
      modularScale(1,5,1.5);
      modularCss();
    },
    buttonLineSmall: function(modularCss) {
      line=1.35;
      modularCss();
    },
    buttonLineMedium: function(modularCss) {
      line=1.5;
      modularCss();
    },
    buttonLineLarge: function(modularCss) {
      line=1.65;
      modularCss();
    },
    buttonLineXLarge: function(modularCss) {
      line=2;
      modularCss();
    },
    constructor: function() {
        this.populate();
    }
  })();


};
