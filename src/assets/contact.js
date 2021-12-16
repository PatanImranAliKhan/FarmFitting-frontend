one=document.getElementById("1")
two=document.getElementById("2")
three=document.getElementById("3")
four=document.getElementById("4")
five=document.getElementById("5")
console.log("ksdjbuqevu")

const handleselect=(selection) =>{
    switch(selection)
    {
        case '1':
        {
            one.classList.add("checked")
            two.classList.remove("checked")
            three.classList.remove("checked")
            four.classList.remove("checked")
            five.classList.remove("checked")
            return
        }
        case '2': {
            one.classList.add("checked")
            two.classList.add("checked")
            three.classList.remove("checked")
            four.classList.remove("checked")
            five.classList.remove("checked")
            return
        }
        case '3': {
            one.classList.add("checked")
            two.classList.add("checked")
            three.classList.add("checked")
            four.classList.remove("checked")
            five.classList.remove("checked")
            return
        }
        case '4': {
            one.classList.add("checked")
            two.classList.add("checked")
            three.classList.add("checked")
            four.classList.add("checked")
            five.classList.remove("checked")
            return
        }
        case '5': {
            one.classList.add("checked")
            two.classList.add("checked")
            three.classList.add("checked")
            four.classList.add("checked")
            five.classList.add("checked")
            return
        }
    }
}

arr=[one,two,three,four,five]
arr.forEach(element => element.addEventListener('click',(event) => {
    handleselect(event.target.id)
    document.getElementById("rate").value=event.target.id
}));