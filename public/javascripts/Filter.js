function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("filter-select");
    filter = input.value.toUpperCase();
    ul = document.getElementById("card-body");
    li = ul.getElementById("level");

    for (i = 0; i < li.length; i++) {
        a = li[i].book.name[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}