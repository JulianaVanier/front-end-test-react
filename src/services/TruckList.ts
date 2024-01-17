
export type Truck = {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};

export class TruckClass {
    private _list: Array<Truck>;

    constructor() {
        this._list = [];
    }

    AddTruck(newTruck: Truck): void {
        newTruck.unique_id = Math.random().toString(36).substring(2, 9); //https://www.newline.co/books/beginners-guide-to-typescript/generating-unique-ids
        this._list.push(newTruck);
    }

    EditTruck(truck: Truck): void {

        console.log("truck inside EditTruck", truck);
        console.log("Unique ID  inside EditTruck", truck.unique_id);

        const position: number = this._findInList(truck.unique_id);

        console.log("positionnnnn", position);

        if (position === -1) {
            console.log(truck.unique_id, 'was not found');
            return;
        }

        this._list[position] = truck;
    }

    private _findInList(uniqueId: string): number {
        let position: number = -1;
        // console.log("inside FINDINLIST",uniqueId);
        // console.log("truck unique ID inside FINDINLIST",this._list.length);

        for (let i: number = 0; i < this._list.length; i++) {
            if (uniqueId === this._list[i].unique_id) {
                // console.log("inside FINDINLIST",uniqueId);
                // console.log("truck unique ID inside FINDINLIST",this._list[i].unique_id);
                position = i;
                break;
            }

        }
        return position;
    }

    GetList(): Array<Truck> {
        return this._list;
    }

    GetTruck(uniqueId: string): Truck | null {
       const position: number = this._findInList(uniqueId);

       if(position === -1){
        console.log('Not found');
        return null;
       } 

        // console.log('idTruck, 'true'');
        return this._list[position];
    }

    RemoveTruck(uniqueId: string): void {

        const position: number = this._findInList(uniqueId);

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
