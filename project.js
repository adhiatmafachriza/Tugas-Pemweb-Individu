const body = document.body;

let Project = function(){
    this.title = "";
    this.description = "";
    this.image = "";
}

let projectGui = {
    title: document.getElementsByClassName("project-title")[0],
    description: document.getElementsByClassName("project-description")[0],
    image: document.getElementById("projectImage")
}

let project1 = new Project();
let project2 = new Project();
let project3 = new Project();

project1.title = "SIMPLEX SOLVER";
project1.description = "adalah program penghitung persamaan matematika dengan metode simplex untuk menghitung masalah optimasi persamaan. Persamaan berbentuk model matematika dari suatu masalah bisnis. Program dibuat dengan HTML, CSS, BootStrap dan Javascript.";
project1.image = "images/project1.png";

project2.title = "EXPEDITION APP";
project2.description = "adalah program menejemen bisnis pengiriman barang dimana pengguna dapat mengirim paket, menyimpan data pelanggan, melacak paket dan fitur penghitung ongkir. Program ini menggunakan database postgresql dan dibuat dengan bahasa c#.";
project2.image = "images/project2.jpg";

project3.title = "DASHBOARD APP";
project3.description = "adalah program business dashboard. Fungsi program ini adalah memberikan laporan bisnis secara visual dengan diagram batang, garis, dan lingkaran. Program ini menggunakan database postgresql dan dibuat dengan bahasa c# dan .NET framework.";
project3.image = "images/project3.jpg";

body.addEventListener("click", function(e){
    if(e.target.id == "project1"){
        projectGui.title.innerText = project1.title;
        projectGui.description.innerText = project1.description;
        projectGui.image.setAttribute("src", project1.image);
    }
    else if(e.target.id == "project2"){
        projectGui.title.innerText = project2.title;
        projectGui.description.innerText = project2.description;
        projectGui.image.setAttribute("src", project2.image);
    }
    else if(e.target.id == "project3"){
        projectGui.title.innerText = project3.title;
        projectGui.description.innerText = project3.description;
        projectGui.image.setAttribute("src", project3.image);
    }
});

