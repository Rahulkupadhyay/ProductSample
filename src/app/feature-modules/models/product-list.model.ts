export class ProductList {
    success = '';
    numOfResults = 0;
    lastPage = 0;
    page = 0;
    data: Product[] = [new Product()];
}

export class Product {
    _id = '';
    product_name = '';
    product_price = '';   
}