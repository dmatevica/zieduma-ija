function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}


window.addEventListener('DOMContentLoaded', () => {
  showSection('sakums');

  const form = document.getElementById('complaintForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      form.style.display = 'none';
      document.getElementById('thankYouMessage').style.display = 'block';
  });
});

    