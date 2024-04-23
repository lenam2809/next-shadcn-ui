import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProductArchive() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lưu trữ sản phẩm</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div></div>
        <Button size="sm" variant="secondary">
          Lưu trữ
        </Button>
      </CardContent>
    </Card>
  )
}
