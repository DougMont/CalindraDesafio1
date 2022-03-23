$("#btn").click(function(e){
    e.preventDefault();
    americanas();
  });
  
  function americanas(){
  
    const data = $("#search").val();
    const produto = data.toLowerCase();
  
    $.ajax({
      url: `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${produto}&source=nanook`,
      success: function (produto){
        apiAmericanas(produto);
      }
    })
  
    function apiAmericanas(view){
  
      const lista = view.products.map(index =>
        
        `<tr><td>${index.id}<td>
         <td>${index.name}</td></tr>`).join(" ");
      
        const tabela = document.getElementById("tabela");
        tabela.classList.add("tr")
        tabela.innerHTML = lista;
  
      const suggestions = view.suggestions.map(index =>
        
        `${index.term}</br>`).join(" ");
      
        const sugestao = document.getElementById("sugestao");
        sugestao.classList.add("lista")
        sugestao.innerHTML = suggestions;
    
      
    }
  }

 