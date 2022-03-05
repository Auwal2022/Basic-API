const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data));
}

loadBuddies();

const displayBuddies = (data) => {
    const buddies = data.results;
    const buddyContainer = document.getElementById('buddy-container');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email} Phone: ${buddy.phone}`;
        buddyContainer.appendChild(p);
    }
}