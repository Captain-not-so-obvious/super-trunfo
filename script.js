class Card {
    constructor(name, attributes) {
        this.name = name;
        this.attributes = attributes;
    }
}

class Game {
    constructor() {
        this.deck = [];
        this.playerDeck = [];
        this.machineDeck = [];
        this.playerScore = 0;
        this.machineScore = 0;
        this.currentPlayerCard = null;
        this.currentMachineCard = null;
        
        this.initializeDeck();
        this.distributeCards();
        this.setupEventListeners();
        this.updateUI();
    }

    initializeDeck() {
        // Inteligência 1
        const cards = [
            new Card("Hulk - Terra 1610", { 
                Inteligência: 1, 
                Força: 7, 
                Velocidade: 3, 
                Durabilidade: 6, 
                Energia: 1, 
                Combate: 2, 
                img: '/img/Hulk Terra 1610.jpg'
            }),
            new Card("Krakoa", { 
                Inteligência: 6, 
                Força: 7, 
                Velocidade: 7, 
                Durabilidade: 7, 
                Energia: 7, 
                Combate: 4, 
                img: '/img/Krakoa.jfif'
            }),
            new Card("Bazuca", { 
                Inteligência: 1, 
                Força: 3, 
                Velocidade: 3, 
                Durabilidade: 3, 
                Energia: 1, 
                Combate: 6, 
                img: '/img/Bazuca.jpg'
            }),
            // Inteligência 2
            new Card("Garota-Aranha", { 
                Inteligência: 2, 
                Força: 4, 
                Velocidade: 3, 
                Durabilidade: 5, 
                Energia: 1, 
                Combate: 4, 
                img: '/img/Garota-Aranha.jfif'
            }),
            new Card("Arkon", { 
                Inteligência: 2, 
                Força: 6, 
                Velocidade: 3, 
                Durabilidade: 6, 
                Energia: 1, 
                Combate: 5, 
                img: '/img/Arkon.jpg'
            }),
            new Card("Mulher-Aranha", { 
                Inteligência: 2, 
                Força: 4, 
                Velocidade: 3, 
                Durabilidade: 3, 
                Energia: 1, 
                Combate: 3, 
                img: '/img/Mulher-Aranha.jpg'
            }),
            new Card("Coisa", { 
                Inteligência: 2, 
                Força: 6, 
                Velocidade: 2, 
                Durabilidade: 6, 
                Energia: 1, 
                Combate: 3, 
                img: '/img/Coisa.jpg'
            }),
            new Card("Raio Negro", { 
                Inteligência: 2, 
                Força: 5, 
                Velocidade: 3, 
                Durabilidade: 3, 
                Energia: 5, 
                Combate: 4, 
                img: '/img/Raio Negro.jpg'
            }),
            new Card("Hulk - Terra 616", {
                Inteligência: 2,
                Força: 7,
                Velocidade: 3,
                Durabilidade: 7,
                Energia: 1,
                Combate: 4,
                img: '/img/Hulk Terra 616.jpg'
            }),
            new Card("Fanático", {
                Inteligência: 2,
                Força: 7,
                Velocidade: 2,
                Durabilidade: 7,
                Energia: 1,
                Combate: 4,
                img: '/img/Fanatico.jfif'
            }),
            new Card("Cristalys", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 4,
                Combate: 3,
                img: '/img/Cristalys.jfif'
            }),
            new Card("Capitã Britânia", {
                Inteligência: 2,
                Força: 6,
                Velocidade: 4,
                Durabilidade: 6,
                Energia: 5,
                Combate: 4,
                img: '/img/Capitã Britânia.jfif'
            }),
            new Card("Blade", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 4,
                Energia: 1,
                Combate: 5,
                img: '/img/Blade.jpg'
            }),
            new Card("Trovejante", {
                Inteligência: 2,
                Força: 5,
                Velocidade: 5,
                Durabilidade: 6,
                Energia: 5,
                Combate: 3,
                img: '/img/Trovejante.jfif'
            }),
            new Card("Agente Anti-Venom", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 6,
                Energia: 1,
                Combate: 3,
                img: '/img/Anti-Venom.jfif'
            }),
            new Card("Gata Negra", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 3,
                img: '/img/Gata Negra.jpg'
            }),
            new Card("Fóton", {
                Inteligência: 2,
                Força: 5,
                Velocidade: 7,
                Durabilidade: 7,
                Energia: 6,
                Combate: 3,
                img: '/img/Fóton.png'
            }
            ),
            new Card("Wolverine", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 2,
                Combate: 7,
                img: '/img/Wolverine.png'
            }),
            new Card("Motoqueiro Fantasma", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 5,
                Energia: 4,
                Combate: 2,
                img: '/img/Motoqueiro Fantasma.jpg'
            }),
            new Card("Tocha Humana", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 5,
                Durabilidade: 2,
                Energia: 5,
                Combate: 3,
                img: '/img/Tocha Humana.jpg'
            }),
            new Card("Agente Americano", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 2,
                Combate: 4,
                img: '/img/Agente Americano.jpg'
            }),
            new Card("Esmagador Hogan", {
                Inteligência: 2,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Esmagador Hogan.jpg'
            }),
            new Card("Miss Marvel - Kamala Khan", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 4,
                Energia: 1,
                Combate: 2,
                img: '/img/Miss Marvel.jpg'
            }),
            new Card("Mestre Tecelão", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 7,
                Durabilidade: 7,
                Energia: 5,
                Combate: 4,
                img: '/img/Mestre Tecelão.jpg'
            }),
            new Card("Wolverine X-23", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 3,
                Durabilidade: 4,
                Energia: 1,
                Combate: 6,
                img: '/imgX-23.jpg'
            }),
            new Card("Bispo", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 4,
                Combate: 4,
                img: '/img/Bishop.jfif'
            }),
            new Card("Escorpião", {
                Inteligência: 2,
                Força: 5,
                Velocidade: 3,
                Durabilidade: 5,
                Energia: 1,
                Combate: 2,
                img: '/img/Escorpião.jfif'
            }),
            new Card("Cavaleiro da Lua", {
                Inteligência: 2,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Cavaleiro da Lua.jfif'
            }),
            new Card("Loteria", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 2,
                img: '/img/Loteria.jpg'
            }),
            new Card("Electro", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 5,
                Combate: 2,
                img: '/img/Electro.jpg'
            }),
            new Card("Aranha Escarlate", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 2,
                Combate: 4,
                img: '/img/Aranha Escarlate.jpg'
            }),
            new Card("Homem-Aranha Miles Morales", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 2,
                Combate: 3,
                img: '/img/Homem-Aranha Miles Morales.png'
            }),
            new Card("Namor", {
                Inteligência: 2,
                Força: 6,
                Velocidade: 3,
                Durabilidade: 6,
                Energia: 2,
                Combate: 4,
                img: '/img/Namor.jpg'
            }),
            new Card("Tempestade", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 3,
                Durabilidade: 2,
                Energia: 5,
                Combate: 4,
                img: '/img/Tempestade.jpg'
            }),
            new Card("Homem Molecular", {
                Inteligência: 2,
                Força: 1,
                Velocidade: 3,
                Durabilidade: 2,
                Energia: 7,
                Combate: 1,
                img: '/img/Homem Molecular.jpg'
            }),
            new Card("Ragnarok", {
                Inteligência: 2,
                Força: 6,
                Velocidade: 3,
                Durabilidade: 6,
                Energia: 5,
                Combate: 4,
                img: '/img/Ragnarok.jpg'
            }),
            new Card("Gambit", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 2,
                Combate: 4,
                img: '/img/Gambit.png'
            }),
            new Card("Nova - Richard Rider", {
                Inteligência: 2,
                Força: 7,
                Velocidade: 7,
                Durabilidade: 7,
                Energia: 6,
                Combate: 4,
                img: '/img/Nova Richard Rider.jpg'
            }),
            new Card("Espiral", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 6,
                Combate: 4,
                img: '/img/Espiral.jfif'
            }),
            new Card("Homem de Gelo", {
                Inteligência: 2,
                Força: 3,
                Velocidade: 3,
                Durabilidade: 4,
                Energia: 5,
                Combate: 4,
                img: '/img/Homem de Gelo.jpg'
            }),
            new Card("Motorista Fantasma", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 5,
                Energia: 3,
                Combate: 4,
                img: '/img/Motorista Fantasma.jpg'
            }),
            new Card("Nova - Samuel Alexander", {
                Inteligência: 2,
                Força: 6,
                Velocidade: 5,
                Durabilidade: 6,
                Energia: 6,
                Combate: 3,
                img: '/img/Nova Samuel Alexander.jpg'
            }),
            new Card("Capitão América - Samuel Wilson", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 3,
                Durabilidade: 2,
                Energia: 1,
                Combate: 4,
                img: '/img/Capitão América Samuel Wilson.jpg'
            }),
            new Card("Capitã Universo", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 5,
                Durabilidade: 6,
                Energia: 7,
                Combate: 1,
                img: '/img/Capitã Universo.jfif'
            }),
            new Card("Adaga", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 5,
                Combate: 4,
                img: '/img/Adaga.jpg'
            }),
            new Card("Thor", {
                Inteligência: 2,
                Força: 7,
                Velocidade: 7,
                Durabilidade: 6,
                Energia: 6,
                Combate: 4,
                img: '/img/Thor.jpg'
            }),
            new Card("Thundra", {
                Inteligência: 2,
                Força: 5,
                Velocidade: 2,
                Durabilidade: 6,
                Energia: 1,
                Combate: 4,
                img: '/img/Thundra.jpg'
            }),
            new Card("Manto", {
                Inteligência: 2,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 5,
                Energia: 3,
                Combate: 2,
                img: '/img/Manto.jfif'
            }),
            new Card("Dentes-de-Sabre", {
                Inteligência: 2,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 4,
                Energia: 1,
                Combate: 6,
                img: '/img/Dentes-de-Sabre.jpg'
            }),
            new Card("Deadpool", {
                Inteligência: 2,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 4,
                Energia: 1,
                Combate: 6,
                img: '/img/Deadpool.jpg'
            }),
            new Card("Homem-Areia", {
                Inteligência: 2,
                Força: 6,
                Velocidade: 2,
                Durabilidade: 6,
                Energia: 1,
                Combate: 4,
                img: '/img/Homem-Areia.jfif'
            }),
            new Card("Homem Púrpura", {
                Inteligência: 2,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 3,
                Combate: 1,
                img: '/img/Homem Púrpura.jpg'
            }),
            new Card("Hyperion", {
                Inteligência: 2,
                Força: 6,
                Velocidade: 5,
                Durabilidade: 6,
                Energia: 5,
                Combate: 3,
                img: '/img/Hyperion.jfif'
            }),
            // Inteligência 3
            new Card("Angela", {
                Inteligência: 3,
                Força: 5,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 1,
                Combate: 6,
                img: '/img/Angela.jpg'
            }),
            new Card("Destrutor", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 5,
                Combate: 3,
                img: '/img/Destrutor.jfif'
            }),
            new Card("O Coisa", {
                Inteligência: 3,
                Força: 6,
                Velocidade: 2,
                Durabilidade: 6,
                Energia: 1,
                Combate: 5,
                img: '/img/Coisa.jpg'
            }),
            new Card("Capitã Marvel", {
                Inteligência: 3,
                Força: 5,
                Velocidade: 5,
                Durabilidade: 6,
                Energia: 5,
                Combate: 4,
                img: '/img/Capitã Marvel.jpg'
            }),
            new Card("Teia de Seda", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 1,
                Combate: 3,
                img: '/img/Teia de Seda.jpg'
            }),
            new Card("Gavião Arqueiro", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 6,
                img: '/img/Gavião Arqueiro.jpg'
            }),
            new Card("Punho de Ferro", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 3,
                Combate: 6,
                img: '/img/Punho de Ferro.jpg'
            }),
            new Card("Garota Esquilo", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Garota Esquilo.jpg'
            }),
            new Card("Venom", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 6,
                Energia: 1,
                Combate: 4,
                img: '/img/Venom.png'
            }),
            new Card("Elektra", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 1,
                Combate: 6,
                img: '/img/Elektra.jpg'
            }),
            new Card("Gwen-Aranha ( Aranha-Fantasma )", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 1,
                Combate: 3,
                img: '/img/Gwen-Aranha.jpeg'
            }),
            new Card("Shocker", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 5,
                Energia: 5,
                Combate: 2,
                img: '/img/Shocker.jpg'
            }),
            new Card("Wolverine - Terra 1610", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 4,
                Energia: 1,
                Combate: 6,
                img: '/img/Wolverine - Terra 1610.jfif'
            }),
            new Card("Máquina de Combate", {
                Inteligência: 3,
                Força: 6,
                Velocidade: 5,
                Durabilidade: 6,
                Energia: 6,
                Combate: 4,
                img: '/img/Maquina de Combate.jpg'
            }),
            new Card("Jane Foster - Poderosa Thor", {
                Inteligência: 3,
                Força: 7,
                Velocidade: 4,
                Durabilidade: 6,
                Energia: 6,
                Combate: 3,
                img: '/img/Poderosa Thor.jpg'
            }),
            new Card("Mulher-Aranha", {
                Inteligência: 3,
                Força: 5,
                Velocidade: 3,
                Durabilidade: 4,
                Energia: 5,
                Combate: 4,
                img: '/img/Mulher-Aranha.jpg'
            }),
            new Card("Noturno", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 3,
                Durabilidade: 2,
                Energia: 1,
                Combate: 3,
                img: '/img/Noturno.jpg'
            }),
            new Card("Falcão Noturno", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 4,
                Combate: 4,
                img: '/img/Falcão Noturno.jpg'
            }),
            new Card("Luke Cage", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 5,
                Energia: 1,
                Combate: 4,
                img: '/img/Luke Cage.jfif'
            }),
            new Card("Capitão Marvel", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 7,
                Durabilidade: 3,
                Energia: 5,
                Combate: 4,
                img: '/img/Capitão Marvel.jpg'
            }),
            new Card("Espectro", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 6,
                Durabilidade: 4,
                Energia: 6,
                Combate: 4,
                img: '/img/Espectro.jfif'
            }),
            new Card("Morlun", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Morlun.jfif'
            }),
            new Card("Nick Fury", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 6,
                img: '/img/Nick Fury.jfif'
            }),
            new Card("Surfista Prateado", {
                Inteligência: 3,
                Força: 7,
                Velocidade: 7,
                Durabilidade: 6,
                Energia: 7,
                Combate: 2,
                img: '/img/Surfista Prateado.jfif'
            }),
            new Card("Mercúrio", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 5,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Mercúrio.jfif'
            }),
            new Card("Rocket Racoon", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 4,
                img: '/img/Rocket Racoon.jfif'
            }),
            new Card("Ciclope", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 5,
                Combate: 4,
                img: '/img/Ciclope.jpg'
            }),
            new Card("Kraven", {
                Inteligência: 3,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 1,
                Combate: 6,
                img: '/img/Kraven.jfif'
            }),
            new Card("Shang-Chi", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 7,
                img: '/img/Shang-Chi.jpg'
            }),
            new Card("Capitão América", {
                Inteligência: 3,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 1,
                Combate: 6,
                img: '/img/Capitão América.jpg'
            }),
            new Card("Mulher Invisível", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 3,
                Durabilidade: 6,
                Energia: 5,
                Combate: 3,
                img: '/img/Mulher Invisível.jfif'
            }),
            new Card("Hulk Vermelho", {
                Inteligência: 3,
                Força: 7,
                Velocidade: 3,
                Durabilidade: 6,
                Energia: 2,
                Combate: 4,
                img: '/img/Hulk Vermelho.jfif'
            }),
            new Card("Feiticeira Escarlate", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 6,
                Combate: 3,
                img: '/img/Feiticeira Escarlate.jfif'
            }),
            new Card("Arcanjo", {
                Inteligência: 3,
                Força: 2,
                Velocidade: 3,
                Durabilidade: 2,
                Energia: 1,
                Combate: 4,
                img: '/img/Arcanjo.jfif'
            }),
            new Card("Rei Do Crime", {
                Inteligência: 3,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 5,
                img: '/img/Rei Do Crime.jfif'
            }),
            // Personagens inteligência 4
            new Card("Rainha-Aranha", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 5,
                Combate: 4,
                img: '/img/Rainha-Aranha.jpg'
            }),
            new Card("Le Peregrino", {
                Inteligência: 4,
                Força: 2,
                Velocidade: 3,
                Durabilidade: 2,
                Energia: 1,
                Combate: 5,
                img: '/img/Le Peregrino.jpg'
            }),
            new Card("Tiwaz", {
                Inteligência: 4,
                Força: 6,
                Velocidade: 3,
                Durabilidade: 6,
                Energia: 6,
                Combate: 4,
                img: '/img/Tiwaz.jfif'
            }),
            new Card("Tremor", {
                Inteligência: 4,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 5,
                Combate: 6,
                img: '/img/Tremor.jpg'
            }),
            new Card("Rainha Branca - Emma Frost", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 5,
                Energia: 5,
                Combate: 3,
                img: '/img/Rainha Branca.jfif'
            }),
            new Card("Forge", {
                Inteligência: 4,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 4,
                img: '/img/Forge.png'
            }),
            new Card("Homem-Aranha 2099 - Miguel O'Hara", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 4,
                Durabilidade: 3,
                Energia: 2,
                Combate: 2,
                img: '/img/Homem-Aranha 2099.jpg'
            }),
            new Card("Chacal", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 1,
                Combate: 3,
                img: '/img/Chacal.jfif'
            }),
            new Card("Kang, O Conquistador", {
                Inteligência: 4,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Kang.jpg'
            }),
            new Card("Duende Verde", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 4,
                Energia: 3,
                Combate: 3,
                img: '/img/Duende Verde.jpg'
            }),
            new Card("Homem-Aranha", {
                Inteligência: 4,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Homem-Aranha.png'
            }),
            new Card("Senhor das Estrelas", {
                Inteligência: 4,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 3,
                Energia: 1,
                Combate: 4,
                img: '/img/Senhor das Estrelas.jpg'
            }),
            new Card("Mística", {
                Inteligência: 4,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 4,
                Energia: 1,
                Combate: 5,
                img: '/img/Mistica.jfif'
            }),
            new Card("Homem-Formiga - Scott Lang", {
                Inteligência: 4,
                Força: 5,
                Velocidade: 3,
                Durabilidade: 5,
                Energia: 3,
                Combate: 4,
                img: '/img/Homem-Formiga.jpg'
            }),
            new Card("Doutor Estranho", {
                Inteligência: 4,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 6,
                Combate: 6,
                img: '/img/Doutor Estranho.jpg'
            }),
            new Card("Ultron", {
                Inteligência: 4,
                Força: 6,
                Velocidade: 3,
                Durabilidade: 7,
                Energia: 6,
                Combate: 4,
                img: '/img/Ultron.png'
            }),
            new Card("Barão Von Strucker", {
                Inteligência: 4,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 4,
                Energia: 3,
                Combate: 5,
                img: '/img/Barão Von Strucker.jpg'
            }),
            new Card("Zeus", {
                Inteligência: 4,
                Força: 6,
                Velocidade: 3,
                Durabilidade: 7,
                Energia: 6,
                Combate: 4,
                img: '/img/Zeus.jpg'
            }),
            // Inteligência 5
            new Card("Abutre", {
                Inteligência: 5,
                Força: 3,
                Velocidade: 3,
                Durabilidade: 5,
                Energia: 1,
                Combate: 2,
                img: '/img/Abutre.jfif'
            }),new Card("Professor X", {
                Inteligência: 5,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 5,
                Combate: 3,
                img: '/img/Professor X.jpg'
            }),new Card("Lagarto", {
                Inteligência: 5,
                Força: 4,
                Velocidade: 3,
                Durabilidade: 5,
                Energia: 1,
                Combate: 2,
                img: '/img/Lagarto.jpg'
            }),
            new Card("Caveira Vermelha", {
                Inteligência: 5,
                Força: 2,
                Velocidade: 2,
                Durabilidade: 2,
                Energia: 1,
                Combate: 6,
                img: '/img/Caveira Vermelha.jfif'
            }),
            new Card("Magneto", {
                Inteligência: 5,
                Força: 2,
                Velocidade: 5,
                Durabilidade: 2,
                Energia: 6,
                Combate: 4,
                img: '/img/Magneto.jfif'
            }),
        ];
        this.deck = this.shuffleArray(cards);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    distributeCards() {
        for (let i = 0; i < 10; i++) {
            this.playerDeck.push(this.deck[i]);
            this.machineDeck.push(this.deck[i + 10]);
        }
    }

    setupEventListeners() {
        document.querySelectorAll('.attr-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.playRound(e.target.dataset.attr);
            });
        });
    }

    playRound(selectedAttribute) {
        this.currentPlayerCard = this.playerDeck[0];
        this.currentMachineCard = this.machineDeck[0];

        if (this.currentPlayerCard.attributes[selectedAttribute] > 
            this.currentMachineCard.attributes[selectedAttribute]) {
            this.playerScore++;
        } else if (this.currentPlayerCard.attributes[selectedAttribute] < 
                   this.currentMachineCard.attributes[selectedAttribute]) {
            this.machineScore++;
        }

        this.playerDeck.shift();
        this.machineDeck.shift();
        
        this.updateUI();
        
        if (this.playerDeck.length === 0) {
            this.endGame();
        }
    }

    updateUI() {
        document.getElementById('player-score').textContent = this.playerScore;
        document.getElementById('machine-score').textContent = this.machineScore;
        
        // Atualizar visualização das cartas
        if (this.currentPlayerCard) {
            document.querySelector('.active-player-card').innerHTML = this.createCardHTML(this.currentPlayerCard);
            document.querySelector('.attributes-area').style.display = 'block';
        }
    }

    createCardHTML(card) {
        return `
            <div class="card">
                <img src="${card.attributes.img}" alt="${card.name}" class="card-image">
                <h3>${card.name}</h3>
                <div class="attributes">
                    <p>Inteligência: ${card.attributes.Inteligência}</p>
                    <p>Força: ${card.attributes.Força}</p>
                    <p>Velocidade: ${card.attributes.Velocidade}</p>
                    <p>Durabilidade: ${card.attributes.Durabilidade}</p>
                    <p>Energia: ${card.attributes.Energia}</p>
                    <p>Combate: ${card.attributes.Combate}</p>
                </div>
            </div>
        `;
    }

    endGame() {
        const winner = this.playerScore > this.machineScore ? 'Jogador' : 'Máquina';
        alert(`Fim de jogo! ${winner} venceu!`);
    }
}

// Iniciar o jogo
window.addEventListener('DOMContentLoaded', () => {
    new Game();
});
