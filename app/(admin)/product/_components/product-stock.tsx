"use client";

import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from "react"
import { Variant } from "@/lib/definitions";

export default function ProductStock() {

    const [variants, setVariants] = useState<Variant[]>([
      { id: 1, sku: "GGPC-001", stock: 100, price: 100, size: "s"},
      { id: 2, sku: "GGPC-002", stock: 100, price: 100, size: "m"},
      { id: 3, sku: "GGPC-003", stock: 100, price: 100, size: "l"},
    ]);
  
    const handleAddRow = () => {
      const newRow: Variant = { id: variants.length + 1, sku: `GGPC-00${variants.length + 1}`, stock: 100, price: 100, size: "s"};
      setVariants([...variants, newRow]);
    };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trong kho</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Mã sản phẩm</TableHead>
              <TableHead>Số lượng</TableHead>
              <TableHead>Đơn giá</TableHead>
              <TableHead className="w-[100px]">Kích cở</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {variants.map((variant) => (
            <TableRow key={variant.id}>
            <TableCell className="font-semibold">{variant.sku}</TableCell>
              <TableCell>
                <Input id="stock-1" type="number" defaultValue="100" value={variant.stock} />
              </TableCell>
              <TableCell>
                <Input id="price-1" type="number" defaultValue="99.99" value={variant.price} />
              </TableCell>
              <TableCell>
                <ToggleGroup type="single" defaultValue="s" variant="outline" value={variant.size}>
                  <ToggleGroupItem value="s">S</ToggleGroupItem>
                  <ToggleGroupItem value="m">M</ToggleGroupItem>
                  <ToggleGroupItem value="l">L</ToggleGroupItem>
                </ToggleGroup>
              </TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button  onClick={handleAddRow} size="sm" variant="ghost" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          Thêm phiên bản
        </Button>
      </CardFooter>
    </Card>
  )
}
