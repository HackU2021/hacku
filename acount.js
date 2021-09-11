const inputFile = document.getElementById("file");
const userImg = document.getElementById("userImg");

inputFile.addEventListener("change", function(e){
    const file = e.target.files[0]
    
    const fileReader = new FileReader();
    
    fileReader.addEventListener("load",function() {
        // Data URIを取得
        const dataUri = this.result;
        
        console.log(dataUri);

        userImg.src = dataUri;

    })

    fileReader.readAsDataURL(file)



})


// {
//     function hello(kannsuuhaitteru){
//         console.log(kannsuuhaitteru);
//     }

    

//     hello(function(){
//         alert("jikkou sareta")
//     })
// }

// {
//     const hello = function(name) {
//         console.log(name + "さん こんにちは！");
//     }
//     hello("takagi senpai")
//     hello("kobayashi senpai")
// }

// {
//     const hello = name =>  console.log(name + "さん こんにちは！");
//     hello("takagi senpai")
//     hello("kobayashi senpai")
// }