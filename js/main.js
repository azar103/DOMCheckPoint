var lengthOfClasses = document.querySelectorAll('.item').length
var rowOfTotalResult = document.querySelector('tr')
var sum =0;
for(let i=0; i< lengthOfClasses;i++){
     
    var btn = document.querySelectorAll('.fa-shopping-cart')
    btn[i].addEventListener('click', () => {
      manageItemsInCart(i)
    })
    //change color of heart
    var btnLikes = document.querySelectorAll('.fa-heart')
    btnLikes[i].addEventListener('click', () => {
       btnLikes[i].classList.toggle('red')
    })
}




//Add And revmove items from cart
function manageItemsInCart(index){ 
    var sum =0;
    var result =0;
        if(confirm('add To cart ?')){
        var p = document.querySelectorAll('p')    
        var span = document.querySelectorAll('span')
        var row = document.createElement('tr')
        //create first Cel
        var firstCel = document.createElement('td')
        var text = document.createTextNode(p[index].textContent)
    
        firstCel.appendChild(text)
        row.appendChild(firstCel)
        var secondCel = document.createElement('td')
        var text = document.createTextNode(span[index].textContent)
        //create Second Cel
        secondCel.id ="priceCel"
        secondCel.appendChild(text)
        secondCel.appendChild(document.createTextNode('$'))
        row.appendChild(secondCel)
        //create Third Cel
        
       

        var inputNumber = document.createElement('input')
        inputNumber.style.width="40px"
        inputNumber.defaultValue="1"
        inputNumber.style.backgroundColor = '#DEDEDE'
        inputNumber.style.textAlign = 'center'

        var addButton = document.createElement('button')
        addButton.classList.add("btn")
        addButton.classList.add("btn-primary")
        addButton.style.height = '30px'
        addButton.style.width = '30px'
        addButton.appendChild(document.createTextNode('+'))
        addButton.style.textAlign = 'center'
        var subsButton = document.createElement('button')
        subsButton.classList.add("btn")
        subsButton.classList.add("btn-primary")
        subsButton.style.height = '30px'
        subsButton.style.width = '30px'
        subsButton.appendChild(document.createTextNode("-"))
        subsButton.style.textAlign = 'center'
        var thirdCel = document.createElement('td')
        thirdCel.appendChild(addButton)

        thirdCel.appendChild(inputNumber)
        thirdCel.appendChild(subsButton)

        const price = secondCel.innerHTML
        var quantity = parseInt(inputNumber.value)

        //add event to incement the quantity of items
        addButton.addEventListener('click', () => {
            quantity++
            var result = quantity*parseInt(price)
            secondCel.innerHTML= result+"$"
            inputNumber.value=quantity            
            updateTotalPrice()
        }  

        )
        
        //add event to decrement the quantity of items
        subsButton.addEventListener('click', () => {
            quantity--
            var result = quantity*parseInt(price)
            secondCel.innerHTML= result+"$"
            inputNumber.value=quantity            
            updateTotalPrice()
        }  

        )

        row.appendChild(thirdCel)
        //create fourth Cel
        var fourthCel = document.createElement('td')
        var removeBtn = document.createElement('button')
        removeBtn.className="btn"
        removeBtn.className="btn-danger"
        removeBtn.style.padding="5px"
        removeBtn.style.border="3px"
        removeBtn.style.borderRadius="3px"
        var trash = document.createElement('i')
        trash.classList.add('fa')
        trash.classList.add('fa-trash')
        removeBtn.appendChild(trash)
        //add event to remove item from cart  
        removeBtn.addEventListener('click', () => {     
             if(confirm('are you sure to remove it ?')) {
                  row.parentNode.removeChild(row)
             }
             updateTotalPrice()
               
        })
        fourthCel.appendChild(removeBtn)
        row.appendChild(removeBtn)
        document.querySelector('table > tbody').appendChild(row)
      
        }
       updateTotalPrice()
        
    }
 


   function updateTotalPrice() {
        var priceCel = document.querySelectorAll('#priceCel')
       var s =0
       for(let i=0; i<priceCel.length;i++) {
          s+=parseInt(priceCel[i].innerHTML)
       }
     document.querySelector('#totalScore').innerHTML = s
 }



