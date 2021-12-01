class ProductService {
    static list = [];
    static setList(newList) {
        ProductService.list = newList;
    }

    getProducts() {
        console.log('MOCKS!!!!');
        return new Promise((resolve) => {
            setTimeout(resolve([ProductService.list]), 500)
        });
    }
}

export default ProductService;