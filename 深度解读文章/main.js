// ====== 数据定义 ======

// 核心论点数据（深度解读类专属）
const pointsData = [
  {
    tag: '成本革命',
    tagColor: 'cyan',
    barClass: 'bar-cyan',
    title: 'AI让"拍不起"的故事变成现实',
    summary: '传统短剧成本150-300万，AI漫剧仅需5-10万。3人团队一个月出一部剧，降本90%、提效20倍。AI正在打破"钱"对创作的绑架。',
    data: '单部成本：5-10万元 | 团队规模：3人 | 制作周期：1个月',
    quote: '"之前的短剧画面，往往是两辆劳斯莱斯+一辆奔驰的特写。但现在，他可以坐上私人飞机，去巴黎喂鸽子。" —— 爱看互动创始人 孟祥云'
  },
  {
    tag: '拟真人浪潮',
    tagColor: 'blue',
    barClass: 'bar-blue',
    title: '从2D到拟真人：产业共识已形成',
    summary: 'AI拟真人短剧占比从去年7%激增至38%。Seedance2.0、可灵、Vidu等技术快速迭代，头部公司一致认为产业未来必然走向拟真人方向。',
    data: '拟真人占比：7% → 38% | 春节档AI漫剧播放占比：29.4%',
    quote: '"不管是2D漫剧还是3D漫剧，大部分头部公司的共识就是，这个产业未来一定会向拟真人发展，因为市场更大。" —— 云梭映彩创始人 何元肖'
  },
  {
    tag: '红利倒计时',
    tagColor: 'amber',
    barClass: 'bar-amber',
    title: '技术红利窗口正在急速收窄',
    summary: '2025年上线6万部AI漫剧，仅96部破亿，爆款率0.16%。90%非头部公司亏损。当技术门槛被抹平，纯靠技术红利的窗口期或仅剩3个月。',
    data: '上线总量：60,946部 | 破亿：96部 | 爆款率：0.16%',
    quote: '"潮水终会退去，但它留下的新地貌，将决定那个不远的未来，谁能在岸边建起自己的码头。"'
  },
  {
    tag: 'IP为王',
    tagColor: 'violet',
    barClass: 'bar-violet',
    title: 'IP成为决定生死的"胜负手"',
    summary: '当创作不再被预算和场景绑架，内容本身的价值被重新定义。阅文等版权方加速入局，优质IP成为核心竞争壁垒。没有IP的团队将面临出局风险。',
    data: '阅文举办"AI拟真人大讲堂" | 知乎CEO周源公开批评版权乱象',
    quote: '"当AI学会了拍戏，IP就是最后的护城河。谁手里有好故事，谁就能活到最后。"'
  },
  {
    tag: '工业化转型',
    tagColor: 'emerald',
    barClass: 'bar-emerald',
    title: '从作坊到工厂：工业化生产时代来临',
    summary: '腾讯云已服务超80%头部AI漫剧团队，日均产出4万张AI漫画、近40小时视频。灵境万维半年从18人扩至百人，月产千部不是问题。',
    data: '日均产出：4万张漫画 + 40小时视频 | 折合：800-1300集/天',
    quote: '"现在流程已经跑通了，以后一个月生产1000部漫剧都不是问题。" —— 灵境万维负责人 文良'
  },
  {
    tag: '出海蓝海',
    tagColor: 'pink',
    barClass: 'bar-pink',
    title: '国内内卷，出海成为唯一解药？',
    summary: '国内市场产能爆发、变现卡壳，海外市场却是尚待开垦的蓝海。北美、东南亚、日韩等全球内容市场成为新增长极，DramaWave年流水突破1.2亿美金。',
    data: '2026年市场规模：243.6亿元 | 同比增长：45% | 2030年预估：850亿元',
    quote: '"当一个赛道产能爆发、变现卡壳，内卷就会把所有人拖进死胡同。但破局的路不在国内，在海外。"'
  }
];

// 时间线数据（逻辑链条/演进脉络）
const timelineData = [
  { year: '2024 Q4', title: 'AI漫剧萌芽', desc: 'AI动漫短剧开始出现，《我一天征服一个美女》创下200万营收，行业看到新拐点', dotClass: 'tl-dot-blue', highlight: false },
  { year: '2025 Q1', title: 'AI转绘元年', desc: '灵境AI等平台推出转绘技术，真人短剧可1:1转为漫剧，降本90%、提效20倍', dotClass: 'tl-dot-pulse', highlight: true },
  { year: '2025 Q4', title: '拟真人爆火', desc: '不用真人演、不用搭景拍的AI短剧突然爆火，从边缘试探冲到平台榜单前排', dotClass: 'tl-dot-green', highlight: true },
  { year: '2025全年', title: '产能大爆发', desc: '抖音端原生漫剧上线突破6万部，市场规模达168亿元，播放量超700亿', dotClass: 'tl-dot-amber', highlight: true },
  { year: '2026.01', title: '拟真人占比激增', desc: '抖音漫剧百强榜中AI拟真人短剧占比从7%激增至38%，平台设置更高分账系数', dotClass: 'tl-dot-pulse', highlight: true },
  { year: '2026春节', title: '首个漫剧春节档', desc: '春节档短剧播放量86.7亿次，AI漫剧占比29.4%，AI仿真人贡献80%以上播放量', dotClass: 'tl-dot-green', highlight: true },
  { year: '2026.02', title: '《霍去病》震动行业', desc: '传闻"3人团队、3000元成本、5天5亿播放"（后被澄清有夸大），但行业震动已不可逆', dotClass: 'tl-dot-red', highlight: true },
  { year: '2026.03', title: '工业化生产成型', desc: '腾讯云服务超80%头部团队，日均产出4万张漫画；灵境万维半年扩至百人', dotClass: 'tl-dot-violet', highlight: false },
  { year: '2026.03', title: '版权争议爆发', desc: '知乎CEO周源公开批评AI漫剧版权乱象，"洗稿1分钟维权1年半"', dotClass: 'tl-dot-red', highlight: true },
  { year: '2026.04', title: '红利窗口收窄', desc: '技术门槛快速降低，90%非头部公司亏损，IP成为"胜负手"，纯技术红利或仅剩3个月', dotClass: 'tl-dot-pulse', highlight: true },
  { year: '2026→', title: '分化与出海', desc: '国内走向工业化、品质化、合规化；海外蓝海成为破局关键，2030年预估850亿市场', dotClass: 'tl-dot-green', highlight: false },
];

// ====== 渲染函数 ======

function renderPointCards() {
  const container = document.getElementById('points-container');
  if (!container) return;
  container.innerHTML = pointsData.map((item, i) => `
    <div class="point-detail-card ${item.barClass} p-5 md:p-6 rounded-xl bg-slate-900/80 border border-slate-800" style="animation-delay:${i * 0.1}s">
      <div class="flex items-center gap-2 mb-4">
        <span class="px-2 py-0.5 text-[10px] rounded-full bg-${item.tagColor}-500/10 text-${item.tagColor}-400 border border-${item.tagColor}-500/20">${item.tag}</span>
      </div>
      <h3 class="text-lg font-bold text-slate-200 mb-3">${item.title}</h3>
      <p class="text-sm text-slate-300 leading-relaxed mb-3">${item.summary}</p>
      <div class="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50">
        <i class="ri-database-2-line text-${item.tagColor}-400 text-sm flex-shrink-0"></i>
        <span class="text-xs text-slate-400">${item.data}</span>
      </div>
      <div class="quote-block">
        <p class="text-xs text-cyan-300/80 italic leading-relaxed">"${item.quote}"</p>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = `<div class="tl-line"></div>` + timelineData.map((item, i) => `
    <div class="tl-node" style="transition-delay:${i * 0.1}s">
      <div class="tl-dot ${item.dotClass || ''}"></div>
      <div class="p-4 rounded-xl ${item.highlight ? 'bg-slate-900/80 border border-slate-700' : 'bg-slate-900/40 border border-slate-800/50'}">
        <span class="text-xs ${item.highlight ? 'text-cyan-400' : 'text-slate-500'} font-mono">${item.year}</span>
        <h4 class="text-sm font-semibold ${item.highlight ? 'text-slate-200' : 'text-slate-400'} mt-1">${item.title}</h4>
        <p class="text-xs text-slate-500 mt-1 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

// ====== 粒子动画 ======
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.4 + 0.1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}

// ====== 滚动相关 ======
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('progress-bar');
  const sections = document.querySelectorAll('.section-animate');
  const pointCards = document.querySelectorAll('.point-card');
  const tagClouds = document.querySelectorAll('.tag-cloud');
  const metricCards = document.querySelectorAll('.metric-card');
  const navPills = document.querySelectorAll('.nav-pill');
  const sectionIds = ['speed-read', 'core-points', 'core-data', 'timeline'];

  // IntersectionObserver for sections
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  sections.forEach(s => sectionObs.observe(s));

  // Observer for point cards
  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 150);
      }
    });
  }, { threshold: 0.2 });
  pointCards.forEach(c => cardObs.observe(c));

  // Observer for tag clouds
  const tagObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.3 });
  tagClouds.forEach(t => tagObs.observe(t));

  // Observer for metric cards
  const metricObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.2 });
  metricCards.forEach(m => metricObs.observe(m));

  // Observer for timeline nodes
  const tlObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.tl-node').forEach(n => tlObs.observe(n));

  // Observer for bar fills
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.dataset.width;
        e.target.style.width = w + '%';
        e.target.classList.add('animated');
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.bar-fill').forEach(b => barObs.observe(b));

  // Observer for point detail cards
  const detailObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  setTimeout(() => {
    document.querySelectorAll('.point-detail-card').forEach((c, i) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(20px)';
      c.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
      detailObs.observe(c);
    });
  }, 100);

  // Scroll handler
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((scrollY / docH) * 100, 100);
    if (progressBar) progressBar.style.width = progress + '%';

    // Navbar show/hide
    if (navbar) {
      if (scrollY > window.innerHeight * 0.5) {
        navbar.classList.remove('-translate-y-full');
      } else {
        navbar.classList.add('-translate-y-full');
      }
    }

    // Nav pills active state
    let currentSection = '';
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && scrollY >= el.offsetTop - 200) {
        currentSection = id;
      }
    });
    navPills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('href') === '#' + currentSection);
    });
  });
}

// ====== 数字递增动画 ======
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = 'true';
        const target = parseInt(e.target.dataset.target);
        const suffix = e.target.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          // 特殊处理"亿"单位
          if (suffix === '亿') {
            e.target.textContent = (current / 10).toFixed(1) + suffix;
          } else if (target >= 10000) {
            e.target.textContent = (current / 10000).toFixed(1) + '万' + suffix;
          } else {
            e.target.textContent = current.toLocaleString() + suffix;
          }
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));
}

// ====== 分享功能 ======
function initShare() {
  const shareBtn = document.getElementById('share-btn');
  const shareModal = document.getElementById('share-modal');
  const closeModal = document.getElementById('close-modal');
  const copyBtn = document.getElementById('copy-btn');
  const copyTip = document.getElementById('copy-tip');
  const shareUrl = document.getElementById('share-url');

  if (shareBtn && shareModal) {
    shareBtn.addEventListener('click', () => shareModal.classList.remove('hidden'));
    closeModal.addEventListener('click', () => shareModal.classList.add('hidden'));
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) shareModal.classList.add('hidden');
    });
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(shareUrl.value).then(() => {
        copyTip.classList.remove('hidden');
        setTimeout(() => copyTip.classList.add('hidden'), 2000);
      });
    });
  }
}

// ====== 初始化 ======
document.addEventListener('DOMContentLoaded', () => {
  renderPointCards();
  renderTimeline();
  initParticles();
  initScrollEffects();
  initCounters();
  initShare();
});
