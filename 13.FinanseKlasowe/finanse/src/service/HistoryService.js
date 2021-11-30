class HistoryService {
    purchaseHistory = [
        { id: 1, desc: 'Produkt A', categoryId: 1, value: 99 },
        { id: 2, desc: 'Produkt B', categoryId: 1, value: 69 },
        { id: 3, desc: 'Produkt C', categoryId: 2, value: 23 },
        { id: 4, desc: 'Produkt D', categoryId: 2, value: 67.20 },
        { id: 5, desc: 'Produkt E', categoryId: 2, value: 23.55 }
    ];

    async getAllProducts() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.purchaseHistory), 1000);
        })
    }
}

export default HistoryService;