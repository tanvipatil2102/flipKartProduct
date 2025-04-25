export interface Iproduct {
    _id:                    string;
    title:                  string;
    product_description:    string[] | null;
    rating:                 number;
    reviews_count:          number | null;
    images:                 string[];
    tags:                   string[] | null;
    product_details:        null | string;
    return_policy:          null | string;
    total_price:            string;
    product_specifications: ProductSpecification[] | null;
    category:               Category;
    subcategory?:           Subcategory;
}

export enum Category {
    BooksAndToys = "Books and Toys",
    Electronics = "Electronics",
    Fashion = "Fashion",
    Gaming = "Gaming",
    Laptops = "Laptops",
    MobileAccessories = "Mobile Accessories",
    Mobiles = "Mobiles",
}

export interface ProductSpecification {
    _id:                 string;
    specification_name:  string;
    specification_value: string;
}

export enum Subcategory {
    Android = "Android",
    Books = "Books",
    Chromebook = "Chromebook",
    Earphones = "Earphones",
    Headphones = "Headphones",
    IPhones = "iPhones",
    MACBook = "MacBook",
    Perfume = "Perfume",
    PhoneCases = "Phone Cases",
    Printer = "Printer",
    SmartWatch = "SmartWatch",
    Sunglasses = "Sunglasses",
    Tablets = "Tablets",
    Toys = "Toys",
    Windows = "Windows",
}

export interface IProdCat  {
    title: string;
    tag: string;
    id: string;
    imgUrl : string
}