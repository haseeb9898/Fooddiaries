function haseebAhmed(params) {
    var uName = document.getElementById ("Name").value ;
    var uEmail = document.getElementById ("Email").value ;
    var uBody = document.getElementById ("Message").value ;
    
var success = document.getElementById("form-message-success");
var errorABC = document.getElementById("form-message-warning");

var tempParam = {
    from_name : uName,
    to_name : "Haseeb Ahmed",
    email : uEmail,
    message :uBody
};

emailjs.send('service_7mr9erm', 'template_wfn46dm',tempParam).then(function(response){
    // success
    errorABC.style.display= "none";
    success.style.display = "inline-block";
}, function(error) {
    // error
    success.style.display = "none";
    errorABC.innerHTML = "Error : " + error.text ;
    errorABC.style.display= "inline-block";

});

}



.fa-star:before {
    content: "\f005";
}

.rating-list li i.yellow {
    color: #FFD700;
}

.rating-list li i.gray {
    color: #bbb;
}

.list-inline>li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
}

.rating-list li {
    padding: 0px;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translate(0, 0);
}