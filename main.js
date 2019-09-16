

var btnJugadorUno = document.querySelector("#btnJugadorUno").addEventListener("click", ()=>{   

        j1.lanzarDado('jugador 1');
        if(j1.suma >= 100){
            alert('HA GANADO JUGADOR 1, ¡FELICIDADES!');
            location.reload();
        }
    });

var btnJugadorDos = document.querySelector("#btnJugadorDos").addEventListener("click", ()=>{   

        j2.lanzarDado('jugador 2');

        if(j2.suma >= 100){
            alert('HA GANADO EL JUGADOR 2, ¡FELICIDADES!');
            location.reload();
        }
        
    });

    class Dado{
        
        constructor(){
            this._suma = 0;
        }
        get suma(){
            return this._suma;
        }
        
        lanzarDado(Jugador){
        var avanzar = Math.trunc(Math.random()*6)+1;

        console.log('El dado cayó en: ' + avanzar);
    
        this._suma += avanzar;
        console.log('Posición Actual del ' + Jugador + ': '  + this._suma);


            //SERPIENTES
        if(this._suma == 99){
            this._suma = 7;
            console.log('OH NO, te topaste con una serpiente, bajarás hasta: ' + this._suma);
        }else if(this._suma == 91){
            this._suma = 66;
            console.log('OH NO, te topaste con una serpiente, bajarás hasta: ' + this._suma);
        }else if(this._suma == 87){
            this._suma = 51;
            console.log('OH NO, te topaste con una serpiente, bajarás hasta: ' + this._suma);
        }else if(this._suma == 80){
            this._suma = 2;
            console.log('OH NO, te topaste con una serpiente, bajarás hasta: ' + this._suma);
        }else if(this._suma == 71){
            this._suma = 34;
            console.log('OH NO, te topaste con una serpiente, bajarás hasta: ' + this._suma);
        }else if(this._suma == 65){
            this._suma = 50;
            console.log('OH NO, te topaste con una serpiente, bajarás hasta: ' + this._suma);
        }else if(this._suma == 37){
            this._suma = 13;
            console.log('OH NO, te topaste con una serpiente, bajarás hasta: ' + this._suma);
        }


            //ESCALERAS
        if(this._suma == 4){
            this._suma = 79;
            console.log('¡QUÉ BIEN, llegaste a unas escalera subes hasta: ' + this._suma);
        }else if(this._suma == 20){
            this._suma = 98;
            console.log('¡QUÉ BIEN, llegaste a unas escalera subes hasta: ' + this._suma);
        }else if(this._suma == 25){
            this._suma = 67;
            console.log('¡QUÉ BIEN, llegaste a unas escalera subes hasta: ' + this._suma);
        }else if(this._suma == 47){
            this._suma = 76;
            console.log('¡QUÉ BIEN, llegaste a unas escalera subes hasta: ' + this._suma);
        }else if(this._suma == 77){
            this._suma = 95;
            console.log('¡QUÉ BIEN, llegaste a unas escalera subes hasta: ' + this._suma);
        }
    
        }
    }

    var j1 = new Dado();
    var j2 = new Dado();


    
