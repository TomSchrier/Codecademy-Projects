// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(idNumber, DNAStrand){
  return {
    specimenNum: idNumber,
    dna: DNAStrand,
    mutate : function() {
      this.dna[0] = returnRandBase();
      return this.dna[0];
    }
  };
};


let bæsj = pAequorFactory(1, mockUpStrand());
console.log(bæsj);
console.log(bæsj.mutate());