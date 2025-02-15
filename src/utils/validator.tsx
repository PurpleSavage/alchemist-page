export class Validators{
    public static isNumber(param:string):boolean {
        return !isNaN(Number(param)) && param.trim() !== '' && Number(param)>0
    }
    public static validateNoEmptys(params:string[]):boolean{
        return params.includes('');
    }
    static get email(){
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    }
}