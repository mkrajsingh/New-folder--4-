document.addEventListener('DOMContentLoaded', () => {
  
  // Main Slider Logic
  const mainSlider = document.querySelector('.main-slide-container');
  const mainSlides = document.querySelectorAll('.main-slide');
  let currentMain = 0;

  // Main next and previous buttons event listeners
  document.querySelector('.main-next').addEventListener('click', () => {
    currentMain = (currentMain + 1) % mainSlides.length;
    mainSlider.scrollTo({
      left: mainSlides[currentMain].offsetLeft,
      behavior: 'smooth',
    });
  });

  document.querySelector('.main-prev').addEventListener('click', () => {
    currentMain = (currentMain - 1 + mainSlides.length) % mainSlides.length;
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

  // Card Data and Rendering
  const cardData = [
    { icon: "💡", title: "Innovative Thinking", description: "Our team is made up of highly skilled professionals with extensive experience & diverse expertise." },
    { icon: "🚀", title: "Faster Delivery", description: "3x Faster release cycles with agile and streamlined processes tailored to your needs." },
    { icon: "🔁", title: "Reusability", description: "60% software development reusability to cut down time and enhance efficiency." },
    { icon: "💰", title: "Cost Optimization", description: "Achieve 40% cost savings with our smart resourcing, tools, and scalable infrastructure." },
    { icon: "📉", title: "Manual Reduction", description: "40% reduction in manual administration through automation and intelligent processes." },
    { icon: "🌐", title: "Scalable Solutions", description: "We build platforms that are scalable and robust to accommodate your growth." },
    { icon: "🧠", title: "Smart Integrations", description: "Integrate with tools and platforms smoothly to keep your workflow uninterrupted." },
    { icon: "📈", title: "Growth Focused", description: "We prioritize your ROI and growth with every decision we make." }
  ];
  
  const cardContainer = document.getElementById("cardContainer");
  let currentIndex = 0;
  const cardsPerBatch = 4;

  // Function to render cards
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

  // Card Navigation Logic
  const leftBtn = document.querySelector('.nav-btn.left');
  const rightBtn = document.querySelector('.nav-btn.right');

  if (leftBtn && rightBtn && cardContainer) {
    leftBtn.addEventListener('click', () => {
      cardContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', () => {
      cardContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // Card Update (with fade effect)
  const cardElement = document.getElementById("card");
  const icon = cardElement.querySelector(".icon");
  const title = cardElement.querySelector("#card-title");
  const desc = cardElement.querySelector("#card-desc");

  let currentCard = 0;

  function updateCard() {
    currentCard = (currentCard + 1) % cardData.length;
    // Fade-out effect
    cardElement.style.opacity = 0;

    setTimeout(() => {
      icon.textContent = cardData[currentCard].icon;
      title.textContent = cardData[currentCard].title;
      desc.textContent = cardData[currentCard].description;
      // Fade-in effect
      cardElement.style.opacity = 1;
    }, 600);
  }

  // Sync with the animation duration of semi-circle
  setInterval(updateCard, 6000);

});



// /////////

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('cardContainer');

  const cardsData = [
    {
      title: 'Innovative Strategies',
      desc: 'We tailor data-driven strategies that give our clients a competitive edge.'
    },
    {
      title: 'Tech-First Approach',
      desc: 'Leveraging AI, automation & analytics to drive business growth.'
    },
    {
      title: 'Client-Centric Model',
      desc: 'We customize every service to align with your business goals.'
    },
    {
      title: 'Transparent Reporting',
      desc: 'Clear insights into every campaign’s performance in real-time.'
    }
  ];

  // Function to render cards
  function renderCards() {
    cardContainer.innerHTML = ''; // Clear the previous cards

    cardsData.forEach(card => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h3>${card.title}</h3><p>${card.desc}</p>`;
      cardContainer.appendChild(div);
    });
  }

  renderCards(); // Initial render
  setInterval(renderCards, 5000); // Rotate cards every 5 seconds
});


/////////////////////
const track = document.getElementById("carouselTrack");
const rightBtn = document.getElementById("scrollRight");

rightBtn.addEventListener("click", () => {
  track.scrollBy({ left: 300, behavior: 'smooth' });
});


///////////////////////

const cardElement = document.getElementById("card");

if (cardElement) {
  const icon = cardElement.querySelector(".icon");
  const title = cardElement.querySelector("#card-title");
  const desc = cardElement.querySelector("#card-desc");

  let currentCard = 0;

  function updateCard() {
    currentCard = (currentCard + 1) % cardData.length;
    cardElement.style.opacity = 0;

    setTimeout(() => {
      icon.textContent = cardData[currentCard].icon;
      title.textContent = cardData[currentCard].title;
      desc.textContent = cardData[currentCard].description;
      cardElement.style.opacity = 1;
    }, 600);
  }

  setInterval(updateCard, 6000);
}
////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const cardElement = document.getElementById("card");
  const icon = document.getElementById("card-icon");
  const title = document.getElementById("card-title");
  const desc = document.getElementById("card-desc");

  const cardData = [
    { icon: "💡", title: "Innovative Thinking", description: "Our team is made up of highly skilled professionals with extensive experience & diverse expertise." },
    { icon: "🚀", title: "Faster Delivery", description: "3x Faster release cycles with agile and streamlined processes tailored to your needs." },
    { icon: "🔁", title: "Reusability", description: "60% software development reusability to cut down time and enhance efficiency." },
    { icon: "💰", title: "Cost Optimization", description: "Achieve 40% cost savings with our smart resourcing, tools, and scalable infrastructure." },
    { icon: "🌐", title: "Scalable Solutions", description: "We build platforms that are scalable and robust to accommodate your growth." },
    { icon: "📈", title: "Growth Focused", description: "We prioritize your ROI and growth with every decision we make." }
  ];

  let currentCard = 0;

  function updateCard() {
    cardElement.style.opacity = 0;

    setTimeout(() => {
      currentCard = (currentCard + 1) % cardData.length;
      icon.textContent = cardData[currentCard].icon;
      title.textContent = cardData[currentCard].title;
      desc.textContent = cardData[currentCard].description;

      cardElement.style.opacity = 1;
    }, 600); // Match fade duration
  }

  // Initial delay for visual sync with animation
  setInterval(updateCard, 6000); // Sync with CSS rotation animation
});
