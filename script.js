const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// Remove duplicate modal logic and enhance modal transitions and accessibility

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('projectModal');
  const closeBtn = modal.querySelector('.close-btn');
  const modalTitle = modal.querySelector('h3');
  const modalDesc = modal.querySelector('p');
  const projectLinks = document.querySelectorAll('.portfolio-item a');

  // Project details data
  const projectDetails = [
    {
      title: 'Project 1',
      desc: 'Detailed description for Project 1. This project showcases creative fashion design and unique style.'
    },
    {
      title: 'Project 2',
      desc: 'Detailed description for Project 2. This project highlights innovative techniques and modern trends.'
    },
    {
      title: 'Project 3',
      desc: 'Detailed description for Project 3. This project features elegant wear and artistic concepts.'
    }
  ];

  // Open modal on project click
  projectLinks.forEach((link, idx) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      modalTitle.textContent = projectDetails[idx].title;
      modalDesc.textContent = projectDetails[idx].desc;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  // Close modal with fade-out effect
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
});

// Add smooth transitions for modal (requires CSS)
// .modal { transition: opacity 0.3s ease; }
// .modal.active { display: flex; opacity: 1; }
// .modal:not(.active) { opacity: 0; pointer-events: none; }

// Add focus trap for accessibility (optional for advanced polish)
