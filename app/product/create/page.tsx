"use client"
import {
  ChevronLeft,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"
import ProductDetail from "../_components/product-detail"
import ProductStock from "../_components/product-stock"
import ProductCategory from "../_components/product-category"
import ProductStatus from "../_components/product-status"
import ProductImage from "../_components/product-image"
import ProductArchive from "../_components/product-archive"


export default function CreateProductPage() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
          <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex items-center gap-4">
              <Button onClick={goBack} variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Thêm mới sản phẩm
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                In stock
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm">Save Product</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <ProductDetail />
                <ProductStock />
                <ProductCategory />
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <ProductStatus/>
              <ProductImage />
              <ProductArchive/>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
  )
}
