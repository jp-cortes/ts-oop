import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductHttpService } from "./product-htp2.service";
import { validate } from "class-validator";

export class ProductCRUDService {
  private url = 'https://api.escuela.co/api/v1/products';
  private http =  new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    //code
    // validate(dto);
    // inheritance with generic types
    return this.http.anotherRequest()
  }
}
