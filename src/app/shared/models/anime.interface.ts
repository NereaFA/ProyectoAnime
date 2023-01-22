export interface AnimeInterface{
    atributes: AttributesInterface;
}

interface AttributesInterface{
    porterImage: ImageInterface;
    canonicalTitle: string;
}

interface ImageInterface{
    original: string;
}

//Esto es para tipar