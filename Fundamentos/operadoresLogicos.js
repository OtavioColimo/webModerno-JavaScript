/*  operando I and && 
true + true = true 
true + false = false
false + false = false
false + true = false

operando OU || or 
true  ou ? = true
false ou true = true 
false ou false = false

operador XOR(exclusivo)
true xor true = false
true xor false = true 
false xor true = true 
false xor false = true 

!true -> false not 
!false -> true 
*/ 

function compras(trabalho1,trabalho2) { 
    const comprarSorvete = trabalho1 ||  trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(false, false))