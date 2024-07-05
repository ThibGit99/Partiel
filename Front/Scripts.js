document.addEventListener('DOMContentLoaded', () => {
    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            // Utilisation des données chargées dans votre application JavaScript
            initializeApp(data); // Appel à une fonction d'initialisation avec les données
        })
        .catch(error => console.error('Erreur lors du chargement des membres :', error));
});

function initializeApp(data) {
    const members = data;
    const memberList = document.getElementById('member-list');
    members.forEach(member => addMemberToList(member));

    document.getElementById('member-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const majeur = document.getElementById('majeur').value === 'oui';
        const licencePayee = document.getElementById('licencePayee').value === 'oui';
        const newMember = { name, email, majeur, "licence payée": licencePayee };

        members.push(newMember);
        addMemberToList(newMember);
        updateDashboard(members);

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('majeur').value = '';
        document.getElementById('licencePayee').value = '';
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const membersChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Septembre', 'Octobre', 'Novembre', 'Décembre', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
            datasets: [{
                label: 'Nombre d\'adhérents présents en moyenne',
                data: [80, 70, 60, 50, 40, 35, 50, 53, 58, 47, 25],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    updateDashboard(members);
}

function addMemberToList(member) {
    const li = document.createElement('li');
    li.textContent = `${member.name} - ${member.email}`;
    document.getElementById('member-list').appendChild(li);
}

function updateDashboard(members) {
    // Total des adhérents
    const totalMembers = members.length;
    document.getElementById('total-members').textContent = totalMembers;

    // Adhérents majeurs
    const adultMembers = members.filter(member => member.majeur).length;
    document.getElementById('adult-members').textContent = adultMembers;

    // Adhérents avec licence payée
    const paidMembers = members.filter(member => member['licence payée']).length;
    document.getElementById('paid-members').textContent = paidMembers;
}
