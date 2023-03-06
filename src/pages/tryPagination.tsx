import React from 'react';
import { useInfiniteQuery } from 'react-query';

interface Post {
  id: number;
  title: string;
  body: string;
}

const QUERY_KEY = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async (pageParam?: number) => {
  const response = await fetch(`${QUERY_KEY}?_page=${pageParam ?? 1}`);
  const data = await response.json();
  return data as Post[];
};

const Pagination = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    QUERY_KEY,
    ({ pageParam }) => fetchPosts(pageParam),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === 0 ? undefined : allPages.length + 1,
    }
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error</div>;

  return (
    <>
       <main className='bg-gray-700'>
    <section className='sm:p-16 xs:p-8 px-6 py-12 w-screen h-screen flex justify-center items-center '>
      <div className='mx-auto max-w-[1280px] w-full h-full'>

      <div className='flex flex-col items-center py-10 mx-auto'>
            <h1 className='text-white font-bold text-4xl'>My Next.js App</h1>
            <ul className='flex flex-wrap'>
              {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((post) => (
            <div key={post.id}>
               <li key={post.id}>
                        <div className='text-slate-700 p-2 bg-slate-300 rounded-xl m-2 w-[90px]'>
                        <div >
                            {post.id}
                        </div>
                        <div className='line-clamp-3'>
                            {post.title}
                        </div>
                          </div> 
                        </li> 
             
            </div>
          ))}
        </React.Fragment>
      ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className='text-slate-700 p-2 bg-slate-300 rounded-xl m-2 w-[90px]'
      >
        {isFetchingNextPage ? 'Loading more...' : 'Load more'}
      </button>
        </div>
        
      </div>
    </section>
    </main>
    </>
  );
};

export default Pagination;

