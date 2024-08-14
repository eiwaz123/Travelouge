import picture from "./assets/profile.png";
const Card = (props) => {
  return (
    // <div className="card">
    //   <div className=" p-6 mx-20 mt-20 border-8 border-indigo-600  flex  justify-center"  >
    //     <img
    //       src={picture}
    //       alt="Profile picture"
    //       width={"150px"}
    //       height={"150px"}
    //     />
    //     <h2 className="text-red-900">Roi Santos</h2>
    //     <p>Im studying react</p>
    //   </div>
    // </div>

    <div className="flex justify-center content-center">
      <div className=" p-10 text-center  mt-20 mx-auto max-w-sm border-double border-8 border-blue-600 ring-8 rounded-lg ">
        <a href="#">
          <img
            class="rounded-t-lg object-contain h-60 w-48 mx-auto "
            src={picture}
            alt="Profile Picture"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Andrew Roi S. Pascual
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Learning REACT+Vite with Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
