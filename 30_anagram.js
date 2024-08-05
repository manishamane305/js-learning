let sortString = (strOne, strTwo) =>{
    let tempOne = strOne.split("").sort().join("");
    let tempTwo = strTwo.split("").sort().join("");
    if (tempOne === tempTwo) {
        console.log(`The word ${strOne} and ${strTwo} is Anagram`);
    }
    else
    console.log(`The word ${strOne} and ${strTwo} is not Anagram`);
}
sortString("vile", "evil");
sortString("silent", "listen");
sortString("gram", "aram");
sortString("mom", "tom");