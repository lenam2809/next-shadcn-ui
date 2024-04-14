import { Button } from "@/components/ui/button"

export default function CardNoProductComponent() {
  return (
    <div
      className="flex flex-1 items-center justify-center rounded-lg shadow-sm h-full"
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Bạn không có sản phẩm nào
        </h3>
        <p className="text-sm text-muted-foreground">
        Bạn có thể bắt đầu bán ngay khi bạn thêm sản phẩm.
        </p>
        <Button className="mt-4">Thêm sản phẩm</Button>
      </div>
    </div>
  )
}
