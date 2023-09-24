let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// } 
switch (id){
  case '1':
    console.log('Available 10 pcs.');
    break;
  case '2':
    console.log('Available 256 pcs.');
    break;
  case '3':
    console.log('Available 53 pcs.');
    break;
  case '4':
    console.log('There are 3 available.');
    break;      
  default:
    console.log('out of stock');
}