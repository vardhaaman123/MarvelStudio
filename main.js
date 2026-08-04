const movies = [
  { id: 1, phase: 1, title: "Iron Man", year: "2008", duration: "2h 6m", trailerUrl: "https://www.youtube.com/results?search_query=Iron+Man+trailer", poster: "./ironman-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/wbqtrrkvjrfgxsd" }, { resolution: "2K", url: "https://hubcloud.cx/drive/bq662xhgouqhtc7" } ] },
  { id: 2, phase: 1, title: "The Incredible Hulk", year: "2008", duration: "1h 52m", trailerUrl: "https://www.youtube.com/results?search_query=The+Incredible+Hulk+trailer", poster: "./new%20The%20Incredible%20Hulk.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/epp1j1t1pj5ny47" }, { resolution: "2K", url: "https://vcloud.zip/d600hupzuqo0kgy" } ] },
  { id: 3, phase: 1, title: "Iron Man 2", year: "2010", duration: "2h 4m", trailerUrl: "https://www.youtube.com/results?search_query=Iron+Man+2+trailer", poster: "./ironman2-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/dwfj5d1jwfpjd4l" }, { resolution: "2K", url: "https://hubcloud.cx/drive/lok3r3vixlnpn9p" } ] },
  { id: 4, phase: 1, title: "Thor", year: "2011", duration: "1h 55m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+trailer", poster: "./new%20thor%201.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/qkvqmj1aqnuqnqe" }, { resolution: "2K", url: "https://hubcloud.cx/video/r62hzizllr6svri" } ] },
  { id: 5, phase: 1, title: "Captain America: The First Avenger", year: "2011", duration: "2h 4m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+The+First+Avenger+trailer", poster: "./captain-america-1-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/xnkh1x53mhdxbdm" }, { resolution: "2K", url: "https://vcloud.zip/my44jyhx7myo6hl" } ] },
  { id: 6, phase: 1, title: "The Avengers", year: "2012", duration: "2h 23m", trailerUrl: "https://www.youtube.com/results?search_query=The+Avengers+trailer", poster: "./avengers-1-poster.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/x-ed_e_qyhayzda" }, { resolution: "2K", url: "https://vcloud.zip/sicj97ddcc7sj_d" } ] },
  { id: 7, phase: 2, title: "Iron Man 3", year: "2013", duration: "2h 10m", trailerUrl: "https://www.youtube.com/results?search_query=Iron+Man+3+trailer", poster: "./ironman3-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/ezvfzt1zzvbhtxx" }, { resolution: "2K", url: "https://hubcloud.cx/drive/cdd0pxbrgbpgrt2" } ] },
  { id: 8, phase: 2, title: "Thor: The Dark World", year: "2013", duration: "1h 52m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+The+Dark+World+trailer", poster: "./new%20Thor%20The%20Dark%20World.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/36jjojqhizqiiju" }, { resolution: "2K", url: "https://hubcloud.cx/video/mr6oqlfore1tm1q" } ] },
  { id: 9, phase: 2, title: "Captain America: The Winter Soldier", year: "2014", duration: "2h 16m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+The+Winter+Soldier+trailer", poster: "./captain-america-2-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/ygwqez1kq334qxq" } ] },
  { id: 10, phase: 2, title: "Guardians of the Galaxy", year: "2014", duration: "2h 1m", trailerUrl: "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+trailer", poster: "./new%20Guardians%20of%20the%20Galaxy.jpeg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/fh7dfacqbqus6qc" }, { resolution: "2K", url: "https://hubcloud.cx/drive/fh7dfacqbqus6qc" } ] },
  { id: 11, phase: 2, title: "Avengers: Age of Ultron", year: "2015", duration: "2h 21m", trailerUrl: "https://www.youtube.com/results?search_query=Avengers+Age+of+Ultron+trailer", poster: "./new%20Avengers%20%20Age%20of%20Ultron.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/1iyq7hfp7a1oc99" }, { resolution: "2K", url: "https://hubcloud.cx/video/73nfrfqj7r6qml6" } ] },
  { id: 12, phase: 2, title: "Ant-Man", year: "2015", duration: "1h 57m", trailerUrl: "https://www.youtube.com/results?search_query=Ant-Man+trailer", poster: "./ant-man-poster.jpg", downloads: [ { resolution: "1080p", url: "https://driveseed.org/file/it5mqQwt9QQFQq5fcBsm" } ] },
  { id: 13, phase: 3, title: "Captain America: Civil War", year: "2016", duration: "2h 27m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+Civil+War+trailer", poster: "./captain-america-3-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/tbvinkhrke1ha1m" }, { resolution: "2K", url: "https://vcloud.zip/xdefyx1i1exs1kk" } ] },
  { id: 14, phase: 3, title: "Doctor Strange", year: "2016", duration: "1h 55m", trailerUrl: "https://www.youtube.com/results?search_query=Doctor+Strange+trailer", poster: "./doctor-strange-poster.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/_z0h_vvexctz1yc" }, { resolution: "2K", url: "https://hubcloud.cx/drive/oib0at0esnoqbqv" } ] },
  { id: 15, phase: 3, title: "Guardians of the Galaxy Vol. 2", year: "2017", duration: "2h 16m", trailerUrl: "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+Vol+2+trailer", poster: "./gotg2-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/1yltcjxtpt5itsx" }, { resolution: "2K", url: "https://hubcloud.cx/drive/rtwyu1dj0unlm1r" } ] },
  { id: 16, phase: 3, title: "Spider-Man: Homecoming", year: "2017", duration: "2h 13m", trailerUrl: "https://www.youtube.com/results?search_query=Spider-Man+Homecoming+trailer", poster: "./new%20Spider-Man%20Homecoming.jpeg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/4dhvogxde1ln14v" }, { resolution: "2K", url: "https://vcloud.zip/p_eir_0j3i4byr4" } ] },
  { id: 17, phase: 3, title: "Thor: Ragnarok", year: "2017", duration: "2h 10m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+Ragnarok+trailer", poster: "./new%20Thor%20Ragnarok.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/m1q150y18pc1sc8" }, { resolution: "2K", url: "https://vcloud.zip/bmsrfhqh33319be" } ] },
  { id: 18, phase: 3, title: "Black Panther", year: "2018", duration: "2h 14m", trailerUrl: "https://www.youtube.com/results?search_query=Black+Panther+trailer", poster: "./black-panther-poster.jpg" },
  { id: 19, phase: 3, title: "Avengers: Infinity War", year: "2018", duration: "2h 29m", trailerUrl: "https://www.youtube.com/results?search_query=Avengers+Infinity+War+trailer", poster: "./Avengers%20Infinity%20War.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/uxxlvpyxycuwauv" }, { resolution: "2K", url: "https://video-seed.dev/?url=https://video-downloads.googleusercontent.com/ADGPM2mfiTViu_EAk6vHv_wJn7OaKVc0-q1pNISfGD_FzAGw86JeutFtKLVinHSuydlMZPGpKgW2XqjesftcLHJbDNTs3rkmQDk90ccxhojTmTgbhKtau6z-FmxD_P1wB6QgKbklYBbmXIIdEvvo6loW0WWcWVyzMpyE-4aTv-fiyxE_tTIqJp1oyOo_MUeHJixdDO-2HXf7aS22o4IO7a1NwQlX4avqOpO9aSizGrAjGL0jpfQK6I6N0CILKDxm3UelIW3z5hoP7W4Dv0cSG58SB-kl3Jkae5Cz5BjEdTOApms2u581s9kB1tBOdQsDETLaWItuPwvZg51RishVxnX-l-tTYhrFBjV4eV8MIP76DbyvR4qJtsqV5q_uuNqxAMsD5e3oWqw9sSxS0PPfc-JwlOO4Ba8twqu1tQvj2AgoGf-pRi4q8T5cpUYzfdHM693Z3wViaFZ-ubiEjFBPRi_H93smmHLNpOcTqCP4GfLEhWQTzOKmBIqrvLKWtSTaOAuCfin3jggrwJK22xow8rDZHDRBBS_nv-VroOiS1h27fTsBD7qzRoogf4i5kDWmcE1-kFG7f5oXilHCX6zUXYURjJ9bUBc1d_sbhoDb8jQ0IV7H-JR4ee3yz9hhXSVSH7LR1h2vazpv5gK5-bUYUCVJKGJhkSAvHmu-mcIs_-Q00ryIgITWsrCgXlb2qGeIJ2Hr9qq6LTeIs8XuUX56rGcdyHBQ7MmufsyKFoTLxs3WEEawnr1S_foL1wzzQiFcM2wxA_l0Wkzpo1Gn71qig_OLKy1R_u6rffKem03lyrHy70qVRGWi4CD0tFDgOD7oxpvRTxr3As9gARPKouf_BbFTx4acWlgZOm7vbVi8T4bsva2AM65Sz-bpTAjqozxzOfo52s4HDsT3BcOW7WINLYL6qsygEw0SRihZHxN-LoXqUY3MRLQvpg60v50VWQbwwiAbuy4l7IPBPTQsUarPD8FKCBQ5w2iArY-KIVQ03j6c2CDAQsbsAUO3ew_XV629iiMbqtLbrwcyLyg3nSImOIiFSnInewwODTdWPZJSSdUTAtTlTVaDxzcV1l4C7eQ0Jv9T4NF2LNKZ" } ] },
  { id: 20, phase: 3, title: "Ant-Man and the Wasp", year: "2018", duration: "1h 58m", trailerUrl: "https://www.youtube.com/results?search_query=Ant-Man+and+the+Wasp+trailer", poster: "https://image.tmdb.org/t/p/w500/rv1AWImgx386ULjcf62VYaW8zSt.jpg", downloads: [ { resolution: "1080p", url: "https://video-seed.dev/?url=https://video-downloads.googleusercontent.com/ADGPM2mfiTViu_EAk6vHv_wJn7OaKVc0-q1pNISfGD_FzAGw86JeutFtKLVinHSuydlMZPGpKgW2XqjesftcLHJbDNTs3rkmQDk90ccxhojTmTgbhKtau6z-FmxD_P1wB6QgKbklYBbmXIIdEvvo6loW0WWcWVyzMpyE-4aTv-fiyxE_tTIqJp1oyOo_MUeHJixdDO-2HXf7aS22o4IO7a1NwQlX4avqOpO9aSizGrAjGL0jpfQK6I6N0CILKDxm3UelIW3z5hoP7W4Dv0cSG58SB-kl3Jkae5Cz5BjEdTOApms2u581s9kB1tBOdQsDETLaWItuPwvZg51RishVxnX-l-tTYhrFBjV4eV8MIP76DbyvR4qJtsqV5q_uuNqxAMsD5e3oWqw9sSxS0PPfc-JwlOO4Ba8twqu1tQvj2AgoGf-pRi4q8T5cpUYzfdHM693Z3wViaFZ-ubiEjFBPRi_H93smmHLNpOcTqCP4GfLEhWQTzOKmBIqrvLKWtSTaOAuCfin3jggrwJK22xow8rDZHDRBBS_nv-VroOiS1h27fTsBD7qzRoogf4i5kDWmcE1-kFG7f5oXilHCX6zUXYURjJ9bUBc1d_sbhoDb8jQ0IV7H-JR4ee3yz9hhXSVSH7LR1h2vazpv5gK5-bUYUCVJKGJhkSAvHmu-mcIs_-Q00ryIgITWsrCgXlb2qGeIJ2Hr9qq6LTeIs8XuUX56rGcdyHBQ7MmufsyKFoTLxs3WEEawnr1S_foL1wzzQiFcM2wxA_l0Wkzpo1Gn71qig_OLKy1R_u6rffKem03lyrHy70qVRGWi4CD0tFDgOD7oxpvRTxr3As9gARPKouf_BbFTx4acWlgZOm7vbVi8T4bsva2AM65Sz-bpTAjqozxzOfo52s4HDsT3BcOW7WINLYL6qsygEw0SRihZHxN-LoXqUY3MRLQvpg60v50VWQbwwiAbuy4l7IPBPTQsUarPD8FKCBQ5w2iArY-KIVQ03j6c2CDAQsbsAUO3ew_XV629iiMbqtLbrwcyLyg3nSImOIiFSnInewwODTdWPZJSSdUTAtTlTVaDxzcV1l4C7eQ0Jv9T4NF2LNKZ" } ] },
  { id: 21, phase: 3, title: "Captain Marvel", year: "2019", duration: "2h 3m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+Marvel+trailer", poster: "./new%20Captain%20Marvel.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/utxxixg1ktg6j60" }, { resolution: "2K", url: "https://driveseed.org/file/PAMLDZVYIIP7jM6Rqwn4" } ] },
  { id: 22, phase: 3, title: "Avengers: Endgame", year: "2019", duration: "3h 1m", trailerUrl: "https://www.youtube.com/results?search_query=Avengers+Endgame+trailer", poster: "./new%20Avengers%20Endgame.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/bycxgtppyxcefne" }, { resolution: "2K", url: "https://hubcloud.cx/video/0efhhsxwl11qhaq" } ] },
  { id: 23, phase: 3, title: "Spider-Man: Far From Home", year: "2019", duration: "2h 9m", trailerUrl: "https://www.youtube.com/results?search_query=Spider-Man+Far+From+Home+trailer", poster: "./spiderman-far-from-home-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/dkbj5mbb1kj5f5u" }, { resolution: "2K", url: "https://hubcloud.cx/drive/a1l4gne8jgq4gu4" } ] },
  { id: 24, phase: 4, title: "Black Widow", year: "2021", duration: "2h 14m", trailerUrl: "https://www.youtube.com/results?search_query=Black+Widow+trailer", poster: "./black-widow-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/8vb8bbccf1licqd" }, { resolution: "2K", url: "https://vcloud.zip/h2z9vaxgqttxa1t" } ] },
  { id: 25, phase: 4, title: "Shang-Chi and the Legend of the Ten Rings", year: "2021", duration: "2h 12m", trailerUrl: "https://www.youtube.com/results?search_query=Shang-Chi+trailer", poster: "./shang-chi-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/cjoivmmle13ufui" }, { resolution: "2K", url: "https://hubcloud.cx/drive/bdwlvsigvgvc1vj" } ] },
  { id: 26, phase: 4, title: "Eternals", year: "2021", duration: "2h 36m", trailerUrl: "https://www.youtube.com/results?search_query=Eternals+trailer", poster: "./eternals-poster.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/5i1iwjja9oqqwrp" }, { resolution: "2K", url: "https://hubcloud.cx/drive/llnxtvstxervpso" } ] },
  { id: 27, phase: 4, title: "Spider-Man: No Way Home", year: "2021", duration: "2h 28m", trailerUrl: "https://www.youtube.com/results?search_query=Spider-Man+No+Way+Home+trailer", poster: "./spiderman-no-way-home-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/cdija8jdckrafcc" }, { resolution: "2K", url: "https://vcloud.zip/vfq08gzcahe6rl7" } ] },
  { id: 28, phase: 4, title: "Doctor Strange in the Multiverse of Madness", year: "2022", duration: "2h 6m", trailerUrl: "https://www.youtube.com/results?search_query=Doctor+Strange+in+the+Multiverse+of+Madness+trailer", poster: "./Doctor%20Strange%20in%20the%20Multiverse%20of%20Madness.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/ssaf9o6-fa-u6ft" }, { resolution: "2K", url: "https://vcloud.zip/yxmzhsncixbs1ki" } ] },
  { id: 29, phase: 4, title: "Thor: Love and Thunder", year: "2022", duration: "1h 59m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+Love+and+Thunder+trailer", poster: "./Thor%20Love%20and%20Thunder.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/pd904dwmyqmte2a" }, { resolution: "2K", url: "https://vcloud.zip/j5gplrfehu3cttl" } ] },
  { id: 30, phase: 4, title: "Black Panther: Wakanda Forever", year: "2022", duration: "2h 41m", trailerUrl: "https://www.youtube.com/results?search_query=Black+Panther+Wakanda+Forever+trailer", poster: "./Black%20Panther%20Wakanda%20Forever.jpg", downloads: [ { resolution: "1080p", url: "https://driveseed.org/file/uoFCQ0bQAhvLNntECCK0" } ] },
  { id: 31, phase: 5, title: "Ant-Man and the Wasp: Quantumania", year: "2023", duration: "2h 5m", trailerUrl: "https://www.youtube.com/results?search_query=Ant-Man+and+the+Wasp+Quantumania+trailer", poster: "./Ant-Man%20and%20the%20Wasp%20Quantumania.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/5a5xt0baf5l0tmt" } ] },
  { id: 32, phase: 5, title: "Guardians of the Galaxy Vol. 3", year: "2023", duration: "2h 30m", trailerUrl: "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+Vol+3+trailer", poster: "./Guardians%20of%20the%20Galaxy%20Vol.%203.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/vj1rfdv1dpylmdy" }, { resolution: "2K", url: "https://hubcloud.cx/video/wzh5zqxbvjqse_a" } ] },
  { id: 33, phase: 5, title: "The Marvels", year: "2023", duration: "1h 45m", trailerUrl: "https://www.youtube.com/results?search_query=The+Marvels+trailer", poster: "./The%20Marvels.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/ee_f7ex0xsruew1" } ] },
  { id: 34, phase: 5, title: "Deadpool & Wolverine", year: "2024", duration: "2h 7m", trailerUrl: "https://www.youtube.com/results?search_query=Deadpool+%26+Wolverine+trailer", poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/6tx0ht1wqv0jbdq" }, { resolution: "2K", url: "https://hubcloud.cx/drive/py2pwnte1gsspy8" } ] },
  { id: 35, phase: 5, title: "Captain America: Brave New World", year: "2025", duration: "TBD", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+Brave+New+World+trailer", poster: "./Captain%20America%20Brave%20New%20World.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/c5lltg1tqgoiydi" }, { resolution: "2K", url: "https://hubcloud.cx/drive/kqnsku1dduivihf" } ] },
  { id: 36, phase: 5, title: "Thunderbolts*", year: "2025", duration: "TBD", trailerUrl: "https://www.youtube.com/results?search_query=Thunderbolts+trailer", poster: "./Thunderbolts.jpg", downloads: [ { resolution: "2K", url: "https://hubcloud.cx/drive/qpmihliosqmh7pp" } ] },
  { id: 37, phase: 6, title: "The Fantastic Four: First Steps", year: "2025", duration: "TBD", trailerUrl: "https://www.youtube.com/results?search_query=The+Fantastic+Four+First+Steps+trailer", poster: "./The%20Fantastic%20Four%20First%20Steps.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/ahidhwd1lyadrwk" } ] },
];

document.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');
  const appContent = document.getElementById('app');
  const skipBtn = document.getElementById('skip-intro');
  const introVideo = document.getElementById('intro-video');
  const moviesGrid = document.getElementById('movies-grid');
  const searchInput = document.getElementById('movie-search');
  const noResults = document.getElementById('no-results');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const header = document.querySelector('.header');

  let appShown = false;
  let currentSearch = '';

  // 1. Intro Video & Transition
  const unmuteVideo = () => {
    if (introVideo) introVideo.muted = false;
  };
  document.addEventListener('click', unmuteVideo, { once: true });

  const showApp = () => {
    if (appShown) return;
    appShown = true;
    introOverlay.style.opacity = '0';
    setTimeout(() => {
      introOverlay.classList.add('hidden');
      appContent.classList.remove('hidden');
      initCosmicBackground();
      renderMovies();
    }, 900);
  };

  if (skipBtn) skipBtn.addEventListener('click', showApp);

  if (introVideo) {
    introVideo.addEventListener('ended', showApp);
    const playPromise = introVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Autoplay prevented:", error);
        showApp();
      });
    }
  }

  setTimeout(() => {
    if (introVideo && introVideo.currentTime > 0 && !introVideo.paused) {
      showApp();
    }
  }, 20000);

  // 2. Interactive Cosmic Canvas Background Animation
  function initCosmicBackground() {
    const canvas = document.getElementById('cosmic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', e => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    });

    // Particle pool
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles = [];

    const colors = [
      'rgba(237, 29, 36, ',   // Marvel Red
      'rgba(245, 158, 11, ',  // Amber Gold
      'rgba(99, 102, 241, ',  // Deep Space Indigo
      'rgba(255, 255, 255, ', // Starlight
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45 - 0.15, // slight upward drift
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI,
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulseVal += p.pulseSpeed;

        // Wrap boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Subtle mouse repulsion/attraction field
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          p.x += (dx / dist) * force * 0.8;
          p.y += (dy / dist) * force * 0.8;
        }

        const dynamicAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulseVal));

        // Draw particle with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${dynamicAlpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `${p.colorBase}0.8)`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // 3. Render Movies with 3D Tilt & Micro-Animations
  function renderMovies() {
    if (!moviesGrid) return;
    moviesGrid.innerHTML = '';

    const query = currentSearch.toLowerCase().trim();

    const filtered = movies.filter(movie => {
      return (
        !query ||
        movie.title.toLowerCase().includes(query) ||
        movie.year.includes(query) ||
        `phase ${movie.phase}`.includes(query)
      );
    });


    if (filtered.length === 0) {
      if (noResults) noResults.classList.remove('hidden');
      return;
    } else {
      if (noResults) noResults.classList.add('hidden');
    }

    filtered.forEach((movie, index) => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.style.animationDelay = `${index * 35}ms`;

      card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-image-wrap">
          <img 
            src="${movie.poster}" 
            alt="${movie.title}" 
            class="card-image" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'500\\' height=\\'750\\'><defs><linearGradient id=\\'grad\\' x1=\\'0%\\' y1=\\'0%\\' x2=\\'0%\\' y2=\\'100%\\'><stop offset=\\'0%\\' stop-color=\\'%23330000\\' /><stop offset=\\'100%\\' stop-color=\\'%2308080a\\' /></linearGradient></defs><rect width=\\'500\\' height=\\'750\\' fill=\\'url(%23grad)\\'/><text x=\\'50%\\' y=\\'50%\\' font-family=\\'Outfit, sans-serif\\' font-size=\\'40\\' font-weight=\\'bold\\' fill=\\'%23ED1D24\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'>${encodeURIComponent(movie.title.substring(0, 20))}${movie.title.length > 20 ? '...' : ''}</text></svg>';" 
          />
        </div>
        <div class="card-content">
          <h3 class="card-title" title="${movie.title}">${movie.title}</h3>
          <div class="card-meta">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              ${movie.year}
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${movie.duration}
            </span>
          </div>
          <div class="card-actions">
            <a href="${movie.trailerUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary trailer-btn" title="Watch Trailer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Trailer
            </a>

            ${movie.downloads && movie.downloads.length > 0 ? `
              <div class="dropdown">
                <button class="btn btn-primary" aria-haspopup="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download ▾
                </button>
                <div class="dropdown-content">
                  ${movie.downloads.map(dl => `
                    <a href="${dl.url}" target="_blank" rel="noopener noreferrer">
                      ${dl.resolution}
                    </a>
                  `).join('')}
                </div>
              </div>
            ` : `
              <button class="btn btn-secondary" style="opacity: 0.65; cursor: not-allowed;" onclick="alert('Download link coming soon for ${movie.title}!')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Pending
              </button>
            `}
          </div>
        </div>
      `;

      const imageWrap = card.querySelector('.card-image-wrap');
      if (imageWrap) {
        let clickTimeout = null;

        imageWrap.addEventListener('click', (e) => {
          e.preventDefault();
          if (clickTimeout) {
            clearTimeout(clickTimeout);
            clickTimeout = null;
            return;
          }
          clickTimeout = setTimeout(() => {
            clickTimeout = null;
            if (movie.trailerUrl) {
              window.open(movie.trailerUrl, '_blank');
            }
          }, 250);
        });

        imageWrap.addEventListener('dblclick', (e) => {
          e.preventDefault();
          if (clickTimeout) {
            clearTimeout(clickTimeout);
            clickTimeout = null;
          }
          const query = encodeURIComponent(`${movie.title} ${movie.year} Marvel movie details`);
          window.open(`https://www.google.com/search?q=${query}`, '_blank');
        });
      }

      moviesGrid.appendChild(card);
    });
  }

  // 4. Search Handler
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      renderMovies();
    });
  }

  // 6. Header Scrolled State & Scroll-to-Top Button
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollPos > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
