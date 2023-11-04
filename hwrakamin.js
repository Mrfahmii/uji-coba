function bilanganRandom() {
    const randomArray =[];

    for (let i = 0; i < 100; i++){
        const randomNum = Math.floor(Math.random()*100 + 1);
        randomArray.push(randomNum);
    }
    return randomArray;
}

function bagiGanjilGenap(array) {
    const ganjil = [];
    const genap = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        genap.push(array[i]);
      } else {
        ganjil.push(array[i]);
      }
    }
  
    return { ganjil, genap };
}

const randomArray = bilanganRandom(); // Memanggil fungsi bilanganRandom untuk mendapatkan array acak
const hasilPemisahan = bagiGanjilGenap(randomArray);
  
const arrayGanjil = hasilPemisahan.ganjil;
const arrayGenap = hasilPemisahan.genap;

console.log('Random Array:', randomArray); // Mencetak array acak ke konsol
console.log('Array Ganjil:', arrayGanjil);
console.log('Array Genap:', arrayGenap);

function hitungStatistik(array) {
  let min = array[0];
  let max = array[0];
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];

    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }
  }

  let rataRata = total / array.length;

  return { min, max, total, rataRata };
}

const statistikGanjil = hitungStatistik(arrayGanjil);
const statistikGenap = hitungStatistik(arrayGenap);

console.log('\nStatistik Array Ganjil:');
console.log('Min:', statistikGanjil.min);
console.log('Max:', statistikGanjil.max);
console.log('Total:', statistikGanjil.total);
console.log('Rata-rata:', statistikGanjil.rataRata);

console.log('\nStatistik Array Genap:');
console.log('Min:', statistikGenap.min);
console.log('Max:', statistikGenap.max);
console.log('Total:', statistikGenap.total);
console.log('Rata-rata:', statistikGenap.rataRata);

console.log('Perbandingan nilai statistik array ganjil dan genap');

console.log('Min : ganjil < genap');
console.log('Max : ganjil < genap');
console.log('Total : ganjil > genap');
console.log('Rata rata : ganjil > genap');