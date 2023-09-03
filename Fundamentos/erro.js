function tratarErroreLancar(erro){
    throw new Error('...')
    
}

function imprimitNomeGritado(obj) { 
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroreLancar(e)
    } finally{
        console.log('Final')
    }
}

const obj = {name: 'Roberto'}
imprimitNomeGritado(obj)