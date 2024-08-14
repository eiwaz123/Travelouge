const Button = () => {
    // let count = 0
    // const handleClick = (e) => {
     //     if (count<3){
     //         count++;
     //         console.log(`${name} the count number is ${count}`);
     //     }
         // console.log(`Hello World ${name} `);
     //     else{
     //         console.log(`You Click more than 3 times `)
    //   }
    // console.log(e)
   // }
    return (
        <div>
            {/* Mag lagay lage nang function sa onClick pra hindi mag trigger yung console log agad dahil sa rgument */}
            <button type="button" onClick={(e)=>handleClick(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

        </div>
    );
};

export default Button;