/*Vozilo ima sopstvenu težinu. Teretno vozilo je vozilo koje je natovareno
teretom određene težine. Putničko vozilo u kome se nalazi izvestan broj
putnika zadate prosečne težine.

Kreirati klase koje omogućavaju obradu nabrojanih vrsta vozila (omogućiti
inicijalizaciju zadatim vrednostima parametara, dohvatanje jednoslovne
oznake vrste vozila, izračunavanje ukupne težine vozila i pisanje podataka
o vozilu).

Kreirati po 5 instanci svake izvedene klase i proveriti da li mogu da se sva
vozila nađu u isto vreme na mostu čija je nosivost 50tona.

Vozilo ima sopstvenu težinu. Teretno vozilo je vozilo koje je natovareno
teretom određene težine. Putničko vozilo u kome se nalazi izvestan broj
putnika zadate prosečne težine.

Kreirati klase koje omogućavaju obradu nabrojanih vrsta vozila (omogućiti
inicijalizaciju zadatim vrednostima parametara, dohvatanje jednoslovne
oznake vrste vozila, izračunavanje ukupne težine vozila i pisanje podataka
o vozilu).

Kreirati po 5 instanci svake izvedene klase i proveriti da li mogu da se sva
vozila nađu u isto vreme na mostu čija je nosivost 50tona.*/
class Vozilo {
    constructor(marka_vozila, broj_putnika, tezinaV, pr_tezina_putnika) {
        this.marka_vozila = marka_vozila;
        this.broj_putnika = broj_putnika;
        this.tezinaV = tezinaV;
        this.pr_tezina_putnika = pr_tezina_putnika;
    }
}
class Teretno_vozilo extends Vozilo {
    constructor(marka_vozila, broj_putnika, tezinaV, pr_tezina_putnika, teret_vozila) {
        super(marka_vozila, broj_putnika, tezinaV, pr_tezina_putnika);
        this.teret_vozila = teret_vozila;
    }
    ukupna_tezina_putnika() {
        return this.broj_putnika * this.pr_tezina_putnika;
    }
    uk_tezina_vozila() {
        return this.teret_vozila + this.tezinaV + this.ukupna_tezina_putnika();
    }
}
class Putnicko_vozilo extends Vozilo {
    ukupna_tezina_putnika() {
        return this.broj_putnika * this.pr_tezina_putnika;
    }
    uk_tezina_vozila() {
        return this.tezinaV + this.ukupna_tezina_putnika();
    }
}
let teretno1 = new Teretno_vozilo('lada', 1, 4000, 80, 1200);
let teretno2 = new Teretno_vozilo('lada', 1, 5500, 75, 1700);
let teretno3 = new Teretno_vozilo('lada', 1, 6000, 90, 2300);
let putnicko1 = new Putnicko_vozilo('lada', 4, 1175, 80);
let putnicko2 = new Putnicko_vozilo('lada', 3, 1200, 80);
let vozila = [teretno1, teretno2, teretno3, putnicko1, putnicko2];
let sum = 0;
let i;
for (i in vozila) {
    sum += vozila[i].uk_tezina_vozila();
    console.log(sum);
}
if (sum < 50000) {
    alert(`Uspeh! Sva vozila mogu da se nađu u isto vreme na mostu čija je nosivost 50tona.`);
}
else {
    console.log(`Neuspeh! Tezina premasuje 50T`);
}
