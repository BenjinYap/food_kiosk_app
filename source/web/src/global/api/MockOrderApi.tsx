import {OrderApiInterface} from "./OrderApiInterface";
import {Api} from "./Api";

export class MockOrderApi extends Api implements OrderApiInterface {
  public async getCategories(): Promise<any> {
    const resp = await fetch('/api/order/categories');
    return await resp.json();
  }
}