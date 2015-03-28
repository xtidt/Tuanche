var requirejs = {
  paths: {
    // com module
    'jquery': './js/jquery/jquery-2.1.3.min',
    'jqhash': './js/hash/jquery.hash.min'
  },
  shim: {
    'jqhash': {
        deps: ['jquery'],
        exprots : $
    }
  }
};
