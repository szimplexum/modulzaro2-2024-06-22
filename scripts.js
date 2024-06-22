/*
  JS Alapok - Modulzáró - 2024.06.22.

  Ez a fájl tartalmazza a modulzáró gyakorlati részének feladatait. A megoldásaidat kérlek ebben a fájlban helyezd el, de dolgozni dolgozhatsz külön fájlokban is.

  Néhány jótanács:
  - mindenképpen olvasd el figyelmesen a feladatokat, különösképpen a példában megadott teszteseteket!
  - a példákban a -> jelölés után vagy a függvény visszatérési értéke, vagy a függvény által kiírandó dolog szerepel
  - ha valamivel nagyon elakadtál, inkább menj tovább és térj vissza később
  - mielőtt feltöltenéd a megoldásaidat nézd át őket
  - győződj meg róla, hogy minden kód, amit le akartál írni le van írva, és amit nem akartál leírni az nincs :)
  - a megoldásokat alapvetően a kijelölt helyekre várjuk, de segédfüggvényeket és függvényen kívüli változókat bármikor létrehozhatsz
*/

// 1. Feladat - faktoriális

// Írj egy függvényt, ami visszaadja egy beadott, nemnegatív szám faktoriálisát!
// Faktoriális: egy szám faktoriálisa az összes olyan pozitív egész szám szorzatát jelenti, ami a számnál kisebb vagy azzal egyenlő
// Jelölése a matematikában: !
// pl.: 5 faktoriálisa: 5! = 1 * 2 * 3 * 4 * 5 = 120
// megegyezés alapján a 0! = 1
// pl.: factorial(5) -> 120
// pl.: factorial(0) -> 1
// pl.: factorial(3) -> 6
// pl.: factorial(-2) -> undefined

function factorial(num) {
  let factorSum = 1;
  if (num >= 0) {
    for (let i = 1; i <= num; i++) {
      factorSum = factorSum * i;
    }
  } else {
    console.log(
      `A megadott szám csak nullánál nagyobb egész szám lehet, te a ${num} számmal próbáltad ezt, de nincs eenk faktoriálisa!`
    );
    return;
  }
  return factorSum;
}
let num = 5;
//console.log(`A(z) ${num} faktoriálisa: ${factorial(num)}`);

// 2. Feladat - FizzBuzz

// Írj egy függvényt, ami a kövektezőképpen működik:
// 1. A konzolra írja egy-től a paraméterként beadott pozitív egész számig a számokat egyesével
// 2. Ha a soron következő szám 3-mal osztható a szám helyett azt írja ki, hogy fizz
// 3. Ha a soron következő szám 5-tel osztható a szám helyett azt írja ki, hogy buzz
// 4. Ha a soron következő szám 3-mal és 5-tel is osztható a szám helyett azt írja ki, hogy fizzbuzz
// pl.: fizzbuzz(20) -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz

function fizzbuzz(n) {
  if (n >= 1) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
      } else if (i % 5 == 0) {
        console.log("buzz");
      } else if (i % 3 == 0) {
        console.log("fizz");
      } else {
        console.log(i);
      }
    }
  } else {
    console.log("Kérlek adj egy 1-nél nagyobb számot!");
  }
}

//fizzbuzz(20);

// 3. Feladat - Unicum, csak pozitívan!

// Írj egy függvényt, ami egy egész számokat tartalmazó tömbből visszadja egy tömb formájában azokat a számokat, amelyek pozitívak!
// pl.: getPositives([1, 10, -3, 4, -156, 0, 3, 4]) -> [1, 10, 4, 3, 4]
// pl.: getPositives([-1, -2, -3]) -> []
// pl.: getPositives([3, 20, 54]) -> [3, 20, 54]

function getPositives(arr) {
  const arrPositive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrPositive.push(arr[i]);
    }
  }
  return arrPositive;
}
//const arr = [1, 10, -3, 4, -156, 0, 3, 4];
//console.log(getPositives(arr));

console.log(
  "// 4. Feladat - Perdülj, fordulj! ----------------------------------"
);

// 4. Feladat - Perdülj, fordulj!

// Írj egy függvényt, ami a paraméterként megadott tömbjét valemlyik irányba "elforgatja"!
// Balra forgatás azt jelenti, hogy a tömb első eleme a tömb utolsó helyére kerül,
// jobbra forgatás esetén a tömb utolsó eleme kerül a tömb első helyére.
// A függvény a művelet végrehajtása után adja vissza a megváltoztatott tömböt, hibás irány esetén pedig az eredetit!
// pl.: rotate("left", [1, 2, 3]) -> [2, 3, 1]
// pl.: rotate("right", [1, 2, 3]) -> [3, 1, 2]
// pl.: rotate("hibás érték", [1, 2, 3]) -> [1, 2, 3]

function rotate(direction, arr) {
  if (direction === "left") {
    arr.push(arr.shift());
    return console.log(arr);
  } else if (direction === "right") {
    arr.unshift(arr.pop());
    return console.log(arr);
  } else {
    return console.log(`Hibás érték`) + console.log(arr);
  }
}
//const arr2 = [1, 2, 3];
//rotate("left", arr2);

console.log(
  "// 5. Feladat - Nagy (Betűs) Szavak -----------------------------------"
);
// 5. Feladat - Nagy (Betűs) Szavak

// Írj egy függvényt, ami a paraméterként megadott mondatot olyan formában adja vissza, hogy annak minden szava nagybetűvel kezdődjön!
// pl.: capitalizeWords("Ha a győzelem gátja a gát, akkor fel kell robbantani.") -> "Ha A Győzelem Gátja A Gát, Akkor Fel Kell Robbantani."
// A feladathoz felhasználhatod a segítségként megadott isSeparator függvényt.

function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

function capitalizeWords(text) {
  let textArr = [];
  let textArr2 = [];
  let textArr3 = [];
  textArr = text.split(" ");
  for (let i = 0; i < textArr.length; i++) {
    textArr2.push(textArr[i][0].toUpperCase());
    textArr3.push([textArr[i].substring(1,1)+textArr2[i]+textArr[i].substring(1)]);
  }
  return console.log(textArr3.join(" "));
  
}
let text = "Ha a győzelem gátja a gát, akkor fel kell robbantani.";
capitalizeWords(text);

("6. Feladat - Felhasználók -----------------------------------");
// 6. Feladat - Felhasználók

// 1. Készíts egy felhasználókat tartalmazó adatbázist!
// 2. Minden felhasználónak van e-mail címe, jelszava, vezeték és keresztneve
// 3. A felhasználókat helyezd el egy tömbben!

// 4. Készíts egy bejelentkezés kezelésére szolgáló függvényt, ami a következőképpen működik
//    - Ha meghívjuk a függvényt, akkor a program a felhasználótól bekér egy e-mail címet
//    - Ha a felhasználó megadott egy e-mail címet, akkor egy másik ablakban bekér egy jelszót
//    - Ha a felhasználó helyes e-mail - jelszó kombinációt adott meg, egy ablakban írja ki a program, hogy sikeres a bejelentkezés
//    - Amennyiben valamelyik megadott adat nem stimmel írja ki, hogy a bejelentkezés sikertelen

// 5. Készíts egy felhasználó e-mail címét megváltoztatni képes függvényt!
//    - A függvénynek két paramétere legyen: a régi és az új e-mail cím
//    - Amennyiben létezik az adatbázisban a megadott e-mail címmel felhasználó változtassa meg az e-mail címét az újra
//    - Ha nincs ilyen e-mail című felhasználó írjon ki egy üzenetet erről

// 6. Készíts egy függvényt, ami létre tud hozni egy új felhasználót az adatbázisban!
//    - Paraméterek: e-mail cím, jelszó, jelszó megerősítése, vezeték és keresztnév
//    - Ha a jelszó és a jelszó megerősítése nem egyeznek meg írjon ki hibaüzenetet!

//    - Ha a megadott e-mail címmel már szerepel felhasználó az adatbázisban írjon ki hibaüzenetet!
//    - Egyébként készítsen el egy új felhasználót és helyezze el a felhasználókat tartalmazó tömbben!

// 1, 2, és 3-as feladat megoldása jöhetnek a komment alá

const user = [
  {
    name: { firstName: "Spencer", lastName: "Bud" },
    emailAddress: "bud.pencer@gmail.com",
    password: "oegjeorbn",
  },
  {
    name: { firstName: "Hill", lastName: "Terence" },
    emailAddress: "terence.hill@gmail.com",
    password: "regeregrg",
  },
];

// 4-es részfeladat megoldása
function logIn(email) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].emailAddress === email) {
      let psw = prompt("Adja meg a jelszavát");
      if (user[i].password === psw) {
        console.log("Sikeres a bejelentkezés!");
        return;
      } else {
        alert("bejelentkezés sikertelen");
        return;
      }
    } else {
      console.log("Kérem helyes e-mail címet adjon meg");
      return;
    }
  }
}

//logIn("bud.pencer@gmail.com")

// 5-ös részfeladat megoldása
function changeEmail(currentEmail, newEmail) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].emailAddress === currentEmail) {
      user[i].emailAddress = newEmail;
      return;
    } else {
      console.log("Nincs ilyen felhasználó");
    }
  }
}

//changeEmail("bud.pencer@gmail.com", "kis.bela@gmail.com")
//console.log(user)

// 6-os részfeladat megoldása
function register(email, password, passwordConfirmation, firstName, lastName) {
  if (password != passwordConfirmation) {
    console.log("A megadott jelszómegerősítés nem megfelelő, próbálja újra");
    return;
  }
  for (let i = 0; i < user.length; i++) {
    if (user[i].emailAddress === email) {
      console.log(user[i].emailAddress);
      console.log(`megadott email ${email}`);
      console.log("Ezz a mail címmel már regisztráltak");
      return;
    } else {
      user.push({
        name: { firstName, lastName },
        email,
        password,
      });
      return;
    }
  }
}

//register("bud.pencer@gmail.com", "pool", "pool", "Dániel", "Zoltán");
//console.log(user)

/*
  Mindenre válaszoltál? Átnézted? Patent?
*/
