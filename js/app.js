window.onload = function() {

  var base=1,
  val = [],
  ratio,
  line=1.35,
  padding=1;

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

  absurd.di.register('baseSans', function (){
    var bss = absurd.component("", {
      css: {
        'body,p,h1,h2,h3,h4,h5': {
          ff: 'PT Sans',
        }
      },
      constructor: function(name) {
        this.set('parent', this.qs('body')).populate();
      }
    });
    bss();
  });

  absurd.di.register('baseSerif', function (){
    var bs = absurd.component("", {
      css: {
        'body,p,h1,h2,h3,h4,h5': {
          ff: 'Vollkorn',
        }
      },
      constructor: function(name) {
        this.set('parent', this.qs('body')).populate();
      }
    });
    bs();
  });

  absurd.di.register('baseFont', function (){
    var bf = absurd.component("", {
      css: {
        body: {
          fz: base*16 + 'px',
          lh: line + 'em'
        },
        p: {
          fz: val[0] + 'em',
          mt: line + 'em',
          lh: line + 'em',
          mb: line + 'em'
        },
      },
      constructor: function(name) {
        this.set('parent', this.qs('body')).populate();
      }
    });
    bf();
  });

  absurd.di.register('modularCss', function (){
    var ms = absurd.component("", {
      css: {
        body: {
          fz: base*16 + 'px',
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
        // 'p.drop:first-letter': {
        //   float: 'left',
        //   fz: val[3] + 'em',
        //   mt: line/val[3] + 'em',
        //   lh: line/val[3] + 'em',
        //   mb: line/val[3] + 'em',
        //   pr: line/val[3]/2 + 'em',
        //   pl: line/val[3]/2 + 'em'
        // },
        '.pure-g > div':{
          '-mw-bxz': 'bb'
        },
        '.pure-g > .pure-u-1': {
          padding: line*padding + 'em'
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
    populated: function(modularCss) {
      modularCss();
    },
    buttonSans: function(baseSans) {
      baseSans();
    },
    buttonSerif: function(baseSerif) {
      baseSerif();
    },
    buttonFont15: function(baseFont) {
      base=0.9375;
      baseFont();
    },
    buttonFont16: function(baseFont) {
      base=1;
      baseFont();
    },
    buttonFont17: function(baseFont) {
      base=1.0625;
      baseFont();
    },
    buttonFont18: function(baseFont) {
      base=1.125;
      baseFont();
    },
    buttonFont19: function(baseFont) {
      base=1.1875;
      baseFont();
    },
    buttonGolden: function(modularScale, modularCss) {
      modularScale(base,5,1.618);
      modularCss();
    },
    buttonFourth: function(modularScale, modularCss) {
      modularScale(base,5,1.33333);
      modularCss();
    },
    buttonFifth: function(modularScale, modularCss) {
      modularScale(base,5,1.5);
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
    buttonPaddingSmall: function(modularCss) {
      padding=1;
      modularCss();
    },
    buttonPaddingLarge: function(modularCss) {
      padding=2;
      modularCss();
    },
    constructor: function() {
        this.populate();
    }
  })();


};
