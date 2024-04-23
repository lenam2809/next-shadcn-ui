import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck } from 'lucide-react';

export default async function CardOrderDetail({
    orderCode
}: {
    orderCode: string;
}) {
    const orderDetail: OrderDetails = {
        orderDate: "2024-04-13",
        orderNumber: "ORD123456",
        items: [
            { name: "Product A", price: 10, quantity: 2 },
            { name: "Product B", price: 20, quantity: 1 },
            { name: "Product C", price: 15, quantity: 3 }
        ],
        subtotal: 10 * 2 + 20 * 1 + 15 * 3,
        shipping: 5,
        tax: 0.1 * (10 * 2 + 20 * 1 + 15 * 3 + 5),
        total: 10 * 2 + 20 * 1 + 15 * 3 + 5 + 0.1 * (10 * 2 + 20 * 1 + 15 * 3 + 5),
        shippingInformation: {
            customerName: "John Doe",
            addressLine1: "123 Main St"
        },
        billingInformation: {
            customerName: "John Doe",
            addressLine1: "123 Main St",
            email: "john@example.com"
        },
        customerInformation: {
            customerName: "John Doe",
            customerEmail: "john@example.com",
            customerPhone: "123-456-7890"
        },
        paymentInformation: {
            cardType: "Visa",
            cardNumberPartial: "**** **** **** 1234"
        },
        updateDate: "2024-04-13",
    };
    return (
        <Card
            className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
        >
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                        Order {orderDetail.orderNumber}
                        <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            <Copy className="h-3 w-3" />
                            <span className="sr-only">Copy Order ID</span>
                        </Button>
                    </CardTitle>
                    <CardDescription>Date: {orderDetail.orderDate}</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                    <Button size="sm" variant="outline" className="h-8 gap-1">
                        <Truck className="h-3.5 w-3.5" />
                        <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                            Track Order
                        </span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="outline" className="h-8 w-8">
                                <MoreVertical className="h-3.5 w-3.5" />
                                <span className="sr-only">More</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Export</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Trash</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                    <div className="font-semibold">Order Details</div>
                    <ul className="grid gap-3">
                        {orderDetail.items?.map((item) => (
                            <li key={item.name} className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    {item.name} <span>{item.quantity}</span>
                                </span>
                                <span>{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <Separator className="my-2" />
                    <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>{orderDetail.subtotal}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Shipping</span>
                            <span>{orderDetail.shipping}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Tax</span>
                            <span>{orderDetail.tax}</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">Total</span>
                            <span>{orderDetail.total}</span>
                        </li>
                    </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                        <div className="font-semibold">Shipping Information</div>
                        <address className="grid gap-0.5 not-italic text-muted-foreground">
                            <span>Liam Johnson</span>
                            <span>1234 Main St.</span>
                            <span>Anytown, CA 12345</span>
                        </address>
                    </div>
                    <div className="grid auto-rows-max gap-3">
                        <div className="font-semibold">Billing Information</div>
                        <div className="text-muted-foreground">
                            Same as shipping address
                        </div>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">Customer Information</div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Customer</dt>
                            <dd>{orderDetail.customerInformation.customerName}</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Email</dt>
                            <dd>
                                <a href="mailto:">{orderDetail.customerInformation.customerEmail}</a>
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Phone</dt>
                            <dd>
                                <a href="tel:">{orderDetail.customerInformation.customerPhone}</a>
                            </dd>
                        </div>
                    </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">Payment Information</div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="flex items-center gap-1 text-muted-foreground">
                                <CreditCard className="h-4 w-4" />
                                {orderDetail.paymentInformation.cardType}
                            </dt>
                            <dd>{orderDetail.paymentInformation.cardNumberPartial}</dd>
                        </div>
                    </dl>
                </div>
            </CardContent>
            <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                    Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                    <PaginationContent>
                        <PaginationItem>
                            <Button size="icon" variant="outline" className="h-6 w-6">
                                <ChevronLeft className="h-3.5 w-3.5" />
                                <span className="sr-only">Previous Order</span>
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button size="icon" variant="outline" className="h-6 w-6">
                                <ChevronRight className="h-3.5 w-3.5" />
                                <span className="sr-only">Next Order</span>
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </CardFooter>
        </Card>
    );
}
