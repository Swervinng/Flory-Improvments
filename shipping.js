// Wait for the form to be submitted
document.getElementById('shippingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting to server

  // Collect input values
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const deliveryMethod = document.getElementById('delivery-method').value;
  const paymentMethod = document.getElementById('payment-method').value;

  // Save the info to localStorage
  localStorage.setItem('shipping_name', name);
  localStorage.setItem('shipping_address', address);
  localStorage.setItem('shipping_deliveryMethod', deliveryMethod);
  localStorage.setItem('shipping_paymentMethod', paymentMethod);

  // Show a message
  alert('✅ Your shipping and delivery information has been saved!');

  // Clear the form after saving
  document.getElementById('shippingForm').reset();
  window.location.href = 'index.html';
});
