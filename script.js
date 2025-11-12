window.document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById('btnMaiuscula').addEventListener("click", ()=>{
      let input = document.getElementById("input-text").value.toUpperCase()
      let resultado = document.getElementById("resultado")
      resultado.innerHTML = ` Resultado: ${input}`
    })

    document.getElementById('btnMinuscula').addEventListener("click", ()=>{
      let input = document.getElementById("input-text").value.toLowerCase()
      let resultado = document.getElementById("resultado")
      resultado.innerHTML = ` Resultado: ${input}`
    })

     document.getElementById('PrimeiraMaiuscula').addEventListener("click", ()=>{
      let input = document.getElementById("input-text").value
      input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      let resultado = document.getElementById("resultado")
      resultado.innerHTML = ` Resultado: ${input}`
    })
    document.getElementById('SepararporPonto').addEventListener("click", ()=>{
      let input = document.getElementById("input-text").value
      input = input.replace(/\.\s*([a-z])/g, (letra) => {
                              return letra.toUpperCase();
                            })
      let resultado = document.getElementById("resultado")
      resultado.innerHTML = ` Resultado: ${input}`
    })

    
})

