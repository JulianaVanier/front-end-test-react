
export class LocalStorageManager {

    Get(key: string): string | null {
        let data: string | null = localStorage.getItem(key);

        if (data === null) {
            return null;
        }
        return data;
    }

    GetAsJSON(key: string): any {
        let data: any = this.Get(key);
        let obj = JSON.parse(data);

        return obj;
    }

    SetLocalStorage(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    SetLocalStorageFromArray(key: string, value: Array<any>): void {
        let myJSON: string = JSON.stringify(value);
        this.SetLocalStorage(key, myJSON);        
    }

}
