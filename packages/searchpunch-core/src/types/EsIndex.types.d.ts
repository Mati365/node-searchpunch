/**
 * Single index settings
 *
 * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html}
 */
export type EsIndexSettings = {
  // static index settings
  numberOfShards?: number,
  numberOfRoutingShards?: number,
  shard?: {
    checkOnStartup: boolean,
  },
  codec?: string,
  routingPartitionSize?: number,
  softDeletes?: {
    enabled?: boolean,
    retentionLease?: {
      period?: string,
    },
  },
  loadFixedBitsetFiltersEagerly?: boolean,

  // dynamic index settings
  hidden?: boolean,
  numberOfReplicas?: number,
  autoExpandReplicas?: number,
  search?: {
    slowLog?: {
      level?: 'warn' | 'info' | 'debug' | 'trace',
      source?: string,
      threshold?: Record<'query'|'fetch', {
        warn?: string,
        info?: string,
        debug?: string,
        trace?: string,
      }>,
    }
    idle: {
      after: string,
    },
  },
  refreshInterval?: string,
  maxResultWindow?: number,
  maxInnerResultWindow?: number,
  maxRescoreWindow?: number,
  maxDocvalueFieldsSearch?: number,
  maxScriptFields?: number,
  maxNgramDiff?: number,
  maxShingleDiff?: number,
  maxRefreshListeners?: number,
  analyze?: {
    maxTokenCount?: number,
  },
  highlight?: {
    maxAnalyzedOffset?: number,
  },
  maxTermsCount?: number,
  maxRegexLength?: number,
  routing?: {
    allocation?: {
      enable?: 'all' | 'primaries' | 'new_primaries' | 'none',
    },
    rebalance?: {
      enable?: 'all' | 'primaries' | 'new_primaries' | 'none',
    },
  },
  gcDeletes?: string,
  defaultPipeline?: string,
  finalPipeline?: string,
  similarity?: object, // todo: add mappings
  analysis?: object, // todo: add mappings
  store?: {
    type?: 'fs' | 'simplefs' | 'niofs' | 'mmapfs' | 'hybridfs',
  },
  indexingPressure?: {
    memory?: {
      limit?: string,
    },
  },
};

export type EsIndexAliases = {
  index?: string,
  indices?: string[],
  alias?: string,
  filter?: object,
  isHidden?: boolean,
  mustExist?: boolean,
  isWriteIndex?: boolean,
  routing?: string,
  indexRouting?: string,
  searchRouting?: string,
};
