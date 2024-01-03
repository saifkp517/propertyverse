import { createClient } from "contentful";
import Head from "next/head";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Typography } from "@material-tailwind/react";
import Footer from "../../components/Footer";
import Image from "next/image";

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'PropertyVerse'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const { items } = await client.getEntries({
        content_type: 'PropertyVerse',
        'fields.slug': params.slug
    })

    return {
        props: { info: items[0] }
    }

}

export default function Blog({ info }) {

    console.log(info)

    const { title, subheading, thumbnail, content, date } = info.fields

    return (
        <div>

            <Head>
                <title>{title}</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='lg:m-36 md:m-20 m-10 ' style={{ minHeight: "100vh" }}>
                <Typography className='text-center font-bold'>{new Date(date).toDateString()}</Typography>
                <Typography className='text-xl text-center text-gray-400'>{subheading}</Typography>
                <hr className='my-5 lg:mx-24 md:mx-14 sm:mx-2 line' />

                <div className="lg:mx-24 md:mx-14 sm:mx-2 my-10">
                    <Image
                        src={'https:' + thumbnail.fields.file.url}
                        height={thumbnail.fields.file.details.image.height}
                        width={thumbnail.fields.file.details.image.width}
                    />

                </div>
                <br />

                <Typography className='lg:ml-24 md:ml-14 sm:ml-2 text-red-400' variant='h3'>{title}</Typography>
                <br />
                <p className='font-sans leading-loose lg:ml-24 md:ml-14 sm:ml-2 text-gray-400'>
                    {documentToReactComponents(content)}
                </p>
                <br />
            </section>
            <div className='section6'>
                <Footer />
            </div>



        </div>
    );
}

