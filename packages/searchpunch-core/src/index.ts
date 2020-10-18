import 'reflect-metadata';
import {EsIndex, EsField} from './decorators';

export * from './decorators';

@EsIndex(
  {
    index: 'produkty',
  },
)
export class Product {
  @EsField({type: 'keyword'}) name: string = '';
}
