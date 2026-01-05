// Simple alert on form submit
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
