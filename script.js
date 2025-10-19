// Accessible JS for example enrolment form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('enrolment-form');
  const status = document.getElementById('submit-message');
  const gpaStatus = document.getElementById('gpa-status');
  const clearBtn = document.getElementById('clear-status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Basic accessible validation example
    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) {
      status.textContent = 'Please complete the required fields: full name and email.';
      status.className = '';
      status.setAttribute('role', 'alert');
      status.focus?.();
      return;
    }

    // Simulate submission success
    status.textContent = 'Application submitted successfully. Check your email for confirmation.';
    status.className = '';
    status.setAttribute('role', 'status');
    // announce for screen readers
    status.setAttribute('aria-live', 'polite');
    // reset form (example)
    // form.reset();
  });

  clearBtn.addEventListener('click', function() {
    status.textContent = '';
    status.className = 'sr-only';
  });
});\n