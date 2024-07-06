document.addEventListener('DOMContentLoaded', () => {
    let members = [];
    let users = [];

    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            members = data.members;
            users = data.users;

            document.getElementById('login-form').addEventListener('submit', (e) => {
                e.preventDefault();

                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const user = users.find(u => u.username === username && u.password === password);

                if (user) {
                    if (user.role === 'admin') {
                        document.getElementById('admin-section').style.display = 'block';
                    }
                    document.getElementById('user-section').style.display = 'block';
                    document.getElementById('member-form').style.display = 'block';
                    document.querySelector('.dashboard').style.display = 'block';

                    initializeApp(members, user.role);
                } else {
                    alert('Nom d\'utilisateur ou mot de passe incorrect.');
                }
            });
        })
        .catch(error => console.error('Erreur lors du chargement des membres :', error));
});

function initializeApp(data, role) {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = '';
    data.forEach(member => addMemberToList(member, role));

    document.getElementById('member-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const majeur = document.getElementById('majeur').value === 'oui';
        const licencePayee = document.getElementById('licencePayee').value === 'oui';
        const newMember = { name, email, majeur, "licence payée": licencePayee };

        data.push(newMember);
        addMemberToList(newMember, role);
        updateDashboard(data);

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('majeur').value = 'oui';
        document.getElementById('licencePayee').value = 'oui';
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

    updateDashboard(data);
}

function addMemberToList(member, role) {
    const li = document.createElement('li');
    if (role === 'admin') {
        li.textContent = `${member.name} - ${member.email} - Majeur: ${member.majeur ? 'Oui' : 'Non'} - Licence payée: ${member["licence payée"] ? 'Oui' : 'Non'}`;
    } else {
        li.textContent = `${member.name} - Licence payée: ${member["licence payée"] ? 'Oui' : 'Non'}`;
    }
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
