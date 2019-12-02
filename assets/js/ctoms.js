var apiKeyVal = "9zDfoosGRycWaGU7u66c";
 
const section = document.querySelector('section');

let requestURL = "https://product-api-ctoms.herokuapp.com/api/products";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.setRequestHeader("Authorization", apiKeyVal);
request.send();

request.onload = function() {
    const myJSON = request.response;
    show(myJSON);
}

function show(jsonObj) {
    const products = jsonObj['products'];
        
    for (let i = 0; i < products.length; i++) {
      const myDiv = document.createElement('div');
      const myImg = document.createElement('img');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myList = document.createElement('ul');
        
      myImg.src = products[i].img_url;
      myH2.textContent = products[i].title;
      myPara1.textContent = 'Variant Options: ' + products[i].variant_options;
      myPara2.textContent = 'Variants:';
          
      const variants = products[i].variants;
      
      for (let j = 0; j < variants.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = "Item Code: " + variants[j].item_code + 
        " Price: " + variants[j].variant_price + " Color " +
        variants[j].variant_option;

        myList.appendChild(listItem);
      }
      
      myDiv.appendChild(myImg);
      myDiv.appendChild(myH2);
      myDiv.appendChild(myPara1);

      myDiv.appendChild(myPara2);
      myDiv.appendChild(myList);
  
      section.appendChild(myDiv);
    }
  }





