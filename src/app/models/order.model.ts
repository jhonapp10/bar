export interface Order {
    id?: number;
    orderNumber: string;
    menus: any[]; // Este puede ser un array de objetos con los menús seleccionados
    totalPrice: number;
    mesa: string;
    //customerName: string;
    //customerContact: string;
    status: string;
    date?: Date;
  }