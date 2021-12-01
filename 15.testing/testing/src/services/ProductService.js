class ProductService {
    setList = (elements) => {}

    getProducts() {
        if (process.env.NODE_ENV === "production") {
            console.log('REAl!!!!');
        }

        return new Promise((resolve) => {
            setTimeout(resolve[1, 2, 3], 500)
        });
    }
}

export default ProductService;