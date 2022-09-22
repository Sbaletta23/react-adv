import { Props as ProductButtonsProps} from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    count: number;
    handleClick: (value: number) => void;
    product: Product;
}

// Asignamos a las Props valores
export interface ProductCardHOCProps {
    ( Props : ProductCardProps) : JSX.Element,
    Title: ( Props: ProductTitleProps) => JSX.Element,
    Image: ( Props: ProductImageProps) => JSX.Element,
    Buttons: ( Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product;
    count: number;
}