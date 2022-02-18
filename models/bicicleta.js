var Bicicleta = function(id,color,modelo,ubicacion){
    this.id = id;
    this.color=color;
    this.modelo=modelo;
    this.ubicacion=ubicacion;
}
Bicicleta.prototype.toString = function(){
    return 'ID' + this.id + ' | color: ' +this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add=function(aBici){
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(id){
    var bici = Bicicleta.allBicis.find(x => x.id == id);

    if(bici)
        return bici;
    else
        throw new Error(`No existe una bicicleta con el id ${id}`);    
}

Bicicleta.removeById = function(idBici){
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == idBici){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

var a= new Bicicleta(1,'rojo','urbana',[-34.6019618,-58.4334743])
var b= new Bicicleta(2,'negro','urbana',[-34.6008708,-58.431183])

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;
