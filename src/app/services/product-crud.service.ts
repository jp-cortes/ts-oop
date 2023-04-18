import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductHttpService } from "./product-htp2.service";

export class ProductCRUDService {
  private url = 'https://api.escuela.co/api/v1/products';
  private http =  new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    //code
    // inheritance with generic types
    return this.http.anotherRequest()
  }
}
