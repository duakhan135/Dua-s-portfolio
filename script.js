// ----- Reveal on scroll -----
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.1});
  reveals.forEach(r => observer.observe(r));

  // ----- Smooth scroll -----
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // ----- Project buttons placeholder -----
  document.querySelectorAll('.project-card .actions button').forEach((btn,i)=>{
    btn.addEventListener('click', ()=>alert('Replace with actual link for project '+(i+1)));
  });

  // ----- Particles Background -----
  const canvas=document.getElementById('particles');
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  let particlesArray=[];
  class Particle{
    constructor(){
      this.x=Math.random()*canvas.width;
      this.y=Math.random()*canvas.height;
      this.size=Math.random()*2+1;
      this.speedX=Math.random()*0.5-0.25;
      this.speedY=Math.random()*0.5-0.25;
    }
    update(){
      this.x+=this.speedX;
      this.y+=this.speedY;
      if(this.x>canvas.width)this.x=0;
      if(this.x<0)this.x=canvas.width;
      if(this.y>canvas.height)this.y=0;
      if(this.y<0)this.y=canvas.height;
    }
    draw(){
      ctx.fillStyle='rgba(0,255,255,0.4)';
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
      ctx.fill();
    }
  }
  function initParticles(){ particlesArray=[]; for(let i=0;i<120;i++){ particlesArray.push(new Particle()); } }
  function animate(){ ctx.clearRect(0,0,canvas.width,canvas.height); particlesArray.forEach(p=>{p.update();p.draw();}); requestAnimationFrame(animate); }
  initParticles(); animate();
  window.addEventListener('resize', ()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; initParticles(); });