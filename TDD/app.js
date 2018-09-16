function Animal() {
    this.numLegs = function() {
        console.log(this.kind);
        if(this.kind == "insect") {
            return 6;
        } else {
            return 2;
        }
    };
}

describe("Animal", function() {
    it("should have 6 legs if it is an insect", function() {
        let insect = new Animal();
        insect.kind = "insect";
        expect(insect.numLegs()).toBe(6);
    });
});