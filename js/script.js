function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

 

function criaLinha(usuario) {
  console.log(usuario)
    let tdNome = document.createElement("div");
   
    usuario.products.forEach(element => {
       
        let linha = document.createElement("table")
        linha.innerHTML = `<td>${element.name}</td>`
        tdNome.appendChild(linha)
         console.log(element.name)

         
        });
        document.body.appendChild(tdNome)
      
        usuario.suggestions.forEach(element => {
       
            let linha = document.createElement("table")
            linha.innerHTML = `<td>${element.term}<td>`
            tdNome.appendChild(linha)
             console.log(element.term)
    
            });
            document.body.appendChild(tdNome)

    console.log(tdNome)

}

function main() {
    let input = document.getElementById("search").value 
    let data = fazGet(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${input}&source=nanook`)
    
    let usuarios = JSON.parse(data);
   
    criaLinha(usuarios)
}

 main()