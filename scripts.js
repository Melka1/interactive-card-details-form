var my_func = function(event) {
    let errors = [];
    event.preventDefault();
    let getName = $("#card--holder").val()
    let getNumber = $("#card--number").val()
    let getMonth = $("#month").val()
    let getYear = $("#year").val()
    let getCvc = $("#cvc").val()

    let checks = ["name", "number","month", "year", "cvc"]

    for(let i = 0; i<checks.length; i++){
        let checked = handleSubmit(checks[i])
        console.log(checked)
        if(checked == "false"){
            errors.push(checked)
        }
        console.log(checks[i]+" is checked")
    }
    console.log(errors)

    if(!getName||!getNumber||!getMonth||!getYear||!getCvc){
        if(!getName){
            $("#card--holder").css("border-color","hsl(0, 100%, 66%)")
            $("#error--name").text("Can't be blank!")
            $("#error--name").css("display", "block")
        }
        if(!getNumber){
            $("#card--number").css("border-color","hsl(0, 100%, 66%)")
            $("#error--number").text("Can't be blank!")
            $("#error--number").css("display", "block")
        }
        if(!getMonth||!getYear){
            if(!getMonth){
                $("#month").css("border-color","hsl(0, 100%, 66%)")
            } if(!getYear){
                $("#year").css("border-color","hsl(0, 100%, 66%)")
            }
            $("#error--month").text("Can't be blank!")
            $("#error--month").css({display:"block",width:"max-content"})
        }
        if(!getCvc){
            $("#cvc").css("border-color","hsl(0, 100%, 66%)")
            $("#error--cvc").text("Can't be blank!")
            $("#error--cvc").css("display", "block")
        }
        console.log(errors)
        return
    } else if(getName&&getNumber&&getMonth&&getYear&&getCvc&&errors.length==0){
        $("#form").css("display", "none")
        $("#thanks").css("display", "flex")
    }
};

// your form
var form = document.getElementById("form");

// attach event listener
form.addEventListener("submit", my_func, true);

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

function handleSubmit(type){
    let getName = $("#card--holder").val()
    let getNumber = $("#card--number").val()
    let gerMonth = $("#month").val()
    let gerYear = $("#year").val()
    let getCvc = $("#cvc").val()
    //switch case
    switch (type){
        case "name":
            $("#card--holder").css("border-color", "hsl(270, 3%, 87%)")
            return checkName(getName)
            //break;
        case "number":
            $("#card--number").css("border-color", "hsl(270, 3%, 87%)")
            console.log("Number")
            return checkNumber(getNumber)
            //break;
        case "month":
            $("#month").css("border-color", "hsl(270, 3%, 87%)")
            return checkMonth(gerMonth)
            //break;
        case "year":
            $("#year").css("border-color", "hsl(270, 3%, 87%)")
            return checkYear(gerYear)
            //break;
        case "cvc":
            $("#cvc").css("border-color", "hsl(270, 3%, 87%)")
            return checkCvc(getCvc)
            //break;
    }
}

function checkName(name){
    //cheching Name
    $(`#card--holder`).css("color","black")
    let regex1 = /[\W]|[\d]/g;
    name = name.replace(" ", "");
    let checkedName = regex1.test(name)?name.match(regex1):[]

    if(checkedName.length != []){
        $("#error--name").css("display", "block")
        $("#error--name").text("Wrong format, letters only!")
        $("#card--holder").css("border-color","hsl(0, 100%, 66%)")
        return "false"
    } else {
        $("#error--name").css("display", "none")
        return "true"
    }
}

function checkNumber(number){
    $(`#card--number`).css("color","black")
    let regex2 = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    if(!regex2.test(number)){
        $("#error--number").css("display", "block")
        $("#error--number").text("Wrong format, Numbers only!")
        $("#card--number").css("border-color","hsl(0, 100%, 66%)")
        return "false"
    } else {
        $("#error--number").css("display", "none")
        return "true"
    }
}

function checkMonth(month){
    $(`#month`).css("color","black")
    month = parseInt(month)
    console.log(month, typeof(month))
    if(month<1 || month>12){
        $("#error--month").text("Use the correct range!")
        $("#error--month").css({display:"block",width:"max-content"})
        $("#month").css("border-color","hsl(0, 100%, 66%)")
        return "false"
    } else {
        $("#error--month").css({display:"none"})
        let change = $(`.exp--date`).text();   
        let arr = change.split("/")
        arr[0] = month<10?"0"+month:month;
        $(`.exp--date`).text(arr.join("/"));
        return "true"
    }
}

function checkYear(year){
    $(`#year`).css("color","black")
    year = parseInt(year)
    console.log(year, typeof(year))
    if(year<0 || year>99){
        $("#error--month").text("Use the correct range!")
        $("#error--month").css({display:"block",width:"max-content"})
        $("#year").css("border-color","hsl(0, 100%, 66%)")
        return "false"
    } else {
        $("#error--month").css({display:"none"})
        let change = $(`.exp--date`).text();   
        let arr = change.split("/")
        arr[1] = year
        $(`.exp--date`).text(arr.join("/"));
        return "true"
    }

}

function checkCvc(cvc){
    $(`#cvc`).css("color","black")
    cvc = parseInt(cvc)
    console.log(cvc, typeof(cvc))
    if(cvc<100 || cvc>=1000){
        $("#cvc").css("border-color","hsl(0, 100%, 66%)")
        $("#error--cvc").text("Use the correct range!")
        $("#error--cvc").css({display:"block",width:"max-content"})
        return "false"
    } else {
        $("#error--cvc").css({display:"none"})
        $(".cvc--number").text(cvc)
        return "true"
    }
}
