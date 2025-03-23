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
                Inteligência: 2,
                Força: 3,
                Velocidade: 2,
                Durabilidade: 5,
                Energia: 4,
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
