"use client";

import Image from "next/image"
import { Upload } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { File } from "@/lib/definitions";

export default function ProductImage() {
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
    console.log('Bạn đã chọn file:', file);
    // Ở đây bạn có thể thực hiện xử lý với file đã chọn
  };

  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = handleFileChange;
    // Kích hoạt sự kiện click trên input để mở hộp thoại chọn file
    input.click();
  };
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Hình ảnh sản phẩm</CardTitle>
        <CardDescription>
          Lipsum dolor sit amet, consectetur adipiscing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src={selectedFile ? "/images/" + selectedFile?.name : "/images/placeholder.svg"}
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="/images/placeholder.svg"
                width="84"
              />
            </button>
            <button>
              <Image
                alt="Product image"
                className="aspect-square w-full rounded-md object-cover"
                height="84"
                src="/images/placeholder.svg"
                width="84"
              />
            </button>
            <button onClick={handleUpload} className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Upload</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
