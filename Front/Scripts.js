const members = [
    { name: 'Antoine Dupont', email: 'antoine@example.com' },
    { name: 'Jeanne Rouge', email: 'jeanne@example.com' }
];

document.addEventListener('DOMContentLoaded', () => {
    const memberList = document.getElementById('member-list');
    members.forEach(member => addMemberToList(member));

    document.getElementById('member-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const newMember = { name, email };

        members.push(newMember);
        addMemberToList(newMember);

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
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
});


function addMemberToList(member) {
    const li = document.createElement('li');
    li.textContent = `${member.name} - ${member.email}`;
    document.getElementById('member-list').appendChild(li);
}

function updateDashboard() {
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