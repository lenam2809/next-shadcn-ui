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
  
  export default function ProductStatus() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Trạng thái sản phẩm</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="status">Trạng thái</Label>
              <Select>
                <SelectTrigger id="status" aria-label="Select status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Bản nháp</SelectItem>
                  <SelectItem value="published">Hoạt động</SelectItem>
                  <SelectItem value="archived">Lưu trữ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
  