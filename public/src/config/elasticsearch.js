define([
  'elasticsearch'
  ],
function (elasticsearch) {
  return elasticsearch.Client({
      hosts: ['localhost:9200']
    });
});
