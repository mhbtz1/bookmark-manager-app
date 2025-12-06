import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Page() {
    return <Card className="w-[25vw]">
        <CardHeader>
            <Image src="https://logosandtypes.com/wp-content/uploads/2022/04/mdn.svg" alt="MDN Web Docs" width={100} height={100} />
            <CardTitle> MDN Web Docs</CardTitle>
        </CardHeader>
        <CardContent>
            <div>CSS</div>
        </CardContent>
    </Card>
}