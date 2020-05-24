let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

const dovolena = 50000;

const dluh = (osoba1, osoba2) => {
  if (osoba1.uspory < dovolena) {
    console.log(`${osoba1.jmeno} vrati kamaradce ${dovolena - osoba1.uspory} Kc`);
  } else {
    console.log(`${osoba2.jmeno} vrati kamaradce ${dovolena - osoba2.uspory} Kc`);
  }
}

const chybi = (osoba1, osoba2) => {
  const nedoplatek = dovolena * 2 - osoba1.uspory - osoba2.uspory;
  console.log(`Chybi nam ${nedoplatek} Kc`);
  console.log(`${osoba1.jmeno} musi jeste nasporit ${dovolena - osoba1.uspory} Kc`);
  console.log(`${osoba2.jmeno} musi jeste nasporit ${dovolena - osoba2.uspory} Kc`);
}



const vypocet = (osoba1, osoba2) => {
  if (osoba1.uspory + osoba2.uspory >= dovolena * 2) {
    console.log('Penize mame, muzeme jet.');
    if (osoba1.uspory >= dovolena && osoba2.uspory >= dovolena) {
      console.log('Obe mame dost penez.');
    } else {
      dluh(osoba1, osoba2);
    }
  } else {
    console.log('Smula, mame malo penez.');
    chybi(osoba1, osoba2);
  }
  console.log('xxxxxxxxxxxxx');
};


//Test pro vychozi hodnoty
vypocet(osoba1, osoba2);

//Test pro pripad, kdy osoba1 nema dost penez
osoba1.uspory = 35000;
vypocet(osoba1, osoba2);

//Test pro pripad, kdy ani jedna osoba nema dost penez
osoba2.uspory = 40000;
vypocet(osoba1, osoba2);

//Test pro pripad, kdy osoba2 nema dost penez
osoba1.uspory = 65000;
vypocet(osoba1, osoba2);
