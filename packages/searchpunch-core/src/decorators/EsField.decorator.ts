import {EsFieldMapping} from '../types';
import {EsIndexMappingFields, ES_INDEX_MAPPINGS_META_KEY} from './EsIndex.decorator';

/**
 * Appends single field mapping to index
 *
 * @export
 * @param {EsFieldMapping} mapping
 */
export function EsField(mapping: EsFieldMapping) {
  return (target: any, propertyKey: string) => {
    const mappings: EsIndexMappingFields = Reflect.getOwnMetadata(ES_INDEX_MAPPINGS_META_KEY, target.constructor) || {};
    if (mappings[propertyKey]) {
      throw new Error(
        `Property ${propertyKey} is already mapped!`,
      );
    }

    Reflect.defineMetadata(
      ES_INDEX_MAPPINGS_META_KEY,
      {
        ...mappings,
        [propertyKey]: mapping,
      },
      target.constructor,
    );
  };
}
