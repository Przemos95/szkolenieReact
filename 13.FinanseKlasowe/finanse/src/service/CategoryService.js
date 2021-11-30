class CategoryService {
    categoryList = [
        { id: 1, name: 'Żywność' },
        { id: 2, name: 'Rachunki' },
        { id: 3, name: 'Kultura' }
    ];

    async getAllCategories() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.categoryList), 1000);
        })
    }
}

export default CategoryService;