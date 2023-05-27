import React, { useState } from "react";
import { Card, Loader, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data.length > 0) {
    return data.map((post) => <Card key={post.id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[32px] text-[#222328]">
          Community Showcase
        </h1>
        <p className="mt-2 max-w-[700px] text-[16px] text-[#666e75]">
        Browse the collection of thoughts and see beautiful images created by AI
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-xl text-[#666e75] mb-3">
                Showing results for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={[]}
                  title="No serch results found"
                />
              ) : (
                <RenderCards data={[]} title='No posts found' />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
