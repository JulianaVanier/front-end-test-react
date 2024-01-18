export type Truck = {
    unique_id: string;
    make: string;
    id: string;
    isAvailable: boolean;
    purchaseDate: string;
};


export class LocalStorageManager {

    Get(key: string): string | null {
        const data: string | null = localStorage.getItem(key);

        if (data === null) {
            return null;
        }
        return data;
    }

    GetAsJSON(key: string): any {
        const data: any = this.Get(key);
        const obj = JSON.parse(data);

        return obj;
    }

    // RemoveLocalStorage(key: string): void{
    //     const truckToRemove = this.Get(key);

    //     if (truckToRemove === null) {
    //         console.log("Not found inside RemoveLocalStorage");
    //         return
    //     }

    //     const list = this.GetAsJSON("Trucks");
    //     list.splice(truckToRemove)


    // }


    SetLocalStorage(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    SetLocalStorageFromArray(key: string, value: Array<any>): void {
        const myJSON: string = JSON.stringify(value);
        this.SetLocalStorage(key, myJSON);        
    }

}
