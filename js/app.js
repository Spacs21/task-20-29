// 1 - savol
// argument sifatida berilgan arrayning o’rtasidagi sonni topadigan function yarating 
// [1,2,3,4,5] ⇒ o’rtasidagi son 3 
// [1,2,3,4] ⇒ o’rtasidagi son (2 + 3) / 2 = 2.5 ya’ni o’rtadagi 2 tasini qo’shib 2 ga bo’lish kerak
{
    function findMiddle(arr){
        if(!arr.length % 2 === 0){
            let middle = arr[Math.round((arr.length - 1) / 2)]
            return middle
        }else{
            let middle = arr[Math.round((arr.length - 1) / 2)]
            let secondMiddle = arr[Math.round((arr.length) / 2)]
            return secondMiddle + middle
        }
    }
    console.log(findMiddle([1,2,3,4,5,6]));    
}

// 2 - savol 
// argument sifatida berilgan sonning tub son yoki tub emasligini aniqlaydigan function yarating
{
    // ...
}

// 3 - savol
// 2 sonining qandaydir darajasini bildiruvchi qandaydir n butun son berilgan (n > 0) berilgan n son 2 ning qanday k darajadaligini toping
// input: 8 , k = 3
{
    // ...
}

// 4 - savol
// argument sifatida berilgan sonning mukammal yoki mukammal emasligini aniqlaydigan function yarating 
// mukamm son: 6, 28, ….. ⇒ mukammal son o’zidan boshqa bo’luvchilar yig’indisiga teng bo’lgan son
{
    // ...
}

// 5 - savol
// argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing
{
    function checkRoom(num){
        return `sizning soningiz ${num.toString().length} xonali!`
    }
    console.log(checkRoom(20));
}

// 6 - savol
// argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
{
    function countLetter(str){
        let count = 0;
        let target = 'aA'
        for(let i = 0; i < str.length; i++){
            if(target.includes(str[i])){
                count++
            }
        }
        return `so'zingiz ${count} ta A harfi ishlatadi!`
    }
    console.log(countLetter('Aziza'));
}

// 7 - savol
// argument sifatida berilgan string da ya’ni sentence da lengthi eng kam bo’lgan so’zni qaytaradigan function ni tuzing
{
    function countSentence(str){
        let strArr = str.split(' ')
        let shortest = strArr[0]

        for(let i = 0; i < strArr.length; i++){
            if(strArr[i].length < shortest.length){
                shortest = strArr[i]
            }
        }
        return shortest
    } 
    console.log(countSentence('hammaga salom hozir funksiya kichik sozni toapdi!'));
}

// 8 - savol
// berilgan argument ni nimaligini ayting agar son bo’lsa return “son” agar string bo’lsa “string” aks holda return 0 bo’lsin
{
    function checkType(data){
        if(typeof data == 'number'){
            return `son`
        }else if(typeof data == 'string'){
            return `string`
        }else{
            return 0
        }
    }
    console.log(checkType(123));
    console.log(checkType('soz'));
    console.log(checkType());
}

// 9 - savol
// argument sifatida berilgan string ni teskari qiluvchi function tuzing
{
    function reverseStr(str){
        return str.split('').reverse().join('')
    }
    console.log(reverseStr('salom'));
}

// 10 - savol
// argument sifatida berilgan string da nechta son qatnashganligini aniqlaydigan function tuzing
{
    function countNum(str){
        let numbers = '1234567890'
        let count = 0
        for(let i = 0; i < str.length; i++){
            if(numbers.includes(str[i])){
                count++
            }
        }
        return count
    }
    console.log(countNum('yaxshi kompyuter 2000$ turadi'));
}

// qo'shimcha mashqlar:

// 11 - savol
// berilgan sonni teskari qiladigan function yarating
{
    function reverseNum(num){
        return parseInt(num.toString().split('').reverse().join('').toString()) 
    }
    console.log(reverseNum(123));
}

// 12 - savol
// String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
// Input: [”text”, “world”, “laptop”]
// Output: {”text”: 4, “world”: 4, “laptop”: 6}
{
    function addToObj(){
        let arr = ['zoor', 'salom', 'yaxshi']
        let obj = {
            text: `${arr[0].length}`,
            world: `${arr[1].length}`,
            laptop: `${arr[2].length}`
        }
        return obj
    }

    console.log(addToObj());
}

// 13 - savol
// Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating
// Input: “Men dasturlash kursida o’qiyman”
// Output: {minWord: “Men”, maxWord: “dasturlash”}
{
    function minMaxWord(str){
        let arr = str.split(' ')
        shortest = arr[0]
        longest = arr[1]
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length < shortest.length){
                shortest = arr[i]
            }if(longest.length < arr[i].length){
                longest = arr[i]
            }
        }
        return `minWord: "${shortest}" MaxWord: "${longest}"`
    }
    console.log(minMaxWord('Men dasturlash kursida oqiyman'));
}

// misc
const output = document.getElementById('output')
function showImg(){
    output.style.width = "450px"
}
function closeImg(){
    output.style.width = "0"
}
