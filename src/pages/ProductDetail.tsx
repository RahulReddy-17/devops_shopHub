import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Product Not Found</h1>
          <Link to="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/products">
          <Button variant="ghost" className="mb-8" data-testid="back-button">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              data-testid="product-image"
            />
            {!product.inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <span className="text-lg font-semibold">Out of Stock</span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-4">
              <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">(256 reviews)</span>
              </div>
            </div>

            <h1 className="mb-4 text-4xl font-bold" data-testid="product-detail-name">{product.name}</h1>
            <p className="mb-6 text-lg text-muted-foreground">{product.description}</p>
            
            <div className="mb-8">
              <p className="text-3xl font-bold" data-testid="product-detail-price">${product.price}</p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="lg"
                className="w-full gradient-primary shadow-elegant sm:w-auto"
                data-testid="add-to-cart-detail"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Free shipping on orders over $100</p>
                <p>✓ 30-day return policy</p>
                <p>✓ Secure checkout</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 rounded-xl border p-6">
              <h3 className="font-semibold">Product Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• High-quality materials</li>
                <li>• Carefully tested and verified</li>
                <li>• 1-year manufacturer warranty</li>
                <li>• Eco-friendly packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
