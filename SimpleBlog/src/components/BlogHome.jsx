function BlogHome({blog}){
    return (
        <div>
            <a href="#">
                <div class='border-b border-r border-slate-700 rounded-md p-4 pt-2 ml-72 mr-16 m-16 mt-2 w-8/12'>
                    <h6 class='block font-medium text-5xl pt-3 pl-3'>{blog.name}</h6>
                    <div class ='pt-1 text-lg pl-10 '>
                        <p class='text-slate-700'>{blog.author}. {blog.date}</p>
                        <p class='text-slate-800 pt-6 block text-lg truncate pr-32'>{blog.description}</p>
                        <a href="#" class='hover:underline'>Read More</a>
                    </div>
                </div>
            </a>
        </div>
    )
}
export const BlogHomeList = ({blogs}) => {
    return(
        <div className="blogHome">
            <h3 class='font-medium text-5xl pl-72 p-10'></h3>
            <div class=''>
            {
                blogs.map(blog => 
                    <BlogHome key = {blog.id} blog={blog}/>
                )
            }
            </div>
        </div>
    );
}
