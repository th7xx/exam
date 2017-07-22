const types = {
            1: "laptop",
            2: "mono",
            3: "desctop",
            4: "transformer"
        };
    function Product(manuf, type, model, price, description){
        this.manufactor = manuf;
        this.type = type; 
        this.price = price;
        this.description = description;
        this.show = function() {
            return "Manufact: " + this.manufactor + " Type: " + this.type + " price: " + this.price + " Derscription: " + this.description
        }
    }
    function Trashcan(){
        this.array = [];
        this.addItem = function(item) {
            this.array.push(item);
        };
        this.deleteItem = function(item) {
            if (this.array.indexOf(item) !== -1) {
                this.array.splice(array.indexOf(item), 1);
            } else {
                return "No such item";
            }
        };
        this.showItems = function() {
            if (this.array.length !== 0) {
                for (let i in this.array) {
                    console.log(this.array[i].show());
                }
            }
        }
    }
    function Order(name, email, phone, post){
        this.name =name; 
        this.email = email; 
        this.phone =phone; 
        this.post = post; 

        this.validatePhone =function(phone){
            var regex = /^\(0[0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/; 
            if(regex.test(phone)){
                return true; 
            }
            return false; 
        }
        this.validateEmail = function(mail){
            var regex = /^[A-Za-z]\w+@\w+\.\w+/; 
            if(regex.test(mail)){
                return true; 
            }
            return false; 
        }
        this.validatePost =function(post){
            return Number.isInteger(post); 
        }
        this.validateCity =function(city){
            return city[0].toUpperCase() + city.substring(1).toLowerCase(); 
        }
        if(this.name == undefined || this.email == undefined || this.phone == undefined || this.post == undefined){
            console.log("Заказ не может быть оформлен"); 
        }
    }
    function Shop(){
        this.showProducts = function () {
            for(var i = 0; i < this.types.length; i++){
                var typeNum = this.types[i];
                console.log(typeNum + " - " + this.types[typeNum]);
            }
        };
        this.filterCategory = function(categ) {
            return this.array.map(i => i.type === categ)
        };
        this.filterManufactor =function(manuf){
            return this.array.map( i => i.manuf =manuf); 
        }
        this.sortItems = function(tp = "asc") {
            if (tp !== "asc") {
                this.array.sort(i => i.price);
                this.array.reverse();
            } else {
                this.array.sort(i => i.price);
            }
        }
    }
    Shop.prototype = Object.create(Trashcan.prototype);
    Shop.prototype.constructor = Trashcan;