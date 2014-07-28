window.onload = function() {

  var base=1,
  val = [],
  ratio = 1.333,
  line=1.35,
  padding=1,
  wplRead = document.getElementById('wplRead'),
  wplAvg,
  wplWords = 1;

  // Add a span to ever word for Characters Per Line Measure
  wplRead.innerHTML = wplRead.innerHTML.replace(/[^\s]+/g, function(match) {
      return('<span id="wpl' + wplWords++ + '">' + match + '</span>');
  });


  function wordsPerLine(){
    var wplLine = [],
    wplCounter=1,
    wplLines=0;

    for (i=1; i<wplWords-1; i++){
      var wplCurrent = document.getElementById('wpl'+i),
      wplNext = document.getElementById('wpl'+(i+1));


      if (wplCurrent.offsetTop != wplNext.offsetTop){
        wplLine[wplLines] = wplCounter;
        wplLines++;
        wplCounter = 0;
      };
      wplCounter++;

    };

    for (i=0; i<wplLine.length; i++){
      wplCounter += wplLine[i];
    };
    wplAvg = wplCounter/wplLine.length;
    document.getElementById('adjWordsPerLineVal').innerHTML = Math.round(wplAvg);
  }

  window.onresize = function(event) {
    wordsPerLine();

  };

  var absurd = Absurd();

  absurd.di.register('modularScale', function (msBase, msValue, msRatio){
    for ( var x=0; x<msValue; x++) {
        val[x] = '' + Math.pow(msRatio,x)*msBase; + 'px';
        console.log(val[x])
    }
  });

  absurd.di.register('baseSans', function (){
    var bss = absurd.component("", {
      css: {
        '.content': {
          'p,h1,h2,h3,h4,h5': {
            ff: 'PT Sans',
          }
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
        '.content': {
          'p,h1,h2,h3,h4,h5': {
            ff: 'Vollkorn',
          }
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
        '.content': {
          fz: base*16 + 'px',
          lh: line + 'em',
          p: {
            fz: 1 + 'em',
            mt: line + 'em',
            lh: line + 'em',
            mb: line + 'em'
          },
        }
      },
      constructor: function(name) {
        this.set('parent', this.qs('body')).populate();
      }
    });
    bf();
    wordsPerLine();
  });

  absurd.di.register('cssExport', function(){
    var cssExport = document.getElementById('cssExport');
    cssExport.innerHTML = 'body:{font-size: '+ base*16 + 'px;}<br>';
    var cssP='p {font-size: '+ '1em;<br> line-height: ' + line + 'em;<br> margin: ' + line + 'em;}<br>';
    cssExport.innerHTML += cssP;
    var cssH1='h1 {font-size: '+ (val[4]/1).toFixed(3) + 'em;<br> line-height: ' + (line/val[4]*3).toFixed(3) + 'em;<br> margin: ' + (line/val[4]*3).toFixed(3) + 'em 0em;}<br>';
    cssExport.innerHTML += cssH1;
    var cssH2='h2 {font-size: '+ (val[3]/1).toFixed(3) + 'em;<br> line-height: ' + (line/val[3]*1.5).toFixed(3) + 'em;<br> margin: ' + (line/val[3]).toFixed(3) + 'em 0em;}<br>';
    cssExport.innerHTML += cssH2;
    var cssH3='h3 {font-size: '+ (val[2]/1).toFixed(3) + 'em;<br> line-height: ' + (line/val[2]).toFixed(3) + 'em;<br> margin: ' + (line/val[2]).toFixed(3) + 'em 0em;}<br>';
    cssExport.innerHTML += cssH3;
    var cssH4='h4 {font-size: '+ (val[1]/1).toFixed(3) + 'em;<br> line-height: ' + (line/val[1]).toFixed(3) + 'em;<br> margin: ' + (line/val[1]/2).toFixed(3) + 'em 0em;}<br>';
    cssExport.innerHTML += cssH4;
    var cssH5='h5 {font-size: 1em;<br> line-height: ' + line + 'em;<br> margin: ' + (line/2).toFixed(3) + 'em 0em;}<br>';
    cssExport.innerHTML += cssH5;
  });

  absurd.di.register('modularCss', function (){
    var ms = absurd.component("", {
      css: {
        '.content': {
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
            mb: line/val[3] + 'em',
            fw: 700
          },
          h3: {
            fz: val[2] + 'em',
            mt: line/val[2] + 'em',
            lh: line/val[2] + 'em',
            mb: line/val[2] + 'em'
          },
          h4: {
            fz: val[1] + 'em',
            mt: line/val[1]/2 + 'em',
            lh: line/val[1] + 'em',
            mb: line/val[1]/2 + 'em'
          },
          h5: {
            fz: 1 + 'em',
            mt: line/2 + 'em',
            lh: line + 'em',
            mb: line/2 + 'em'
          },
          p: {
            fz: 1 + 'em',
            mt: line + 'em',
            lh: line + 'em',
            mb: line + 'em'
          },
          'p.drop:first-letter': {
            float: 'left',
            fz: val[3] + 'em',
            fw: 700,
            mt: line/val[3] + 'em',
            lh: line/val[3] + 'em',
            mb: line/val[3]/2 + 'em',
            pr: line/val[3]/2 + 'em',
            pl: line/val[3]/2 + 'em'
          },
          '.inset': {
            ml: line + 'em',
            mt: line*0.5 + 'em',
            mb: line/val[1]/2 + 'em',
            h5: {
              ml: line + 'em',
              mt: 0,
              mb: 0,
            }
          }
        }
      },
      constructor: function(name) {
        this.set('parent', this.qs('body')).populate();
      }
    });
    ms();
  });

  absurd.component("typeAdj", {
    html: '.adj',
    populated: function(modularScale, modularCss, baseFont, cssExport) {
    modularScale(base,5,1.25);
    modularCss();
    cssExport();
    baseFont();
    },
    rangeFontSize: function(baseFont, cssExport) {
      var adjFontFace = document.getElementById('adjFontFace').value;
      document.getElementById('adjFontFaceVal').innerHTML = adjFontFace;
      base=adjFontFace/16;
      baseFont();
      cssExport();
    },
    rangeLineHeight: function(modularCss, cssExport) {
      line = document.getElementById('adjLineHeight').value;
      document.getElementById('adjLineHeightVal').innerHTML = line;
      modularCss();
      cssExport();
    },
    buttonSans: function(baseSans) {
      baseSans();
    },
    buttonSerif: function(baseSerif) {
      baseSerif();
    },
    buttonGolden: function(modularScale, modularCss, cssExport) {
      ratio=(1+Math.sqrt(5))/2;
      modularScale(base,5,ratio);
      modularCss();
      cssExport();
    },
    buttonFourth: function(modularScale, modularCss, cssExport) {
      ratio=4/3;
      modularScale(base,5,ratio);
      modularCss();
      cssExport();
    },
    buttonFifth: function(modularScale, modularCss, cssExport) {
      ratio=3/2;
      modularScale(base,5,ratio);
      modularCss();
      cssExport();
    },
    buttonThird: function(modularScale, modularCss, cssExport) {
      ratio=5/4;
      modularScale(base,5,ratio);
      modularCss();
      cssExport();
    },
    constructor: function() {
        this.populate();
    }
  })();


};
