import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <Wallet color="#b42bc3" size={40} />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium text-[#b42bc3] hover:text-purple-500">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}