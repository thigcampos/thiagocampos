import { format, parseISO } from 'date-fns';
import { Footer, Header } from '@/components';
import { allPosts } from 'contentlayer/generated';
import { postNavigation } from '@/constants/navigations';
import styles from './post.module.css';

export const runtime = 'edge';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const blogPost = allPosts.find((blogPost) => blogPost._raw.flattenedPath === params.slug);
    if (!blogPost) throw new Error(`Post not found for slug: ${params.slug}`);
    return { title: blogPost.title };
};

function PostLayout({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

    return (
        <main className={styles.main}>
            <div className={styles.highlight}>
                <Header navGroup={postNavigation}/>
                <article>
                    <div>
                        <h1 className={styles.title}>{post.title}</h1>
                        <time dateTime={post.date} className={styles.date}>
                            {format(parseISO(post.date), 'LLLL d, yyyy')}
                        </time>
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.body.html }} />
                </article>
            </div>
            <Footer />
        </main>
    );
}

export default PostLayout;