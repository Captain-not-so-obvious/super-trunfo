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
        // Exemplo de cartas - você pode adicionar mais
        const cards = [
            new Card("Carta 1", { attr1: 8, attr2: 6, attr3: 9 }),
            new Card("Carta 2", { attr1: 7, attr2: 8, attr3: 5 }),
            // Adicione mais cartas aqui
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
            <h3>${card.name}</h3>
            <div class="attributes">
                <p>Atributo 1: ${card.attributes.attr1}</p>
                <p>Atributo 2: ${card.attributes.attr2}</p>
                <p>Atributo 3: ${card.attributes.attr3}</p>
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
