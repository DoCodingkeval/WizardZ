// ----------GSAP ANIMATION---------------------
function PageOneAnime(){
    var timeline = gsap.timeline()

timeline.from(".header__logo",{
    y: -100,
    opacity:0,
    duration:0.8,
    ease: "bounce.out"
})

timeline.from(".nav__items li",{
    y: 50,
    rotation: 15,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)"
})
timeline.from(".hero__leftsection",{
    x:-100,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
},"same")
timeline.from(".hero__rightsection",{
    scale: 0.7,
    rotation: -5,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
},"same")
timeline.from(".brand__images",{
    y: -50,
    opacity:0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1.out"
})
gsap.to(".brand__images",{
    y: "-=10",
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
})
}
function PageSecondAnime(){
    var timeline = gsap.timeline({
        scrollTrigger:{
            trigger: ".services__section",
            scroller: "body",
            start: "top 20%",
            toggleActions: "play none none reverse"
        }
    })
    timeline.from(".each__card:nth-child(1)",{
        x: -100,
        rotateY: 90,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    },"same")
    timeline.from(".each__card:nth-child(2)",{
        x: 100,
        rotateY: -90,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    },"same")
    timeline.from(".each__card:nth-child(3)",{
        x: -100,
        rotateY: 90,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    },"same")
    timeline.from(".each__card:nth-child(4)",{
        x: 100,
        rotateY: -90,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    },"same")
}
if(window.innerWidth > 768){
PageOneAnime()
PageSecondAnime()
}