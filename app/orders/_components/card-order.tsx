import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default async function CardOrder({
    description,
    title,
    content,
    value,
}: {
    description: string;
    title: string;
    content: string
    value: number;
}) {
    return (
        <>
            <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription>{description}</CardDescription>
                  <CardTitle className="text-4xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    {content}
                  </div>
                </CardContent>
                <CardFooter>
                    <Progress value={value} aria-label={`${value}% increase`} />
                </CardFooter>
              </Card>
        </>
    );
}
