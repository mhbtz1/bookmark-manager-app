import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

interface Tag {
    tag: string,
    href: string
}

const tags = [
    {
        tag: 'AI',
        href: '/tags/ai'
    },
    {
        tag: 'CSS',
        href: '/tags/css',
    },
    {
        tag: 'Design',
        href: '/tags/design'
    }
]


export const Sidebar = () => {
    return <div className="border-r-2 border-gray-200 h-full">
        <div className="flex flex-col items-center"> <h2 className=""> Bookmark Manager </h2> </div>
        <div className="flex flex-col items-center h-full">
            <div className="m-3 border rounded-md bg-gray-300 hover:bg-gray-100"> <Link href="/" className="text-sm font-medium"> Home </Link> </div>
            <div className="m-3border rounded-md bg-gray-300 hover:bg-gray-100"> <Link href="/archived" className="text-sm font-medium"> Archived </Link> </div>
            <Separator className="my-4" />
            <div className="flex flex-col items-center"> Tags </div>
            {tags.map((tag: Tag) => {
                return <div className="p-3 text-sm font-medium border rounded-md bg-gray-300 hover:bg-gray-100" key={tag.tag}> <Link href={tag.href}> {tag.tag} </Link> </div>
            })}
        </div>
    </div>
}