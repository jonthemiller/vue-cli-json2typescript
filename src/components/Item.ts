import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Item')
export default class Item {
  @JsonProperty('bar')
  public bar = '';

  getBar (): string {
    return 'foo ' + this.bar;
  }
}
