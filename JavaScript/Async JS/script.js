// var a = new Promise((res, rej) => {
//     return res("1st work");
// })
// var b = a.then((data) => {
//     console.log(data);
//     return new Promise((res, rej) => {
//         return res("2nd work");
//     })
// })
// var c = b.then((data) => {
//     console.log(data);
//     return new Promise((res, rej) => {
//         return res("3rd work");
//     })
// })
// c.then((data) => {
//     console.log(data);
// })




async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans);
}
abcd();