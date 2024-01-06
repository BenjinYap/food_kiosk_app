import {OrderApiInterface} from "./OrderApiInterface.tsx";
import {Api} from "./Api.tsx";

export class MockOrderApi extends Api implements OrderApiInterface {
  public getCategories(): string {
    return '321';
  }
}