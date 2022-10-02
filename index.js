const generateBtn = document.getElementById("generate")
const quoteText = document.getElementById("quote")
let fromWhatCategory = "real-character"
const fictionCharBtn = document.getElementById("fiction-character")
const realCharBtn = document.getElementById("real-character")
const headerSpan = document.getElementById("header-span")



fictionCharBtn.addEventListener('click', () => {
  fromWhatCategory = "fictional-character" 
  headerSpan.textContent = "Fictional Characters"
  generateBtn.click()
  
})
realCharBtn.addEventListener('click', () => {
  fromWhatCategory = "real-character" 
  headerSpan.textContent = "Real Life Characters"
  generateBtn.click()
})

generateBtn.addEventListener('click', () => {
  
  
  if (fromWhatCategory === "real-character") {
    realCharQuoteGen()
  }else if(fromWhatCategory === "fictional-character"){
    fictionalCharQuoteGen()
  }
  
  
})

/*

let realCategoryLink = fetch("https://type.fit/api/quotes")
let fictionCategoryLink = "https://animechan.vercel.app/api/random"

*/


const loadingDivEl = '<div class="spinner-border align-self-center text-center" role="status"><span class="sr-only"></span></div>'

function realCharQuoteGen(){
  
  quoteText.innerHTML = loadingDivEl
  
  
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(quote => {
      
      let random = Math.floor((Math.random() * quote.length))
      
      quoteText.innerHTML = `"${quote[random].text}" <br/>
      - ${quote[random].author}`
      
    }).catch(
      quoteText.textContent = "Error occurred please try again :D"
      )
  
}


async function fictionalCharQuoteGen() {
  
  quoteText.innerHTML = loadingDivEl
  
  
  let quote = await fetch("https://animechan.vercel.app/api/random")
  .then(quote => quote.json())
  .then(quote => {
      /*
      let random = Math.floor((Math.random() * quote.length))
      */
      
      quoteText.innerHTML = `"${quote.quote}" <br/>
      - ${quote.character} <span style="color: #00FF3AA8;">| 
      "${quote.anime}" |</span>`
    
  })
  
}

