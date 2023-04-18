import { ProductHttpService } from "./services/product-http.service";

(async () => {
  const productService = new ProductHttpService();

  try {
    console.log('-_'.repeat(5));
    console.log('getAll');

    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((item) => item.price));

    const productId = products[100].id;
    console.log('-_'.repeat(5));
    console.log('update');
    // console.log(productId);

    await productService.update(productId, {
      price:2000,
      title: "Cristal Avocado",
      description: "Only one of a Kind glass Avocado"
    });

    console.log('-_'.repeat(5));
    console.log('findOne');

    const product = await productService.findOne(productId);
    console.log(product);

  } catch (error) {
    console.log(error);
  }
})();
