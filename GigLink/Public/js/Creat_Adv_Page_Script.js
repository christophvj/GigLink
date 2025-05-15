// Creat_Adv_Page_Script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Band Advertisement Form script loaded.");

    // Get a reference to the form (optional, for potential JS interactions)
    const bandAdForm = document.getElementById('bandAdForm');

    if (bandAdForm) {
  

        // Add event listener for form submission
        bandAdForm.addEventListener('submit', (event) => {
            // Perform custom validation before submitting
            console.log("Form submitted. Performing validation (example)...");

            // Get date input value
            const availableDatesInput = document.getElementById('availableDates');
            if (availableDatesInput) {
                const datesValue = availableDatesInput.value.trim();
                // Basic check: ensure dates are entered if field is not empty
                // More complex validation (like checking YYYY-MM-DD format) could be added here.
                if (datesValue !== '' && !/^\d{4}-\d{2}-\d{2}(,\s*\d{4}-\d{2}-\d{2})*$/.test(datesValue)) {
                    // alert("Please enter available dates in YYYY-MM-DD format, separated by commas.");
                    // event.preventDefault(); // Prevent form submission if validation fails
                    // console.error("Date format validation failed.");
                    // For now, just logging a warning as the regex is basic
                    console.warn("Date format might not be strictly YYYY-MM-DD comma-separated.");
                }
            }

            // Add more validation or AJAX submission logic if needed

            console.log("Submitting form...");
            // If event.preventDefault() was called above, the form won't submit automatically.
        });

        // Example: Add logic for interacting with genre checkboxes
        const genreCheckboxes = bandAdForm.querySelectorAll('input[name="genre[]"]');
        genreCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checkedGenres = Array.from(genreCheckboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value);
                console.log("Selected genres:", checkedGenres);
            });
        });

    } else {
        console.error("Form with id 'bandAdForm' not found.");
    }

}); // End DOMContentLoaded
