function validateForm() {
    var form = document.forms['signup'];
    var errorPanel = document.getElementById('errorPanel');
    var isValid = true;
    var errorMessage = '';

    // Reset error message and hide error panel
    errorPanel.textContent = '';
    errorPanel.style.display = 'none';

    // Validation logic for Product ID: Digit only and 8 characters long
    var productId = form["productId"].value;
    if (!productId.match(/^\d{8}$/)) {
        isValid = false;
        errorMessage += 'Product ID must be 8 digits long (e.g., 44455599).\n';
    }

    // Validation for Product Description: At least 20 characters
    var productDescription = form["description"].value;
    if (productDescription.length < 20) {
        isValid = false;
        errorMessage += 'Product Description must be at least 20 characters long.\n';
    }

    // Validation logic for Supplier Status: At least one checkbox checked
    var checkboxes = form["supplierStatus"];
    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    if (!checkedOne) {
        isValid = false;
        errorMessage += 'At least one Supplier Status must be selected.\n';
    }

    // Add more validation checks as required for other fields

    if (!isValid) {
        // Display error message in the side panel
        errorPanel.innerHTML = errorMessage; // Use innerHTML to format the messages, if needed
        errorPanel.style.display = 'block';
        return false;
    }

    return true;
}
