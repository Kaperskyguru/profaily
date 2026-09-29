document.addEventListener('DOMContentLoaded',()=>{
 const nav=document.querySelector('.main-nav');
 const toggle=document.querySelector('.mobile-menu');
 if(toggle&&nav) toggle.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
 document.querySelectorAll('.menu-trigger').forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();const group=button.closest('.nav-group');const wasOpen=group.classList.contains('open');document.querySelectorAll('.nav-group.open').forEach(item=>{item.classList.remove('open');const trigger=item.querySelector('.menu-trigger');if(trigger)trigger.setAttribute('aria-expanded','false')});if(!wasOpen){group.classList.add('open');button.setAttribute('aria-expanded','true')}}));
 document.addEventListener('click',event=>{if(!event.target.closest('.nav-group'))document.querySelectorAll('.nav-group.open').forEach(item=>{item.classList.remove('open');const trigger=item.querySelector('.menu-trigger');if(trigger)trigger.setAttribute('aria-expanded','false')})});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.querySelectorAll('.nav-group.open').forEach(item=>{item.classList.remove('open');const trigger=item.querySelector('.menu-trigger');if(trigger)trigger.setAttribute('aria-expanded','false')});if(nav&&nav.classList.contains('mobile-open')){nav.classList.remove('mobile-open');toggle?.setAttribute('aria-expanded','false')}}});
 const videoOpen=document.querySelector('[data-video-open]');
 const videoModal=document.querySelector('#walkthrough-modal');
 const productVideo=videoModal?.querySelector('video');
 const videoClose=videoModal?.querySelector('[data-video-close]');
 let videoReturnFocus=null;
 if(videoOpen&&videoModal&&productVideo){
  videoOpen.addEventListener('click',()=>{
   videoReturnFocus=document.activeElement;
   videoModal.showModal();
   productVideo.currentTime=0;
   productVideo.play().catch(()=>{});
  });
  videoClose?.addEventListener('click',()=>videoModal.close());
  videoModal.addEventListener('click',event=>{if(event.target===videoModal)videoModal.close()});
  videoModal.addEventListener('close',()=>{
   productVideo.pause();
   productVideo.currentTime=0;
   videoReturnFocus?.focus();
  });
 }
 const promoVideos=document.querySelectorAll('[data-lazy-video]');
 if(promoVideos.length){
  const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const startPromoVideo=video=>{
   if(video.dataset.videoLoaded!=='true'){
    video.querySelectorAll('source[data-src]').forEach(source=>{source.src=source.dataset.src;source.removeAttribute('data-src')});
    video.dataset.videoLoaded='true';
    video.load();
   }
   video.play().catch(()=>{});
  };
  const syncPromoMotion=()=>{
   promoVideos.forEach(video=>{
    if(motionPreference.matches||video.dataset.inView!=='true')video.pause();
    else startPromoVideo(video);
   });
  };
  if('IntersectionObserver'in window){
   const promoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    entry.target.dataset.inView=String(entry.isIntersecting);
    if(entry.isIntersecting&&!motionPreference.matches)startPromoVideo(entry.target);
    else entry.target.pause();
   }),{rootMargin:'200px 0px'});
   promoVideos.forEach(video=>promoObserver.observe(video));
  }else{
   promoVideos.forEach(video=>{video.dataset.inView='true'});
   syncPromoMotion();
  }
  if(motionPreference.addEventListener)motionPreference.addEventListener('change',syncPromoMotion);
  else motionPreference.addListener(syncPromoMotion);
 }
 const nodes=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});nodes.forEach(node=>observer.observe(node))}else nodes.forEach(node=>node.classList.add('visible'));
});