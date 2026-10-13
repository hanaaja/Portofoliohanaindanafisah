'use strict';
const DATA = window.portfolioData;
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
const make = (name, cls, text) => {
  const el = document.createElement(name);
  if (cls) el.className = cls;
  if (typeof text === 'string') el.textContent = text;
  return el;
};

// Profile contacts can be edited via data.js.
document.title = `${DATA.profile.name} — Portfolio`;
$('#heroDescription').textContent = DATA.profile.heroTagline || DATA.profile.summary;
$('#aboutBody').textContent = DATA.profile.summary;
$('#emailLink').href = `mailto:${DATA.profile.email}`;
$('#linkedinLink').href = DATA.profile.linkedin;
$('#emailText').textContent = DATA.profile.email;
$('#year').textContent = new Date().getFullYear();

// Ensure both portrait placements reflect the chosen PNG file.
$$('img[alt*="Hana Inda Nafisah"]').forEach(image => image.src = DATA.profile.photo);

function renderProjects(filter='all') {
  const filtered = DATA.projects.filter(project => filter === 'all' || project.category === filter);
  const grid = $('#projectGrid'); grid.replaceChildren();
  filtered.forEach((project) => {
    const card = make('article','project-card');
    const show = make('button','project-click');
    show.type = 'button';
    show.setAttribute('aria-label', `View details of ${project.title}`);
    const cover = make('div','project-cover');
    const img = new Image(); img.src = project.image; img.alt = `Illustrative PNG artwork for ${project.title}`;
    img.loading = 'lazy'; img.decoding = 'async';
    cover.appendChild(img);
    const overlay = make('span','cover-circle','↗'); overlay.setAttribute('aria-hidden','true');
    cover.appendChild(overlay);
    const top = make('div','card-topline');
    top.append(make('span','',project.categoryLabel),make('span','',project.period));
    const title = make('h3','',project.title);
    const subtitle = make('p','card-subtitle',project.subtitle);
    const tags = make('div','tag-row');
    project.tools.slice(0,3).forEach(item => tags.appendChild(make('span','tag',item)));
    const bottom = make('div','card-bottom');
    bottom.append(tags,make('span','card-action','VIEW CASE STUDY ↗'));
    show.append(cover,top,title,subtitle,bottom);
    show.addEventListener('click',()=>openProject(project));
    card.appendChild(show); grid.appendChild(card);
  });
}

$$('.filter').forEach(btn => btn.addEventListener('click', () => {
  $$('.filter').forEach(other => {
    const active = btn === other;
    other.classList.toggle('active',active);
    other.setAttribute('aria-pressed',String(active));
  });
  renderProjects(btn.dataset.filter);
}));

const dialog = $('#projectDialog');
function openProject(p) {
  $('#modalImg').src = p.image;
  $('#modalImg').alt = `Illustrative PNG artwork for ${p.title}`;
  $('#modalEyebrow').textContent = `${p.categoryLabel} / ${p.period}`;
  $('#modalTitle').textContent = p.title;
  $('#modalContext').textContent = p.context;
  $('#modalSummary').textContent = p.summary;
  $('#modalScope').textContent = p.scope;
  $('#modalOutcome').textContent = p.outcome;
  const bullets = $('#modalBullets'); bullets.replaceChildren();
  p.activities.forEach(item => bullets.append(make('li','',item)));
  const tags = $('#modalTags'); tags.replaceChildren();
  p.tools.forEach(item => tags.append(make('span','tag',item)));
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open','');
}
$('#closeDialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

function renderExperience() {
  const list = $('#experienceList'); list.replaceChildren();
  DATA.experience.forEach((job,index) => {
    const article = make('article','job');
    const date = make('div','job-date',job.period);
    const info = make('div','job-info');
    info.append(make('span','job-num',`0${index+1} / EXPERIENCE`),make('h3','',job.company),make('p','job-sub',job.subtitle));
    const ul = make('ul','job-points');job.points.forEach(point=>ul.append(make('li','',point)));
    article.append(date,info,ul);list.append(article);
  });
}
function renderAwards() {
  const list = $('#awardList');list.replaceChildren();
  DATA.awards.forEach(item=>{
    const row=make('div','award-row');
    row.append(make('span','award-year',item.year));
    const desc=make('div','');desc.append(make('strong','',item.name),make('p','',item.event));
    row.append(desc,make('span','award-arrow','↗'));
    list.append(row);
  });
}
function renderSkills() {
  const list=$('#skillsList');list.replaceChildren();
  DATA.skills.forEach(item=>{
    const art=make('article','skill-card');
    art.append(make('span','skill-number',item.number),make('h3','',item.title));
    const tags=make('div','skill-chips');item.list.forEach(s=>tags.append(make('span','',s)));
    art.append(tags);list.append(art);
  });
  const certs=$('#certList');certs.replaceChildren();
  DATA.certifications.forEach(item=>{
    const row=make('div','cert-row');row.append(make('strong','',item.title),make('span','',`${item.issuer} · ${item.year}`));certs.append(row);
  });
}
renderProjects();renderExperience();renderAwards();renderSkills();

const menuToggle = $('#menuToggle'), nav=$('#siteNav');
function setMenu(open) {
  nav.classList.toggle('open',open);
  menuToggle.classList.toggle('open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
}
menuToggle.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
$$('a',nav).forEach(a=>a.addEventListener('click',()=>setMenu(false)));
window.addEventListener('keydown',event=>{ if (event.key==='Escape') setMenu(false); });

let scrollPending=false;
window.addEventListener('scroll',()=>{
  if(scrollPending) return;
  scrollPending=true;
  requestAnimationFrame(()=>{
    const max = Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    $('#scrollIndicator').style.width = `${Math.max(0,Math.min(100,window.scrollY/max*100))}%`;
    scrollPending=false;
  });
},{passive:true});
