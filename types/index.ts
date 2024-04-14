interface Product {
    name: string;
    description: string;
    status: string; // Assuming this would be a string representation of the status (e.g. "Active", "Inactive", "Archived")
    stock: number;
    sku: string;
    price: number;
    category: string;
    subcategory?: string; // Optional subcategory
    images: string[]; // Assuming URLs for product images
    variants?: Variant[]; // An array of product variants if applicable
}

interface Variant {
    sku: string;
    stock: number;
    price: number;
    size?: string; // OR an array of strings for multiple sizes (e.g. ["S", "M", "L"])
}