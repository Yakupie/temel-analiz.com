import data from "../../data/data.json";

export async function getData(): Promise<Hisse[]> {
    if (!data) return [];
    
    return (Object.values(data) as any[]).map(hisse => ({
        // Sadece ekranda görünen ve data-atribute olarak gerekenleri al
        kisaltma: hisse.kisaltma,
        sirket: hisse.sirket,
        alis: hisse.alis,
        net_degisim: hisse.net_degisim,
        fk: hisse.fk,
        pd_dd: hisse.pd_dd,
        piyasa_degeri_anahtar: hisse.piyasa_degeri_anahtar,
        net_kar_ozser: hisse.net_kar_ozser,
        sermaye: hisse.sermaye,
        oz_sermaye: hisse.oz_sermaye,
        temettu_ver: hisse.temettu_ver,
        nakit_temettu: hisse.nakit_temettu,
        net_kar: hisse.net_kar,
        senet_sayisi: hisse.senet_sayisi
        // Geri kalan gereksiz yüzlerce kolon burada elendi!
    }));
}