
export type Truck = {
    unique_id: string;
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
        newTruck.unique_id = Math.random().toString(36).substring(2, 9); //https://www.newline.co/books/beginners-guide-to-typescript/generating-unique-ids
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

        let position: number = this._findInList(truck.unique_id);

        if (position === -1) {
            console.log(truck.unique_id, 'was not found');
            return;
        }

        this._list[position] = truck;

    }

    private _findInList(uniqueId: string): number {
        let position: number = -1;
        

        for (let i: number = 0; i < this._list.length; i++) {
            if (uniqueId === this._list[i].unique_id) {
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

    GetTruck(uniqueId: string): Truck | null {
       let position: number = this._findInList(uniqueId);

       if(position === -1){
        console.log('Not found');
        return null;
       } 
       
        // console.log('idTruck, 'true'');
        return this._list[position];
        
    }


    RemoveTruck(uniqueId: string): void {
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

        let position: number = this._findInList(uniqueId);

        if (position === -1) {
            console.log(uniqueId, 'was not found');
            return;
        }

        this._list.splice(position, 1);
        console.log(uniqueId, 'removed');
    }

    SetList(newList: Array<Truck>): void {
        this._list = newList;
    }


}
