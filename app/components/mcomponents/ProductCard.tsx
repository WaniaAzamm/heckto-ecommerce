import CategoryProduct from "./CategoryProduct "
import PRDesign1 from "./Design1"
import PRDesign2 from "./Design2"
import PRDesign3 from "./Design3"
import ProductBarDesign from "./ProductBarDesign "


const ProductCard = ({ designType, showDots = false }: { designType: "SIMPLE 1/4" | "MEDIUM 1/3" | "SIMPLEST" | "CATEGORY PRODUCT" | "BAR", showDots?:boolean,  }) => {
    return (
        <>
           {designType == "SIMPLE 1/4" && <PRDesign1 />}
           {designType == "MEDIUM 1/3" && <PRDesign2 />}
           {designType == "SIMPLEST" && <PRDesign3 showDots={showDots} />}
           {designType == "CATEGORY PRODUCT" && <CategoryProduct />}
           {designType == "BAR" && <ProductBarDesign />}
        </>
    )
}

export default ProductCard