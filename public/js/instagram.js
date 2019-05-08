var contenido = document.querySelector(".col-md-7")
function traer(){
    fetch("https://api.instagram.com/v1/users/self/?access_token=4049241557.1677ed0.5324ad17d9314645b528ad112da8d56e")
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        contenido.innerHTML = ` 
        
        <img src= "${data.data.profile_picture}" width="150px" class="img-fluid rounded-circle">
        <h2 class="mb-4">Contact Me</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p> `
    })
}