class Zoo {
    constructor(address, entryFee, animals) {
        this.address = address;
        this.entryFee = entryFee;
        this.animals = animals;
        this.residentDiscount = .1;
        this.status = true;
    }
    hasAnimal(animal) {
        return this.animals.includes(animal);
    }

    isOpen() {
        return this.status ? "YES" : "NO";
    }

    getResidentPrice() {
        return this.entryFee - (this.entryFee * this.residentDiscount);
    }
}