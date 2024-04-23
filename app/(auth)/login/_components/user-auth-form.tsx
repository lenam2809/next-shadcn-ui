"use client";

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { AuthService } from "@/services";
import { useToast } from "@/components/ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const { login, getOauth } = AuthService();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const { toast } = useToast()

  useEffect(() => {
    var auth = getOauth();
    if (auth) {
      router.push('/dashboard');
    }
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (await login(username, password)) {
      toast({
        description: "Đăng nhập thành công!",
      })
      router.push('/dashboard');
    } else {
      setError('Đăng nhập không thành công. Vui lòng kiểm tra username và mật khẩu.');
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Đăng nhập</CardTitle>
        <CardDescription>
          Nhập username của bạn dưới đây để đăng nhập vào tài khoản của bạn
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mật khẩu</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Quên mật khẩu?
                </Link>
              </div>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Đăng nhập
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Không có tài khoản?{" "}
          <Link href="#" className="underline">
            Đăng ký
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
