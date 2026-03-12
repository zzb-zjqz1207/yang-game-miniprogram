Page({
  data: {
    cardSymbols: ['🐑', '🌾', '✂️', '🧶', '🥕', '🍀', '🌸', '🍄'],
    cardPool: [],
    slot: [],
    slotMaxSize: 7,
    score: 0,
    level: 1,
    undoCount: 3,
    shuffleCount: 3,
    removeCount: 3,
    history: [],
    showModal: false,
    modalTitle: '',
    modalMessage: ''
  },

  onLoad() {
    this.init();
  },

  init() {
    this.createCardPool();
    this.updateScore();
    this.updateToolCounts();
  },

  createCardPool() {
    const cardPool = [];
    const cardsPerType = 9;
    const poolWidth = 320;
    const poolHeight = 400;
    const cardWidth = 50;
    const cardHeight = 60;
    const layers = 4;
    const cardsPerLayer = Math.ceil((cardsPerType * this.data.cardSymbols.length) / layers);

    this.data.cardSymbols.forEach(symbol => {
      for (let i = 0; i < cardsPerType; i++) {
        const index = cardPool.length;
        const layer = Math.floor(index / cardsPerLayer);
        const layerOffsetX = layer * 6;
        const layerOffsetY = layer * 5;
        
        // 确定性随机位置
        const randomX = Math.abs(Math.sin(index * 17) * (poolWidth - cardWidth - 30));
        const randomY = Math.abs(Math.cos(index * 23) * (poolHeight - cardHeight - 30));
        
        cardPool.push({
          id: Math.random().toString(36).substr(2, 9),
          symbol: symbol,
          matched: false,
          x: 15 + randomX + layerOffsetX,
          y: 15 + randomY + layerOffsetY
        });
      }
    });

    this.shuffleArray(cardPool);

    this.setData({
      cardPool: cardPool,
      slot: [],
      history: [],
      showModal: false
    });
  },

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },

  clickCard(e) {
    const cardId = e.currentTarget.dataset.id;
    const cardIndex = this.data.cardPool.findIndex(c => c.id === cardId);
    
    if (cardIndex === -1) return;

    if (this.data.slot.length >= this.data.slotMaxSize) {
      this.showModal('游戏结束', '槽位已满，再试一次吧！😢');
      return;
    }

    this.saveHistory();

    const card = this.data.cardPool[cardIndex];
    const newCardPool = this.data.cardPool.filter((_, i) => i !== cardIndex);
    const newSlot = [...this.data.slot, card];

    this.setData({
      cardPool: newCardPool,
      slot: newSlot
    });

    this.checkMatch();
    this.checkWin();
  },

  clickSlotCard(e) {
    const index = e.currentTarget.dataset.index;

    if (this.data.undoCount <= 0) {
      wx.showToast({
        title: '撤销次数已用完',
        icon: 'none'
      });
      return;
    }

    this.saveHistory();

    const card = this.data.slot[index];
    const newSlot = this.data.slot.filter((_, i) => i !== index);
    const newCardPool = [...this.data.cardPool, card];

    this.setData({
      slot: newSlot,
      cardPool: newCardPool,
      undoCount: this.data.undoCount - 1
    });

    this.updateToolCounts();
  },

  checkMatch() {
    const symbolCount = {};
    this.data.slot.forEach(card => {
      symbolCount[card.symbol] = (symbolCount[card.symbol] || 0) + 1;
    });

    for (const symbol in symbolCount) {
      if (symbolCount[symbol] >= 3) {
        let removed = 0;
        const newSlot = this.data.slot.filter(card => {
          if (card.symbol === symbol && removed < 3) {
            removed++;
            return false;
          }
          return true;
        });

        this.setData({
          slot: newSlot,
          score: this.data.score + removed * 10
        });

        this.updateScore();
        break;
      }
    }
  },

  checkWin() {
    if (this.data.cardPool.length === 0 && this.data.slot.length === 0) {
      this.setData({
        score: this.data.score + 100
      });
      this.updateScore();
      this.showModal('🎉 恭喜通关！', `最终得分：${this.data.score} 分`);
    }
  },

  saveHistory() {
    const history = [...this.data.history, {
      cardPool: [...this.data.cardPool],
      slot: [...this.data.slot]
    }];

    if (history.length > 10) {
      history.shift();
    }

    this.setData({ history });
  },

  undo() {
    if (this.data.undoCount <= 0 || this.data.history.length === 0) {
      wx.showToast({
        title: '没有可撤销的操作',
        icon: 'none'
      });
      return;
    }

    const lastState = this.data.history[this.data.history.length - 1];
    const newHistory = this.data.history.slice(0, -1);

    this.setData({
      cardPool: lastState.cardPool,
      slot: lastState.slot,
      history: newHistory,
      undoCount: this.data.undoCount - 1
    });

    this.updateToolCounts();
  },

  shuffle() {
    if (this.data.shuffleCount <= 0) {
      wx.showToast({
        title: '洗牌次数已用完',
        icon: 'none'
      });
      return;
    }

    const cardPool = [...this.data.cardPool, ...this.data.slot];
    this.shuffleArray(cardPool);

    this.setData({
      cardPool: cardPool,
      slot: [],
      shuffleCount: this.data.shuffleCount - 1
    });

    this.updateToolCounts();
  },

  removeThree() {
    if (this.data.removeCount <= 0) {
      wx.showToast({
        title: '移除次数已用完',
        icon: 'none'
      });
      return;
    }

    if (this.data.slot.length < 3) {
      wx.showToast({
        title: '槽位中卡片不足 3 张',
        icon: 'none'
      });
      return;
    }

    const newSlot = this.data.slot.slice(3);

    this.setData({
      slot: newSlot,
      removeCount: this.data.removeCount - 1
    });

    this.updateToolCounts();
  },

  restart() {
    this.setData({
      score: 0,
      undoCount: 3,
      shuffleCount: 3,
      removeCount: 3
    });

    this.init();
  },

  updateScore() {
    this.setData({ score: this.data.score });
  },

  updateToolCounts() {
    this.setData({
      undoCount: this.data.undoCount,
      shuffleCount: this.data.shuffleCount,
      removeCount: this.data.removeCount
    });
  },

  showModal(title, message) {
    this.setData({
      showModal: true,
      modalTitle: title,
      modalMessage: message
    });
  },

  hideModal() {
    this.setData({ showModal: false });
  },

  restartFromModal() {
    this.hideModal();
    this.restart();
  }
});
