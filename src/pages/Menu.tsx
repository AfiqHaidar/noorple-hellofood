import Head from "next/head";
import spoonacular from "@/pages/api/spoonacular";
import Navbar from "./components/Navbar";
import { TitleText, TypingText } from "./components/CustomText";
import { motion } from "framer-motion";

const staggerContainer = (staggerChildren: number, delayChildren: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const Menu = () => {
  const { data: recipes, isLoading, isError } = spoonacular();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching recipes.</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-700">
        <Navbar />

        <section className="sm:p-16 xs:p-8 px-6 py-12 w-screen flex justify-center items-center ">
          <div className="mx-auto max-w-[1280px] w-full">
            <motion.div
              className="flex flex-col"
              variants={staggerContainer(1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <TypingText title="| the unlimitid" styling="text-center" />
              <TitleText
                title="Recipes"
                styling="text-center font-extrabold "
              />
            </motion.div>

            <ul className="grid grid-cols-3 justify-evenly  gap-10 pt-4">
              {recipes.map((recipe: any) => (
                <li key={recipe.id} className="flex justify-center">
                  <div className="rounded-xl w-full bg-slate-500  flex flex-col  h-auto items-center relative hover:scale-110 transform duration-300 hover:shadow-lg hover:shadow-slate-200">
                    <div className="">
                      <img
                        src={recipe.image}
                        alt="img"
                        className="rounded-xl "
                      />
                    </div>
                    <div className="absolute mt-[24px] font-semibold text-[15px] text-white hover:text-transparent bottom-0 p-8 justify-start w-full flex-col bg-[#00000050] hover:bg-transparent transform duration-300 rounded-b-xl">
                      {recipe.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Menu;
