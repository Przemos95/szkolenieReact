import Category from '../models/Category';

class CategoryService {
    categoryList: Category[] = [
        { id: 1, name: 'Żywność' },
        { id: 2, name: 'Rachunki' },
        { id: 3, name: 'Kultura' }
    ];

    getAllCategories(): Promise<Category[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.categoryList), 1000);
        })
    }
}

export default CategoryService;