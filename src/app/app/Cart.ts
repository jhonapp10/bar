export class Cart{
    menu: any[];
    count: number;

    constructor(menu: any[],cantidad: number){
        this.menu = menu;
        this.count = cantidad;
    }

    getMenu():any[]{
        return this.menu;        
    }

    getCount(): number{
        return this.count;
    }
    
    

}