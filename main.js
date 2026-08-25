const movies = [
  { id: 1, phase: 1, imdb: "7.9", themeColor: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.45)", title: "Iron Man", year: "2008", duration: "2h 6m", trailerUrl: "https://www.youtube.com/results?search_query=Iron+Man+trailer", poster: "./ironman-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/wbqtrrkvjrfgxsd" }, { resolution: "2K", url: "https://hubcloud.cx/drive/bq662xhgouqhtc7" } ] },
  { id: 2, phase: 1, imdb: "6.6", themeColor: "#22c55e", glowColor: "rgba(34, 197, 94, 0.5)", title: "The Incredible Hulk", year: "2008", duration: "1h 52m", trailerUrl: "https://www.youtube.com/results?search_query=The+Incredible+Hulk+trailer", poster: "./new%20The%20Incredible%20Hulk.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/o_xfvxzgyzxeglf" }, { resolution: "2K", url: "https://hubcloud.cx/video/epp1j1t1pj5ny47" } ] },
  { id: 3, phase: 1, imdb: "6.9", themeColor: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.45)", title: "Iron Man 2", year: "2010", duration: "2h 4m", trailerUrl: "https://www.youtube.com/results?search_query=Iron+Man+2+trailer", poster: "./ironman2-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/dwfj5d1jwfpjd4l" }, { resolution: "2K", url: "https://hubcloud.cx/drive/lok3r3vixlnpn9p" } ] },
  { id: 4, phase: 1, imdb: "7.0", themeColor: "#00e5ff", glowColor: "rgba(0, 229, 255, 0.5)", title: "Thor", year: "2011", duration: "1h 55m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+trailer", poster: "./new%20thor%201.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.fit/d600hupzuqo0kgy" }, { resolution: "2K", url: "https://vcloud.zip/qkvqmj1aqnuqnqe" } ] },
  { id: 5, phase: 1, imdb: "6.9", themeColor: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.45)", title: "Captain America: The First Avenger", year: "2011", duration: "2h 4m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+The+First+Avenger+trailer", poster: "./captain-america-1-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/h1lt9seaj9ttadt" }, { resolution: "2K", url: "https://hubcloud.cx/video/xnkh1x53mhdxbdm" } ] },
  { id: 6, phase: 1, imdb: "8.0", themeColor: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.45)", title: "The Avengers", year: "2012", duration: "2h 23m", trailerUrl: "https://www.youtube.com/results?search_query=The+Avengers+trailer", poster: "./avengers-1-poster.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/my44jyhx7myo6hl" }, { resolution: "2K", url: "https://vcloud.zip/x-ed_e_qyhayzda" } ] },
  { id: 7, phase: 2, imdb: "7.1", themeColor: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.45)", title: "Iron Man 3", year: "2013", duration: "2h 10m", trailerUrl: "https://www.youtube.com/results?search_query=Iron+Man+3+trailer", poster: "./ironman3-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/ezvfzt1zzvbhtxx" }, { resolution: "2K", url: "https://hubcloud.cx/drive/cdd0pxbrgbpgrt2" } ] },
  { id: 8, phase: 2, imdb: "6.8", themeColor: "#00e5ff", glowColor: "rgba(0, 229, 255, 0.5)", title: "Thor: The Dark World", year: "2013", duration: "1h 52m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+The+Dark+World+trailer", poster: "./new%20Thor%20The%20Dark%20World.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/sicj97ddcc7sj_d" }, { resolution: "2K", url: "https://vcloud.zip/36jjojqhizqiiju" } ] },
  { id: 9, phase: 2, imdb: "7.8", themeColor: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.45)", title: "Captain America: The Winter Soldier", year: "2014", duration: "2h 16m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+The+Winter+Soldier+trailer", poster: "./captain-america-2-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/mr6oqlfore1tm1q" } ] },
  { id: 10, phase: 2, imdb: "8.0", themeColor: "#c084fc", glowColor: "rgba(192, 132, 252, 0.5)", title: "Guardians of the Galaxy", year: "2014", duration: "2h 1m", trailerUrl: "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+trailer", poster: "./new%20Guardians%20of%20the%20Galaxy.jpeg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/ygwqez1kq334qxq" }, { resolution: "2K", url: "https://hubcloud.cx/drive/fh7dfacqbqus6qc" } ] },
  { id: 11, phase: 2, imdb: "7.3", themeColor: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.45)", title: "Avengers: Age of Ultron", year: "2015", duration: "2h 21m", trailerUrl: "https://www.youtube.com/results?search_query=Avengers+Age+of+Ultron+trailer", poster: "./new%20Avengers%20%20Age%20of%20Ultron.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/q5xkld1m61t16bp" }, { resolution: "2K", url: "https://vcloud.zip/1iyq7hfp7a1oc99" } ] },
  { id: 12, phase: 2, imdb: "7.3", themeColor: "#ff3366", glowColor: "rgba(255, 51, 102, 0.45)", title: "Ant-Man", year: "2015", duration: "1h 57m", trailerUrl: "https://www.youtube.com/results?search_query=Ant-Man+trailer", poster: "./ant-man-poster.jpg", downloads: [ { resolution: "1080p", url: "https://driveseed.org/file/it5mqQwt9QQFQq5fcBsm" } ] },
  { id: 13, phase: 3, imdb: "7.8", themeColor: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.45)", title: "Captain America: Civil War", year: "2016", duration: "2h 27m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+Civil+War+trailer", poster: "./captain-america-3-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/73nfrfqj7r6qml6" }, { resolution: "2K", url: "https://hubcloud.cx/video/tbvinkhrke1ha1m" } ] },
  { id: 14, phase: 3, imdb: "7.5", themeColor: "#ff7b00", glowColor: "rgba(255, 123, 0, 0.5)", title: "Doctor Strange", year: "2016", duration: "1h 55m", trailerUrl: "https://www.youtube.com/results?search_query=Doctor+Strange+trailer", poster: "./doctor-strange-poster.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/xdefyx1i1exs1kk" }, { resolution: "2K", url: "https://vcloud.zip/_z0h_vvexctz1yc" } ] },
  { id: 15, phase: 3, imdb: "7.6", themeColor: "#e879f9", glowColor: "rgba(232, 121, 249, 0.5)", title: "Guardians of the Galaxy Vol. 2", year: "2017", duration: "2h 16m", trailerUrl: "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+Vol+2+trailer", poster: "./gotg2-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/oib0at0esnoqbqv" }, { resolution: "2K", url: "https://hubcloud.cx/drive/1yltcjxtpt5itsx" } ] },
  { id: 16, phase: 3, imdb: "7.4", themeColor: "#ff2e4d", glowColor: "rgba(255, 46, 77, 0.45)", title: "Spider-Man: Homecoming", year: "2017", duration: "2h 13m", trailerUrl: "https://www.youtube.com/results?search_query=Spider-Man+Homecoming+trailer", poster: "./new%20Spider-Man%20Homecoming.jpeg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/rtwyu1dj0unlm1r" }, { resolution: "2K", url: "https://hubcloud.cx/drive/4dhvogxde1ln14v" } ] },
  { id: 17, phase: 3, imdb: "7.9", themeColor: "#00f5ff", glowColor: "rgba(0, 245, 255, 0.55)", title: "Thor: Ragnarok", year: "2017", duration: "2h 10m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+Ragnarok+trailer", poster: "./new%20Thor%20Ragnarok.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/p_eir_0j3i4byr4" }, { resolution: "2K", url: "https://vcloud.zip/m1q150y18pc1sc8" } ] },
  { id: 18, phase: 3, imdb: "7.3", themeColor: "#a855f7", glowColor: "rgba(168, 85, 247, 0.5)", title: "Black Panther", year: "2018", duration: "2h 14m", trailerUrl: "https://www.youtube.com/results?search_query=Black+Panther+trailer", poster: "./black-panther-poster.jpg" },
  { id: 19, phase: 3, imdb: "8.4", themeColor: "#fbbf24", glowColor: "rgba(251, 191, 36, 0.5)", title: "Avengers: Infinity War", year: "2018", duration: "2h 29m", trailerUrl: "https://www.youtube.com/results?search_query=Avengers+Infinity+War+trailer", poster: "./Avengers%20Infinity%20War.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/bmsrfhqh33319be" }, { resolution: "2K", url: "https://vcloud.fit/uxxlvpyxycuwauv" } ] },
  { id: 20, phase: 3, imdb: "7.0", themeColor: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.45)", title: "Ant-Man and the Wasp", year: "2018", duration: "1h 58m", trailerUrl: "https://www.youtube.com/results?search_query=Ant-Man+and+the+Wasp+trailer", poster: "./ant-man-and-the-wasp-poster.jpg", downloads: [ { resolution: "1080p", url: "https://driveseed.org/zfile/9DNrhzG8EbBWM9MyWYgP" } ] },
  { id: 21, phase: 3, imdb: "6.8", themeColor: "#facc15", glowColor: "rgba(250, 204, 21, 0.5)", title: "Captain Marvel", year: "2019", duration: "2h 3m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+Marvel+trailer", poster: "./new%20Captain%20Marvel.jpeg", downloads: [ { resolution: "1080p", url: "https://driveseed.org/zfile/znqhLSjb9phwXPDQJOBG" } ] },
  { id: 22, phase: 3, imdb: "8.4", themeColor: "#fbbf24", glowColor: "rgba(251, 191, 36, 0.5)", title: "Avengers: Endgame", year: "2019", duration: "3h 1m", trailerUrl: "https://www.youtube.com/results?search_query=Avengers+Endgame+trailer", poster: "./new%20Avengers%20Endgame.jpeg", downloads: [ { resolution: "1080p", url: "https://vcloud.fit/bwj7vpiinn7pbe9" }, { resolution: "2K", url: "https://vcloud.fit/bycxgtppyxcefne" } ] },
  { id: 23, phase: 3, imdb: "7.4", themeColor: "#ff2e4d", glowColor: "rgba(255, 46, 77, 0.45)", title: "Spider-Man: Far From Home", year: "2019", duration: "2h 9m", trailerUrl: "https://www.youtube.com/results?search_query=Spider-Man+Far+From+Home+trailer", poster: "./spiderman-far-from-home-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/bdwlvsigvgvc1vj" }, { resolution: "2K", url: "https://hubcloud.cx/drive/dkbj5mbb1kj5f5u" } ] },
  { id: 24, phase: 4, imdb: "6.7", themeColor: "#ef4444", glowColor: "rgba(239, 68, 68, 0.5)", title: "Black Widow", year: "2021", duration: "2h 14m", trailerUrl: "https://www.youtube.com/results?search_query=Black+Widow+trailer", poster: "./black-widow-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/a1l4gne8jgq4gu4" }, { resolution: "2K", url: "https://hubcloud.cx/drive/8vb8bbccf1licqd" } ] },
  { id: 25, phase: 4, imdb: "7.4", themeColor: "#f59e0b", glowColor: "rgba(245, 158, 11, 0.5)", title: "Shang-Chi and the Legend of the Ten Rings", year: "2021", duration: "2h 12m", trailerUrl: "https://www.youtube.com/results?search_query=Shang-Chi+trailer", poster: "./shang-chi-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/cjoivmmle13ufui" }, { resolution: "2K", url: "https://hubcloud.cx/video/_uydlusejd3bo91" } ] },
  { id: 26, phase: 4, imdb: "6.3", themeColor: "#fbbf24", glowColor: "rgba(251, 191, 36, 0.5)", title: "Eternals", year: "2021", duration: "2h 36m", trailerUrl: "https://www.youtube.com/results?search_query=Eternals+trailer", poster: "./eternals-poster.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/utxxixg1ktg6j60" }, { resolution: "2K", url: "https://vcloud.zip/5i1iwjja9oqqwrp" } ] },
  { id: 27, phase: 4, imdb: "8.2", themeColor: "#ff2e4d", glowColor: "rgba(255, 46, 77, 0.45)", title: "Spider-Man: No Way Home", year: "2021", duration: "2h 28m", trailerUrl: "https://www.youtube.com/results?search_query=Spider-Man+No+Way+Home+trailer", poster: "./spiderman-no-way-home-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/llnxtvstxervpso" }, { resolution: "2K", url: "https://hubcloud.cx/drive/cdija8jdckrafcc" } ] },
  { id: 28, phase: 4, imdb: "6.9", themeColor: "#ff7b00", glowColor: "rgba(255, 123, 0, 0.5)", title: "Doctor Strange in the Multiverse of Madness", year: "2022", duration: "2h 6m", trailerUrl: "https://www.youtube.com/results?search_query=Doctor+Strange+in+the+Multiverse+of+Madness+trailer", poster: "./Doctor%20Strange%20in%20the%20Multiverse%20of%20Madness.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/vfq08gzcahe6rl7" }, { resolution: "2K", url: "https://vcloud.zip/ssaf9o6-fa-u6ft" } ] },
  { id: 29, phase: 4, imdb: "6.2", themeColor: "#00e5ff", glowColor: "rgba(0, 229, 255, 0.55)", title: "Thor: Love and Thunder", year: "2022", duration: "1h 59m", trailerUrl: "https://www.youtube.com/results?search_query=Thor+Love+and+Thunder+trailer", poster: "./Thor%20Love%20and%20Thunder.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.zip/yxmzhsncixbs1ki" }, { resolution: "2K", url: "https://vcloud.zip/pd904dwmyqmte2a" } ] },
  { id: 30, phase: 4, imdb: "6.7", themeColor: "#a855f7", glowColor: "rgba(168, 85, 247, 0.5)", title: "Black Panther: Wakanda Forever", year: "2022", duration: "2h 41m", trailerUrl: "https://www.youtube.com/results?search_query=Black+Panther+Wakanda+Forever+trailer", poster: "./Black%20Panther%20Wakanda%20Forever.jpg", downloads: [ { resolution: "1080p", url: "https://driveseed.org/file/uoFCQ0bQAhvLNntECCK0" } ] },
  { id: 31, phase: 5, imdb: "6.1", themeColor: "#e879f9", glowColor: "rgba(232, 121, 249, 0.5)", title: "Ant-Man and the Wasp: Quantumania", year: "2023", duration: "2h 5m", trailerUrl: "https://www.youtube.com/results?search_query=Ant-Man+and+the+Wasp+Quantumania+trailer", poster: "./Ant-Man%20and%20the%20Wasp%20Quantumania.jpg", downloads: [ { resolution: "1080p", url: "https://vcloud.fit/fwfy8ffbww5o5wp" } ] },
  { id: 32, phase: 5, imdb: "7.9", themeColor: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.5)", title: "Guardians of the Galaxy Vol. 3", year: "2023", duration: "2h 30m", trailerUrl: "https://www.youtube.com/results?search_query=Guardians+of+the+Galaxy+Vol+3+trailer", poster: "./Guardians%20of%20the%20Galaxy%20Vol.%203.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/5a5xt0baf5l0tmt" }, { resolution: "2K", url: "https://hubcloud.cx/drive/vj1rfdv1dpylmdy" } ] },
  { id: 33, phase: 5, imdb: "5.5", themeColor: "#facc15", glowColor: "rgba(250, 204, 21, 0.5)", title: "The Marvels", year: "2023", duration: "1h 45m", trailerUrl: "https://www.youtube.com/results?search_query=The+Marvels+trailer", poster: "./The%20Marvels.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/wzh5zqxbvjqse_a" }, { resolution: "2K", url: "https://hubcloud.cx/video/a9beyy6my86fglx" } ] },
  { id: 34, phase: 5, imdb: "7.7", themeColor: "#ef4444", glowColor: "rgba(239, 68, 68, 0.5)", title: "Deadpool & Wolverine", year: "2024", duration: "2h 7m", trailerUrl: "https://www.youtube.com/results?search_query=Deadpool+%26+Wolverine+trailer", poster: "./deadpool-and-wolverine-poster.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/video/ee_f7ex0xsruew1" }, { resolution: "2K", url: "https://hubcloud.cx/video/6tx0ht1wqv0jbdq" } ] },
  { id: 35, phase: 5, imdb: "5.7", themeColor: "#38bdf8", glowColor: "rgba(56, 189, 248, 0.45)", title: "Captain America: Brave New World", year: "2025", duration: "1h 58m", trailerUrl: "https://www.youtube.com/results?search_query=Captain+America+Brave+New+World+trailer", poster: "./Captain%20America%20Brave%20New%20World.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/py2pwnte1gsspy8" }, { resolution: "2K", url: "https://hubcloud.cx/drive/c5lltg1tqgoiydi" } ] },
  { id: 36, phase: 5, imdb: "7.2", themeColor: "#f97316", glowColor: "rgba(249, 115, 22, 0.5)", title: "Thunderbolts*", year: "2025", duration: "TBD", trailerUrl: "https://www.youtube.com/results?search_query=Thunderbolts+trailer", poster: "./Thunderbolts.jpg", downloads: [ { resolution: "2K", url: "https://hubcloud.cx/drive/kqnsku1dduivihf" } ] },
  { id: 37, phase: 6, imdb: "7.4", themeColor: "#0ea5e9", glowColor: "rgba(14, 165, 233, 0.5)", title: "The Fantastic Four: First Steps", year: "2025", duration: "TBD", trailerUrl: "https://www.youtube.com/results?search_query=The+Fantastic+Four+First+Steps+trailer", poster: "./The%20Fantastic%20Four%20First%20Steps.jpg", downloads: [ { resolution: "1080p", url: "https://hubcloud.cx/drive/qpmihliosqmh7pp" }, { resolution: "2K", url: "https://hubcloud.cx/drive/ahidhwd1lyadrwk" } ] },
];

// ─── VIDEO SOURCES ───
const desktopIntroVideo = './new_opening_marvel_video_web.mp4';
const mobileIntroVideo = './mobile_opening_video.mp4';
const heroVideo_src = './new_one_header_video_web.mp4';

document.addEventListener('DOMContentLoaded', () => {
  const introOverlay = document.getElementById('intro-overlay');
  const skipBtn = document.getElementById('skip-intro');
  const introVideo = document.getElementById('intro-video');
  const heroVideo = document.getElementById('hero-video');
  const moviesGrid = document.getElementById('movies-grid');
  const searchInput = document.getElementById('movie-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const noResults = document.getElementById('no-results');
  const resetFilterBtn = document.getElementById('reset-filter-btn');
  const moviesCountBadge = document.getElementById('movies-count');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const header = document.querySelector('.header');

  let appShown = false;
  let currentSearch = '';

  // PRIORITY 1: Render movies immediately — before any video logic
  renderMovies();


  // ─── Device detection ───
  const getIsMobile = () => {
    const isSmallScreen = window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches;
    const isMobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
    const isTouchMobile = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.innerWidth <= 1024;
    return isSmallScreen || isMobileAgent || isTouchMobile;
  };

  // ─── Connection quality detection ───
  const getConnectionQuality = () => {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!conn) return 'unknown';
    if (conn.saveData) return 'save-data';
    const type = conn.effectiveType;
    if (type === 'slow-2g' || type === '2g') return 'very-slow';
    if (type === '3g') return 'slow';
    return 'fast'; // 4g or better
  };

  // ─── Transition to main app ───
  const showApp = () => {
    if (appShown) return;
    appShown = true;

    // Release intro video memory immediately
    if (introVideo) {
      try {
        introVideo.pause();
        // Remove all sources
        while (introVideo.firstChild) introVideo.removeChild(introVideo.firstChild);
        introVideo.removeAttribute('src');
        introVideo.load();
      } catch (e) {}
    }

    // Play hero video (already has src set from heroVideo_src)
    if (heroVideo) {
      heroVideo.play().catch(() => {});
    }

    const overlay = document.getElementById('intro-overlay') || introOverlay;
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      overlay.classList.add('hidden');
      setTimeout(() => {
        try { overlay.remove(); } catch (e) { overlay.style.display = 'none'; }
      }, 200);
    }
  };

  // Expose to window (for inline HTML onclick handlers)
  window.skipIntroVideo = showApp;
  window.__onIntroSkipped = showApp;

  // ─── OPTIMIZED INTRO VIDEO SETUP ───
  if (introVideo && introOverlay) {
    const isMobile = getIsMobile();
    const connQuality = getConnectionQuality();

    console.log(
      `%c🎬 MCU %c ${isMobile ? '📱 MOBILE' : '💻 DESKTOP'} %c Conn: ${connQuality}`,
      'background: #e62429; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
      'background: #00d26a; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
      'color: #aaa;'
    );

    // ─── INJECT VIDEO SRC ───
    const injectVideoSrc = () => {
      // Choose source based on device
      const primarySrc = isMobile ? mobileIntroVideo : desktopIntroVideo;

      // Set src directly — most reliable for mobile autoplay
      introVideo.src = primarySrc;
      introVideo.preload = 'auto';
      introVideo.muted = true;
      introVideo.setAttribute('muted', '');
      introVideo.setAttribute('playsinline', '');
      introVideo.setAttribute('webkit-playsinline', '');
      introVideo.setAttribute('autoplay', '');
      introVideo.setAttribute('data-device', isMobile ? 'mobile' : 'desktop');

      introVideo.load();
      introVideo.play().catch(e => {
        console.warn('Intro autoplay failed:', e);
        // Only skip if autoplay is truly blocked
        showApp();
      });
    };

    setTimeout(injectVideoSrc, 0);

    let hasPlayed = false;

    introVideo.addEventListener('timeupdate', () => {
      if (introVideo.currentTime > 0.1) hasPlayed = true;
      // Play full video on both mobile and desktop
      const maxTime = introVideo.duration ? introVideo.duration - 0.3 : 5;
      if (introVideo.currentTime >= maxTime) showApp();
    });

    introVideo.addEventListener('loadedmetadata', () => {
      introVideo.play().catch(() => {});
      if (introVideo.duration > 0) {
        const cap = (introVideo.duration + 0.3) * 1000;
        setTimeout(showApp, cap);
      }
    }, { once: true });

    introVideo.addEventListener('canplay', () => {
      introVideo.play().catch(() => {});
    }, { once: true });

    introVideo.addEventListener('ended', showApp);
    introVideo.addEventListener('error', () => showApp());

    // ─── SKIP HANDLERS ───
    const triggerSkip = (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      showApp();
    };
    if (skipBtn) {
      skipBtn.addEventListener('click', triggerSkip);
      skipBtn.addEventListener('pointerdown', triggerSkip);
      skipBtn.addEventListener('touchstart', triggerSkip, { passive: false });
    }
    introOverlay.addEventListener('click', triggerSkip);
    window.addEventListener('keydown', (e) => {
      if (!appShown && (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter')) showApp();
    }, { once: true });

    // ─── HARD TIMEOUTS (SAFETY NETS) ───
    // If video hasn't started playing within 800ms → skip to app (mobile: 600ms)
    setTimeout(() => {
      if (!appShown && !hasPlayed && (introVideo.paused || introVideo.currentTime === 0)) {
        console.log('Intro video stalled — transitioning to app.');
        showApp();
      }
    }, isMobile ? 600 : 800);

    // Absolute maximum: 6s mobile, 6s desktop (safety net)
    setTimeout(() => { if (!appShown) showApp(); }, isMobile ? 6000 : 6000);

  } // end: no intro overlay fallback

  // 3. Render Movies
  function renderMovies() {
    if (!moviesGrid) return;
    moviesGrid.innerHTML = '';

    const query = currentSearch.toLowerCase().trim();

    const filtered = movies.filter(movie => {
      if (!query) return true;
      return (
        movie.title.toLowerCase().includes(query) ||
        movie.year.includes(query) ||
        (movie.imdb && movie.imdb.includes(query))
      );
    });

    // Update count badge
    if (moviesCountBadge) {
      moviesCountBadge.textContent = `${filtered.length} Title${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      if (noResults) noResults.classList.remove('hidden');
      return;
    } else {
      if (noResults) noResults.classList.add('hidden');
    }

    filtered.forEach((movie, index) => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.style.animationDelay = `${Math.min(index * 25, 400)}ms`;
      if (movie.themeColor) {
        card.style.setProperty('--card-hover-color', movie.themeColor);
      }
      if (movie.glowColor) {
        card.style.setProperty('--card-glow-color', movie.glowColor);
      }

      card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-image-wrap" role="button" aria-label="View details for ${movie.title}" tabindex="0">
          <span class="card-imdb-badge">
            <span class="imdb-tag">IMDb</span>
            <span class="imdb-score"><svg width="11" height="11" viewBox="0 0 24 24" fill="#f5c518"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${movie.imdb}</span>
          </span>
          <img 
            src="${movie.poster}" 
            alt="${movie.title}" 
            class="card-image" 
            loading="lazy" 
            decoding="async"
            onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'500\\' height=\\'750\\'><defs><linearGradient id=\\'grad\\' x1=\\'0%\\' y1=\\'0%\\' x2=\\'0%\\' y2=\\'100%\\'><stop offset=\\'0%\\' stop-color=\\'%23250505\\' /><stop offset=\\'100%\\' stop-color=\\'%2308080a\\' /></linearGradient></defs><rect width=\\'500\\' height=\\'750\\' fill=\\'url(%23grad)\\'/><text x=\\'50%\\' y=\\'50%\\' font-family=\\'Outfit, sans-serif\\' font-size=\\'36\\' font-weight=\\'bold\\' fill=\\'%23ED1D24\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'>${encodeURIComponent(movie.title.substring(0, 20))}${movie.title.length > 20 ? '...' : ''}</text></svg>';" 
          />
        </div>
        <div class="card-content">
          <h3 class="card-title" title="${movie.title}">${movie.title}</h3>
          <div class="card-meta">
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              ${movie.year}
            </span>
            <span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${movie.duration}
            </span>
          </div>
          <div class="card-actions">
            <a href="${movie.trailerUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary trailer-btn" title="Watch ${movie.title} Trailer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Trailer
            </a>

            ${movie.downloads && movie.downloads.length > 0 ? `
              <div class="dropdown">
                <button class="btn btn-primary download-toggle-btn" aria-haspopup="true" aria-expanded="false" title="Download Options">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Get ▾
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
              <button class="btn btn-secondary" style="opacity: 0.6; cursor: not-allowed;" onclick="alert('Download link coming soon for ${movie.title}!')" title="Download link pending">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Pending
              </button>
            `}
          </div>
        </div>
      `;

      // Touch & Click handler for Poster Tap
      const imageWrap = card.querySelector('.card-image-wrap');
      if (imageWrap) {
        imageWrap.addEventListener('dblclick', (e) => {
          e.preventDefault();
          const queryParam = encodeURIComponent(`${movie.title} ${movie.year} Marvel movie details`);
          window.open(`https://www.google.com/search?q=${queryParam}`, '_blank');
        });
      }

      // Touch & Click Dropdown Toggle
      const downloadBtn = card.querySelector('.download-toggle-btn');
      const dropdown = card.querySelector('.dropdown');
      if (downloadBtn && dropdown) {
        downloadBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = dropdown.classList.contains('open');

          // Close all other open dropdowns first
          document.querySelectorAll('.dropdown.open').forEach(d => {
            if (d !== dropdown) {
              d.classList.remove('open');
              const b = d.querySelector('.download-toggle-btn');
              if (b) b.setAttribute('aria-expanded', 'false');
            }
          });

          // Toggle current dropdown
          dropdown.classList.toggle('open', !isOpen);
          downloadBtn.setAttribute('aria-expanded', (!isOpen).toString());
        });
      }

      moviesGrid.appendChild(card);
    });
  }

  // Close dropdowns on outside tap/click
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(d => {
      d.classList.remove('open');
      const b = d.querySelector('.download-toggle-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  // 4. Search Handler with Clear Button
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', currentSearch.length === 0);
      }
      renderMovies();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        currentSearch = '';
        clearSearchBtn.classList.add('hidden');
        searchInput.focus();
        renderMovies();
      }
    });
  }

  // Reset Filters in empty state
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      currentSearch = '';
      if (searchInput) {
        searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      }
      renderMovies();
    });
  }

  // 6. Header Scrolled State & Scroll-to-Top Button
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY || window.pageYOffset;

        if (header) {
          if (scrollPos > 40) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }

        if (scrollTopBtn) {
          if (scrollPos > 300) {
            scrollTopBtn.classList.add('visible');
          } else {
            scrollTopBtn.classList.remove('visible');
          }
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
