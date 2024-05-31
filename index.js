



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question ("seja bem vindo ao evento!, qual modelo do seu carro?\n", (escolha)=> {
  if (escolha == "golf tsi", "golf gti"  ){
    rl.question ("quantos cavalos tem seu carro?\n", (potencia)=> {
      if (potencia >= 300){
        rl.question ("seu carro possui abafador ?\n", (abafador)=> {
          if (abafador === "sim" ){
            
            console.log ("está liberado para o evento")
          }else {
            console.log (" você não pode entrar, o evento é para golf's gti ou tsi acima de 300cv ")
            
            
          }
            

          rl.close();
        })
      } 
      
        })
       
      }     
});


