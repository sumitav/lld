//proxy as placeholder for the actual implementation is a structural design pattern that lets you 
//provide a substitute or placeholder
// for another object. 
//A proxy controls access to the original object,
// allowing you to perform something either
// before or after the request gets through to the original object.
function CryptocurrencyAPI() {
  this.getValue = (coin) => {
    console.log('Calling External API for', coin);
    switch (coin) {
      case 'Bitcoin':
        return '$8,500';
      case 'Litecoin':
        return '$50';
      case 'Ethereum':
        return '$175';
      default:
        return 'N/A';
    }
  };
}
/*const api=new CryptocurrencyAPI();
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Litecoin'));
console.log(api.getValue('Ethereum'));*/
function CryptocurrencyProxy() {
  this.api = new CryptocurrencyAPI();
  this.cache = {};
  this.getValue = (coin) => {
    if (this.cache[coin] == null) {
    console.log('Cache miss');
      this.cache[coin] = this.api.getValue(coin);
    }
    console.log('Cache hit');
    return this.cache[coin];
  };
}
const proxy = new CryptocurrencyProxy();
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Bitcoin'));