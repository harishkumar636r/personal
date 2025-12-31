// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Login Modal
const loginBtn = document.querySelector('.nav-links .btn');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginBtn.addEventListener('click', () => { modal.style.display = 'block'; });
closeBtn.addEventListener('click', () => { modal.style.display = 'none'; loginMessage.textContent=''; });
window.addEventListener('click', e => { if(e.target==modal){ modal.style.display='none'; loginMessage.textContent=''; } });
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const username=document.getElementById('username').value;
  const password=document.getElementById('password').value;
  if(username==="admin" && password==="1234"){ loginMessage.textContent="Login Successful!"; loginMessage.style.color="#00FF00"; setTimeout(()=>{modal.style.display='none';},1000); }
  else{ loginMessage.textContent="Invalid username or password"; loginMessage.style.color="#FF6347"; }
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index){
  slides.forEach(slide => slide.classList.remove('active'));
  if(index<0) currentSlide=slides.length-1;
  else if(index>=slides.length) currentSlide=0;
  else currentSlide=index;
  slides[currentSlide].classList.add('active');
}

showSlide(currentSlide);
setInterval(()=>{ showSlide(currentSlide+1); },5000);
prevBtn.addEventListener('click',()=>showSlide(currentSlide-1));
nextBtn.addEventListener('click',()=>showSlide(currentSlide+1));
