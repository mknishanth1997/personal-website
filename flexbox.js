document.addEventListener('DOMContentLoaded', function () {
  const flexParent = document.querySelector('.flex-parent');

  const displayControl = document.getElementById('flex-disp');
  const directionControl = document.getElementById('flex-dire');
  const justifyControl = document.getElementById('flex-jus');
  const alignControl = document.getElementById('flex-align');
  const flex3Prop = document.getElementById('f3pop');

  // Event Listeners
  displayControl.addEventListener('change', () => {
    flexParent.style.display = displayControl.value;
  });

  directionControl.addEventListener('change', () => {
    flexParent.style.flexDirection = directionControl.value;
  });

  justifyControl.addEventListener('change', () => {
    flexParent.style.justifyContent = justifyControl.value;
  });

  alignControl.addEventListener('change', () => {
    flexParent.style.alignItems = alignControl.value;
  });

  flex3Prop.addEventListener('change', () => {
    document.querySelectorAll('.flex-parent div').forEach((child) => {
      child.style.flex = flex3Prop.value;
    });
  });
});

// grid

const gridButton = document.querySelector('.agcb');
console.log(gridButton);
gridButton.addEventListener('click', toggleGrid);

function toggleGrid() {
  const grid = document.querySelector('.grid-box');
  grid.classList.toggle('grid-box1');
}

// positioned element's

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.code-snipped-pos button');
  const explanations = document.querySelectorAll('.position-exp');
  const box = document.querySelector('.box1'); // Targeted element to change positioning
  const header = document.querySelector('header');

  buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
      // Remove 'active' class from all explanations
      explanations.forEach((exp) => exp.classList.remove('active'));
      // Activate the corresponding explanation
      explanations[index].classList.add('active');

      // Remove all positioning classes from the box
      box.classList.remove('ndf', 'rpe', 'ape', 'fixed');
      header.classList.remove('fixed');

      // Apply the selected positioning class
      if (index === 0) {
        box.classList.add('ndf'); // Static positioning (default)
      } else if (index === 1) {
        box.classList.add('rpe'); // Relative positioning
      } else if (index === 2) {
        box.classList.add('ape'); // Absolute positioning
      } else if (index === 3) {
        header.classList.add('fixed'); // Fixed positioning
      }
    });
  });
});
