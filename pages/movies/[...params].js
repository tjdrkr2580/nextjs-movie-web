import { useRouter } from 'next/router';
import Seo from './../Seo';

export default function Detail({params}) {
    const router = useRouter();
    const [title,id] = params || [];
    return (
        <div>
        <Seo title={`${title}`}/>
        <h2>{title}</h2>
        </div>
    )
}

export function getServerSideProps({params:{params}}) {
    return {
        props: {
            params,
        },
    }
}