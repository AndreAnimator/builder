import SanduicheType from "../components/SanduicheType";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Sauce from "../components/Sauce";
import IBuilder from "./IBuilder";
import Sanduiche from "../products/Sanduiche";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche;

    reset(): void {
        this.sanduiche = new Sanduiche;
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(tipoSanduiche: SanduicheType) {
        this.sanduiche.sanduicheType = tipoSanduiche;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    addSauces(sauce: Sauce) {
        this.sanduiche.addSauce(sauce);
    }

}