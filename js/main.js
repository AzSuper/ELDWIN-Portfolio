// navigation 
const links= Array.from(document.querySelectorAll(".main-nav li"));
const megaMenuLink=document.querySelector(".mega-menu");

const SwitchIt = (link)=>{
    links.forEach(x => {
        x .classList.remove("active");
        megaMenuLink.classList.remove("activeMega");
    });

    
    console.log("first")
    link.classList.add("active")

    if(link.classList.contains("megaM")){
        megaMenuLink.classList.add("activeMega");
    }
}

links.forEach(item => {
    item.addEventListener("click",()=>{
        SwitchIt(item)
    });
});


/////////////////////////////////// count dialog function 
document.addEventListener('DOMContentLoaded', () => {
    const countDownElement = document.querySelector('.count-down');
    const countCategoryCount = document.querySelectorAll('.count');

    const releaseDate = new Date(2025, 6, 1); // July 1, 2025

   

    const updateCountdown = () => {
        const todayTime = new Date();
        const differenceInMilliseconds = releaseDate - todayTime;

        if (differenceInMilliseconds <= 0) {
            countCategoryCount.forEach(count => count.innerHTML = '0');
            clearInterval(intervalId);
            return;
        }

        const time = {
            Days: Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)),
            Hours: Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            Minutes: Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)),
            Seconds: Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000),
        };

        countCategoryCount.forEach(countC => {
            const temp = countC.parentElement.className;
            if (time.hasOwnProperty(temp)) {
                countC.innerHTML = time[temp];
            }
        });
    };

    const startCountdown = () => {
        updateCountdown();
        intervalId = setInterval(updateCountdown, 1000);
    };

    let intervalId;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCountdown();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(countDownElement);
});











// animate title
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.title');
  
    const options = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      threshold: 0.6 // trigger when 10% of the section is in view
    };
  
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        //   // Optional: unobserve the section after the animation is applied
        //   observer.unobserve(entry.target);
        }
        else
        entry.target.classList.remove('animate');
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  