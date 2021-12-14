const fs = require ('fs')
const path = require ('path');
const filePath = path.join(path.dirname(require.main.filename), 'data','wishes.json');

module.exports = class Wish {
    constructor(wish){
        this.description= wish;
    }
    saveWish(){
        //read file content first
        fs.readFile(filePath,(error ,fileContent)=>{
            let wishes = [];
            if(!error){
                wishes = JSON.parse(fileContent);
            }
            else{
                console.log(error);
            }
            wishes.push(this);  //newWish.saveWish();


            fs.writeFile(filePath, JSON.stringify(wishes), (error)=>{
                if(!error){
                    console.log('Wish saved!');
                }
            })
        })
    }
}