import axios from "axios";


import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

export class BaseHttpService<TypeClass> {
  //data: TypeClass[] = [];

  constructor (
    protected url: string
  ) {}

  async getAll() {

    const { data } = await axios.get<TypeClass[]>(this.url);
      return data;// array of generic type TypeClass
  }


//another example with generic Types
  async update<ID, DTO>(id: ID, changes:DTO) {
    const { data } = await  axios.put(`${this.url}/${id}`, changes);

    return data;
  }
}

// const service = new BaseHttpService<string>('');
// service.getAll();// type array of strings

// const service1 = new BaseHttpService<number>('');
// service1.getAll();// type array of numbers



( async () => {
  const url_01 = 'https://api.escuelajs.co/api/v1/products';
  const producService = new BaseHttpService<Product>(url_01);

  const answer = await producService.getAll();
  console.log('products', answer.length);
  producService.update<Product['id'], UpdateProductDto>(1, { title: 'Brown silverware'})

  const url_02 = 'https://api.escuelajs.co/api/v1/categories';
  const category = new BaseHttpService<Category>(url_02);

  const answer2 = await category.getAll();
  console.log('categories', answer2.length);

})();
