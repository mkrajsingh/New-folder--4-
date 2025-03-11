

  // Main Slider Logic
const mainSlider = document.querySelector('.main-slide-container');
const mainSlides = document.querySelectorAll('.main-slide');
let currentMain = 0;

document.querySelector('.main-next').addEventListener('click', () => {
  if (currentMain < mainSlides.length - 1) currentMain++;
  else currentMain = 0;
  mainSlider.scrollTo({
    left: mainSlides[currentMain].offsetLeft,
    behavior: 'smooth',
  });
});

document.querySelector('.main-prev').addEventListener('click', () => {
  if (currentMain > 0) currentMain--;
  else currentMain = mainSlides.length - 1;
  mainSlider.scrollTo({
    left: mainSlides[currentMain].offsetLeft,
    behavior: 'smooth',
  });
});

// Sub Slider Logic
document.querySelectorAll('.sub-slider').forEach((slider) => {
  const container = slider.querySelector('.sub-slide-container');
  slider.querySelector('.sub-next').addEventListener('click', () => {
    container.scrollBy({ left: 120, behavior: 'smooth' });
  });
  slider.querySelector('.sub-prev').addEventListener('click', () => {
    container.scrollBy({ left: -120, behavior: 'smooth' });
  });
});

const cardData = [
    {
      icon: "💡",
      title: "Innovative Thinking",
      description: "Our team is made up of highly skilled professionals with extensive experience & diverse expertise, guaranteeing quality, innovative solutions, and outstanding results in every project we undertake."
    },
    {
      icon: "🚀",
      title: "Faster Delivery",
      description: "3x Faster release cycles with agile and streamlined processes tailored to your needs."
    },
    {
      icon: "🔁",
      title: "Reusability",
      description: "60% software development reusability to cut down time and enhance efficiency."
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "Achieve 40% cost savings with our smart resourcing, tools, and scalable infrastructure."
    },
    {
      icon: "📉",
      title: "Manual Reduction",
      description: "40% reduction in manual administration through automation and intelligent processes."
    },
    {
      icon: "🌐",
      title: "Scalable Solutions",
      description: "We build platforms that are scalable and robust to accommodate your growth."
    },
    {
      icon: "🧠",
      title: "Smart Integrations",
      description: "Integrate with tools and platforms smoothly to keep your workflow uninterrupted."
    },
    {
      icon: "📈",
      title: "Growth Focused",
      description: "We prioritize your ROI and growth with every decision we make."
    }
  ];
  
  const cardContainer = document.getElementById("cardContainer");
  let currentIndex = 0;
  const cardsPerBatch = 4;
  
  function renderCards() {
    cardContainer.innerHTML = "";
  
    const cardsToShow = cardData.slice(currentIndex, currentIndex + cardsPerBatch);
    cardsToShow.forEach(card => {
      const cardEl = document.createElement("div");
      cardEl.className = "card";
      cardEl.innerHTML = `
        <div class="card-icon">${card.icon}</div>
        <div class="card-content">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      `;
      cardContainer.appendChild(cardEl);
    });
  
    currentIndex = (currentIndex + cardsPerBatch) % cardData.length;
  }
  
  renderCards();
  setInterval(renderCards, 5000); // Rotate every 5 seconds

  const cardsData = [
    {
      icon: "📁",
      title: "Quick Turnaround",
      desc: "Efficient project management and prompt delivery of services, saving clients time and effort."
    },
    {
      icon: "⚙️",
      title: "Tech Expertise",
      desc: "Our developers are proficient with the latest technologies, ensuring top-quality results."
    },
    {
      icon: "🤝",
      title: "Client-Centric Approach",
      desc: "We prioritize client needs, fostering strong communication and satisfaction."
    }
  ];
  
  let current = 0;
  
  const icon = document.getElementById("card").querySelector(".icon");
  const title = document.getElementById("card-title");
  const desc = document.getElementById("card-desc");
  
  function updateCard() {
    current = (current + 1) % cardData.length;
    // Fade-out effect
    document.getElementById("card").style.opacity = 0;
  
    setTimeout(() => {
      icon.textContent = cardData[current].icon;
      title.textContent = cardData[current].title;
      desc.textContent = cardData[current].desc;
      // Fade-in effect
      document.getElementById("card").style.opacity = 1;
    }, 600);
  }
  
  // Sync with the animation duration of semi-circle
  setInterval(updateCard, 6000);
  
  
  
