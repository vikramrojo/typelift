window.onload = function() {

  var base = 15,
  val = [],
  ratio = 1.33,
  line=1.35;

  function modularScale (msBase, msValue, msRatio) {
    for ( var x=0; x<msValue; x++) {
      val[x] = '' + Math.pow(msRatio,x)*msBase; + 'px'
    }
  };

  modularScale (1, 5, ratio);

  console.log(val[1]);

  var absurd = Absurd();

  var msGolden = absurd.component("", {
    css: {
      body: {
        fz: base + 'px',
        lh: line + 'em'
      },
      h1: {
        fz: val[4] + 'em',
        mt: line/val[4] + 'em',
        lh: line/val[4]*3 + 'em',
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

  absurd.component("msButton", {
      html: '.controller',
      buttonGolden: function(e) {
        msGolden();
      },
      constructor: function() {
          this.populate();
      }
  })();


};
