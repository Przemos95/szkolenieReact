class ProductService {
    setList = (elements) => {}

    getProducts() {
        console.log('REAl!!!!');

        return new Promise((resolve) => {
            setTimeout(resolve([1, 2, 3]), 500)
        });
    }
}

export default ProductService;