import type {EsFieldType} from './EsTypes.types';

/**
 * Mapping field format
 *
 * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-params.html}
 */
type EsFieldIndexOptions = 'docs' | 'freqs' | 'positions' | 'offsets';
type EsFieldTermVector = (
  'no' | 'yes' | 'with_positions' | 'with_offsets'
  | 'with_positions_offsets' | 'with_positions_payloads' | 'with_positions_offsets_payloads'
);

export type EsPlainFieldMapping = {
  type: Exclude<EsFieldType, 'object' | 'nested'>,
  analyzer?: string,
  boost?: number,
  coerce?: number,
  copyTo?: string,
  docValues?: boolean,
  dynamic?: boolean,
  eagerGlobalOrdinals?: boolean,
  enabled?: boolean,
  fielddata?: string,
  fielddataFrequencyFilter?: {
    min: number,
    max: number,
    minSegmentSize: number,
  },
  fields?: Record<string, EsPlainFieldMapping>,
  format?: string,
  ignoreAbove?: number,
  ignoreMalformed?: boolean,
  indexOptions?: EsFieldIndexOptions,
  indexPhrases?: boolean,
  indexPrefixes?: {
    minChars?: number,
    maxChars?: number,
  },
  index?: boolean,
  meta?: object,
  normalizer?: string,
  norms?: boolean,
  nullValue?: string,
  positionIncrementGap?: number,
  searchAnalyzer?: string,
  similarity?: string,
  store?: boolean,
  termVector?: EsFieldTermVector,
};

export type EsObjectFieldMapping = Omit<EsPlainFieldMapping, 'type'> & {
  type: 'object' | 'nested',
  properties: Record<string, EsPlainFieldMapping>,
};

export type EsFieldMapping = EsPlainFieldMapping | EsObjectFieldMapping;
