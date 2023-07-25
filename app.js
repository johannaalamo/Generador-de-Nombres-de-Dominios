var pronoun = ['el', 'nuestro'];
var adj = ['buen', 'gran'];
var noun = ['loco', 'raton'];

function generateDomainNames(pronoun, adj, noun) {
  var domainNames = [];
  
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        var domainName = pronoun[i] + adj[j] + noun[k] + '.com';
        domainNames.push(domainName);
      }
    }
  }
  
  return domainNames;
}

var generatedDomains = generateDomainNames(pronoun, adj, noun);
generatedDomains.forEach(function(domain) {
  console.log(domain);
});
