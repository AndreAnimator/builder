import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAODEHOTDOG);
        this.builder.setProtein(Protein.VINA);
        this.builder.setSalad(Salad.MILHO);
        this.builder.addSauces(Sauce.KETCHUP);
        this.builder.addSauces(Sauce.MOSTARDA);
    }

    constructorXSalada(){
        this.builder.setSanduicheType(SanduicheType.HAMBURGUER);
        this.builder.setBread(Bread.PAOGERGELIM);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces(Sauce.KETCHUP);
        this.builder.addSauces(Sauce.MAIONESE);

    }
}