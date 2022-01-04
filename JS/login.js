console.log("start hello");
// modByID();
modByClass();

function modByID (){

    let date = new Date();
    let year = date.getFullYear();
    let footerDate = "&copy 2017 - " + year
    
    document.getElementById('footerDate').innerHTML = footerDate
    console.log("OK")
}

function modByClass(){
    let date = new Date();
    let year = date.getFullYear();
    let footerDate = "<strong> &copy 2017 - " + year + "</strong>"

    let mod = document.getElementsByClassName("text-center py-4")
    mod[0].innerHTML = footerDate;

    console.log("Ok by class")
}

function login(){
    alert("This is not working at the moment...")
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

