function loadPage(page) {
    document.getElementById('contentFrame').src = page;
}

// advertisement Test data
const ads = [
    {
        image: 'Public/images/venue1.jpg',
        name: 'Oppi Hoek',
        description: 'We’re looking for a high-energy rock band to light up the stage this Saturday night at our venue!.If youre ready to bring the noise and get the crowd moving, we want to hear from you.',
        location: 'Cape Town',
        date: '10 May',
        person: 'Marisa',
        contact: '0761422105',
        genres: ['Rock', 'Indie', 'Alternative']
    },
    {
        image: 'IMG/band.jpg',
        name: 'Vrydag Aand',
        description: 'Smooth jazz evenings and relaxing ambiance.',
        location: 'Johannesburg',
        Date: '20 May',
        person: 'Petrus',
        contact: '082 2525 0027',
        genres: ['Jazz', 'Soul', 'Blues']
    }

];

// create ad blocks
function loadAdvertisements() {
    const wrapper = document.getElementById('adContainerWrapper');
    ads.forEach(ad => {
        const adBlock = document.createElement('div');
        adBlock.classList.add('ad-block');
        adBlock.innerHTML = `
            <img src="${ad.image}" alt="${ad.name}" class="ad-image">
            <div class="ad-content">
                <h2>${ad.name}</h2>
                <p><strong>Description:</strong> ${ad.description}</p>
                <p><strong>Location:</strong> ${ad.location}</p>
                <p><strong>Date:</strong> ${ad.date}</p>
                 <p><strong>Contact Person:</strong> ${ad.person}</p>
                  <p><strong>Contact Information:</strong> ${ad.contact}</p>
                <p><strong>Genres:</strong> ${ad.genres.join(', ')}</p>
            </div>
        `;
        wrapper.appendChild(adBlock);
    });
}

window.onload = loadAdvertisements;