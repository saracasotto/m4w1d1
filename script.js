
//1.Funzione che controlla due numeri interi. 
//Ritorna "true" se uno dei due numeri e' 50 o se la somma dei due e' 50.

function check50(a, b) {
    if (a === 50 || b === 50 || a + b === 50) {
        return true
    } else {
        return false
    }
}

console.log(check50(40, 10))
console.log(check50(50, 20))
console.log(check50(40, 20))
console.log(check50(35, 50))


//2.Funzione che rimuove carattere da una stringa. Ritorna stringa modificata
//I parametri sono stringa e posizione del carattere

function removeLetter(string, position) {
    let newString = string.slice(0, position) + string.slice(position + 1) //stringa modificata che rimuove solo carattere in position

    return newString
}

console.log(removeLetter2("Sara", 2))

//OPPURE

function removeLetter2(string, position) {
    let characterArray = string.split('');
    characterArray.splice(position, 1);
    return characterArray.join('');
}

console.log(removeLetter2("Sara", 2));

//3.Funzione che controlla se due numeri sono compresi tra 40 e 60 o 70 e 100.
//Ritorna true se è così, altrimenti false.

function checkNumbers(b, c) {

    if ((b >= 40 && b <= 60 && c >= 40 && c <= 60) ||
        (b >= 70 && b <= 100 && c >= 70 && c <= 100)) {
        return true

    } else {
        return false
    }
}

console.log(checkNumbers(45, 55))
console.log(checkNumbers(50, 65))
console.log(checkNumbers(71, 80))
console.log(checkNumbers(71, 110))

//4.Funzione che ha nome di città come parametro.
// Ritorna il nome stesso se inizia con Los o New. Altrimenti ritorna false

function cityName(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city
    } else {
        return false
    }
}

console.log(cityName("Los Angeles"))
console.log(cityName("Washington"))
console.log(cityName("New York"))

//5.Funzione che calcola e ritorna la somma di tutti gli elementi di un array.
//Parametro: array.

function arraySum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum

}

//oppure 

function arraySum2(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(arraySum([1,2,3,4,5,6,7,8,9,10]))
console.log(arraySum([3,3,3,3]))
console.log(arraySum2([10,5,10,20]))

//6.Funzione che controlla che un array non contiene i numeri 1 e 3.
//Se è cosi ritorna true, altrimenti false.

function checkWrongNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1 || array[i] === 3) {
            return false;
        }
    }
    return true;
}
//oppure

function checkWrongNumbers2(array) {
    return !array.includes(1) && !array.includes(3);
}

console.log(checkWrongNumbers([1,5,19,23]))
console.log(checkWrongNumbers([2,3,19,21]))
console.log(checkWrongNumbers([4,7,19,55]))
console.log(checkWrongNumbers2([4,7,3,55]))


//7.Funzione per identificare i tipi di angoli
function angleType(degrees) {
    switch (true) {
        case (degrees < 90):
            return "acuto";
        case (degrees === 90):
            return "retto";
        case (degrees > 90 && degrees < 180):
            return "ottuso";
        case (degrees === 180):
            return "piatto";
        default:
            return "non valido";
    }
}

console.log(angleType(55))
console.log(angleType(90))
console.log(angleType(98))
console.log(angleType(180))
console.log(angleType(200))

//oppure

function angleType2(degrees) {
    if (degrees < 90) {
        return "acuto";
    } else if (degrees === 90) {
        return "retto";
    } else if (degrees > 90 && degrees < 180) {
        return "ottuso";
    } else if (degrees === 180) {
        return "piatto";
    } else {
        return "non valido";
    }
}

console.log(angleType2(55))
console.log(angleType2(90))
console.log(angleType2(98))
console.log(angleType2(180))
console.log(angleType2(200))

//8.Funzione che crea un acronimo a partire da una frase (esempio FIAT)

function createAcronym(phrase) {
    let words = phrase.split(' ')
    let acronym = ("")
    for (word of words) {
        acronym = acronym.concat(word.charAt(0).toUpperCase())
    } return acronym
}

console.log(createAcronym("Epicode Number One"))
