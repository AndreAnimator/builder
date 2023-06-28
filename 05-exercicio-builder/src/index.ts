import SanduicheBuilder from "./builders/SanduicheBuilder"
import Director from "./directors/Director"
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();

function imprimirDetalhes(sanduiche : Sanduiche){
    console.log("Montando sanduiche: " + sanduiche.sanduicheType);
    console.log("Pão: " + sanduiche.bread);
    console.log("Proteína: " + sanduiche.protein);
    console.log("Salada: " + sanduiche.salad);
    for(var sauce of sanduiche.sauce){
        console.log("Molho: " + sauce);
    }
}