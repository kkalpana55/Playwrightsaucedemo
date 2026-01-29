import cryptoJs from "crypto-js";
export default class CommonUtils {
    private secretKey: string;
    constructor() {
        if(process.env.SECRET_KEY){ 
        this.secretKey = process.env.SECRET_KEY;
            }
    else
        {            throw new Error("SECRET_KEY is not defined in environment variables");

            }
                }

     public encrpytText(data:string){
     const encrpteddata=cryptoJs.AES.encrypt(data,this.secretKey);  
     console.log(encrpteddata);
     return encrpteddata;
    }
       
  public   decryptText(encryptedText: string): string {
    const bytes = cryptoJs.AES.decrypt(encryptedText, this.secretKey);
    return bytes.toString(cryptoJs.enc.Utf8);
  }}