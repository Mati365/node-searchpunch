/**
 * Field types
 *
 * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html}
 */
type EsObjectTypes = 'object' | 'flattened' | 'nested' | 'join';
type EsStructuredTypes = 'range' | 'ip' | 'murmur3';
type EsAggregateTypes = 'histogram';
type EsTextSearchTypes = 'text' | 'annotated-text' | 'completion' | 'search_as_you_type' | 'token_count';
type EsDocumentRankingTypes = 'dense_vector' | 'rank_feature' | 'rank_features';
type EsSpecialDataTypes = 'geo_point' | 'geo_shape' | 'point' | 'shape';
type EsOtherTypes = 'percoloator';
type EsCommonTypes = (
  'binary' | 'boolean' | 'keyword' | 'constant_keyword' | 'wildcard'
  | 'long' | 'double' | 'dates' | 'dates_nanos' | 'alias'
);

export type EsFieldType = (
  EsCommonTypes
  | EsObjectTypes
  | EsStructuredTypes
  | EsAggregateTypes
  | EsTextSearchTypes
  | EsDocumentRankingTypes
  | EsSpecialDataTypes
  | EsOtherTypes
);
