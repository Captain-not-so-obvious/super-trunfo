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
