 class Vehicle {
    private chuXe: string;
    private loaiXe: string
    private triGiaXe: number;
    private dungTichXylanh: number;

    constructor(chuXe: string, loaiXe: string, triGiaXe: number, dungTichXilanh: number ){
        if( triGiaXe <0 || dungTichXilanh <0){
            throw new Error("Tri gia xe hoac dung tich xy lanh phai lon >0");
        }
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.triGiaXe = triGiaXe;
        this.dungTichXylanh = dungTichXilanh;
    }
    calculateTax(): number{
        if(this.dungTichXylanh < 100){
            return this.triGiaXe * 0.1;
        }else if(this.dungTichXylanh >= 100 && this.dungTichXylanh <= 200){
            return this.triGiaXe * 0.3;
        }else{
            return this.triGiaXe * 0.5;
        }
    }
    prinTax(): void{
        console.log("Thue phai nop cua chu xe:"+ this.chuXe + " " + this.calculateTax());
    }
 }
 class Main {
    static main(): void{
        let vehicle1 = new Vehicle("Nguyen Van A", "Xe may", 100000000, 150);
        let vehicle2 = new Vehicle("Nguyen Van B", "Xe oto", 200000000, 250);
        vehicle1.prinTax();
        vehicle2.prinTax();
    }
 }
 Main.main()