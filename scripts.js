
function handleChange(input, output){
    if(input=="month"||input=="year"){
        let i = (input=="month")?0:1;
        let change = $(`.${output}`).text();   
        let arr = change.split("/")
        console.log(arr, change, i)
        let elem = $(`#${input}`).val()
        console.log(elem);
        arr[i] = elem;
        $(`.${output}`).text(arr.join("/"));
    } else {
        let elem = $(`#${input}`).val()
        console.log(elem);
        $(`.${output}`).text(elem);   
    }
    $(`#${input}`).css("color","black")
}

function handleSubmit(){
    let getName = $("#card--holder").val()
    let getNumber = $("#card--number").val()
    let gerMonth = $("#month").val()
    let gerYear = $("#year").val()
    let getCvc = $("#cvc").val()

    let regex1 = "/\w+/g";

}