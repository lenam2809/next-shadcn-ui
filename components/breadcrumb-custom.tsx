"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function BreadcrumbCustom() {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        <BreadcrumbItem>
          {
            pathNames.map((link, index) => {
              const href = `/${pathNames.slice(0, index + 1).join('/')}`
              const linkName = link[0].toUpperCase() + link.slice(1, link.length);
              const isLastPath = pathNames.length === index + 1;
              return (
                <Fragment key={index}>
                  <BreadcrumbItem>
                    {
                      !isLastPath ?
                        <BreadcrumbLink href={href} asChild>
                          {linkName}
                        </BreadcrumbLink> :
                        <BreadcrumbPage>{linkName}</BreadcrumbPage>
                    }
                  </BreadcrumbItem>
                </Fragment>
              )
            })
          }
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
