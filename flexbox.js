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
