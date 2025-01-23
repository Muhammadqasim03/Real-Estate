import React from "react";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Here's how to decorate your new home from scratch",
      date: "November 05, 2023",
      category: "Sale",
      image: "../../../../Images/image1blogs.png", // Replace this with the actual image URL for the first blog
    },
    {
      id: 2,
      title: "Here's how to decorate your new home from scratch",
      date: "November 05, 2023",
      category: "Sale",
      image: "../../../../Images/image2blogs.png", // Replace this with the actual image URL for the second blog
    },
    {
      id: 2,
      title: "Here's how to decorate your new home from scratch",
      date: "November 05, 2023",
      category: "Sale",
      image: "../../../../Images/image3blogs.png", // Replace this with the actual image URL for the second blog
    },
    {
      id: 2,
      title: "Here's how to decorate your new home from scratch",
      date: "November 05, 2023",
      category: "Sale",
      image: "../../../../Images/image4blogs.png", // Replace this with the actual image URL for the second blog
    },
    {
        id: 2,
        title: "Here's how to decorate your new home from scratch",
        date: "November 05, 2023",
        category: "Sale",
        image: "../../../../Images/image5blogs.png", // Replace this with the actual image URL for the second blog
      },
  ];

  return (
    <div className=" container mx-auto px-4 ">
      <div
        style={{ padding: "30px", textAlign: "center" }}
        className=""
      >
        <div
          style={{ maxWidth: "850px", margin: "0 auto" }}
          className=""
        >
          <h1 className="font-sans text-[52px] font-semibold leading-[62.93px] text-center underline decoration-slice decoration-transparent text-[#0a0a0a]">
            Latest Blogs
          </h1>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                margin: "20px 0",
                border: blog.id === 2 ? "" : "none",
                borderRadius: "8px",
                padding: "10px",
              }}

            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }} />
               <div className="       grid grid-rows-1 gap-2 lg:grid-rows-2    mx-auto  ">
               <p style={{ fontSize: "14px", color: "#555" }} className="">
                {blog.date} | {blog.category}
              </p>
              <h2 style={{ fontSize: "18px", fontWeight: "bold" }} className=" font-sans text-[30px] font-medium leading-[35.55px] text-center decoration-slice text-[#0a0a0a]">
                {blog.title}
              </h2>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
