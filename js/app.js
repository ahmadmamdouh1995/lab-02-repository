$(document).ready(function () {
    function Horns(horn) {
        this.title = horn.title;
        this.image_url = horn.image_url;
        this.description = horn.description;
        this.keyword = horn.keyword;
        this.horns = horn.horns;
        Horns.all.push(this);
    }
    Horns.all = [];

    Horns.prototype.render = function () {
        let $hornClone = $("#photo-template").clone();
        $hornClone.find("h2").text(`Name : ${this.title}`);
        $hornClone.find("img").attr("src", this.image_url);
        // $hornClone.find("p").text(`Description :${this.description}`);
        // $hornClone.find("h4").text(`KeyWord :${this.keyword}`);
        // $hornClone.find("h5").text(`NumOfHorn :${this.horns}`);
        $("main").append($hornClone);
    };
    console.log(Horns.all);
    console.log(Horns.all.keyword);
    Horns.prototype.render2 = function(){
        $( "select" ) .change(function () {    
            // document.getElementById("loc").innerHTML="You selected: ";
            
            if($("select").val() === "narwhal" ){
                console.log(5);

            }
            
            
            
        });
    }
    
    const readJson = () => {
        $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
            data.forEach(hornItem => {
                let horn = new Horns(hornItem);
                horn.render();
                horn.render2();
            });
        })
    };
    readJson();
})



