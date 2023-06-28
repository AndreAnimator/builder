import SanduicheType from "../components/SanduicheType";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";

export default interface IBuilder{
    reset(): void;
    getSanduiche(): Sanduiche;
    setSanduicheType(tipoSanduiche : SanduicheType);
    setBread(bread : Bread);
    setProtein(protein : Protein);
    setSalad(salad : Salad);
    addSauces(sauce : Sauce);
}