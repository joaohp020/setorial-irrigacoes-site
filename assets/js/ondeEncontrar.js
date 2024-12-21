// Cria o mapa centralizado no Brasil
const mapa = L.map('mapa').setView([-14.235, -51.9253], 4); // Coordenadas do centro do Brasil

// Adiciona o mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapa);

// Representantes com as regiões fornecidas
const representantes = [
    {
        coordenadas: [-25.4372, -49.2731], // Região Sul
        nome: 'André Cordova',
        telefone: '+55 15 99753-3366',
        foto: '../files/images/AndreCordova.webp', // Foto de exemplo
    },
    {
        coordenadas: [-21.245, -44.999], // Lavras e Região
        nome: 'José Antônio',
        telefone: '+55 35 99979-1251',
        foto: '../files/images/JoseAntonio.webp', // Foto de exemplo
    },
    {
        coordenadas: [-18.5134, -49.2169], // Norte de São Paulo, Minas e Goiás (Usinas)
        nome: 'José Paulo',
        telefone: '+55 19 98177-0852',
        foto: '../files/images/JosePaulo.webp', // Foto de exemplo
    },
    {
        coordenadas: [-8.0476, -34.877], // Nordeste
        nome: 'Asbranor',
        telefone: '+55 81 4009-2000',
        foto: '../files/images/Asbranor.webp', // Foto de exemplo
    },
];

// Adiciona marcadores no mapa
representantes.forEach((rep) => {
    const popupContent = `
        <div style="text-align: center;" class="rep">
            <img src="${rep.foto}" alt="${rep.nome}" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
            <h3 class="nomeRep">${rep.nome}</h3>
            <p><a href="tel:${rep.telefone}">${rep.telefone}</a></p>
        </div>
    `;

    L.marker(rep.coordenadas)
        .addTo(mapa)
        .bindPopup(popupContent, { maxWidth: 200 });
});
