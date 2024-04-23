import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  export default function ProductCategory() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Danh mục sản phẩm</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="grid gap-3">
              <Label htmlFor="category">Loại</Label>
              <Select>
                <SelectTrigger id="category" aria-label="Select category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothing">Quần áo</SelectItem>
                  <SelectItem value="electronics">Thiết bị điện tử</SelectItem>
                  <SelectItem value="accessories">Phụ kiện</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subcategory">Danh mục phụ (Tuỳ chọn)</Label>
              <Select>
                <SelectTrigger id="subcategory" aria-label="Select subcategory">
                  <SelectValue placeholder="Select subcategory" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t-shirts">T-Shirts</SelectItem>
                  <SelectItem value="hoodies">Hoodies</SelectItem>
                  <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
  