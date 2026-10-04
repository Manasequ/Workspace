// Utility functions

function formatDate(date) {
  const d = new Date(date);
  return d.toISOString();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  formatDate,
  validateEmail,
  capitalizeFirstLetter
};
