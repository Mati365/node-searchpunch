import {
  EsFieldMapping,
  EsIndexSettings,
  EsIndexAliases,
} from '../types';

export const ES_INDEX_CONFIG_META_KEY = Symbol('es:fields');
export const ES_INDEX_MAPPINGS_META_KEY = Symbol('es:mappings');

export type EsIndexMappingFields = Record<string, EsFieldMapping>;

export type EsIndexConfig = {
  index: string,
  settings?: EsIndexSettings,
  aliases?: EsIndexAliases,
};

/**
 * Creates reflect-metadata mappings fields list on object
 *
 * @export
 * @param {EsIndexConfig} config
 * @returns
 */
export function EsIndex(config: EsIndexConfig) {
  return <T extends {new (...args: any[]): {}}> (constructor: T) => {
    Reflect.defineMetadata(ES_INDEX_CONFIG_META_KEY, config, constructor);
  };
}
