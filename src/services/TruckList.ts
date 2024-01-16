
type Truck = {
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


export class TruckList {
    private _list: Array<Truck>;

    constructor() {
        this._list = [];
    }

    AddTruck(newTruck: Truck): void {
        this._list.push(newTruck);

    }

    EditTruck(truck: Truck): void {

        // let position: number = -1;

        // for (let i: number = 0; i < this._list.length; i++) {
        //     if (truck.id === this._list[i].id) {
        //         console.log(this._list[i].id);
        //         position = i;
        //         break;
        //     }
        // }

        let position: number = this._findInList(truck.id);

        if (position === -1) {
            console.log(truck.id, 'was not found');
            return;
        }

        this._list[position] = truck;

    }

    private _findInList(idTruck: string): number {
        let position: number = -1;
        

        for (let i: number = 0; i < this._list.length; i++) {
            if (idTruck === this._list[i].id) {
                // console.log(this._list[i].id);
                position = i;
                break;
            }

        }

        return position;
    }

    GetList(): Array<Truck> {
        return this._list;
    }

    // IsItemInList(position: number): boolean {
    //     if (position === -1){
    //         console.log("false")
    //         return false;
    //     }
    //     console.log("true")
    //     return true;
    // } 

    GetTruck(idTruck: string): Truck | null {
       let position: number = this._findInList(idTruck);

       if(position === -1){
        console.log('Not found');
        return null;
       } 
       
        // console.log('idTruck, 'true'');
        return this._list[position];
        
    }


    RemoveTruck(idTruck: string): void {
        // let position: number = -1;

        // this._list.forEach(function (truck, index) {
        //     if (idTruck === truck.id){
        //         console.log(truck.id);
        //         console.log(index);
        //         position = index;
        //     }
        // });

        // for(let i: number = 0; i< this._list.length; i++){
        //     if (idTruck === this._list[i].id){
        //     console.log(this._list[i].id);
        //     position = i;
        //     break;
        //     }    

        // }

        let position: number = this._findInList(idTruck);

        if (position === -1) {
            console.log(idTruck, 'was not found');
            return;
        }

        this._list.splice(position, 1);
        console.log(idTruck, 'removed');
    }

    SetList(newList: Array<Truck>): void {
        this._list = newList;
    }


}
