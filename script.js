// pegando o botão
let botao = document.getElementById("botao")

// conectando com a IA
let endereco = "https://api.groq.com/openai/v1/chat/completions"



// função que vai para o servidor -- click do botão
async function gerarCodigo() {
    // pegando o valor da textarea
    let textoCaixa = document.querySelector(".caixa").value
    let blocoCodigo = document.getElementById("blocoCodigo")
    let resultadoCodigo = document.getElementById("resultadoCodigo")

    // enviando o valor da textarea para a IA
    // Projeto para prática, para funcionamento precisa incluir sua chave API
    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer sua key_API aqui"
        },

        body: JSON.stringify ({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando,   use translateY no @keyframes. Se pedir algo girando, use rotate."
                },
                {
                    role: "user",
                    content: textoCaixa
                }
            ]
        })
    })

    // traduzindo a resposta da IA
    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blocoCodigo.textContent = resultado
    resultadoCodigo.srcdoc = resultado


    console.log(resultado)
}


// pegar o click e trazer o gerarCodigo
botao.addEventListener("click", gerarCodigo)


/* Projeto para prática, para funcionamento precisa incluir sua chave API*/