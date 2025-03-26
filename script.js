const tutorials = {
    windows: [
        { name: "installer windows server sur VirtualBox", file: "installer-winserv-Virtualbox W1.pdf" },
        { name: "configuration services AD DS et DNS", file: "config adds dns W2.pdf" },
        { name: "integration d'un groupe,UO et utilisateur dans un domaine", file: "creation d'utilisateur,groupe machine win10 W3.pdf" },
        { name: "Configuration d'un rôle DHCP", file: "DHCP active directoryW4.pdf" },
        { name: "installation d'un serveur de fichier", file: "installation d'un serveur de fichier W5.pdf" },
        { name: "creer un plan de sauvegarde et restauration", file: "sauvegarde et restauration W6.pdf" }
      
    ],
    linux: [
        { name: "Installation d'un serveur Debian 12", file: "l'installation d'un serveur debian 12 L1.pdf" },
        { name: "gestion utilisateur groupe et droits sur serveur", file: "gestion utilisateur groupe et droit sur serveur L2.pdf" },
        { name: "installation d'un serveur NGINX", file: "installation d'un serveur nginx L3.pdf" },
        { name: "Création d'un serveur LAMP", file: "installation d'un serveur lampL4.pdf" }
    ]
};

function showTutorials(system) {
    const container = document.getElementById("tutorials-container");
    const grid = document.getElementById("tutorials-grid");

    // Vider les anciens boutons
    grid.innerHTML = "";

    // Ajouter les nouveaux boutons
    tutorials[system].forEach(tutorial => {
        let btn = document.createElement("button");
        btn.className = "tutorial-btn";
        btn.textContent = tutorial.name;
        btn.onclick = () => window.open(`pdf/${tutorial.file}`, "_blank");
        grid.appendChild(btn);
    });

    // Afficher la section
    container.classList.remove("hidden");
}
