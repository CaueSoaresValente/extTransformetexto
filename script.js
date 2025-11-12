window.document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById('btnMaiuscula').addEventListener("click", ()=>{
      let input = document.getElementById("input-text").value.toUpperCase()
      cor = document.getElementById("cor").value 
      let resultado = document.getElementById("resultado")
      resultado.innerHTML = ` Resultado: ${input}`
      resultado.style.color = cor
    })

    document.getElementById('btnMinuscula').addEventListener("click", ()=>{
      let input = document.getElementById("input-text").value.toLowerCase()
      cor = document.getElementById("cor").value 
      let resultado = document.getElementById("resultado")
      resultado.innerHTML = ` Resultado: ${input}`
      resultado.style.color = cor
    })

     document.getElementById('PrimeiraMaiuscula').addEventListener("click", ()=>{
      let input = document.getElementById("input-text").value
      input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase().replace(/\.\s*([a-z])/g, (letra) => {
                              return letra.toUpperCase();
                            });
      cor = document.getElementById("cor").value 
      let resultado = document.getElementById("resultado")
      resultado.innerHTML = ` Resultado: ${input}`
      resultado.style.color = cor
    })

    document.getElementById('Limpar').addEventListener("click", ()=>{
      
      document.getElementById("input-text").value = " "
      document.getElementById("resultado").innerHTML = " Resultado:"
    
    }) 
})


