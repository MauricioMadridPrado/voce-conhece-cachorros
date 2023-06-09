import { dogsInfo } from "./dbDogs.js";
export default function createSearch(dogSelected) {
  dogsInfo.forEach(dog=>{
    if(dog.name == dogSelected){
      console.log(dog.description)
      const pesquisa = document.querySelector('[data-dog="pesquisa"]');
      pesquisa.innerHTML = 
      `  
            <p class="search__text">${dog.description}</p>
            <h3 class="search__title">Gostaria de saber sobre o <br> ${dogSelected}?</h3>
          
            <span class="search__link__container"><a class="search__link" target="_blank" href="https://www.google.com/search?q=cachorro+${dogSelected}&oq=${dogSelected}&aqs=chrome.0.0i355i433i512j46i340i433i512l2j46i3j0i512j46i433i512j0i512j0i433i512j46i175i199i512j0i512.1894j0j7&sourceid=chrome&ie=UTF-8">Clique aqui!</a></span>
        `;
    }
  })

}
