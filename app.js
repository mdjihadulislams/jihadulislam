tsParticles.load("particles-js", {
  autoPlay: true,

  background: {
    color: { value: "#ffffff" },
    image: "url('https://particles.js.org/images/background3.jpg')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1
  },

  backgroundMask: {
    enable: true,
    composite: "destination-out",
    cover: {
      opacity: 1,
      color: { value: { r: 255, g: 255, b: 255 } }
    }
  },

  fpsLimit: 120,
  detectRetina: true,

  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "bubble" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 1
      }
    }
  },

  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      distance: 150,
      opacity: 1
    },
    move: {
      enable: true,
      speed: 2
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 30 } }
  },

  pauseOnBlur: true,
  pauseOnOutsideViewport: true
});
