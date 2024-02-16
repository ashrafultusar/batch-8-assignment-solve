let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card")
// console.log(cards)
for (let index = 0; index < cards.length; index++) {
    const card = cards[index]
    // console.log(eleent)
    card.addEventListener("click", function () {
        // console.log('okk boss')

        const title = card.querySelector("h2").innerText;
        const price = parseFloat(card.querySelector('p').innerText.split(" ")[1]);
     
       
        
        const tileContainer = document.getElementById('itile-container')
        
        const p = document.createElement("p")
        p.innerText = titleCount + ". " + title;
        tileContainer.appendChild(p)
        titleCount++;

        totalPrice = totalPrice + price;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        

    })

}


const btn = document.getElementById('apply-btn');
btn.addEventListener("click", function () {
    

    const couponInput = document.getElementById("input-fild").value;
    const couponCode = couponInput.split(" ").join("").toUpperCase()
    console.log(couponCode)
    
    if (totalPrice >= 200) {

        if (couponCode === "SELL200") {
            // discount calculation
            const discountElement = document.getElementById('discount');
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2)
            
            // total calculation

            const totalPayble = document.getElementById('total')
            totalPayble.innerText = totalPrice - discountAmount.toFixed(2)
            document.getElementById("input-fild").value = "";
        } else {
            alert("invalid coupon")
        }
        
    } else {
        alert ("please buy atlist $200");
    }
})