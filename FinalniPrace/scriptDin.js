function play1() {
    var el = document.getElementById("logo");
   
    dynamics.stop(el);
    dynamics.css(el, {
      translateX: 0,
      scale: 1,
      opacity: 1
    });
  
    dynamics.animate(el, {
      translateX: 250,
      scale: 1.5,
      opacity: 0.5
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 270,
      duration: 2000
    });
}

function play2() {
    var el = document.getElementById("logo2");
   
    dynamics.stop(el);
    dynamics.css(el, {
      translateX: 0,
      scale: 1,
      rotateZ: 0,
      opacity: 1
    });
   
    dynamics.animate(el, {
      translateX: 250,
      scale: 0.5,
      rotateZ: 180,
      opacity: 0.5
    }, {
      type: dynamics.bounce,
      duration: 1500
    });
}

function animateSvg() {
    var el = document.getElementById("logo3");
    
    dynamics.stop(el);
    dynamics.css(el, {
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      rotateZ: 0
    });
  
    dynamics.animate(el, {
      scaleX: 2,
      scaleY: 0.5,
      opacity: 0.6,
      rotateZ: 360
    }, {
      type: dynamics.gravity,
      bounciness: 600,
      elasticity: 200,
      duration: 3000
    });
}



function animateLogo4() {
    var el = document.getElementById("logo4");
    dynamics.animate(el, {
      translateX: 100,
      scale: 1.5,
      opacity: 0.5
    }, {
      type: dynamics.easeIn,
      duration: 1000,
      complete: function() {
        dynamics.animate(el, {
          translateX: 0,
          scale: 1,
          opacity: 1
        }, {
          type: dynamics.spring
        });
      }
    });
}

function animateLogo5() {
    var el = document.getElementById("logo5");
    dynamics.animate(el, {
      translateX: 250,
      rotateZ: 180,
      opacity: 0.1
    }, {
      type: dynamics.bounce,
      duration: 1800
    });
}

function animateLogo6() {
    var el = document.getElementById("logo6");
    dynamics.animate(el, {
      translateX: -100,
      translateY: -100,
      scale: 0.5,
      opacity: 0.7
    }, {
      type: dynamics.gravity,
      bounciness: 600,
      elasticity: 200,
      duration: 2000
    });
}



function play11() {
    dynamics.animate(document.getElementById('logo11'), {
      translateY: 20,
      scale: 1.5
    }, {
      type: dynamics.spring,
      frequency: 200,
      friction: 200,
      duration: 1500
    })
  }
  
  function play21() {
    dynamics.animate(document.getElementById('logo21'), {
      translateX: 100,
      rotateZ: 360
    }, {
      type: dynamics.bounce,
      duration: 1000
    })
  }
  
  function animateSvg1() {
    dynamics.animate(document.getElementById('logo31'), {
      scale: 0.5,
      opacity: 0.5
    }, {
      type: dynamics.gravity,
      bounciness: 600,
      elasticity: 200,
      duration: 1000
    })
  }
  
  function animateLogo41() {
    dynamics.animate(document.getElementById('logo41'), {
      scaleX: 1.2,
      scaleY: 0.6
    }, {
      type: dynamics.forceWithGravity,
      bounciness: 600,
      duration: 1500
    })
  }
  
  function animateLogo51() {
    dynamics.animate(document.getElementById('logo51'), {
      translateX: -100,
      rotateZ: -360
    }, {
      type: dynamics.bounce,
      duration: 1500
    })
  }
  
  function animateLogo61() {
    dynamics.animate(document.getElementById('logo61'), {
      scale: 2,
      opacity: 0
    }, {
      type: dynamics.easeInOut,
      duration: 2000,
      complete: function() {
        dynamics.animate(document.getElementById('logo61'), {
          scale: 1,
          opacity: 1
        }, {
          type: dynamics.spring,
          duration: 1000
        })
      }
    })
  }
  
