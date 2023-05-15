// filter buttons
const menuItems = document.querySelectorAll('.features__menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove .item_active class from all other menu items
    menuItems.forEach(item => item.classList.remove('item_active'));
    
    // Add .item_active class to the clicked menu item
    item.classList.add('item_active');
  });
});
  
// slider two-----------------------


// Get the slider container and slide items
const sliderContainer = document.querySelector('.features__content');
const slideItems = Array.from(document.querySelectorAll('.features__slide'));

// Calculate the slide width
const slideWidth = slideItems[0].offsetWidth;

// Set the initial position and index
let currentPosition = 0;
let currentIndex = 0;

// Function to slide to the given index
const slideToIndex = (index) => {
  currentPosition = -index * slideWidth;
  sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  currentIndex = index;
};

// Function to slide to the next index
const slideNext = () => {
  if (currentIndex === slideItems.length - 1) {
    slideToIndex(0);
  } else {
    slideToIndex(currentIndex + 1);
  }
};

// Function to slide to the previous index
const slidePrev = () => {
  if (currentIndex === 0) {
    slideToIndex(slideItems.length - 1);
  } else {
    slideToIndex(currentIndex - 1);
  }
};

// Get the control buttons
const leftButton = document.querySelector('.slider__control .left');
const rightButton = document.querySelector('.slider__control .right');

// Add event listeners to the buttons
leftButton.addEventListener('click', slidePrev);
rightButton.addEventListener('click', slideNext);


// slider 3------------------------------------------------------


