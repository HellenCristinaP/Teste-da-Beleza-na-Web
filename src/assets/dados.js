const produtos = [
    {
        nome: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução",
        precoComDesconto: 223.90,
        preco: 245.90,
        imagem: "/public/produtoLOrealProfessionnelMdR.jpg"
    },
    {
        nome: "Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml",
        precoComDesconto: 0,
        preco: 299.90,
        imagem: "/public/goodGirlCHEauParfum.jpg"
    },
    {
        nome: "Senscience Inner Restore - Máscara de Hidratação 250g",
        precoComDesconto: 0,
        preco: 99.90,
        imagem: "/public/senscienceInnerRestoreMC.png"
    }
]

const dadosUsuario = [
    {
        numero: "1234 5678 9101 1234",
        nome: "Brunce Wayne",
        dataValidade: "12/2027",
        CVV: "170"
    }
]

const subtotal = () => {
    let subtotal = 0;

    produtos.forEach((produto) => {
        subtotal += produto.precoComDesconto || produto.preco;
    });
    return subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default { produtos, dadosUsuario, subtotal }