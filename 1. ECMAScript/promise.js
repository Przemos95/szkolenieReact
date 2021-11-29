// promise - czekamy na jedną odpowiedź - nie blokujemy działania
// observable - nasłuchujemy na odpowiedzi

// console.log('Start');
// const getSomeData = () => {
//     setTimeout(function() { console.log('Zdarzenie')}, 2000);
// }

// const promise = new Promise(getSomeData);
// promise
//     .then(x => console.log(x))
//     .catch(x => console.log('Błąd'))
//     .finally(x => console.log('Zawsze'));

// console.log('Koniec');


// async, await
async function GetSomeData() {
    const url = "https://public.ecologi.com/users/axa-ireland/carbon-offset";
    // console.log('Start requestu');
    // fetch(url)
    //     .then(x => console.log(x.json()))
    //     .catch(x => console.log(x))
    //     .finally(() => console.log('Koniec'));
    // console.log('Stop requestu');

    console.log('Start requestu');
    const response = await fetch(url);
    console.log(response);
    console.log('Stop requestu');

     
}

GetSomeData();