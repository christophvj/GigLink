// JavaScript code to limit the number of checkboxes that can be checked to 3
let classificationInput = document.getElementById("classificationInput");
let genreLabel = document.getElementById("genreLabel");

classificationInput.addEventListener("change", function () {
    if (classificationInput.value === "Venue") {
        manipulateCodeBlockDisplay("none", "genreContainer");
        manipulateCodeBlockDisplay("none", "genreLabel");
        manipulateCodeBlockDisplay("block", "facilitiesContainer");
    } else {
        manipulateCodeBlockDisplay("flex", "genreContainer");
        manipulateCodeBlockDisplay("block", "genreLabel");
        manipulateCodeBlockDisplay("none", "facilitiesContainer");
    }
});

function limitCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) checkedCount++;
    });
    if (checkedCount >= 3) {
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) checkbox.disabled = true;
        });
    } else {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
        });
    }
}

function uploadProfilePicture() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.onchange = () => {
        const file = fileInput.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('profilePicture', file);

        fetch('/uploadProfilePicture', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Profile picture uploaded successfully!');
                } else {
                    alert('Error uploading profile picture.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    fileInput.click();
}

function manipulateCodeBlockDisplay(display, codeBlockId) {
    document.getElementById(codeBlockId).style.display = display;
}